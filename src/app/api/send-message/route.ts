export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Validate the input
  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  const result = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID!,
      template_id: process.env.EMAILJS_TEMPLATE_ID!,
      user_id: process.env.EMAILJS_PUBLIC_KEY!,
      accessToken: process.env.EMAILJS_PRIVATE_KEY!,
      template_params: {
        message,
        user_name: name,
        user_email: email,
        from_name: name,
      },
    }),
  });

  if (result.status !== 200) {
    return new Response("Failed to send message", { status: 500 });
  }

  return new Response("Message sent successfully", { status: 200 });
}
