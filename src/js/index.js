import generateLayout from "./layout/layout";
import options from "./layout/lang/options";
import toggleClass from "./utils";
import renderKey from "./layout/renderKey";

const STATE = {
  language: localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "english",
  capslock: false,
  shift: false,
  cmd: false,
  alt: false,
  lines: 1,
  cursor: 0,
  linelengthlimit: 110,
};

const renderKeyboard = () => {
  if (document.querySelector(".keyboard"))
    document.querySelector(".keyboard").remove();
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  document.body.appendChild(keyboard);
  const layout = generateLayout(STATE.language);
  layout.map((line) => {
    const keyboardLine = document.createElement("div");
    keyboardLine.classList.add("line");
    line.map(({ main, classname, secondary, role, code }) =>
      role === "letter"
        ? keyboardLine.appendChild(renderKey(secondary, code))
        : keyboardLine.appendChild(renderKey(main, code, classname, secondary))
    );
    return keyboard.appendChild(keyboardLine);
  });
};

const renderPageElements = () => {
  const header = document.createElement("h1");
  header.innerHTML = "Mac Virtual Keyboard";
  document.body.appendChild(header);

  const info = document.createElement("p");
  info.innerHTML = "Click <i>Option + Cmd</i> to change language";
  info.classList.add("info");
  document.body.appendChild(info);

  const textbox = document.createElement("textarea");
  textbox.classList.add("textbox");
  textbox.placeholder = "Try typing something";
  document.body.appendChild(textbox);

  const handleEvent = (code) => {
    const { secondary, main, role } = options[STATE.language][code];
    const stringStart = textbox.value.slice(0, STATE.cursor);
    const stringEnd = textbox.value.slice(STATE.cursor, textbox.value.length);
    if (role !== "functional") {
      STATE.cursor += 1;
      // Workaround for manual line breaks for managing up and down arrow controls
      // TODO: find a simple way to know how long every line is. cols attribute on textbox is not really working
      if (STATE.cursor % STATE.linelengthlimit === 0) {
        textbox.innerHTML += "\r";
        STATE.lines += 1;
        STATE.cursor += 1;
      }
      textbox.innerHTML =
        STATE.shift || STATE.capslock
          ? `${stringStart}${secondary}${stringEnd}`
          : `${stringStart}${main}${stringEnd}`;
    } else {
      const lines = textbox.innerHTML.split(/\r?\n|\r/g);
      const currentLine = lines[STATE.lines - 1].length;
      switch (code) {
        case "ArrowRight":
          STATE.cursor + 1 > textbox.innerHTML.length
            ? (STATE.cursor = textbox.innerHTML.length)
            : (STATE.cursor += 1);
          break;
        case "ArrowLeft":
          STATE.cursor > 0 ? (STATE.cursor -= 1) : (STATE.cursor = 0);
          break;
        case "ArrowUp":
          if (lines[STATE.lines - 2]) {
            STATE.cursor =
              currentLine > lines[STATE.lines - 2].length
                ? STATE.cursor - currentLine - 1
                : STATE.cursor - lines[STATE.lines - 2].length - 1;
            STATE.lines -= 1;
          }
          break;
        case "ArrowDown":
          if (lines[STATE.lines]) {
            STATE.cursor =
              currentLine > lines[STATE.lines].length
                ? STATE.cursor + currentLine + 1
                : STATE.cursor + lines[STATE.lines].length + 1;
            STATE.lines += 1;
          }
          break;
        case "CapsLock":
          STATE.capslock = false;
          break;
        case "Tab":
          textbox.innerHTML = `${stringStart}\t${stringEnd}`;
          STATE.cursor += 1;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          STATE.shift = false;
          break;
        case "Backspace":
          textbox.innerHTML = textbox.innerHTML.slice(0, -1);
          break;
        case "Enter":
          textbox.innerHTML = `${stringStart}\r${stringEnd}`;
          STATE.lines += 1;
          STATE.cursor += 1;
          break;
        default:
          break;
      }
    }
    textbox.setSelectionRange(STATE.cursor, STATE.cursor);
    const active = document.getElementById(code);
    active.classList.remove("active");
  };

  document.addEventListener(
    "keydown",
    (event) => {
      event.preventDefault();
      const { code } = event;
      textbox.focus();
      switch (code) {
        case "CapsLock":
          STATE.capslock = true;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          STATE.shift = true;
          break;
        case "MetaLeft":
        case "MetaRight":
          STATE.cmd = true;
          break;
        case "AltLeft":
        case "AltRight":
          STATE.alt = true;
          break;
        default:
          break;
      }
      if (STATE.alt === true && STATE.cmd === true) {
        STATE.language = STATE.language === "english" ? "russian" : "english";
        STATE.alt = false;
        STATE.cmd = false;
        localStorage.setItem("language", STATE.language);
        renderKeyboard();
      }
      const active = document.getElementById(code);
      active.classList.add("active");
    },
    false
  );
  document.addEventListener(
    "keyup",
    (event) => {
      const { code } = event;
      handleEvent(code);
    },
    false
  );

  // CLICK EVENT WITH CUSTOM STICKY CAPSLOCK & SHIFT
  document.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      textbox.focus();
      if (e.target.id === "CapsLock") {
        STATE.capslock = !STATE.capslock;
        toggleClass(e.target.id);
      } else if (e.target.id === "ShiftLeft" || e.target.id === "ShiftRight") {
        STATE.shift = !STATE.shift;
        toggleClass(e.target.id);
      } else handleEvent(e.target.id);
    },
    false
  );
};

renderPageElements();
renderKeyboard();
