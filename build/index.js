!function o(a,l,y){function t(n,e){if(!l[n]){if(!a[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(i)return i(n,!0);throw(r=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",r}r=l[n]={exports:{}},a[n][0].call(r.exports,function(e){return t(a[n][1][e]||e)},r,r.exports,o,a,l,y)}return l[n].exports}for(var i="function"==typeof require&&require,e=0;e<y.length;e++)t(y[e]);return t}({1:[function(e,n,r){"use strict";var o,a=(o=e("./layout/layout"))&&o.__esModule?o:{default:o};function l(e,n){var r=document.createElement("div");return r.innerHTML=e,r.classList.add("key"),n&&r.classList.add("long"),r}var y;(y=document.createElement("div")).classList.add("keyboard"),document.body.appendChild(y),(0,a.default)("english").map(function(e){var n=document.createElement("div");return n.classList.add("line"),e.map(function(e){return"letter"===e.role?n.appendChild(l(e.secondary)):n.appendChild(l(e.main,e.long))}),y.appendChild(n)})},{"./layout/layout":5}],2:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={KeyBacktick:{main:"`",secondary:"~",role:"symbol"},Key1:{main:"1",secondary:"!",role:"number"},Key2:{main:"2",secondary:"@",role:"number"},Key3:{main:"3",secondary:"#",role:"number"},Key4:{main:"4",secondary:"$",role:"number"},Key5:{main:"5",secondary:"%",role:"number"},Key6:{main:"6",secondary:"&",role:"number"},Key7:{main:"7",secondary:"&",role:"number"},Key8:{main:"8",secondary:"*",role:"number"},Key9:{main:"9",secondary:"(",role:"number"},Key0:{main:"0",secondary:")",role:"number"},KeyDash:{main:"-",secondary:"_",role:"number"},KeyPlus:{main:"=",secondary:"+",role:"symbol"},Backspace:{main:"←",secondary:"",role:"functional",long:!0},Tab:{main:"Tab",secondary:"",role:"functional",long:!0},KeyQ:{main:"q",secondary:"Q",role:"letter"},KeyW:{main:"w",secondary:"W",role:"letter"},KeyE:{main:"e",secondary:"E",role:"letter"},KeyR:{main:"r",secondary:"R",role:"letter"},KeyT:{main:"t",secondary:"T",role:"letter"},KeyY:{main:"y",secondary:"Y",role:"letter"},KeyU:{main:"u",secondary:"U",role:"letter"},KeyI:{main:"i",secondary:"I",role:"letter"},KeyO:{main:"o",secondary:"O",role:"letter"},KeyP:{main:"p",secondary:"P",role:"letter"},KeyLSqBracket:{main:"[",secondary:"{",role:"symbol"},KeyRSqBracket:{main:"]",secondary:"}",role:"symbol"},Enter:{main:"⏎",secondary:"",role:"functional",long:!0},CapsLock:{main:"CapsLock",secondary:"",role:"functional",long:!0},KeyA:{main:"a",secondary:"A",role:"letter"},KeyS:{main:"s",secondary:"S",role:"letter"},KeyD:{main:"d",secondary:"D",role:"letter"},KeyF:{main:"f",secondary:"F",role:"letter"},KeyG:{main:"g",secondary:"G",role:"letter"},KeyH:{main:"h",secondary:"H",role:"letter"},KeyJ:{main:"j",secondary:"J",role:"letter"},KeyK:{main:"k",secondary:"K",role:"letter"},KeyL:{main:"l",secondary:"L",role:"letter"},KeyColon:{main:";",secondary:":",role:"symbol"},KeyApostrophe:{main:"'",secondary:'"',role:"symbol"},KeyBackSlash:{main:"\\",secondary:"|",role:"symbol"},LShift:{main:"Shift",secondary:"",role:"functional",long:!0},KeyTilda:{main:"\\",secondary:"~",role:"symbol"},KeyZ:{main:"z",secondary:"Z",role:"letter"},KeyX:{main:"x",secondary:"X",role:"letter"},KeyC:{main:"c",secondary:"C",role:"letter"},KeyV:{main:"v",secondary:"V",role:"letter"},KeyB:{main:"b",secondary:"B",role:"letter"},KeyN:{main:"n",secondary:"N",role:"letter"},KeyM:{main:"m",secondary:"M",role:"letter"},KeyComma:{main:",",secondary:"<",role:"symbol"},KeyDot:{main:".",secondary:">",role:"symbol"},KeySlash:{main:"/",secondary:"?",role:"symbol"},TopArrow:{main:"↑",secondary:"",role:"functional"},RShift:{main:"Shift",secondary:"",role:"functional",long:!0},Ctrl:{main:"Ctrl",secondary:"",role:"functional"},LOption:{main:"Option",secondary:"",role:"functional"},LCommand:{main:"Command",secondary:"",role:"functional"},Space:{main:"&nbsp;",secondary:"",role:"symbol",long:!0},RCommand:{main:"Command",secondary:"",role:"functional"},ROption:{main:"Option",secondary:"",role:"functional"},LeftArrow:{main:"←",secondary:"",role:"functional"},DownArrow:{main:"↓",secondary:"",role:"functional"},RightArrow:{main:"→",secondary:"",role:"functional"}}},{}],3:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(e("./russian")),e=a(e("./english"));function a(e){return e&&e.__esModule?e:{default:e}}e={russian:o.default,english:e.default};r.default=e},{"./english":2,"./russian":4}],4:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={KeyBacktick:{main:"ё",secondary:"Ё",role:"letter"},Key1:{main:"1",secondary:"!",role:"number"},Key2:{main:"2",secondary:'"',role:"number"},Key3:{main:"3",secondary:"№",role:"number"},Key4:{main:"4",secondary:";",role:"number"},Key5:{main:"5",secondary:"%",role:"number"},Key6:{main:"6",secondary:":",role:"number"},Key7:{main:"7",secondary:"?",role:"number"},Key8:{main:"8",secondary:"*",role:"number"},Key9:{main:"9",secondary:"(",role:"number"},Key0:{main:"0",secondary:")",role:"number"},KeyDash:{main:"-",secondary:"_",role:"number"},KeyPlus:{main:"=",secondary:"+",role:"symbol"},Backspace:{main:"←",secondary:"",role:"functional",long:!0},Tab:{main:"Tab",secondary:"",role:"functional",long:!0},KeyQ:{main:"й",secondary:"Й",role:"letter"},KeyW:{main:"ц",secondary:"Ц",role:"letter"},KeyE:{main:"у",secondary:"У",role:"letter"},KeyR:{main:"к",secondary:"К",role:"letter"},KeyT:{main:"е",secondary:"Е",role:"letter"},KeyY:{main:"н",secondary:"Н",role:"letter"},KeyU:{main:"г",secondary:"Г",role:"letter"},KeyI:{main:"ш",secondary:"Ш",role:"letter"},KeyO:{main:"щ",secondary:"Щ",role:"letter"},KeyP:{main:"з",secondary:"З",role:"letter"},KeyLSqBracket:{main:"х",secondary:"Х",role:"letter"},KeyRSqBracket:{main:"ъ",secondary:"Ъ",role:"letter"},Enter:{main:"⏎",secondary:"",role:"functional",long:!0},CapsLock:{main:"CapsLock",secondary:"",role:"functional",long:!0},KeyA:{main:"ф",secondary:"Ф",role:"letter"},KeyS:{main:"ы",secondary:"Ы",role:"letter"},KeyD:{main:"в",secondary:"В",role:"letter"},KeyF:{main:"а",secondary:"А",role:"letter"},KeyG:{main:"п",secondary:"П",role:"letter"},KeyH:{main:"р",secondary:"Р",role:"letter"},KeyJ:{main:"о",secondary:"О",role:"letter"},KeyK:{main:"л",secondary:"Л",role:"letter"},KeyL:{main:"д",secondary:"Д",role:"letter"},KeyColon:{main:"ж",secondary:"Ж",role:"letter"},KeyApostrophe:{main:"э",secondary:"Э",role:"letter"},KeyBackSlash:{main:"\\",secondary:"/",role:"symbol"},LShift:{main:"Shift",secondary:"",role:"functional",long:!0},KeyTilda:{main:"ё",secondary:"Ё",role:"letter"},KeyZ:{main:"я",secondary:"Я",role:"letter"},KeyX:{main:"ч",secondary:"Ч",role:"letter"},KeyC:{main:"с",secondary:"С",role:"letter"},KeyV:{main:"м",secondary:"М",role:"letter"},KeyB:{main:"и",secondary:"И",role:"letter"},KeyN:{main:"т",secondary:"Т",role:"letter"},KeyM:{main:"ь",secondary:"Ь",role:"letter"},KeyComma:{main:"б",secondary:"Б",role:"letter"},KeyDot:{main:"ю",secondary:"Ю",role:"letter"},KeySlash:{main:".",secondary:",",role:"symbol"},TopArrow:{main:"↑",secondary:"",role:"functional"},RShift:{main:"Shift",secondary:"",role:"functional",long:!0},Ctrl:{main:"Ctrl",secondary:"",role:"functional"},LOption:{main:"Option",secondary:"",role:"functional"},LCommand:{main:"Command",secondary:"",role:"functional"},Space:{main:"&nbsp;",secondary:"",role:"symbol",long:!0},RCommand:{main:"Command",secondary:"",role:"functional"},ROption:{main:"Option",secondary:"",role:"functional"},LeftArrow:{main:"←",secondary:"",role:"functional"},DownArrow:{main:"↓",secondary:"",role:"functional"},RightArrow:{main:"→",secondary:"",role:"functional"}}},{}],5:[function(e,n,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,a=(o=e("./lang/options"))&&o.__esModule?o:{default:o};var l=[["KeyBacktick","Key1","Key2","Key3","Key4","Key5","Key6","Key7","Key8","Key9","Key0","KeyDash","KeyPlus","Backspace"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","KeyLSqBracket","KeyRSqBracket","Enter"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","KeyColon","KeyApostrophe","KeyBackSlash"],["LShift","KeyTilda","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","KeyComma","KeyDot","KeySlash","TopArrow","RShift"],["Ctrl","LOption","LCommand","Space","RCommand","ROption","LeftArrow","DownArrow","RightArrow"]];r.default=function(e){var n=a.default[e];return l.map(function(e){return e.map(function(e){return n[e]})})}},{"./lang/options":3}]},{},[1]);