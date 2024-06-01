import { Resend } from "resend";
import { useCompiler } from "#vue-email";

const resend = new Resend("re_hSEcWPEG_Lr8NEbXFLCuVHQiHqtjbjYJv");

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { to } = body;
  const template = await useCompiler("welcome.vue");

  const options = {
    from: "Aucode <contact@aucode.tech>",
    to: "camille.coutens@gmail.com",
    subject: "Bienvenue sur Aucode",
    html: template.html,
  };

  await resend.emails.send(options);
  return {
    statusCode: 200,
    body: { message: "Email sent successfully!" },
  };
});
