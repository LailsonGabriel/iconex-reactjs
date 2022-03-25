function ButtonReusable(props) {
  return <button {...props}>{props.children}</button>;
}

export default ButtonReusable;
