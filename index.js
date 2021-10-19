// SC NYA JANGAN DI JUAL YA
// Recode Vall Popaye
//Thanks Buat Babang Vall Popaye + MhankBarBar + MRHRTZ + KIZAKIXD + FAUZAN
//Tqtq Jan Diapus Ya Sayang
//Gua cuman remake + nambahin fitur + fix bug
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
//const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
//const imgbbUploader = require("imgbb-uploader")
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const crypto = require('crypto')
const delay = require('delay')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const { cmdadd } = require('./lib/totalcmd.js')
//const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { sleep, isAfk2, cekafk2, addafk2 } = require('./lib/offline')
//const { donasi } = require('./lib/donasi')
const { addVote, delVote } = require('./lib/vote')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const petik = ('```')
const pdua = ('"')
//===============JSON FILE===================//
const afk2 = JSON.parse(fs.readFileSync('./lib/off.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))

//============APIKEY DISNI===========//
LolKey = 'BismillahBarokah' //BELI DI https://lolhuman.xys
ZeksKey = 'YOUR APIKEY' //DAFTAR DI http://zeks.me/
DapKey = 'PaujanDapKey' //DAFTAR DI https://mekuhy-api.herokuapp.com/

//=================CMD================//
cmddhit =[]

//======setting disini ngab=======//
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
banChats = true
offline = false
namabot = `${petik}LILULU-BOT${petik}`
ownerNumber = ["@6285156724122"]
targetpc = '62838522427646'
namaowner = 'FznAdmn'
owner = '62838522427646'
fake = '𝙷𝚎𝚕𝚕𝚘\n𝙸𝚖 𝚕𝚒𝚕𝚞𝚕𝚞𝚋𝚘𝚝'
numbernye = '0'
waktu = '-'
alasan = '-'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Owner Lilulu\n'
            + 'ORG:devnya;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285156724122:+62 851-5672-4122\n'
            + 'END:VCARD'
//=================================================//

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌘'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore ✨'
                                         }
if(time2 < "14:00:00"){
var ucapanWaktu = 'Selamat siang 🌞'
                                         }
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌈'                                       }
//=================================================//
// Sticker Cmd
// Funcation Stick Cmd , Sorry Bang saya Encrip hehe:)
function _0x187e(){const _0x5201c3=['354332XZSVKt','stringify','10gXCFmS','writeFileSync','chats','826660vMhFZs','push','831785OvEahb','9YWQYLr','30yImjxS','6342256ZSdPUT','2360940FsKSew','forEach','333777enEhHA','keys','5973359gTLRyl'];_0x187e=function(){return _0x5201c3;};return _0x187e();}function _0x53ad(_0x327943,_0x496650){const _0x187e5a=_0x187e();return _0x53ad=function(_0x53ad6b,_0x638151){_0x53ad6b=_0x53ad6b-0x7b;let _0x56c9cd=_0x187e5a[_0x53ad6b];return _0x56c9cd;},_0x53ad(_0x327943,_0x496650);}(function(_0x5c82b1,_0x583797){const _0x404869=_0x53ad,_0x5daaac=_0x5c82b1();while(!![]){try{const _0x4771ab=-parseInt(_0x404869(0x88))/0x1+parseInt(_0x404869(0x8a))/0x2*(parseInt(_0x404869(0x85))/0x3)+-parseInt(_0x404869(0x83))/0x4+parseInt(_0x404869(0x7f))/0x5*(-parseInt(_0x404869(0x81))/0x6)+parseInt(_0x404869(0x87))/0x7+parseInt(_0x404869(0x82))/0x8+-parseInt(_0x404869(0x80))/0x9*(-parseInt(_0x404869(0x7d))/0xa);if(_0x4771ab===_0x583797)break;else _0x5daaac['push'](_0x5daaac['shift']());}catch(_0x52bd20){_0x5daaac['push'](_0x5daaac['shift']());}}}(_0x187e,0x7c338));const addCmd=(_0x36813b,_0x481a74)=>{const _0x5c67d7=_0x53ad,_0x3aa4ea={'id':_0x36813b,'chats':_0x481a74};_scommand[_0x5c67d7(0x7e)](_0x3aa4ea),fs[_0x5c67d7(0x7b)]('./database/scommand.json',JSON[_0x5c67d7(0x89)](_scommand));},getCommandPosition=_0x467b73=>{const _0xde6c6=_0x53ad;let _0x564579=null;Object[_0xde6c6(0x86)](_scommand)[_0xde6c6(0x84)](_0x12d946=>{_scommand[_0x12d946]['id']===_0x467b73&&(_0x564579=_0x12d946);});if(_0x564579!==null)return _0x564579;},getCmd=_0x2ac48e=>{const _0x252724=_0x53ad;let _0x3b3ee6=null;Object[_0x252724(0x86)](_scommand)[_0x252724(0x84)](_0x2c0eb9=>{_scommand[_0x2c0eb9]['id']===_0x2ac48e&&(_0x3b3ee6=_0x2c0eb9);});if(_0x3b3ee6!==null)return _scommand[_0x3b3ee6][_0x252724(0x7c)];},checkSCommand=_0x214db0=>{const _0x4d3d7e=_0x53ad;let _0x597323=![];return Object[_0x4d3d7e(0x86)](_scommand)['forEach'](_0x2b847a=>{_scommand[_0x2b847a]['id']===_0x214db0&&(_0x597323=!![]);}),_0x597323;};
module.exports = hexa = async (hexa, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType 
		//ini waktu
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss') //WIB
	    const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss') //WIB
		const timeWit= moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss') //WIT
        const timeWita = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss') //WITA
    const date = new Date().toLocaleDateString()
        //=======
  const type = Object.keys(mek.message)[0]  
  const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
  hexa.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
  const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
  body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
  	const arg = budy.slice(command.length + 2, budy.length)
		const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const isOwner = owner.includes(sender)
		const isBanned = ban.includes(sender)
		const isUser = user.includes(sender)
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            //hitt.push(command)
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		//const isOwner = ownerNumber.includes(sender)
        const isVote = isGroup ? voting.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        if (isCmd) cmdadd()
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
        		cmddhit.push(command)
        //MESS
		mess = {
			wait: 'Tunggu sebentar...',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			banned : 'maaf anda TerBanned🚫',
			noregis : `Maaf anda belum terdaftar di Database ${namabot}, ketik !verify untuk daftar`,
			udhregis : `Anda telah terdaftar di Database ${namabot}`,
			nsfwOff : 'Fitur NSFW tidak aktif, hubungi owner/admin grup untuk mengaktifkannya!',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v',
				api: 'REST API ERROR'
			},
			only: {
				group: 'Khususs grup ngab',
				ownerb: 'Fitur ini khusu OwnerKu',
				adming: 'Fitur ini khusus admin grup',
				Badmin: 'Bot harus jadi ADMIN terlebih dahulu'
			}
		}
//const m = simple.smsg(hexa, mek);
		 // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        
        const listmsg = (from, title, desc, list) => { // Fixx
            let po = hexa.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "Jangan Lupa Donasi Ya Kak ☕","listType": "SINGLE_SELECT","sections": list}}, {})
            return hexa.relayWAMessage(po, {waitForAck: true})
        }
//=========================BATAS INI===========================//
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:fvid})
        }
