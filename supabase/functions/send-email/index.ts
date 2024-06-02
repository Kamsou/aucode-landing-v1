import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("Hello from Functions!");

serve(async (req) => {
  const { email } = await req.json();

  const RESEND_API_KEY = Deno.env.get("re_hSEcWPEG_Lr8NEbXFLCuVHQiHqtjbjYJv");

  if (!RESEND_API_KEY) {
    return new Response("Resend API Key or FROM Email not set", {
      status: 500,
    });
  }

  const emailHtml = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <h1 style="color: #333;">Merci d'avoir confirmé votre email!</h1>
    <p>Nous sommes ravis que vous ayez confirmé votre email. Vous pouvez maintenant accéder à toutes les fonctionnalités de notre service.</p>
    <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
  </div>
`;

  const emailData = {
    from: "Aucode <contact@aucode.tech>",
    to: email,
    subject: "Email confirmé",
    html: emailHtml,
  };

  const response = await fetch("https://api.resend.com/v1/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  if (response.ok) {
    return new Response("Email sent successfully", { status: 200 });
  } else {
    const error = await response.json();
    return new Response(`Failed to send email: ${error.message}`, {
      status: 500,
    });
  }
});
