export const GET = () => {

    const authHeader = request.headers.get('Authorization');

    return new Response(JSON.stringify({message: "Hello"}), {status: 200});

}