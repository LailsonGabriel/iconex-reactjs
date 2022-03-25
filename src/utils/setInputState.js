const setInputState = (e, prevState, setState) => {
  const { name, value } = e.target;

  setState({ ...prevState, [name]: value });
};

export default setInputState;
