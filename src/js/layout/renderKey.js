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

export default renderKey;
