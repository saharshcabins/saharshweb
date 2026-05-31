import { Resend } from "resend";

export const getResend = () => new Resend(process.env.RESEND_API_KEY);
export const TO = "saharshcabins@gmail.com";
export const FROM = "Saharsh Cabins <onboarding@resend.dev>";
