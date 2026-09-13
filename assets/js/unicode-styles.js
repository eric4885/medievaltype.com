/* Shared Unicode gothic/blackletter mappings for MedievalType */
window.MT = window.MT || {};

MT.STYLES = [
  { id:'gothic', name:'Gothic', note:'Classic blackletter', compat:'med',
    up:'𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',
    lo:'𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷' },
  { id:'boldgothic', name:'Bold Fraktur', note:'Heavy blackletter', compat:'med',
    up:'𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
    lo:'𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟' },
  { id:'metal', name:'Metal', note:'Dense Fraktur with marks', compat:'med',
    up:'𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
    lo:'𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟', pre:'⛧', post:'⛧' },
  { id:'grave', name:'Grunge', note:'Struck-through gothic', compat:'med',
    up:'𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',
    lo:'𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷', strike:true },
  { id:'script', name:'Dark Cursive', note:'Formal script cousin', compat:'med',
    up:'𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
    lo:'𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏' },
  { id:'bscript', name:'Royal Script', note:'Bold calligraphic', compat:'med',
    up:'𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩',
    lo:'𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃' },
  { id:'double', name:'Double Struck', note:'Outlined display', compat:'med',
    up:'𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
    lo:'𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫' },
  { id:'mono', name:'Monospace', note:'Safest · includes digits', compat:'hi',
    up:'𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
    lo:'𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
    digits:'𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿' },
  { id:'bold', name:'Bold Sans', note:'Near-universal rendering', compat:'hi',
    up:'𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
    lo:'𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
    digits:'𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵' },
];

MT.ORNAMENTS = ['⚜','✝','☠','⚔','✦','❧'];
MT.COMPAT_LABEL = { hi:['high','t-hi'], med:['medium','t-md'], lo:['low','t-lo'] };

const _A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const _a = 'abcdefghijklmnopqrstuvwxyz'.split('');
const _D = '0123456789'.split('');

MT.mapChar = function(ch, style){
  let i = _A.indexOf(ch);
  if (i > -1) return [...style.up][i] || ch;
  i = _a.indexOf(ch);
  if (i > -1) return [...style.lo][i] || ch;
  if (style.digits) {
    i = _D.indexOf(ch);
    if (i > -1) return [...style.digits][i] || ch;
  }
  return ch;
};

MT.convert = function(text, style, ornIndex){
  let out = [...text].map(c => MT.mapChar(c, style)).join('');
  if (style.strike) out = [...out].map(c => c + '̸').join('');
  if (ornIndex != null && ornIndex >= 0) {
    const o = MT.ORNAMENTS[ornIndex % MT.ORNAMENTS.length];
    out = `${o} ${out} ${o}`;
  }
  if (style.pre) out = `${style.pre}${out}${style.post}`;
  return out;
};

MT.copyText = async function(str){
  try {
    await navigator.clipboard.writeText(str);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = str;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
};
