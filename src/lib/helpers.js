export function getContentAuthorProfile(memberName, members) {
    return members.find(member => member.name.toLowerCase() === memberName.toLowerCase())
}