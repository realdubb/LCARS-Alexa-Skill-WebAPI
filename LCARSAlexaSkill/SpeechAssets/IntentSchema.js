﻿{
    "intents": [
      {
          "intent": "HelloWorldIntent"
      },
      {
          "intent": "RedAlertIntent"
      },
      {
          "intent": "CommandCodeVerificationIntent",
          "slots": [
              {
                  "name": "Code",
                  "type": "COMMANDCODE"
              }
            ]
      },
      {
          "intent": "BrokeHandlerIntent"
      },
      {
          "intent": "AMAZON.HelpIntent"
      },
      {
          "intent": "AMAZON.StopIntent"
      },
      {
          "intent": "AMAZON.CancelIntent"
      }
    ]
}