// api/valorant/assets/agent/[agentUuid]

export const GET = async (req: Request, res: Response) => {
  // get data from url
  const agentUuid = req.url.split('/')[7]

  // connect to api
  const data: any = await fetch(
    `https://valorant-api.com/v1/agents/${agentUuid}`
  ).then(res => res.json())

  return new Response(JSON.stringify(data.data), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
