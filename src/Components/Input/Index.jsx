import { Form } from "react-bootstrap";

function InputReusable(props) {
  return <Form.Control {...props} className='w-25 mt-2 mb-2' />;
}

export default InputReusable;
