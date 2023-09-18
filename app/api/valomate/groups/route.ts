// api/valomate/groups

import { getGroups, Group, updateGroup, addGroup } from "../../../../lib/groups"

export const GET = (req: Request, res: Response) => {
    const groups: Group[] = getGroups()

    return new Response(JSON.stringify(groups), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}

export const PUT = async (req: Request, res: Response) => {
    const group: Group = await req.json()
    updateGroup(group)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}

export const POST = async (req: Request, res: Response) => {
    const group: Group = await req.json()
    addGroup(group)
    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json;charset=UTF-8" } });
}