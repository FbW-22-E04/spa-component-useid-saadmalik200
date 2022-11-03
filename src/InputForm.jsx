import { useId } from "react";

function InputForm(props) {
  // const id = "myId";

  const id = useId();
  console.log(id);
  return (
    <div className="inputForm">
      <label htmlFor={id}>{props.label}</label>
      <input id={id} type={props.type} />
    </div>
  );
}

export default InputForm;
