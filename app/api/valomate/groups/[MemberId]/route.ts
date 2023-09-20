// api/valomate/groups/[MemberId]

import { getGroupByMemberId, MemberId, removeGroup } from '@/lib/groups.data'

// get one group by memberID
export const GET = (req: Request, res: Response) => {
  // get data from url
  const memberId: MemberId = req.url.split('/')[6]

  // try to get group by memberID
  const group = getGroupByMemberId(memberId)
  if (group)
    return new Response(JSON.stringify(group), {
      status: 200,
      headers: { 'content-type': 'application/json;charset=UTF-8' }
    })
  // group not found error
  else
    return new Response(JSON.stringify({ error: 'Group not found' }), {
      status: 404
    })
}

// delete group by memberId
export const DELETE = (req: Request, res: Response) => {
  // get data from url
  const memberId: MemberId = req.url.split('/')[6]
  // remove local saved group
  removeGroup(memberId)
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
