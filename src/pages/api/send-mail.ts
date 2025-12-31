export const prerender = false;

import { formSchema } from "@/data/forms";
import type { APIRoute } from "astro";
import { getSecret } from "astro:env/server";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const objectData = {
		name: data.get("name"),
		email: data.get("email"),
		message: data.get("message"),
	};
	const formData = formSchema.parse(objectData);

	try {
		const { name, email, message } = formData;
		const result = await fetch(
			"https://api.emailjs.com/api/v1.0/email/send",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					service_id: getSecret("EMAILJS_SERVICE_ID"),
					template_id: getSecret("EMAILJS_TEMPLATE_ID"),
					user_id: getSecret("EMAILJS_PUBLIC_KEY"),
					accessToken: getSecret("EMAILJS_PRIVATE_KEY"),

					template_params: {
						message,
						user_name: name,
						user_email: email,
						from_name: name,
					},
				}),
			},
		);
		if (result.status === 200) {
			return new Response(JSON.stringify({ message: "success" }), {
				status: 200,
			});
		} else {
			console.error(`Error: ${result.status}`);
			return new Response(
				JSON.stringify({ message: "unable to send mail" }),
				{
					status: 500,
				},
			);
		}
	} catch (error) {
		return new Response(
			JSON.stringify({
				message: `Invalid request: ${formSchema.safeParse(objectData).error}`,
			}),
			{
				status: 500,
			},
		);
	}
};
