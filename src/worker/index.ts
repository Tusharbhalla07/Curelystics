import { Hono } from "hono";

const app = new Hono();

app.post("/api/contact", async (c) => {
  try {
    const { name, email, phone, organization, message } = await c.req.json();

    const mailBody = {
      personalizations: [
        {
          to: [{ email: "curelystics.official@gmail.com" }],
        },
      ],
      from: {
        email: "no-reply@curelystics.online",
        name: "Curelystics Contact Form",
      },
      subject: "New Contact Form Message",
      content: [
        {
          type: "text/html",
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Message:</strong><br>${message}</p>
          `,
        },
      ],
    };

    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailBody),
    });

    if (!response.ok) {
      console.log("MAILCHANNELS ERROR", await response.text());
      return c.json({ success: false, error: "MailChannels failed" }, 500);
    }

    return c.json({ success: true });
  } catch (error) {
    console.log("SERVER ERROR:", error);
    return c.json({ success: false, error: "Internal Server Error" }, 500);
  }
});

export default app;