const textImg = (teks) => {
           return hexa.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./lib/lilulu.jpeg')})
        }
        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        
        const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(user))
        }
        
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
   //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838522427646@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title":`LiluluBot`,"description": "𝙵𝚣𝚗𝙰𝚍𝚖𝚗", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐢𝐦 𝐥𝐢𝐥𝐮𝐥𝐮𝐛𝐨𝐭","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838522427646@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838522427646@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838522427646@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "62838522427646-62838522427646@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
   //FAKEREPLY PRODUCT
            const toko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62838522427646@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)},"title":`LiluluBot`,"description": "𝙵𝚣𝚗𝙰𝚍𝚖𝚗", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "𝐢𝐦 𝐥𝐢𝐥𝐮𝐥𝐮𝐛𝐨𝐭","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "62838522427646-62838522427646@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999999999",
                 "ptt": "true"
                        }
	                  } 
                     } 
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `62838522427646@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fvid = {
	 key: { 
	      participant: '0@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"Apasih Lu",
                 "h": `Hmm`, 
                 'seconds': '99', 
                 'caption': 'Im LiluluBot',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62838522427646-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `62838522427646@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"Apasih Lu","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}} 
            
        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
            
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
  const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       hexa.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       hexa.sendMessage(from, hasil, type, options).catch(e => {
	       hexa.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
hexa.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hexa.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await hexa.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await hexa.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//=================Anti Delete=================//
	hexa.on('message-update', async (mek) => {
		try {
	    const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? hexa.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `0@s.whatsapp.net`
				var split = `${fake}`
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Text
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}`
				hexa.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await hexa.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`)
				const strConversation = `		 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Sticker
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}`

				const buff = fs.readFileSync(savedFilename)
				hexa.sendMessage(from, strConversation, MessageType.text, opt4tag)
				hexa.sendMessage(from, buff, MessageType.sticker, pingbro23)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `0@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await hexa.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`)
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 ANTI-DELETE 」

- Nama : ${pushname} 
- Nomer : ${sender.replace('@s.whatsapp.net', '')}
- Tipe : Image
- Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}
- Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}
- Pesan : ${body ? body : '-'}\`\`\``
				hexa.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
	}
})
//=============================================================//
            
