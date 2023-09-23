// Use of the HubSpot Service
const hubSpotAPI = require('../services/hubspot.service');

/**
 * HubSpotController class for managing interactions with HubSpot, including contacts and deals.
 */
class HubSpotController {

    /**
     * Add a new contact to HubSpot.
     * The request body containing contact information obtained from the webhook listener.
     */
    async addContact(body) {
        // Get the info from the body object to create the contact object
        const { first_name, org_name, email, last_name, phone } = body.current;

        // This object have the necessary info to create a new Contact in HubSport
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
            // Call to create a new Contact in HubSpot and saving the result on constant to associate the contact in next steps.
            const createContactResponse = await hubSpotAPI.crm.contacts.basicApi.create(contactObj);

            /* Identify if the PipeDrive person has an organization to check if the companie with the same name exists in HubSpot
            If exists, just get the company object to associate with contact, if no exists, create a new company in HubSpot and save
            the result to associate with contact
            */
            if (org_name) {
                let createCompanyResponse = false;
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

                // Call to associate contact with company
                await hubSpotAPI.crm.associations.v4.basicApi.create(
                    'companies',
                    createCompanyResponse.id,
                    'contacts',
                    createContactResponse.id,
                    [
                        {
                            "associationCategory": "HUBSPOT_DEFINED",
                            "associationTypeId": 280
                        }
                    ]
                )
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Add a new deal to HubSpot.
     * The body containing deal information obtained from thw webhook listener
     */
    async addDeal(body) {
        // Get the info from the body object to create the contact object
        const { value, title, stage_id, expected_close_date, org_name, person_id } = body.current;
        // HubSpot and PipeDrive have different types of stage, this switch only relates them.
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
        // This object have the necessary info to create a new Deal in HubSport
        const dealObj = {
            "properties": {
                "amount": value,
                "dealname": title,
                dealstage,
                "closedate": expected_close_date
            }
        };
        // Call to create a new Deal in HubSpot
        try {
            await hubSpotAPI.crm.deals.basicApi.create(dealObj);
        } catch (error) {
            throw error;
        }
    }
}

// Export an instance of the HubSpotController
module.exports = new HubSpotController();
