// api/valomate/groups/[MemberId]

import { getGroupByMemberId, MemberId, removeGroup } from "../../../../../lib/groups"

export const GET = (req: Request, res: Response) => {
    const memberId: MemberId = req.url.split("/")[6]

    const group = getGroupByMemberId(memberId)

    if (group)
        return new Response(JSON.stringify(group), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
    else
        return new Response(JSON.stringify({ error: "Group not found" }), { status: 404, });
}

export const DELETE = (req: Request, res: Response) => {
    const memberId: MemberId = req.url.split("/")[6]
    removeGroup(memberId)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}
