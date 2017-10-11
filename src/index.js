var Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.669c2ea8-2a4c-411e-8ca1-b28827a13d31';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':ask', "Hello how are you?");
    },

    'HelloIntent': function() {
        this.emit(':tell', "Good to hear from you. You have successfully tested hello world skill. Good bye.");
    }
};