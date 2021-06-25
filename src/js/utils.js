const toggleClass = (id) => {
  const item = document.getElementById(id);
  item.classList.contains("active")
    ? item.classList.remove("active")
    : item.classList.add("active");
};

export default toggleClass;
