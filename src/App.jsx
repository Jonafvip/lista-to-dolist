import { InputTarea } from "./components/InputTarea";
import { ListaTarea } from "./components/ListaTarea";
import { TareaItems } from "./components/TareaItems";

function App() {
  return (
    <>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Lista de Tarea <span className="text-primary">TO-DOLIST</span>
      </h1>
      <TareaItems />
    </>
  );
}

export default App;
