const hubSpotAPI = require('../services/hubspot.service')
class HubSpotController {

    async addContact(body) {
        const {first_name, org_name, email, last_name, phone} = body.current;
        console.log("email", email);
        console.log("phone", phone);
        const contactObj = {
            properties: {
                email,
                "firstname": first_name,
                "lastname": last_name,
                phone,
                "company": org_name,
              }
        };

        try {
            const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
        } catch (error) {
            throw error;
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