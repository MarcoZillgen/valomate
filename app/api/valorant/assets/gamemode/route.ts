// api/valorant/assets/gamemode

// get all gamemodes
export const GET = async () => {
  // connect to api
  const data: any = await fetch('https://valorant-api.com/v1/gamemodes').then(
    res => res.json()
  )

  return new Response(JSON.stringify(data.data), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
