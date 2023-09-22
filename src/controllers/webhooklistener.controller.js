
class WebHookListener{

    async listener(req, res){
        console.log(req);
    }
}



module.exports = new WebHookListener();