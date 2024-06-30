const {
  zokou
} = require("../framework/zokou");
const {
  getBuffer
} = require("../framework/dl/Function");
const speed = require("performance-now");
const runtime = function (_0x10e989) {
  _0x10e989 = Number(_0x10e989);
  var _0x3030ed = Math.floor(_0x10e989 / 86400);
  var _0x5cc980 = Math.floor(_0x10e989 % 86400 / 3600);
  var _0x5e4c25 = Math.floor(_0x10e989 % 3600 / 60);
  var _0x2493b6 = Math.floor(_0x10e989 % 60);
  var _0x18371c = _0x3030ed > 0 ? _0x3030ed + (_0x3030ed == 1 ? " day, " : " d, ") : '';
  var _0x405b92 = _0x5cc980 > 0 ? _0x5cc980 + (_0x5cc980 == 1 ? " hour, " : " h, ") : '';
  var _0xb1d8c1 = _0x5e4c25 > 0 ? _0x5e4c25 + (_0x5e4c25 == 1 ? " minute, " : " m, ") : '';
  var _0x4ee62c = _0x2493b6 > 0 ? _0x2493b6 + (_0x2493b6 == 1 ? " second" : " s") : '';
  return _0x18371c + _0x405b92 + _0xb1d8c1 + _0x4ee62c;
};
let timestamp = speed();
let flashspeed = (speed() - timestamp).toFixed(4);
zokou({
  'nomCom': "ping",
  'desc': "To check ping",
  'Categorie': "General",
  'reaction': '🤬',
  'fromMe': "true"
}, async (_0x1c57c2, _0x592785, _0x282835) => {
  const {
    ms: _0x177695,
    arg: _0x402724,
    repondre: _0x2c0d2b
  } = _0x282835;
  await _0x2c0d2b("> *Pong\n " + flashspeed + " ms");
});
zokou({
  'nomCom': "runtime",
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '⏳',
  'fromMe': "true"
}, async (_0x42052a, _0x2cadb5, _0x100e6b) => {
  const {
    ms: _0x419b36,
    arg: _0x3e4682,
    repondre: _0x24712f
  } = _0x100e6b;
  await _0x24712f("> *BELTAH-MD has been running for*"\n + runtime(process.uptime()) + '');
});
zokou({
  'nomCom': "uptime",
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '🕜',
  'fromMe': "true"
}, async (_0x42052a, _0x2cadb5, _0x100e6b) => {
  const {
    ms: _0x419b36,
    arg: _0x3e4682,
    repondre: _0x24712f
  } = _0x100e6b;
  await _0x24712f("> *UPTIME OF BELTAH-MD IS*"\n + runtime(process.uptime()) + '');
});
zokou({
  'nomCom': 'ss',
  'desc': "screenshots website",
  'Categorie': "General",
  'reaction': '🎥',
  'fromMe': "true"
}, async (_0xb9d834, _0x90a7c0, _0xc17ce9) => {
  const {
    ms: _0xbfd4ce,
    arg: _0x101ab2,
    repondre: _0x4aea14
  } = _0xc17ce9;
  if (!_0x101ab2 || _0x101ab2.length === 0) {
    return _0x4aea14("provide a link...");
  }
  const _0x2afa0b = _0x101ab2.join(" ");
  let _0x10a198 = "https://api.maher-zubair.tech/misc/sstab?url=" + _0x2afa0b + "&dimension=720x720";
  let _0x67c929 = await getBuffer(_0x10a198);
  await _0x90a7c0.sendMessage(_0xb9d834, {
    'image': _0x67c929
  }, {
    'caption': "*Powered by BELTAH-MD*"
  }, {
    'quoted': _0xbfd4ce
  });
});
