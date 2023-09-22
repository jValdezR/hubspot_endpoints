const {usersInstace} = require('../services/pipedrive.service');


class pipeDriveController{

async getUser(id){
    return await usersInstace.getUser(id);
}

}

module.exports = new pipeDriveController;