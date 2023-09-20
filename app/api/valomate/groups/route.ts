// api/valomate/groups

import { getGroups, Group, updateGroup, addGroup } from '@/lib/groups.data'

// get all groups
export const GET = (req: Request, res: Response) => {
  // get local saved groups
  const groups: Group[] = getGroups()

  return new Response(JSON.stringify(groups), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}

// update one group with same GroupID
export const PUT = async (req: Request, res: Response) => {
  // get data from body
  const group: Group = await req.json()
  // update local saved groups
  updateGroup(group)
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}

// add new Group
export const POST = async (req: Request, res: Response) => {
  // get data from body
  const group: Group = await req.json()
  // add group to local saved groups
  addGroup(group)
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
