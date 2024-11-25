import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
    const site = request.url
    
    return new Response(
        JSON.stringify({
            "message": "Yellow world!"
        }), 
        {
            headers: new Headers({
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Site": site
            })
        }
    )
}