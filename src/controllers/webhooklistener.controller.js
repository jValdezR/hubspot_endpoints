
class WebHookListener{

    async listener(req, res){
        console.log(req);
        res.send("ok");
    }
}



module.exports = new WebHookListener();