import { Button } from "react-bootstrap";

function ButtonReusable(props) {
  return <Button {...props}>{props.children}</Button>;
}

export default ButtonReusable;
