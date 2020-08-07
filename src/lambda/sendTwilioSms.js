const querystring = require("querystring");

exports.handler = function (event, context, callback) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  const params = querystring.parse(event.body);
  const { message, from, to } = params;

  client.messages
    .create({
      body: message,
      from,
      to
    })
    .then(message =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(message)
      })
    )
    .catch(err => callback(err));
};