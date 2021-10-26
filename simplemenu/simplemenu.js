const prefix = [!]
exports.groupMenu = (prefix) => {
    return`
❒ GROUP MENU ❐
๏ ${prefix}welcome
๏ ${prefix}add
๏ ${prefix}kick
๏ ${prefix}promote
๏ ${prefix}demote
๏ ${prefix}group 
๏ ${prefix}nsfw
๏ ${prefix}afk
๏ ${prefix}linkgc
๏ ${prefix}setnamegc
๏ ${prefix}setdeskgc
๏ ${prefix}creategrup
๏ ${prefix}voting
๏ ${prefix}delvote
๏ ${prefix}listadmin
    `
}

exports.ownerMenu = (prefix) => {
    return`
❒ OWNER MENU ❐
๏ ${prefix}mode
๏ ${prefix}bc
๏ ${prefix}bc2
๏ ${prefix}bcgc
๏ ${prefix}ban
๏ ${prefix}unban
๏ ${prefix}setcmd
๏ ${prefix}delcmd
๏ ${prefix}listcmd
๏ ${prefix}shutdown
๏ ${prefix}status
๏ ${prefix}leave
๏ ${prefix}oleave
๏ ${prefix}leaveall
๏ ${prefix}setthumb
๏ ${prefix}setfakeimg
๏ ${prefix}setreply
๏ ${prefix}settarget
`
}
