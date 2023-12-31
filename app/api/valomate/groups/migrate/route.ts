// api/valomate/groups/migrate

import { MemberId, groupMigration } from "@/lib/groups.data"

// migrate childGroup to parentGroup
export const POST = async (req: Request, res: Response) => {
  // get data from body
  const body: { parentId: MemberId; childId: MemberId } = await req.json()
  // migrate local saved groups
  groupMigration(body.parentId, body.childId)
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'content-type': 'application/json;charset=UTF-8' }
  })
}
