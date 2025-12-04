// import { useState } from "react";

export const InputTarea = ({
  handleAgregarTarea,
  handleChange,
  inputValue,
}) => {
  //   const [inputValue, setinputValue] = useState("");

  //   const handleChange = (e) => {
  //     setinputValue(e.target.value);
  //   };
  return (
    <div className="input-group mb-3 mx-auto p-2" style={{ width: "600px" }}>
      <span className="input-group-text" id="inputGroup-sizing-default">
        Tarea
      </span>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="btn btn-primary" onClick={handleAgregarTarea}>
        Agregar
      </button>
    </div>
  );
};
