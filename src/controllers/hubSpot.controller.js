const hubSpotAPI = require('../services/hubspot.service')
class HubSpotController {

    async addContact(body) {
        const { first_name, org_name, email, last_name, phone } = body.current;

        const contactObj = {
            "properties": {
                "email": email[0].value,
                "firstname": first_name,
                "lastname": last_name,
                "phone": phone[0].value,
                "company": org_name,
            }
        };

        try {
            await hubSpotAPI.crm.contacts.basicApi.create(contactObj);
        } catch (error) {
            throw error;
        }

    }

    async addDeal(body) {

        console.log("body", body);


        const { value, title, stage_id } = body.current;
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
                dealstage
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