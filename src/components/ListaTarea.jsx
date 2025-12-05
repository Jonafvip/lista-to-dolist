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
        {tareaSend.map((tarea) => (
          <tr key={tarea.id}>
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
              <button onClick={() => handleDelete(tarea.id)}>🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
