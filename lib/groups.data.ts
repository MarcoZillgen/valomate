// type
type MemberId = string

type Server =
  | 'US West (Oregon)'
  | 'US West (N. California)'
  | 'US East (N. Virginia)'
  | 'US Central (Texas)'
  | 'US Central (Illinois)'
  | 'US Central (Georgia)'
  | 'Santiago'
  | 'Mexico City'
  | 'Miami'
  | 'Sao Paulo'
  | 'Frankfurt'
  | 'Paris'
  | 'Stockholm'
  | 'Istanbul'
  | 'London'
  | 'Warsaw'
  | 'Madrid'
  | 'Bahrain'
  | 'Seoul'
  | 'Hong Kong'
  | 'Tokyo'
  | 'Singapore'
  | 'Sydney'
  | 'Mumbai'

type Mode =
  | 'Competitive'
  | 'Unrated'
  | 'Spike Rush'
  | 'Deathmatch'
  | 'Swiftplay'
  | 'Team Deathmatch'
  | 'Custom'

type VoiceChat = 'Valorant' | 'Discord' | 'TeamSpeak' | 'Other' | 'None'

type Group = {
  id: MemberId // Group ID but also the ID of the group leader
  members: MemberId[]
  settings: {
    rank: {
      min: number
      max: number
    }
    size: number
    servers: Server[]
    mode: Mode
    over18: boolean
    voiceChat: VoiceChat
  }
}

// data
let groups: Group[] = []

// handlers
const getGroups = () => groups

const getGroupByMemberId = (memberId: MemberId) =>
  groups.find(group => group.id === memberId)

const addGroup = (group: Group) => groups.push(group)

const removeGroup = (memberId: MemberId) =>
  (groups = groups.filter(group => group.id !== memberId))

const updateGroup = (group: Group) =>
  (groups = groups.map(g => (g.id === group.id ? group : g)))

const groupMigration = (parentId: MemberId, childId: MemberId) => {
  const parentGroup = getGroupByMemberId(parentId)
  const childGroup = getGroupByMemberId(childId)

  if (!parentGroup || !childGroup) return

  const newGroup = {
    id: parentGroup.id,
    members: [...parentGroup.members, ...childGroup.members],
    settings: parentGroup.settings
  }

  removeGroup(parentGroup.id)
  removeGroup(childGroup.id)
  addGroup(newGroup)

  return newGroup
}

// export
export {
  getGroups,
  getGroupByMemberId,
  addGroup,
  removeGroup,
  updateGroup,
  groupMigration
}
export type { MemberId, Server, Mode, VoiceChat, Group }
