import { InputTarea } from "./components/InputTarea";
import { ListaTarea } from "./components/ListaTarea";

function App() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Lista de Tarea TO-DOLIST
      </h1>
      <InputTarea />
      <ListaTarea />
    </>
  );
}

export default App;
