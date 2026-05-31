import { Resend } from "resend";

export const getResend = () => new Resend(process.env.RESEND_API_KEY);
export const TO = "saharshcabins@gmail.com";
export const CC = ["sanikawarad24@gmail.com", "harrychandak.007@gmail.com"];
export const FROM = "Saharsh Cabins <enquiries@saharsh.co>";
