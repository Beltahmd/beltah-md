'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "bmd",
  'category': 'general', 
  'reaction': '🍾',
  'nomFichier': __filename
}, async (_0x969b1f, _0x2501c9, _0x849359) => {
  const _0x52fa52 = await fetch("https://api.github.com/repos/Beltahmd/beltah-md");
  const _0x34824f = await _0x52fa52.json();
  if (_0x34824f) {
    const _0x129946 = {
      'stars': _0x34824f.stargazers_count,
      'forks': _0x34824f.forks_count,
      'lastUpdate': _0x34824f.updated_at,
      'owner': _0x34824f.owner.login
    };
    const _0x359c05 = new Date(_0x34824f.created_at).toLocaleDateString("en-GB");
    const _0x321f6c = "  *❒⁠⁠⁠⁠BELTAH MULTI-DEVICE RANK❒⁠⁠⁠⁠* \n\n Beltahmd is a great WhatsApp bot created by the *Beltah* that has been given " + _0x129946.stars + " 🌟 stars as a sign of loving it and a total of " + _0x129946.forks " users have deployed it by now....🤩\n__________________________________\n ◔͜͡◔Made on Earth by ʙᴇʟᴛᴀʜ ᴋᴇɴʏᴀ◔͜͡◔";
    await _0x2501c9.sendMessage(_0x969b1f, {
      'image': {
        'url': "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg"
      },
      'caption': _0x321f6c
    });
  } else {
    console.log("Could not fetch data");
  }
});