//FUNCTION
           cekafk2(afk2)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk2(mek.key.remoteJid)) return
            addafk2(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk2(mek.key.remoteJid)) return
        addafk2(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//============================================================================================================================//
//==============FUNGSI AFK DI SINI=====================//
			for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    aefka = "Dia Lagi Afk bro!!!\n"
                    if (afk[x.split('@')[0]] != "") {
                        aefka += "Dengan alasan " + afk[x.split('@')[0]]
                    }
                    hexa.sendMessage(from, aefka, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("Anda telah keluar dari mode afk.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
//===============INI BATAS YA BRO=================//
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
    case 'jadibot':
      
    if(!mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
    case 'stopjadibot':
      
    if(!mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
case 'teruskan':
  
hexa.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break
    case 'listbot':
      
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
    
	case 'menu':
	  
	  if (isBanned) return reply(mess.banned)
        txtt =`Hai Kak ${pushname}, ${ucapanWaktu}\nPilih Opsi Dibawah Ini Ya..\n\nJika Button tidak muncul, silahkan ketik ${prefix}lmenu`

               buttons = [{buttonId:`${prefix}pe`, 
               buttonText:{displayText:'📑SHOW MENU'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'👤 OWNER'},type:1},
               {buttonId:`${prefix}donasi`,buttonText:{displayText:'☕DONASI'},type:1}]

               imageMsg = (await hexa.prepareMessageMedia(fs.readFileSync(`./lib/lilulu.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© Creator FznAdmn', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
      }

               prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
               hexa.relayWAMessage(prep)
               break
               
    case 'pe':
    case 'lmenu':
     if (isBanned) return reply(mess.banned)
    wew = fs.readFileSync(`./lib/lilulu.jpeg`)
    	var pe = `╭─❒ 「 BOT INFO 」
│➪ BOT NAME : 𝙻𝚒𝚕𝚞𝚕𝚞𝙱𝚘𝚝
│➪ OWNER : ${owner.split('@')[0]}
│➪ BATTERY : ${baterai.battery}
│➪ PREFIX :「 MULTI PREFIX 」
│➪ TOTAL HIT : ${cmddhit.length} Today
│➪ BOT MODE : ${banChats ? "SELF-MODE" : "PUBLIC-MODE"}
└──────────────────❒

╭─❒ 「 USER & TIME 」
│➪ ${ucapanWaktu} ${pushname}
│➪ NAME  : ${pushname}
│➪ NOMOR : ${sender.split('@')[0]}
│➪ WIB   : ${timeWib}
│➪ WIT   : ${timeWit}
│➪ WITA  : ${timeWita}
└──────────────────❒
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
❒ OWNER ❐
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

❒ GROUP MENU ❐
๏ ${prefix}welcome
๏ ${prefix}add
๏ ${prefix}kick
๏ ${prefix}promote
๏ ${prefix}demote
๏ ${prefix}group
๏ ${prefix}afk
๏ ${prefix}linkgc
๏ ${prefix}setnamegc
๏ ${prefix}setdeskgc
๏ ${prefix}creategrup
๏ ${prefix}voting
๏ ${prefix}delvote
๏ ${prefix}listadmin

❒ DOWNLOAD ❐
๏ ${prefix}ytsearch
๏ ${prefix}igstalk
๏ ${prefix}play
๏ ${prefix}video
๏ ${prefix}ytmp3
๏ ${prefix}ytmp4
๏ ${prefix}igdl
๏ ${prefix}igstory
๏ ${prefix}twitter
๏ ${prefix}tiktok
๏ ${prefix}tiktokaudio
๏ ${prefix}fb
๏ ${prefix}telestick
๏ ${prefix}brainly
๏ ${prefix}komiku
๏ ${prefix}chara
๏ ${prefix}playstore
๏ ${prefix}otaku 

❒ RANDOM IMG ❐
๏ ${prefix}pinterest
๏ ${prefix}wallpaper2
๏ ${prefix}wallpaper
๏ ${prefix}anime 
๏ ${prefix}image 
๏ ${prefix}cogan
๏ ${prefix}cecan 
๏ ${prefix}wallnime
๏ ${prefix}animefanart
๏ ${prefix}kemonomimi

❒ MAKER ❐
๏ ${prefix}sticker
๏ ${prefix}swm
๏ ${prefix}take
๏ ${prefix}fdeface
๏ ${prefix}emoji

❒ CONVERT ❐
๏ ${prefix}toimg
๏ ${prefix}tomp3
๏ ${prefix}tomp4
๏ ${prefix}slow
๏ ${prefix}fast
๏ ${prefix}reverse
๏ ${prefix}tourl

❒ UP SW ❐
๏ ${prefix}upswteks
๏ ${prefix}upswimage
๏ ${prefix}upswvideo

❒ FUN ❐
๏ ${prefix}fitnah
๏ ${prefix}fitnahpc
๏ ${prefix}teruskan
๏ ${prefix}kontak
๏ ${prefix}memerandom
๏ ${prefix}memeindo
๏ ${prefix}darkjoke

❒ PRIMBON ❐
๏ ${prefix}artinama
๏ ${prefix}zodiak
๏ ${prefix}jodoh
๏ ${prefix}weton
๏ ${prefix}tgljadian

❒ RANDOM TEXT ❐
๏ ${prefix}quotes
๏ ${prefix}quotesdilan
๏ ${prefix}quotesislami
๏ ${prefix}katabijak
๏ ${prefix}quotesanime
๏ ${prefix}bucin

❒ TAG ❐
๏ ${prefix}hidetag
๏ ${prefix}tagall
๏ ${prefix}kontag
๏ ${prefix}sticktag
๏ ${prefix}totag

❒ INFOMENU ❐
๏ ${prefix}infoowner
๏ ${prefix}infosc
๏ ${prefix}cektokenlistrik
๏ ${prefix}wikipedia
๏ ${prefix}covidindo
๏ ${prefix}covidglobal
๏ ${prefix}lolcek
๏ ${prefix}chord
๏ ${prefix}lirik
๏ ${prefix}jadwaltv
๏ ${prefix}jadwaltvnow

❒ NSFW MENU ❐
๏ ${prefix}lewdk
๏ ${prefix}erok
๏ ${prefix}tits
๏ ${prefix}keta
๏ ${prefix}solo
๏ ${prefix}eron
๏ ${prefix}lewd
๏ ${prefix}trap
๏ ${prefix}yuri
๏ ${prefix}ero
๏ ${prefix}holoero
๏ ${prefix}erofeet
๏ ${prefix}blowjob
๏ ${prefix}cum_jpg
๏ ${prefix}eroyuri
๏ ${prefix}hentai
๏ ${prefix}femdom
๏ ${prefix}nsfw_avatar
๏ ${prefix}kemonomimi
๏ ${prefix}pussy_jpg
๏ ${prefix}lewdkemo
๏ ${prefix}hololewd
๏ ${prefix}futanari
๏ ${prefix}hololewd
๏ ${prefix}hentai4everyone
๏ ${prefix}animebellybutton
๏ ${prefix}biganimetiddies
๏ ${prefix}lewdanimegirls
๏ ${prefix}hentaifemdom
๏ ${prefix}animearmpits
๏ ${prefix}hentaiparadise
๏ ${prefix}animethighss
๏ ${prefix}animebooty
๏ ${prefix}animefeets
๏ ${prefix}sideoppai
๏ ${prefix}hololewd
๏ ${prefix}ahegao
๏ ${prefix}ecchi
๏ ${prefix}yaoi
๏ ${prefix}trap
๏ ${prefix}chiisaihentai
๏ ${prefix}loli
๏ ${prefix}waifu
๏ ${prefix}neko

❒ OTHER ❐
๏ ${prefix}ping
๏ ${prefix}inspect
๏ ${prefix}caripesan
๏ ${prefix}linkwa query
๏ ${prefix}ssweb
๏ ${prefix}spamsms
๏ ${prefix}spamchat
๏ ${prefix}get
๏ ${prefix}jadibot
๏ ${prefix}listjadibot
๏ ${prefix}get
๏ ${prefix}readmore
๏ ${prefix}term<code>
๏ x
๏ vote
๏ devote

╭─❒ 「 PESAN 」 
│Thank you very much for using this bot.
│And sorry if there are still many errors.
│We will fix the error soon :)
└──────────────────❍`
buttons = [{buttonId: `${prefix}owner`,buttonText:{displayText: '👤 OWNER'},type:1},{buttonId:`${prefix}igowner`,buttonText:{displayText:'⎙ SOSMED'},type:1},{buttonId: `${prefix}donasi`,buttonText:{displayText: '☕DONASI'},type:1}]
      
        buttonsMessage = {
               contentText: `${pe}`,
               footerText: '_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 𝙵𝚣𝚗𝙰𝚍𝚖𝚗*_', imageMessage: wew,
               buttons: buttons,
               headerType: 1
}

          prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
               break
               
 case 'owner':
            case 'developer':
            case 'author':
              
              if (isBanned) return reply(mess.banned)
                hexa.sendMessage(from, {displayname: "Owner Lilulu", vcard: vcard}, MessageType.contact, { quoted: ftoko})
                    .then((res) => hexa.sendMessage(from, '*Tuh Kontak ownerku, jangan di spam ya!*', text, {quoted: res}))
                    
                break
   case 'shutdown':
     if (!isOwner) return reply(mess.only.ownerb)
           if (!mek.key.fromMe) return 
             reply(`Dada Kak...`)
             await sleep(3000)
             process.exit()
             break
  
    case 'donasi':
      
      if (isBanned) return reply(mess.banned)
      reply('mau donasi apa cuman liat-liat nih?')
      dnt =`◪𝗱𝗼𝗻𝗮𝘀𝗶
│ Silahkan scan QRIS code diatas
│ atau menggunakan metode di bawah ini
├─ ❏ DANA
├─ ❏ 085156724122
├─ ❏ OVO
├─ ❏ 089688543712
├─ ❏ PULSA
├─ ❏ 085156724122
├─ ❏ linkAja
├─ ❏ 085156724122
├─ ❑ SAWERIA
├─ ❑ https://saweria.co/EfZyN
├─ ❏ Qris
└─ ❏ https://cutt.ly/QrQris`
  //idnt = fs.readFileSync('./src/donate.jpeg')
  buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1}]
  
  imageMsg = (await hexa.prepareMessageMedia(fs.readFileSync(`./src/donate.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage
  
  //imgnya = fakethumb(idnt, dnt)
    buttonsMessage = {
      contentText: `${dnt}`,
      footerText: '©copyright FznAdmn', imageMessage: imageMsg,
      buttons: buttons,
      headerType: 4
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
               break
               
 case 'igowner' :
               reply('https://instagram.com/efzyn_')
               break
case 'verify':
  sendButMessage(from, `*Registrasi User* ${namabot}`, 'Silahkan klik Button untuk verifikasi', [
    {
  buttonId: `${prefix}butverify`,
  buttonText: {
    displayText: 'VERIFIKASI 🔐',
  },
  type: 1,
    },
  ])
  break
  case 'butverify':
    if (isUser) return reply(mess.udhregis)
				const seriTod = bikinSerial(20)
				try {
				ppimg = await hexa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				//imglu = 'https://i.ibb.co/khbXv6f/IMG-20210527-084101.jpg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				user.push(sender)
				fs.writeFileSync('./database/user.json', JSON.stringify(user))
				jadiUser(sender, seriTod)
				const vertek = 
`
╭─「 PENDAFTARAN USER 」
│Pendaftaran Berhasil
│Pada ${date} ${time}
│Nama: ${pushname}
│Nomor: wa.me/${sender.split('@')[0]}
│Untuk Menggunakan Bot
│Silahkan Kirim ${prefix}menu
│Total Pengguna: ${user.length} Orang
╰─────────────────────────
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
  ${seriTod}

`
                buttons = [{buttonId: `${prefix}menu`, buttonText: {displayText: '📑 SHOW MENU'}, type: 1}]
                
                buttonsMessage = {
                  contentText: `${vertek}`,
                  footerText: '©Lilulu-BOT 2k21',
                  buttons: buttons,
                  headerType: 1
                }
                periv = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(periv)
                break
    
case 'buttons1':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
     case 'buttons2':
              if (args.length < 1) return reply('Link Nya Mana?')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
//------------------< Sticker Cmd >-------------------
       case 'addcmd': 
       case 'setcmd':
         
         if (isBanned) return reply(mess.banned)
        if (!mek.key.fromMe) return 
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
         
         if (isBanned) return reply(mess.banned)
         if (!mek.key.fromMe) return 
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
         
         if (isBanned) return reply(mess.banned)
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'notif':
  
if (isBanned) return reply(mess.banned)				
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await hexa.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: ftoko
}
await hexa.sendMessage(from, options, text)
break
//=====================GROUP MENU=====================//
     case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.adming)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			add = mek.message.extendedTextMessage.contextInfo.participant
		    hexa.groupAdd(from, [add])
				reply('Sukses menambahkan peserta')
				break
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.adming)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    hexa.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
                    break
 case 'demote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.adming)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
                if (isBanned) return reply(mess.banned)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan dari admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Perintah diterima, menurunkan dari admin group :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                hexa.groupDemoteAdmin(from, mentioned)
                } else {
                mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} dari admin group`, mentioned, true)
                hexa.groupDemoteAdmin(from, mentioned)
                }
                break
			    case 'promote':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.adming)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
                if (isBanned) return reply(mess.banned)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `Selamat Anda naik menjadi admin group 🎉 :\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                hexa.groupMakeAdmin(from, mentioned)
                } else {
                mentions(`Selamat 🥳 @${mentioned[0].split('@')[0]} Anda naik menjadi admin group 🎉`, mentioned, true)
                hexa.groupMakeAdmin(from, mentioned)
                }
                break
                /*
                case 'kickall':
                hexa.updatePresence(from, Presence.composing) 
                if (!isOwner) return reply('maaf fitur beresiko bot ter-Banned oleh WhatsApp, jadi hanya Owner yang bisa menggunakan fitur ini!!!')
                if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = groupMembers.map(v => v.jid)
                mentioned = members_id
                using = mentioned.filter(u => !(u == isOwner || u.includes(hexa.user.jid)))
                for (let member of using) {
                if (member.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await hexa.groupRemove(from, members_id)
                }
                reply('sukses kick all member')
			    break
			    */
		case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   
                   if (isBanned) return reply(mess.banned)
                   reply(`*GRUP ${groupName} TELAH DIBUKA KEMBALI❗*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
	case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.adming)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   
                   if (isBanned) return reply(mess.banned)
						reply(`*GRUP ${groupName} TELAH DI TUTUP. SILAHKAN TUNGGU HINGGA DIBUKA KEMBALI❗*`)
						hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
		    case 'group2':
        if (!isGroup) return reply(mess.only.group)
       if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        if (!isGroupAdmins) return reply(mess.only.adming)
        
        if (isBanned) return reply(mess.banned)
        if (args.length < 1) return reply(`*${prefix}group open : untuk membuka chat grup*\n*${prefix}group close : untuk menutup grup*`)
       if (args[0] === 'open') {
				 reply(`*GRUP TELAH DI BUKA KEMBALI「❗」*`)
      hexa.groupSettingChange(from, GroupSettingChange.messageSend, false)
            } else if (args[0] === 'close') {
            reply(`*GRUP TELAH DI TUTUP, SILAHKAN TUNGGU HINGGA DIBUKA KEMBALI「❗」*`)
				hexa.groupSettingChange(from, GroupSettingChange.messageSend, true)
                }
                break
    case 'group':
    case 'gcchatsetting':
      if (!isGroup && mek.key.fromMe) return reply(mess.only.group)
      
        if (isBanned) return reply(mess.banned)
      sendButMessage(from, 'GROUP SETTING', 'silahkan pilih salah satu dibawah ini!', [
        {
          buttonId: `${prefix}opengc`,
          buttonText: {
            displayText: '🔓 BUKA GROUP',
          },
          type: 1,
        },
        {
          buttonId: `${prefix}closegc`,
          buttonText: {
            displayText: '🔐 TUTUP GROUP',
          },
          type: 1,
        },
        ]);
        break
		case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
          if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          
        if (isBanned) return reply(mess.banned)
					if (args.length < 1) return reply(`*mau di rubah apa nih nama grupnya?*\n*Contoh: ${prefix + command} grup lilulu-bot*`)
					hexa.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break		
    case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.adming)
         if (!isBotGroupAdmins) return reply(mess.only.Badmin)
         
        if (isBanned) return reply(mess.banned)
          if (args.length < 1) return reply(`Teks Deskripsi untuk grupnya mana?`)
					hexa.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
  	case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
			argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					hexa.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
    case 'delvote':
      
        if (isBanned) return reply(mess.banned)
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            
        if (isBanned) return reply(mess.banned)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'listadmin':
      
      if (isBanned) return reply(mess.banned)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				
				 case "groupinfo":
				   
				   if (isBanned) return reply(mess.banned)
        if (!isGroup) return reply(mess.only.group)
        ppUrl = await hexa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        hexa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `*【GROUP INFO】*\n*✦ Name* : ${groupName}\n*✦ Member* : ${groupMembers.length}\n*✦ Admin* : ${groupAdmins.length}\n*✦ Deskripsi* : \n${groupDesc}`,
        });
        break;
					case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
				
			  if (isBanned) return reply(mess.banned)
				linkgc = await hexa.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group ${groupName}`
				hexa.sendMessage(from, yeh, text, {quoted: mek})
				break
		case 'afk':
		  
		  if (isBanned) return reply(mess.banned)
        alasan = args.join(" ")
        afk[sender.split('@')[0]] = alasan.toLowerCase()
        fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
        aefka = "Anda telah afk\n\n"
        if (alasan != "") {
        aefka += "Dengan alasan :"  + alasan
                    }
          reply(aefka)
        break
    case 'nsfw':
				if (!isGroup) return reply(mess.group)
				if (!isGroupAdmins) return reply('Fitur ini hanya untuk owner dan admin grup')
				if (args.length < 1) return reply('Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan !!!')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`Fitur ${command} sudah aktif !!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`Berhasil mengaktifkan fitur ${command} pada group ini !!!`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`Berhasil menonaktifkan fitur ${command} pada group ini !!!`)
				} else {
				reply('Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan !!!')
				}
				break
