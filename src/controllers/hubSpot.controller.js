const hubSpotAPI = require('../services/hubspot.service');
const { getUser } = require('./pipeDrive.controller');
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
            const createContactResponse = await hubSpotAPI.crm.contacts.basicApi.create(contactObj);

            if (org_name) {
                let createCompanyResponse = false;
                try {
                    const companies = await hubSpotAPI.crm.companies.basicApi.getPage();
                    companies.results.forEach(company => {
                        if (company.properties.name == org_name)
                            createCompanyResponse = company;
                    });
                    if (!createCompanyResponse)
                        createCompanyResponse = await hubSpotAPI.crm.companies.basicApi.create({
                            properties: {
                                name: org_name,
                            }
                        });
                    await hubSpotAPI.crm.associations.v4.basicApi.create(
                        'companies',
                        createCompanyResponse.id,
                        'contacts',
                        createContactResponse.id,
                        [
                            {
                                "associationCategory": "HUBSPOT_DEFINED",
                                "associationTypeId": 280
                                // AssociationTypes contains the most popular HubSpot defined association types
                            }
                        ]
                    )
                } catch (error) {
                    throw error;
                }
            }
        } catch (error) {
            throw error;
        }

        











    }

    async addDeal(body) {

        console.log("body", body);


        const { value, title, stage_id, expected_close_date } = body.current;
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
                "closedate": expected_close_date
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