import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['201030825867', 'Nour', true],
['201030825867', 'silana', false],
['', '', false]
]

global.info = {
 nomerbot: '201030825867',
 pairingNumber: '201030825867',
 nameown: 'Nour',
 nomerown: '201030825867',
 packname: '𝑴𝑨𝑳𝑰𝑲🍷🇰🇼﴿01030825867﴾',
 author: 'MALIKCRASH',
 namebot: '𝑴𝑨𝑳𝑰𝑲🍷🇰🇼 CRASH',
 wm: ''-'ألخ ــط ــر|𝑴𝑨𝑳𝑰𝑲🍷🇰🇼﴿01030825867﴾'-'',
 stickpack: 'Whatsapp',
 stickauth: 'MALIK ʙᴏᴛ '
}

// Thumbnail 
global.media = {
 profil: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 did: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 rules: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 thumbnail: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 thumb: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 logo: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 unReg: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 registrasi: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 confess: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg',
 akses: 'https://telegra.ph/file/f79a37d8a61d83336a721.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: '//wa.me/+201030825867',
 sgh:  'https://wa.me/+201030825867',
 sgc: 'https://chat.whatsapp.com/CUyxsz7kb7nCJLIocNoGeC'
}

global.wait =` انتظر .. أنا أحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *Please be patient*\n\> Running command from *User*!',
 eror: '🤖*Bot Information*\n\> Sorry for the inconvenience in using *MALIK Bot*. There was an error in the system while executing the command.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
