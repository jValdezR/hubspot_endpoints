const { addContact, addDeal } = require("../controllers/hubSpot.controller");

class WebHookListener{

    async listener(req, res){
        console.log("hook recibido");
        try {
            if(req.body.v){
                console.log("Es de pipedrive");
                if(req.body.event == 'added.person'){
                    console.log("Es un person");
                    await addContact(req.body);
                }
                
                else{
                    console.log("Es un deal");
                    await addDeal(req.body);
                }
                    
            }
            
            res.status(200).json({
            "msg": "received"
        });
        } catch (error) {
            res.status(406).json({
                "msg": "Not Acceptable"
            })
        }
    }

    async insertContactintoHubSpot(){
        
    }
}





module.exports = new WebHookListener();