//==================BATAS BRO================//
    case 'linkwa':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'caripesan':
      
      if (isBanned) return reply(mess.banned)
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'otaku':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
            /*
    case 'pinterest':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
            */
    case 'playstore':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`Aplikasi apa yang mau di cari bro?\ncontoh: ${prefix + command} whatsapp`)
         var apk = args.join(' ')
         rest = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${LolKey}&query=${apk}`)
         restbro = rest.result
         let store = '❉─────────────────────❉\n'
            for (let i of restbro){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.title}
- *Link* : ${i.url}
- *Dev* : ${i.developer}
- *Rating* : ${i.scoreText}
- *Harga* : ${i.priceText}\n❉─────────────────────❉`
            }
            reply(store)
            break
    
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break
             
    case 'status':
      if (isBanned) return reply(mess.banned)
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break
    case 'get':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
      
      if (isBanned) return reply(mess.banned)
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
      
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
    case 'totag':
      
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
        case 'settarget':
          
          if (isBanned) return reply(mess.banned)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    //===================FUN MENU====================//
    case 'fitnah':
      
      if (isBanned) return reply(mess.banned)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'fitnahpc':
      
      if (isBanned) return reply(mess.banned)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
      case 'memeindo':
      case 'darkjoke':
        if (isBanned) return reply(mess.banned)
        mems = await getBuffer(`https://api.lolhuman.xyz/api/meme/${command}?apikey=${LolKey}`)
        await hexa.sendMessage(from, mems, image, {quoted: mek})
        break
    case 'memerandom':
      if (isBanned) return reply(mess.banned)
      memernd = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${LolKey}`)
      await hexa.sendMessage(from, memernd, image, {quoted: mek})
      break
//=============================================================//
//========================PRIMBON==============================//
    case 'artinama':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan namanya!\ncontoh: ${prefix + command} Fauzan`)
      nama = body.slice(10)
      arti = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${LolKey}&nama=${nama}`)
      artnam = arti.result 
      hexa.sendMessage(from, artnam, text, {quoted: mek})
      break
    case 'zodiak':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`sertakan zodiakmu ya!!`)
      zdk = body.slice(8)
      zdksaya = await fetchJson(`https://api.lolhuman.xyz/api/zodiak/${zdk}?apikey=${LolKey}`)
      hexa.sendMessage(from, zdksaya.result, text, {quoted: mek})
      break
    case 'jodoh':
      if (isBanned) return reply(mess.banned)
      if (args.length < 1)return reply(`contoh: ${prefix + command} fauzan|doi`)
      jodo = args.join(' ')
      nama1 = jodo.split("|")[0];
      nama2 = jodo.split("|")[1];
      bufff = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${LolKey}`)
      jdsayy = bufff.result
      teks = `Positif : ${jdsayy.positif}\n`
      teks += `Negative : ${jdsayy.negatif}\n`
      teks += `Deskripsi : ${jdsayy.deskripsi}\n`
      bgpoto = await getBuffer(jdsayy.image)
      hexa.sendMessage(from, bgpoto, image, {quoted: mek, caption: teks})
      break
    case 'weton':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`pengguanaan urutan: tanggal, bulan, tahun\nContoh: ${prefix + command} 19|06|1999`)
      wet = args.join(' ')
      tingil = body.slice(7)
      bulbul = wet.split("|")[0];
      tahu = wet.split("|")[1];
   /* tingil adalah tanggal
      bulbul adalah bulan
      tahu adalah tahun */
      wetonn = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tingil}/${bulbul}/${tahu}?apikey=${LolKey}`)
      resnya =  wetonn.result
      teks = `Weton : ${resnya.weton}\n`
      teks += `Karakter : ${resnya.karakter}\n`
      teks += `Pekerjaan : ${resnya.pekerjaan}\n`
      teks += `Rezeki : ${resnya.rejeki}\n`
      teks += `Jodoh : ${resnya.jodoh}\n`
      hexa.sendMessage(from, teks, text, {quoted: mek})
      break
    case 'tanggaljadian':
    case 'tgljadian':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply(`contoh: ${prefix + command} 19 12 2018`)
      haduh = args.join(' ')
      tanggal = args[0]
      bulan = args[1]
      tahun = args[2]
      resmi = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${LolKey}`)
      teks = `Karakteristik : ${resmi.result.karakteristik}\nDeskripsi : ${resmi.result.deskripsi}`
      reply(teks)
      break
//=============================================================//
//====================RANDOM TEXT==========================//
    case 'quote':
    case 'quotes':
      
      if (isBanned) return reply(mess.banned)
      quot = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${LolKey}`)
      isi = quot.result
      teks = `"${isi.quote}"`
      bt = `${isi.by}`
     buttons = [{buttonId:`${prefix}quotes`, buttonText:{displayText:'⏩ NEXT'},type:1},
     {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      
      buttonsMessage = {
      contentText: `${teks}`,
      footerText: `${bt}`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      break
    case 'quotesdilan':
      
      if (isBanned) return reply(mess.banned)
      qtdilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${LolKey}`)
      buttons = [{buttonId:`${prefix}quotesdilan`, buttonText:{displayText:'⏩ NEXT'},type:1},
      {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${qtdilan.result}"`,
      footerText: `Quotes Dilan`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      
      break
  case 'quotesislami':
    
    if (isBanned) return reply(mess.banned)
    qi = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}quotesislami`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${qi.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      
      break
      
  case 'katabijak':
    
    if (isBanned) return reply(mess.banned)
    ktbi = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}katabijak`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${ktbi.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      
      break
      
  case 'katabucin':
  case 'bucin':
    
    if (isBanned) return reply(mess.banned)
    buc = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${LolKey}`)
    buttons = [{buttonId:`${prefix}katabucin`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `"${buc.result}"`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      
      break
      
    case 'quotesanime':
      
      if (isBanned) return reply(mess.banned)
      anim = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolKey}`)
      wibu = anim.result 
      buttons = [{buttonId:`${prefix}quotesanime`, buttonText:{displayText:'⏩ NEXT'},type:1},
    {buttonId:`${prefix}menu`, buttonText:{displayText:'📑 MENU'},type:1}]
      buttonsMessage = {
      contentText: `${petik}${wibu.character} Said:${petik}\n\n*"${wibu.quote}"*\n\n${petik}In Anime: ${wibu.anime}\n${wibu.episode}${petik}`,
      footerText: `©lilulu-bot 2k21`,
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
      
      break
      
    case 'quotesimg':
      
      if (isBanned) return reply(mess.banned)
      restnya = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${LolKey}`)
      imgnya = restnya.result
      buttons = [{buttonId:`${prefix}quotesimg`, buttonText:{displayText:'⏩NEXT'},type:1}]
      
      imageMsg = (await hexa.prepareMessageMedia(`${imgnya}`, 'imageMessage', {thumbnail: fs.readFileSync(`./lib/lilulu.jpeg`)})).imageMessage
      
      buttonsMessage = {
      footerText: `©lilulu-bot 2k21`, imageMessage: imageMsg,
      buttons: buttons,
      headerType: 4
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
               hexa.relayWAMessage(prep)
               break
      
//=====================BATAS===========================//
    case 'tomp3':
      
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
      
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
      
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
      
      if (isBanned) return reply(mess.banned)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
//======================RANDOM IMAGE=====================°=====//
    case 'anime':
      if (isBanned) return reply(mess.banned)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
      case 'wallpaper2':
            if (isBanned) return reply(mess.banned)
            if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
             query = args.join(' ')
             reply(mess.wait)
             wall = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${LolKey}&query=${query}`)
             restwall = wall.result
             wallp = await getBuffer(restwall)
             await hexa.sendMessage(from, wallp, image, {quoted: mek})
                    break
    case 'pinterest':
      if (isBanned) return reply(mess.banned)
      if (args.length == 0) return reply('gambar apa yang mau di cari?')
      poto = args.join('')
      reply(mess.wait)
      penteres = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${LolKey}&query=${poto}`)
      gam = await getBuffer(penteres.result)
      await hexa.sendMessage(from, gam, image, {quoted: mek})
      break
    case 'image':
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`gambar apa yang mau di cari?\ncontoh: ${prefix + command} loli kawaii`)
      srcp = args.join(' ')
      reply(mess.wait)
      gamb = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${LolKey}&query=${srcp}`)
      await hexa.sendMessage(from, gamb, image, {quoted: mek})
      break
    case 'cogan':
    case 'cecan':
    case 'wallnime':
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      ranmek = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${LolKey}`)
      await hexa.sendMessage(from, ranmek, image, {quoted: mek})
      break
    case 'animefanart':
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      animfan = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${LolKey}`)
      await hexa.sendMessage(from, animfan, image, {quoted: mek})
      break
    case 'kemonomimi':
    case 'wallpaper':
      if (isBanned) return reply(mess.banned)
      reply(mess.wait)
      randm2 = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
      await hexa.sendMessage(from, randm2, image, {quoted: mek})
      break
