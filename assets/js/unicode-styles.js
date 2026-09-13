/* Shared Unicode gothic/blackletter mappings for MedievalType
   All non-ASCII stored as code points to avoid file-encoding corruption. */
window.MT = window.MT || {};

function mtRange(start, len) {
  let s = '';
  for (let i = 0; i < len; i++) s += String.fromCodePoint(start + i);
  return s;
}

function mtMap(cps) {
  return cps.map(c => String.fromCodePoint(c)).join('');
}

/* Fraktur: Mathematical Alphanumeric Symbols, with Letterlike fallbacks for C,H,I,R,Z */
const FRAKTUR_UP = mtMap([
  0x1D504,0x1D505,0x212D,0x1D507,0x1D508,0x1D509,0x1D50A,0x210C,
  0x2111,0x1D50D,0x1D50E,0x1D50F,0x1D510,0x1D511,0x1D512,0x1D513,
  0x1D514,0x211C,0x1D516,0x1D517,0x1D518,0x1D519,0x1D51A,0x1D51B,
  0x1D51C,0x2128
]);
const FRAKTUR_LO = mtRange(0x1D51E, 26);

const BOLD_FRAKTUR_UP = mtRange(0x1D56C, 26);
const BOLD_FRAKTUR_LO = mtRange(0x1D586, 26);

/* Script / bold script with Letterlike fallbacks where needed */
const SCRIPT_UP = mtMap([
  0x1D49C,0x212C,0x1D49E,0x1D49F,0x2130,0x2131,0x1D4A2,0x210B,
  0x2110,0x1D4A5,0x1D4A6,0x2112,0x2133,0x1D4A9,0x1D4AA,0x1D4AB,
  0x1D4AC,0x211B,0x1D4AE,0x1D4AF,0x1D4B0,0x1D4B1,0x1D4B2,0x1D4B3,
  0x1D4B4,0x1D4B5
]);
const SCRIPT_LO = mtMap([
  0x1D4B6,0x1D4B7,0x1D4B8,0x1D4B9,0x212F,0x1D4BB,0x210A,
  0x1D4BD,0x1D4BE,0x1D4BF,0x1D4C0,0x1D4C1,0x1D4C2,0x1D4C3,
  0x2134,0x1D4C5,0x1D4C6,0x1D4C7,0x1D4C8,0x1D4C9,0x1D4CA,
  0x1D4CB,0x1D4CC,0x1D4CD,0x1D4CE,0x1D4CF
]);

const BSCRIPT_UP = mtRange(0x1D4D0, 26);
const BSCRIPT_LO = mtRange(0x1D4EA, 26);

const DOUBLE_UP = mtMap([
  0x1D538,0x1D539,0x2102,0x1D53B,0x1D53C,0x1D53D,0x1D53E,0x210D,
  0x1D540,0x1D541,0x1D542,0x1D543,0x1D544,0x2115,0x1D546,0x2119,
  0x211A,0x211D,0x1D54A,0x1D54B,0x1D54C,0x1D54D,0x1D54E,0x1D54F,
  0x1D550,0x2124
]);
const DOUBLE_LO = mtRange(0x1D552, 26);

const BOLD_SANS_UP = mtRange(0x1D5D4, 26);
const BOLD_SANS_LO = mtRange(0x1D5EE, 26);
const BOLD_SANS_DIGITS = mtRange(0x1D7EC, 10);

const MONO_UP = mtRange(0x1D670, 26);
const MONO_LO = mtRange(0x1D68A, 26);
const MONO_DIGITS = mtRange(0x1D7F6, 10);

MT.STYLES = [
  { id:'gothic', name:'Gothic', note:'Classic blackletter', compat:'med',
    up:FRAKTUR_UP, lo:FRAKTUR_LO },
  { id:'boldgothic', name:'Bold Fraktur', note:'Heavy blackletter', compat:'med',
    up:BOLD_FRAKTUR_UP, lo:BOLD_FRAKTUR_LO },
  { id:'metal', name:'Metal', note:'Dense Fraktur with marks', compat:'med',
    up:BOLD_FRAKTUR_UP, lo:BOLD_FRAKTUR_LO, pre:'\u2726', post:'\u2726' },
  { id:'grave', name:'Grunge', note:'Struck-through gothic', compat:'med',
    up:FRAKTUR_UP, lo:FRAKTUR_LO, strike:true },
  { id:'script', name:'Dark Cursive', note:'Formal script cousin', compat:'med',
    up:SCRIPT_UP, lo:SCRIPT_LO },
  { id:'bscript', name:'Royal Script', note:'Bold calligraphic', compat:'med',
    up:BSCRIPT_UP, lo:BSCRIPT_LO },
  { id:'double', name:'Double Struck', note:'Outlined display', compat:'med',
    up:DOUBLE_UP, lo:DOUBLE_LO },
  { id:'mono', name:'Monospace', note:'Safest - includes digits', compat:'hi',
    up:MONO_UP, lo:MONO_LO, digits:MONO_DIGITS },
  { id:'bold', name:'Bold Sans', note:'Near-universal rendering', compat:'hi',
    up:BOLD_SANS_UP, lo:BOLD_SANS_LO, digits:BOLD_SANS_DIGITS },
];

MT.ORNAMENTS = ['\u269C', '\u271D', '\u2620', '\u2694', '\u2726', '\u2767'];
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
  if (style.strike) {
    out = [...out].map(c => /\s/.test(c) ? c : (c + '\u0338')).join('');
  }
  if (ornIndex != null && ornIndex >= 0) {
    const o = MT.ORNAMENTS[ornIndex % MT.ORNAMENTS.length];
    out = o + ' ' + out + ' ' + o;
  }
  if (style.pre) out = style.pre + out + style.post;
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
