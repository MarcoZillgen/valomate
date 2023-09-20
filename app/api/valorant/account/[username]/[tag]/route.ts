// api/valorant/account/[username]/[tag]

// get valorant account data from one user
export const GET = async (req: Request, res: Response) => {
  // get data from url
  const username = req.url.split('/')[6]
  const tag = req.url.split('/')[7]

  // connect to api
  const data = await fetch(
    `https://api.henrikdev.xyz/valorant/v1/account/${username}/${tag}`
  ).then(res => res.json())

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
