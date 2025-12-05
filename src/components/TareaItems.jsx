import { useState } from "react";
import { InputTarea } from "./InputTarea";
import { ListaTarea } from "./ListaTarea";

const tareaInitial = [
  {
    id: 1,
    tarea: "Tarea con react",
    completada: false,
  },
];

export const TareaItems = () => {
  const [tareaSend, setTareaSend] = useState(tareaInitial);
  const [inputValue, setinputValue] = useState("");

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleAgregarTarea = () => {
    const nuevaTarea = {
      id: Date.now(),
      tarea: inputValue,
      completada: false,
    };
    setTareaSend([...tareaSend, nuevaTarea]);
    setinputValue("");
  };

  const handleDelete = (idToDelte) => {
    const deleteTarea = tareaSend.filter((tarea) => tarea.id !== idToDelte);
    setTareaSend(deleteTarea);
  };

  const accionCompletada = (id) => {
    setTareaSend(
      tareaSend.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <>
      <InputTarea
        handleAgregarTarea={handleAgregarTarea}
        handleChange={handleChange}
        inputValue={inputValue}
      />
      <ListaTarea
        tareaSend={tareaSend}
        handleDelete={handleDelete}
        accionCompletada={accionCompletada}
      />
    </>
  );
};
