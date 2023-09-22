const {personsInstance, webHooksInstance, webHooksOpts} = require('../services/pipedrive.service');
class WebHookCreator{

    async webHooks(req, res){
        try {
            const result = await webHooksInstance.getWebhooks();
            res.json(result);
        } catch (error) {
            throw error;
        }
        

        
    }

    async personsController(req, res){

        const persons = await personsInstance.getPersons();
        
        res.json(persons);
    }

    async creatorController(req, res){
        
        const result = await webHooksInstance.addWebhook(webHooksOpts);
        console.log(result);
        res.send(result)
    }
}



module.exports = new WebHookCreator();