//===============================================================//
    case 'kontak':
      
      if (isBanned) return reply(mess.banned)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
      
      if (isBanned) return reply(mess.banned)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
      
      if (isBanned) return reply(mess.banned)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
//========================OWNER MENU=========================//
case 'welcome':
				if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.adming)
			
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply(`[❗] Fitur ${command} sudah aktif`)
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
case 'leave':
  
		if (!isGroup) return reply(mess.only.group)
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerb)
		hexa.updatePresence(from, Presence.composing)
		hexa.groupLeave(from)
				break
	case 'oleave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerb)
				setTimeout( () => {
				hexa.groupLeave (from) 
				}, 2000)
				setTimeout( () => {
				hexa.updatePresence(from, Presence.composing) 
				hexa.sendMessage(from, 'Bye cuk disuruh keluar ama Ownerku🗣', text, {quoted: fkontak})
				}, 0)
				break
	case 'leaveall':
    if (!isOwner) return reply(mess.only.ownerb) 
     let totalgroup = hexa.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
     for (let id of totalgroup) {
    sendMess(id, 'Byee', null)
    await sleep(3000)
    hexa.groupLeave(id)
    }
             break
	case 'setprofile':
	case 'setpp':
	hexa.updatePresence(from, Presence.composing)
	if (!isQuotedImage) return reply('Reply imagenya!')
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerb)
		enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		mediau = await hexa.downloadAndSaveMediaMessage(enmediau)
		await hexa.updateProfilePicture(botNumber, mediau)
		reply('Sukses')
				break
    case 'upswteks':
      if (isBanned) return reply(mess.banned)
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
case 'upswaudio':
  if (isBanned) return reply(mess.banned)
            if (isQuotedAudio) {
            const swsw = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, audio, { caption: `${q}` }) 
            bur = `Sukses Upload Story Audio dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'upswimage':
      if (isBanned) return reply(mess.banned)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
      if (isBanned) return reply(mess.banned)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
      
      if (isBanned) return reply(mess.banned)
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'mode':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerb)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `☝ SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `🖐 PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
      break
    case 'public':
      if (!isOwner) return reply(mess.only.ownerb)
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			/*if (!mek.key.fromMe) return fakestatus('SELF-BOT')*/
			if (!isOwner) return reply(mess.only.ownerb)
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
	case 'tagall':
	  
	  if (!isGroupAdmins) return reply(mess.only.adming)
	  if (isBanned) return reply(mess.banned)
	  if (!isGroup) return reply(mess.only.group)
			if (!mek.key.fromMe && !isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
				case 'ban':
				if (!isOwner) return reply(mess.only.ownerb)
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
				ban.push(bnnd)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${bnnd} telah dibanned!`)
				break
				case 'unban':
				if (!isOwner) return reply(mess.only.ownerb)
				ya = `${args[0].replace('@', '')}@s.whatsapp.net`
				unb = ban.indexOf(mek)
				ban.splice(unb, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Nomor ${ya} telah di unban!`)
				break
				
				case 'block':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerb)
				hexa.updatePresence(from, Presence.composing) 
				hexa.chatRead (from)
				hexa.blockUser (`${body.slice(7)}@c.us`, 'add')
				hexa.sendMessage(from, `Perintah Diterima, Memblokir ${body.slice(7)}@c.us`, text, {quoted: fkontak})
				break
		        case 'unblock':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerb)
				hexa.blockUser (`${body.slice(9)}@c.us`, 'remove')
			    hexa.sendMessage(from, `Perintah Diterima, Membuka Blockir ${body.slice(9)}@c.us`, text, {quoted: fkontak})
				break
//=================INFO MENU===================//
case 'ctokenlistrik':
      case 'ctlistrik':
      case 'cektokenlistrik':
        
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`idnya mana broh?\ncontoh: ${prefix + command}287873876489`)
      reply(mess.wait)
      const tkn = args.join(' ')
      token = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/${tkn}?apikey=${LolKey}`)
      teks = `Nama: ${token.result.name}\n`
      teks += `Id: ${token.result.id}\n`
      teks += `Jumlah: ${token.result.amount}\n`
      hexa.sendMessage(from, teks, text, {quoted: mek})
      break
  case 'lolcek':
    
    if (!isGroup) return reply(mess.only.group)
    if (isBanned) return reply(mess.banned)
    try{
      ceklol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${LolKey}`)
        lol = ceklol.result
        lolkun = `APIKEY ${body.slice(8)} is valid!!!\nUsername: ${lol.username}\nRequest: ${lol.requests}\nToday:${lol.today}\nTipe Akun: ${lol.account_type}\nExpired: ${lol.expired} `
            hexa.sendMessage(from, lolkun, text, {quoted: mek})
    } catch (e) {
      console.log(`Error:`, color(e,'red'))
      reply (`${petik}APIKEY YANG ANDA INPUT TIDAK VALID!!!${petik}`)
    } 
    break
    case 'covidindo':
      case 'covidid':
        
        if (isBanned) return reply(mess.banned)
        copid = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolKey}`)
        reply(mess.wait)
        comrona = copid.result
        teksc = `*INFO COVID19 INDONESIA*\n\nPositif: ${comrona.positif}\nSembuh: ${comrona.sembuh}\nDirawat: ${comrona.dirawat}\nMeniggal: ${comrona.meninggal}\n\n${petik}KEEP SAFE YA KAWAN-KAWAN:)${petik}`
        hexa.sendMessage(from, teksc, text, {quoted: mek})
        break
    case 'covidglobal':
      
      if (isBanned) return reply(mess.banned)
        copidg = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${LolKey}`)
        reply(mess.wait)
        comronag = copidg.result
        tekscg = `*INFO COVID19 GLOBAL*\n\nPositif: ${comronag.positif}\nSembuh: ${comronag.sembuh}\nDirawat: ${comronag.dirawat}\nMeniggal: ${comronag.meninggal}\n\n${petik}KEEP SAFE YA KAWAN-KAWAN:)${petik}`
        hexa.sendMessage(from, tekscg, text, {quoted: mek})
        break
   case 'chord':
     
      if (isBanned) return reply(mess.banned)
      cord = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${LolKey}&query=${body.slice(7)}`)
        reply(mess.wait)
        infolag = cord.result
        laguc = `Judul lagu: ${infolag.title}\nCreated: ${infolag.created}\nChord:\n${infolag.chord}`
        hexa.sendMessage(from, laguc, text, {quoted: mek})
      break
    case 'lirik':
      
    if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply('judul lagu yang ingin dicari liriknya mana bro?')
      reply(mess.wait)
      jdl = args.join(' ')
      lir = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${LolKey}&query=${jdl}`)
      hexa.sendMessage(from, lir.result, text, {quoted: mek})
      break
    case 'wikipedia':
      
      if (isBanned) return reply(mess.banned)
      wiki = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${LolKey}&query=${body.slice(11)}`)
      reply(mess.wait)
      wiped = wiki.result
      wikiped = `Menurut wikipedia: ${wiped}`
      hexa.sendMessage(from, wikiped, text, {quoted: mek})
      break
    case 'jadwaltv':
      
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply('nama channel tvnya apa ngab?')
      fzxn = args[0]
      fzn = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${fzxn}?apikey=${LolKey}`)
      resl = fzn.result
      teks = `Jadwal TV ${fzxn.toUpperCase()}\n`
      for (var x in resl) {
        teks += `${x} - ${resl[x]}\n`
            }
                reply(teks)
      break
      case 'jadwaltvnow':
        
        if (isBanned) return reply(mess.banned)
        get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolKey}`)
        get_result = get_result.result
        ini_txt = `Jadwal TV Now :\n`
           for (var x in get_result) {
        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
              }
          reply(ini_txt)
        break
  case 'infosc':
  case 'sc':
  case 'script':
    
    if (isBanned) return reply(mess.banned)
        //case ⌈❗」 by  Fauzan
