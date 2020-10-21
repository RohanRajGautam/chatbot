const express = require('express')
const chatbot = require('../chatbot/chatbot');

const router = express.Router()


router.post('/api/df_text_query', async (req, res) => {
    const {text, parameters} = req.body;

    try {
        const responses = await chatbot.textQuery(text, parameters)
        const result = responses[0].queryResult;
        res.send(result);
    } catch (error) { 
        console.log('ERROR: ', error);
        res.status(400).send("error")
    }
   
});

router.post('/api/df_event_query', async (req, res) => {
    const {event, parameters} = req.body;

    try {
        const responses = await chatbot.eventQuery(event, parameters)
        const result = responses[0].queryResult;
        res.send(result);
    } catch (error) { 
        console.log('ERROR: ', error);
        res.status(400).send("error")
    }
    
});

module.exports = router;