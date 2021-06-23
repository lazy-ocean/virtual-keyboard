/* eslint-disable no-unused-expressions */
import generateLayout from "./layout/layout";
import options from "./layout/lang/options";

const renderKey = (keyName, code, keyClasses, keySecondary) => {
  const key = document.createElement("div");
  const secondarySymbol = document.createElement("span");
  if (keySecondary) {
    secondarySymbol.innerHTML = keySecondary;
    secondarySymbol.classList.add("secondary");
  }
  key.innerHTML = keyName;
  key.appendChild(secondarySymbol);
  key.classList.add("key");
  key.id = code;
  if (keyClasses) keyClasses.forEach((keyClass) => key.classList.add(keyClass));
  return key;
};

const STATE = {
  language: "russian",
  capslock: false,
  shift: false,
  lines: 1,
  cursor: 0,
  linelength: 110,
};

// testing purposes
const render = () => {
  const header = document.createElement("h1");
  header.innerHTML = "Mac Virtual Keyboard";
  document.body.appendChild(header);

  const textbox = document.createElement("textarea");
  textbox.classList.add("textbox");
  textbox.placeholder = "Try typing something";
  document.body.appendChild(textbox);

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

  document.addEventListener(
    "keydown",
    (event) => {
      event.preventDefault();
      const { code } = event;
      textbox.focus();
      if (code === "CapsLock")
        STATE.capslock === true ? (STATE.capslock = false) : (STATE.capslock = true);
      if (code === "ShiftLeft" || code === "ShiftRight") STATE.shift = true;
      const active = document.getElementById(code);
      active.classList.add("active");
    },
    false
  );
  document.addEventListener(
    "keyup",
    (event) => {
      const { code } = event;
      const { secondary, main, role } = options[STATE.language][code];
      if (role !== "functional") {
        STATE.cursor += 1;
        // Workaround for manual line breaks for managing up and down arrow controls
        // TODO: find a simple way to learn how long every line is. cols attribute is not really working
        if (STATE.cursor % STATE.linelength === 0) {
          textbox.innerHTML += "\r";
          STATE.lines += 1;
          STATE.cursor += 1;
        }
        textbox.innerHTML += STATE.shift ? secondary : main;
      } else {
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
            STATE.cursor -= STATE.linelength;
            break;
          case "ArrowDown":
            STATE.cursor + STATE.linelength > textbox.innerHTML.length
              ? (STATE.cursor = textbox.innerHTML.length)
              : (STATE.cursor += STATE.linelength);
            break;
          default:
            break;
        }
      }
      if (code === "ShiftLeft" || code === "ShiftRight") STATE.shift = false;
      textbox.setSelectionRange(STATE.cursor, STATE.cursor);
      const active = document.getElementById(code);
      active.classList.remove("active");
    },
    false
  );
};

render();