esceh = `❥ *info script bot*
├⊳⊳ Base: Hexa
├⊳⊳ Creator: FznAdmn
├⊳⊳ Owner: ${namaowner}
│
└──┤Link Github├────❥
  ├✜ Github LiluluBOT
  ├✜ https://github.com/BerrRecode/
  ├✜ Github SC bot(private)
  ├✜ https://github.com/BerrRecode/lilulu-bot.git
  └───────────────────⊳⊳⊳ `
     buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1},
     {buttonId:`${prefix}infoowner`,buttonText:{displayText:'💎INFO OWNER'},type:1}]
  
    buttonsMessage = {
      contentText: `${esceh}`,
      footerText: '©copyright FznAdmn',
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
      hexa.relayWAMessage(prep)
                break
    case 'infoowner':
		        case 'infodeveloper':
		        case 'infopengembang':
		          
		         if (isBanned) return reply(mess.banned)
		           //case ⌈❗」 by  Fauzan
 infownr = `◪ Hallo my name is Fauzan
├ From: Situbondo, East Java, Indonesia
├ was born: Situbondo, 19 june 2003
├ Age: 18 years old
└─┤My Social Media├─⊳⊳
  ├─ ❏ WhatsApp
  ├─ ❏ 085156724122
  ├─ ❏ Github
  ├─ ❏ https://github.com/BerrRecode
  ├─ ❏ Instagram
  └─ ❏ https://www.instagram.com/efzyn_`
				buttons = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1},
				{buttonId:`${prefix}infosc`,buttonText:{displayText:'🤖INFO SCRIPT'},type:1}]
  
    buttonsMessage = {
      contentText: `${infownr}`,
      footerText: '©copyright FznAdmn',
      buttons: buttons,
      headerType: 1
    }
    
    prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftoko})
      hexa.relayWAMessage(prep)
			break
