const chatbot = require('../chatbot/chatbot');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ hello: 'there' });
  });

  app.post('/api/df_text_query', async (req, res) => {

    try {
        
        let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
        res.send(responses[0].queryResult);
    } catch (error) {
        console.log('error in text query');
    }
  });

  app.post('/api/df_event_query', async (req, res) => {
      try {
          
          let responses = await chatbot.eventQuery(
            req.body.event,
            req.body.parameters
          );
          res.send(responses[0].queryResult);
      } catch (error) {
          console.log('error in event query');
      }
  });
};
