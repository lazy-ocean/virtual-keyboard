import generateLayout from "./layout/layout";

const renderKey = (keyName, keyClasses, keySecondary) => {
  const key = document.createElement("div");
  const secondarySymbol = document.createElement("span");
  if (keySecondary) {
    secondarySymbol.innerHTML = keySecondary;
    secondarySymbol.classList.add("secondary");
  }
  key.innerHTML = keyName;
  key.appendChild(secondarySymbol);
  key.classList.add("key");
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
    line.map(({ main, classname, secondary, role }) =>
      role === "letter"
        ? keyboardLine.appendChild(renderKey(secondary))
        : keyboardLine.appendChild(renderKey(main, classname, secondary))
    );
    return keyboard.appendChild(keyboardLine);
  });
};

render();
