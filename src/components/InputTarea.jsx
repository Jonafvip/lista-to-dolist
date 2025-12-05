import { motion } from "framer-motion";

export const InputTarea = ({
  handleAgregarTarea,
  handleChange,
  inputValue,
}) => {
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
      <motion.button
        className="btn btn-primary"
        onClick={handleAgregarTarea}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Agregar
      </motion.button>
    </div>
  );
};
