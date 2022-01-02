# SMS sender using Twilio services.

You need to register on Twilio website to get your SSID number, request a token and buy a phone number in order to be able to use this module.

### How to

```typescript
import smsSender from "sms-sender";
const { text } = senderSender(
  "YOUR_TWILIO_SSID",
  "YOUR_TWILIO_TOKEN",
  "YOUR_TWILIO_NUMBER"
);

// Now, you can send text message
let message: string = "This is an automated text message sent with NodeJS";

text("TARGET_PHONE_NUMBER", message);
```
