const hubSpotAPI = require('../services/hubspot.service')
class HubSpotController {

    async addContact(body) {
        console.log("Entrando a addContact");
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
        console.log("OBJ", contactObj);

        try {
            const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
            console.log("createContactResponse", createContactResponse);
        } catch (error) {
            console.log(error);
        }
        // const companyObj = {
        //     properties: {
        //         domain: "Org",
        //         name: "APIORG",
        //     },
        // };
        

        // const createCompanyResponse = await hubspotClient.crm.companies.basicApi.create(companyObj);
        // await hubspotClient.crm.associations.v4.basicApi.create(
        //     'companies',
        //     createCompanyResponse.id,
        //     'contacts',
        //     createContactResponse.id,
        //     [
        //         {
        //             "associationCategory": "HUBSPOT_DEFINED",
        //             "associationTypeId": AssociationTypes.companyToContact
        //             // AssociationTypes contains the most popular HubSpot defined association types
        //         }
        //     ]
        // )
    }

    async addDeal(body){

    }
}

module.exports = new HubSpotController();