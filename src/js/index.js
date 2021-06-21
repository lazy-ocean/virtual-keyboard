import generateLayout from "./layout/layout";

const renderKey = (keyName, long) => {
  const key = document.createElement("div");
  key.innerHTML = keyName;
  key.classList.add("key");
  if (long) key.classList.add("long");
  return key;
};

// testing purposes
const render = () => {
  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  document.body.appendChild(keyboard);
  const layout = generateLayout("english");
  layout.map((line) => {
    const keyboardLine = document.createElement("div");
    keyboardLine.classList.add("line");
    line.map((key) =>
      key.role === "letter"
        ? keyboardLine.appendChild(renderKey(key.secondary))
        : keyboardLine.appendChild(renderKey(key.main, key.long))
    );
    return keyboard.appendChild(keyboardLine);
  });
};

render();