//===============BATAS NI=====================//
	case 'play':
	  
	  if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			  fakegroup(mess.wait)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
          
          if (isBanned) return reply(mess.banned)
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
      
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
      
      if (isBanned) return reply(mess.banned)
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
	  
	  if (isBanned) return reply(mess.banned)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
 case 'bc':
if (isBanned) return reply(mess.banned)
hexa.updatePresence(from, Presence.composing)

					if (!isOwner && !mek.key.fromMe) return reply(mess.only)

					if (args.length < 1) return reply('Teksnya?')

					anu = await hexa.chats.all()

					if (isMedia && !mek.message.videoMessage || isQuotedImage) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							hexa.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							hexa.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await hexa.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							hexa.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./stik/thumb.jpeg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `*BROADCAST BOT*\n\n${body.slice(4)}` })

						}

						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)

					} else {

						for (let _ of anu) {

							sendMess(_.jid, `${body.slice(4)}`)

						}

						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)

					}

					break
		case 'bc2':
             if (!isOwner) return reply(mess.only.ownerb)
             if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await hexa.chats.all()
				broadcast = args.join(' ')
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				buff = await hexa.downloadMediaMessage(encmedia)
				for (let _ of anu) {
			    await require('delay')(3000)
				await hexa.sendMessage(_.jid, buff, image, {caption: `「 ${namabot} BROADCAST 」\n\n${broadcast}`, contextInfo: { mentionedJid: [sender] }})
				}
				} else {
				for (let _ of anu) {
				await require('delay')(3000)
				await hexa.sendMessage(_.jid, `「 ${namabot} BROADCAST 」\n\n${broadcast}`, text, { contextInfo: { mentionedJid: [sender] }})
				}
				reply('Suksess broadcast')
				}
			    break
			    case 'bcgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerb)
				if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply('pesannya mana?')
				anu = await groupMembers
				nom = anu.participant
			    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(cok).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				bufferzzz = await hexa.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				hexa.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
				}
				reply('')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
				}
				reply('Sukses broadcast group')
				}
				break
 
	case 'setfakeimg':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
