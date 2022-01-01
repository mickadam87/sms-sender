import twilio, { Twilio } from "twilio";

export default function smsSender(
  ssid: string,
  token: string,
  phoneNumber: string
) {
  let client: Twilio = twilio(ssid, token);

  async function text(phone: string, payload: string) {
    try {
      const message = await client.messages.create({
        body: payload,
        from: phoneNumber,
        to: phone,
      });

      return message;
    } catch (error) {
      return { error: error };
    }
  }

  return {
    text,
  };
}
