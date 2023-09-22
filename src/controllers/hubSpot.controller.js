const hubSpotAPI = require('../services/hubspot.service');
const { getUser } = require('./pipeDrive.controller');
class HubSpotController {

    async addContact(body) {
        console.log("body contact de pipedrive", body);
        const { owner_id, first_name, org_name, email, last_name, phone } = body.current;

        const { data } = await getUser(owner_id);

        let ownerId = null;

        // console.log("data", data.email);
        try {
            const owners = await hubSpotAPI.crm.owners.ownersApi.getPage(data.email);
            if(owners.results.length != 0)
                ownerId = owners.results[0].id;
            console.log("ownerId", ownerId);
            const companies = await hubSpotAPI.crm.companies.basicApi.getPage();
            console.log("companies", companies.results);
        } catch (error) {
            console.log(error);
        }





        const contactObj = {
            "properties": {
                "email": email[0].value,
                "firstname": first_name,
                "lastname": last_name,
                "phone": phone[0].value,
                "company": org_name,
            }
        };

        // try {
        //     await hubSpotAPI.crm.contacts.basicApi.create(contactObj);
        // } catch (error) {
        //     throw error;
        // }

    }

    async addDeal(body) {

        console.log("body", body);


        const { value, title, stage_id, close_time } = body.current;
        let dealstage;
        switch (stage_id) {
            case 1:
                dealstage = "appointmentscheduled";
                break;
            case 2:
                dealstage = "appointmentscheduled";
                break;
            case 3:
                dealstage = "qualifiedtobuy";
                break;
            case 4:
                dealstage = "presentationscheduled";
                break;
            case 5:
                dealstage = "contractsent";
                break;
            case 6:
                dealstage = "contractsent";
                break;

            default:
                dealstage = "appointmentscheduled";
                break;

        }

        const dealObj = {
            "properties": {
                "amount": value,
                "dealname": title,
                dealstage,
                "closedate": close_time
            }
        }
        try {
            await hubSpotAPI.crm.deals.basicApi.create(dealObj);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = new HubSpotController();