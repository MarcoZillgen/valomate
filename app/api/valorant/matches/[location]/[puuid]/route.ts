// api/valorant/matches/[location]/[puuid]?{size}&{map}&{mode}

// get matches by puuid
export const GET = async (req: Request, res: Response) => {
  // get data from url
  const location = req.url.split('/')[6]
  const puuid = req.url.split('/')[7]

  // create api url with data
  const apiUrl = new URL(
    `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${location}/${puuid}`
  )
  const params = new URLSearchParams(req.url.split('?')[1])
  if (params.get('size'))
    apiUrl.searchParams.append('size', params.get('size') as string)
  if (params.get('map'))
    apiUrl.searchParams.append('map', params.get('map') as string)
  if (params.get('mode'))
    apiUrl.searchParams.append('mode', params.get('mode') as string)

  // connect to api
  const data: any = await fetch(apiUrl.toString()).then(res => res.json())

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
