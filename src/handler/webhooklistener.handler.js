const { addContact, addDeal } = require("../controllers/hubSpot.controller");

/**
 * WebHookListener class responsible for handling incoming webhook events.
 */
class WebHookListener {

    /**
     * Listener method for processing incoming webhook events.
     * @param {object} req - The incoming request object.
     * @param {object} res - The response object to send back to the sender.
     */
    async listener(req, res) {
        try {
            if (req.body.v) { // Identify the type of webhook
                if (req.body.event == 'added.person') {
                    // Handle the event as a contact addition
                    await addContact(req.body);
                } else {
                    // Handle the event as a deal addition
                    await addDeal(req.body);
                }
            }

            // Respond with a success message
            res.status(200).json({
                "msg": "received"
            });
        } catch (error) {
            // Handle errors and respond with an error message
            res.status(406).json({
                "msg": "Not Acceptable"
            })
        }
    }
}

// Export an instance of the WebHookListener
module.exports = new WebHookListener();
