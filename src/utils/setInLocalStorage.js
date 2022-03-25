const setInLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export default setInLocalStorage;
