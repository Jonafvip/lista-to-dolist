import { motion, AnimatePresence } from "framer-motion";

export const ListaTarea = ({ tareaSend, handleDelete, accionCompletada }) => {
  return (
    <table
      className="table table-striped-columns mx-auto p-2"
      style={{ width: "800px", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th scope="col">Completado</th>
          <th scope="col">Tarea</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <AnimatePresence>
          {tareaSend.map((tarea) => (
            <motion.tr
              key={tarea.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <td>
                <input
                  type="checkbox"
                  onChange={() => accionCompletada(tarea.id)}
                />
              </td>
              <td
                style={{
                  textDecoration: tarea.completada ? "line-through" : "none",
                }}
              >
                {tarea.tarea}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(tarea.id)}
                  className="btn btn-danger"
                >
                  🗑️
                </button>
              </td>
            </motion.tr>
          ))}
        </AnimatePresence>
      </tbody>
    </table>
  );
};
