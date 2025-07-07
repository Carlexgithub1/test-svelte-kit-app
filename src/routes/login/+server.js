import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");

    // Here you would typically validate the credentials
    // For demonstration, we will just return a success message
    return json({
        message: `Welcome, ${username}! You have successfully logged in.`
    }, {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}