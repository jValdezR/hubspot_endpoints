
class Testeo{

    async testGet(req, res) {
        return res.json({
            msg: 'completado en class'
        })
    }

    async testPost(req, res){
        const {name, edad} = req.body;
        return res.json({
            msg: "Completado",
            name,
            edad
        })
    }
}



module.exports = new Testeo();