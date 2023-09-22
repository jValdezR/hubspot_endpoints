const hubSpotAPI = require('../services/hubspot.service')
class HubSpotController {

    async addContact(body) {
        const {first_name, org_name, email, last_name, phone} = body.current;
        
        const contactObj = {
            "properties": {
                "email": email[0].value,
                "firstname": first_name,
                "lastname": last_name,
                "phone": phone[0].value,
                "company": org_name,
              }
        };

        try {
            await hubSpotAPI.crm.contacts.basicApi.create(contactObj);
        } catch (error) {
            throw error;
        }
    
    }

    async addDeal(body){

        console.log("body", body);

        const {first_name, org_name, email, last_name, phone} = body.current;
        const dealObj = {
            "properties": {
              "amount": "1500.00",
              "closedate": "2019-12-07T16:50:06.678Z",
              "dealname": "New deal",
              "pipeline": "default",
              "dealstage": "contractsent",
              "hubspot_owner_id": "910901"
            }
          }
    }
}

module.exports = new HubSpotController();