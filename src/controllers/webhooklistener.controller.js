
class WebHookListener{

    async listener(req, res){
        console.log(req.body);
        res.send("ok");
    }
}



module.exports = new WebHookListener();