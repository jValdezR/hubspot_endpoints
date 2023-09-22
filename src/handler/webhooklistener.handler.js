const { addContact, addDeal } = require("../controllers/hubSpot.controller");

class WebHookListener{

    async listener(req, res){
        try {
            if(req.body.v){
                if(req.body.event == 'added.person'){
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
}





module.exports = new WebHookListener();