var mainApp = require('../src/index');

function BuildEvent(argv)
{
    // Templates that can fill in the intent
    //var restaurantDetails = {"name": "DetailsIntent", "slots": {"RestaurantID": {"name": "RestaurantID", "value": ""}}};

    var lambda = {
       "session": {
         "sessionId": "SessionId.c88ec34d-28b0-46f6-a4c7-120d8fba8fa7",
         "application": {
           "applicationId": "amzn1.ask.skill.4c848d38-347c-4e03-b908-42c6af6c207d"
         },
         "attributes": {},
         "user": {
           "userId": "amzn1.ask.account.AFLJ3RYNI3X6MQMX4KVH52CZKDSI6PMWCQWRBHSPJJPR2MKGDNJHW36XF2ET6I2BFUDRKH3SR2ACZ5VCRLXLGJFBTQGY4RNYZA763JED57USTK6F7IRYT6KR3XYO2ZTKK55OM6ID2WQXQKKXJCYMWXQ74YXREHVTQ3VUD5QHYBJTKHDDH5R4ALQAGIQKPFL52A3HQ377WNCCHYI"
         },
         "new": true
       },
       "request": {
         "type": "IntentRequest",
         "requestId": "EdwRequestId.26405959-e350-4dc0-8980-14cdc9a4e921",
         "locale": "en-US",
         "timestamp": "2016-11-03T21:31:08Z",
         "intent": {}
       },
       "version": "1.0"
     };

    var openEvent = {
       "session": {
         "sessionId": "SessionId.c88ec34d-28b0-46f6-a4c7-120d8fba8fa7",
         "application": {
           "applicationId": "amzn1.ask.skill.4c848d38-347c-4e03-b908-42c6af6c207d"
         },
         "attributes": {},
         "user": {
           "userId": "amzn1.ask.account.AFLJ3RYNI3X6MQMX4KVH52CZKDSI6PMWCQWRBHSPJJPR2MKGDNJHW36XF2ET6I2BFUDRKH3SR2ACZ5VCRLXLGJFBTQGY4RNYZA763JED57USTK6F7IRYT6KR3XYO2ZTKK55OM6ID2WQXQKKXJCYMWXQ74YXREHVTQ3VUD5QHYBJTKHDDH5R4ALQAGIQKPFL52A3HQ377WNCCHYI"
         },
         "new": true
       },
       "request": {
         "type": "LaunchRequest",
         "requestId": "EdwRequestId.26405959-e350-4dc0-8980-14cdc9a4e921",
         "locale": "en-US",
         "timestamp": "2016-11-03T21:31:08Z",
         "intent": {}
       },
       "version": "1.0"
    };

    // If there is no argument, then we'll just return
    if (argv.length <= 2)
    {
        console.log("I need some parameters");
        return null;
    }
    else if (argv[2] == "open")
    {
        // Return the launch request
        return openEvent;
    }
    else
    {
        console.log(argv[2] + " was not valid");
        return null;
    }

    return lambda;
}

// Simple response - just print out what I'm given
function myResponse(appId) {
    this._appId = appId;
}

myResponse.succeed = function(result) {
    console.log(result.response.outputSpeech.text);
    console.log("The session " + ((!result.response.shouldEndSession) ? "stays open." : "closes."));
}

myResponse.fail = function(e) {
    console.log(e);
}

// Build the event object and call the app
var event = BuildEvent(process.argv);
if (event) {
    mainApp.handler(event, myResponse);
}