import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const TO = "saharshcabins@gmail.com";
export const FROM = "Saharsh Cabins <enquiries@saharsh.co>";
