const { PIPEDRIVE_API_TOKEN } = require('../config/vars').api_keys;
const {SERVER_URL} = require('../config/vars').server;
const pipedrive = require('pipedrive');
let apiClient = new pipedrive.ApiClient();
// Configure API key authorization: api_key
let api_key = apiClient.authentications['api_key'];
api_key.apiKey = PIPEDRIVE_API_TOKEN;

let personsInstance = new pipedrive.PersonsApi(apiClient);
let webHooksInstance = new pipedrive.WebhooksApi();


let webHooksOpts = pipedrive.AddWebhookRequest.constructFromObject(
    {
        "subscription_url": `${SERVER_URL}/webhooklistener`,
        "event_action": "added.person",
        "event_object": "person",
        "event": "added"
    }
    
);

module.exports = {
    personsInstance,
    webHooksInstance,
    webHooksOpts
}