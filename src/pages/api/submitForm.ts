import type { APIRoute, AstroGlobal } from "astro";

export const prerender = false;
export const GET: APIRoute = async ({request}: AstroGlobal) => {
  try {

    const url = new URL(request.url);
    // Get URL parameters
    const firstName = url.searchParams.get('firstName');
    const lastName = url.searchParams.get('lastName');
    const email = url.searchParams.get('email');


    // Prepare the data to be sent to the Google Form
    const formData = new URLSearchParams();
    if (!firstName || !lastName || !email) return new Response(
      JSON.stringify({ message: 'Form submission failed, invalid params' }),
      { status: 404 }
    );
    formData.append('entry.882883541', firstName);
    formData.append('entry.1827844569', lastName);
    formData.append('entry.1854146947', email);

    // Send the POST request to the Google Form endpoint
    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSctAcvILKYLsst4PjXQN-sx9vBkwDJsoJxJArWfVbo-tHiKzQ/formResponse',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Check for success or failure
    if (response.ok) {
      return new Response(
        JSON.stringify({ message: 'Form submission successful' }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ message: 'Form submission failed' }),
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error' }),
      { status: 500 }
    );
  }
};

