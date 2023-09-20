// api/valorant/assets/rank

// get all rank data
export const GET = async (req: Request, res: Response) => {
  // connect to api
  const data: any = await fetch(
    'https://valorant-api.com/v1/competitivetiers'
  ).then(res => res.json())

  return new Response(JSON.stringify(data.data), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
