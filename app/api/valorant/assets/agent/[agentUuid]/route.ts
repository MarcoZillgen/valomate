// api/valorant/assets/agent/[agentUuid]

export const GET = async (req: Request, res: Response) => {
    const agentUuid = req.url.split("/")[7]

    const data: any = await fetch(`https://valorant-api.com/v1/agents/${agentUuid}`).then(res => res.json());

    return new Response(JSON.stringify(data.data), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}