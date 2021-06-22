import generateLayout from "./layout/layout";

const pressed = [];

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

// testing purposes
const render = () => {
  const header = document.createElement("h1");
  header.innerHTML = "Mac Virtual Keyboard";
  document.body.appendChild(header);

  const textbox = document.createElement("textarea");
  textbox.classList.add("textbox");
  const placeholder = document.createElement("p");
  placeholder.classList.add("textbox--placeholder");
  placeholder.innerHTML = "Try typing something!";
  textbox.appendChild(placeholder);
  document.body.appendChild(textbox);

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  document.body.appendChild(keyboard);
  const layout = generateLayout("russian");
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
      const { code } = event;
      const active = document.getElementById(code);
      active.classList.add("active");
    },
    false
  );
  document.addEventListener(
    "keyup",
    (event) => {
      const { code } = event;
      const active = document.getElementById(code);
      active.classList.remove("active");
    },
    false
  );
};

render();