hexa.cmd.on('asupan', async (data) => {
           if(data.args[0].toLowerCase() == 'ukhty') {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${DapKey}`, 'ukhty.mp4', `Nih Asupannya @${data.sender.split('@')[0]}`, data.message)
            } else if(data.args[0].toLowerCase() == 'santuy') {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupan?apikey=${DapKey}`, 'santuy.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '+62') {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupan?apikey=${DapKey}`, '+62.mp4',`Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'bocil')  {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${DapKey}`, 'bocil.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'rikagusriani') {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${DapKey}`, 'rika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'ghea') {
              hexa.sendFileFromUrl(data.from, `https://mekuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${DapKey}`, 'ghea.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == 'chika') {
              hexa.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/chika?apikey=APIKEY', 'chika.mp4', `Nih Kak @${data.sender.split('@')[0]} Asupannya`, data.message) 
            } else if(data.args[0].toLowerCase() == 'random') {
              hexa.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/asupan?apikey=APIKEY', 'random.mp4', 'Nih', data.message)
            } else {
              		let po = hexa.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `Menu Asupan Permintaan Dari ${data.pushname}`,
                  "description": "Pilih Di Bawah Ini!",
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "+62",
                              "rowId": `${data.prefix + data.command} +62`
                           },
						   {
                              "title": "chika",
                              "rowId": `${data.prefix + data.command} chika`
                           }, 
                           {
                             "title": " ghea", 
                             "rowId": `$${data.prefix + data.command} ghea`
                           }, 
                           {
                             "title": " ukhty", 
                             "rowId": `${data.prefix + data.command} ukhty`
                           }, 
                           {
                             "title": " bocil", 
                             "rowId": `${data.prefix + data.command} bocil`
                           }, 
                           {
                             "title": " santuy", 
                             "rowId": `${data.prefix + data. command} santuy`
                           }, 
                           {
                             "title": " random", 
                             "rowId": `${data.prefix + data.command} random`
                           }, 
                           {
                             "title": " rikagusriani", 
                             "rowId": `${data.prefix + data.command} rikagusriani`
                           }
                        ]
                     }]}}, {}) 
            hexa.relayWAMessage(po, {waitForAck: true})
            }
        })
    case 'asupan2':
    case 'asupanrandom':
            if (isBanned) return reply(mess.banned)
            asupn = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${LolKey}`)
            asu = await getBuffer(asupn.result)
            hexa.sendMessage(from, asu, video, {quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4"})
               break
	case 'setthumb':
	  if (!isOwner) return reply(mess.only.ownerb)
	    if (isBanned) return reply(mess.banned)
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	
	case 'emoji':
	  
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
//=================DOWNLOADMENU=====================//
case 'youtubedl':
  
        if (isBanned) return reply(mess.banned)
             if (args.length < 1) return reply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ Durasi : ${res[0].size}`
              buttons = [{buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}buttons1 ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
	case 'ytmp3':
	  if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Dimekatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
				/*
    case 'image':
      
        if (isBanned) return reply(mess.banned)
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
            */
 	case 'tiktok':
 	case 'ttnowm':
 	case 'tiktokdl':
 	case 'ttdl':
 	  
 	    if (isBanned) return reply(mess.banned)
 		if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://vm.tiktok.com/ZSJkHUCwK/`)
        reply(mess.wait)
        link = args.join(' ')
        fznn = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${LolKey}&url=${link}`)
        uhyy = fznn.result
        buffer = await getBuffer(uhyy.link)
        magee = await getBuffer(uhyy.thumbnail)
        apatar = await getBuffer(uhyy.author.avatar)
        textt = `Username : ${uhyy.author.username}\nNickname : ${uhyy.author.nickname}\nTitle : ${uhyy.title}\nKeywords : ${uhyy.keywords}\nDescription : ${uhyy.description}\nDuration : ${uhyy.duration}\nDigg Count : ${uhyy.statistic.diggCount}\nShare Count : ${uhyy.statistic.shareCount}\nComment Count : ${uhyy.statistic.commentCount}\nPlay Count : ${uhyy.statistic.playCount}\n`
         hexa.sendMessage(from, apatar, image, {quoted: mek, caption: 'profile yang punya video:v'})
         hexa.sendMessage(from, magee, image, {quoted: mek, caption: textt})
         hexa.sendMessage(from, buffer, video, {quoted: mek, caption: 'nih videonya'})
	            break
	            
	            case 'ytmp4':
	              
	     if (isBanned) return reply(mess.banned)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Dimekatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
     case 'brainly':
       
       if (isBanned) return reply(mess.banned)
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
      
      if (isBanned) return reply(mess.banned)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
	  case 'igdl':
    case 'igdownload':
    case 'igreels':
    case 'igimg':
      
      if (isBanned) return reply(mess.banned)
      if (args.length < 1) return reply(`link mana broh?\ncontoh : ${prefix + command} https://www.instagram.com/p/CGOivksJleVPwIQfDBplW8nDrQmOX3aVCkzUO80/`)
                reply(mess.wait)
                link = args.join(' ')
                igeh = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${LolKey}&url=${link}`)
            igehdl = igeh.result
            const captions = 'nih ngab'
             sendMediaURL(from, link, captions)
             await sendMediaURL(from, igehdl)
              break
    case 'fb':
      
          if (isBanned) return reply(mess.banned)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
  case 'telesticker':
      case 'telestick':
        
        if (isBanned) return reply(mess.banned)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers            /LINE_Menhera_chan_ENG`)
        ini_url = args[0]
        ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${LolKey}&url=${ini_url}`)
            ini_sticker = ini_url.result.sticker
          for (sticker_ in ini_sticker) {
          ini_buffer = await getBuffer(ini_sticker[sticker_])
          await hexa.sendMessage(from, ini_buffer, sticker)
                    }
            break
            
  case 'tiktokaudio':
    
    if (isBanned) return reply(mess.banned)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
     		
//=====================BATAS DOWNLOAD MENU=====================//
   
//=====================STALKER MENU======================//
    case 'igstalk':
      
      if (isBanned) return reply(mess.banned)
				reply('[❗] Sabar lagi stalking IG nya')
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${body.slice(9)}?apikey=${LolKey}`)
				get_result = get_result.result
				txt = `Link : https://www.instagram.com/${get_result.username}\n`
				txt += `Username : ${get_result.username}\n`
				txt += `Full : ${get_result.fullname}\n`
				txt += `Post : ${get_result.posts}\n`
				txt += `Followers : ${get_result.followers}\n`
				txt += `Following : ${get_result.following}\n`
				txt += `Bio : ${get_result.bio}\n`
				buffer = await getBuffer(get_result.photo_profile)
				hexa.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
				break
            case 'stalkgithub':
              
              if (isBanned) return reply(mess.banned)
             if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${LolKey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `Name : ${ini_result.name}\n`
              ini_txt += `Link : ${ini_result.url}\n`
              ini_txt += `Public Repo : ${ini_result.public_repos}\n`
              ini_txt += `Public Gists : ${ini_result.public_gists}\n`
              ini_txt += `Followers : ${ini_result.followers}\n`
              ini_txt += `Following : ${ini_result.following}\n`
              ini_txt += `Bio : ${ini_result.bio}`
          hexa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                  break
//=====================BATAS STALKER======================//
    
	case 'term':
	  if (!isOwner) return reply(mess.only.ownerb)
	  if (isBanned) return reply(mess.banned)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
		    /*
    case 'join':
            try {
            if (!isOwner) return reply(mess.only.ownerb)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
            */
            case 'join':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerb)
				 if (args.length < 1) return reply('Link nya mana?')
					hexa.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
    case'twitter':
      
          if (isBanned) return reply(mess.banned)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
      
          if (isBanned) return reply(mess.banned)
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
	  
	  if (isBanned) return reply(mess.banned)
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
      
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
      
      if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
    case 'tourl':
      
          if (isBanned) return reply(mess.banned)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
//===================NSFW MENU=================================//
                case 'lewdk':
                case 'erok':
                case 'tits':
                case 'keta':
                case 'solo':
                case 'eron':
                case 'lewd':
                case 'trap':
                case 'yuri':
                case 'ero':
                case 'holoero':
                case 'erofeet':
                case 'blowjob':
                case 'cum_jpg':
                case 'eroyuri':
                case 'hentai':
                case 'femdom':
                case 'nsfw_avatar':
                case 'kemonomimi':
                case 'pussy_jpg':
                case 'lewdkemo':
                case 'hololewd':
                case 'futanari':
                case 'hololewd':
				if (!isNsfw) return reply(mess.nsfwOff)
				if (isBanned) return reply(mess.banned)
				reply(mess.wait)
				efweh = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${LolKey}`)
				await hexa.sendMessage(from, efweh, image, {quoted: mek})
				break
				case 'hentai4everyone':
				case 'animebellybutton':
				case 'biganimetiddies':
				case 'lewdanimegirls':
				case 'hentaifemdom':
				case 'animearmpits':
				case 'hentaiparadise':
				case 'animethighss':
				case 'animebooty':
				case 'animefeets':
				case 'sideoppai':
				case 'hololewd':
				case 'ahegao':
				case 'ecchi':
				case 'yaoi':
				case 'trap':
				case 'chiisaihentai':
				case 'loli':
				case 'waifu':
				case 'neko':
				if (!isNsfw) return reply(mess.nsfwOff)
				if (isBanned) return reply(mess.banned)
				reply(mess.wait)
				lapan = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolKey}`)
				await hexa.sendMessage(from, lapan, image, {quoted: mek})
				break
//=====================================================================================================//
//=======================OTHER MENU=====================//
    case 'readmore':
      
      if (isBanned) return reply(mess.banned)
      zonk = '‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎'
      hexa.sendMessage(from, zonk, text, {quoted: mek})
      break
    case 'inspect':
      
          if (isBanned) return reply(mess.banned)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
              case 'ssweb':
        
         if (isBanned) return reply(mess.banned)
        if (args.length == 0) return reply(`Example: ${prefix + command} https://github.com/BerrRecode/`)
          ini_link = args[0]
        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${LolKey}&url=${ini_link}`)
          await hexa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
      case 'spamsms':
        
            if (isBanned) return reply(mess.banned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 628481749928`)
                    reply('Sabar lagi ngespam nomornya!')
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${LolKey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${LolKey}&nomor=${nomor}`)
                    reply("Success")
                    break       
      case 'spamchat':
        
        if (isBanned) return reply(mess.banned)
                    if (args.length < 1) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 628481749928 Oy bwang`)
                    if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${owner}`)) return reply(`Mau Ngapain Spam Ke ownerku ${namaowner}?👿`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return hexa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: fkontak})
                    var nomor = mek.participant
                    const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split('@s.whatsapp.net')[0]}\nPesan : ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    .then(() => { hexa.sendMessage(`${mansed}`, options, text, {quoted: fkontak})})
                    reply('awokwok SPAM CHAT BERHASIL:)')
                    break
             

default:
if (budy.startsWith('x')){
try {
	if (!isOwner) return reply(mess.only.ownerb)
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
