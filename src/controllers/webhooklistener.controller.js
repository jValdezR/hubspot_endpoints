
class WebHookListener{

    async listener(req, res){
        console.log("Ha llegado un webhook");
        console.log(req.body);
        res.send("ok");
    }
}



module.exports = new WebHookListener();