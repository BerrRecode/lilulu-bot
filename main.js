const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const moment = require("moment-timezone")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

global.s1 = './index.js'
require(s1)
nocache(s1, module => console.log(`${module} is now updated!`))
         const bcUpp = await fznadmn.chats.all()
         reply('Wait! Update Database on Process')
         for (let ft of bcUpp) { // Buatan Arifi Razzaq OFFICIAL
           let teks = "update database is DONE!\nThank's for Waiting!"
           let buttons = [{buttonId: `Updatecek`,buttonText: {
           displayText: 'Cek Update!'},type:1}]
           let imageMsg = (await fznadmn.prepareMessageMedia((bcImage), 'imageMessage', {
           thumbnail: Buffer.alloc(0)})).imageMessage
           let buttonsMessage = { 
           contentText: `${teks}`, 
           footerText: '@arifirazzaq2001 X fznadmn', 
           imageMessage: imageMsg, 
           buttons: buttons, 
           headerType: 4 
           }
           let bcSend = await fznadmn.prepareMessageFromContent(ft.jid,{buttonsMessage},{})
           fznadmn.relayWAMessage(bcSend)
           }
           
const starts = async (fznadmn = new WAConnection()) => {
    fznadmn.logger.level = 'warn'
    fznadmn.version = [3, 3234, 9]
    fznadmn.browserDescription = [ 'FznAdmn', 'Chrome', '3.0' ]
    console.log(banner.string)
    fznadmn.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Follow ig gw @efzyn_'))
    })

    fs.existsSync('./LiluluBot.json') && fznadmn.loadAuthInfo('./LiluluBot.json')
    fznadmn.on('connecting', () => {
        start('2', 'Login...')
    })
    fznadmn.on('open', () => {
        success('2', 'DONE! jangan lupa follow ig gw @efzyn_')
    })
    await fznadmn.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./LiluluBot.json', JSON.stringify(fznadmn.base64EncodedAuthInfo(), null, '\t'))

    fznadmn.on('chat-update', async (message) => {
        require('./index.js')(fznadmn, message)
    })
    //=======ini fungsi welcomenya=======//
     fznadmn.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await fznadmn.groupMetadata(anu.jid)
			try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdm;;;\nFN:FznAdm\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await fznadmn.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			welcomimg = fs.readFileSync('./src/welcomimg.jpg')
			masuk =`Halo @${mem.split('@')[0]}\n*Selamat Datang Di ${mdata.subject}*\n\nSilahkan baca Deskripsi grup dulu ya!\nketik *!menu* untuk menampilkan fitur bot\njangan lupa donasi ya :)`
            fznadmn.sendMessage(mdata.id, welcomimg, MessageType.image, {contextInfo: {"mentionedJid": [num]}, caption: masuk, quoted: fkontakk, thumbnail: fs.readFileSync('./src/welcomimg.jpg')})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdm;;;\nFN:FznAdm\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await fznadmn.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			gdbyimg = fs.readFileSync('./src/byeimg.jpg')
			keluar =`Selamat tinggal @${mem.split('@')[0]}\nNanti kalo udh balik, jangan lupa bawa oleh-oleh ya`
            fznadmn.sendMessage(mdata.id, gdbyimg, MessageType.image, {contextInfo: {"mentionedJid": [num]}, caption: keluar, quoted: fkontakk, thumbnail: fs.readFileSync('./src/byeimg.jpg')})
			}
//===========function promote demote detected============//
			else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdmn;;;\nFN:FznAdmn\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
fznadmn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62838505090133-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;FznAdmn;;;\nFN:FznAdmn\nitem1.TEL;waid=6285156724122:6285156724122\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
fznadmn.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	     
//==========function call auto block=============//
//ambil di bitcbot
fznadmn.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `FznAdmn` + '\n' + `ORG:Developer Lilulu-BOT\n` + 'TEL;type=CELL;type=VOICE;waid=' + `6285156724122` + ':+' + `6285156724122` + '\n' + 'END:VCARD'
        fznadmn.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Maaf Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        fznadmn.sendMessage(callerId, { displayname: `FznAdmn`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer Lilulu-BOT`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:`https://wa.me/6285156724122?text=Assalamualaikum`}}})
        await sleep(5000)
        await fznadmn.blockUser(callerId, "add")
        })

		    
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()