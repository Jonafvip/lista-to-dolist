import { motion } from "framer-motion";
import { TareaItems } from "./components/TareaItems";

function App() {
  return (
    <>
      <motion.h1
        style={{ color: "white", textAlign: "center" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Lista de Tarea <span className="text-primary">TO-DOLIST</span>
      </motion.h1>
      <TareaItems />
    </>
  );
}

export default App;
