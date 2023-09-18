// api/valorant/assets/agent

export const GET = async (req: Request, res: Response) => {
    const data: any = await fetch("https://valorant-api.com/v1/agents").then(res => res.json());

    return new Response(JSON.stringify(data.data), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}