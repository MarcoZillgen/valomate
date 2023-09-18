// api/valomate/groups/migrate

import { MemberId, groupMigration } from "../../../../../lib/groups"

export const POST = async (req: Request, res: Response) => {
    const body: { parentId: MemberId, childId: MemberId } = await req.json();
    groupMigration(body.parentId, body.childId)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}