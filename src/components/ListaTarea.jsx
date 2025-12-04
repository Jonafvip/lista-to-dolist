export const ListaTarea = ({ tareaSend }) => {
  return (
    <table
      className="table table-striped-columns mx-auto p-2"
      style={{ width: "800px", textAlign: "center" }}
    >
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Tarea</th>
          <th scope="col">Completado</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {tareaSend.map((tarea) => (
          <tr key={tarea.id}>
            <th scope="row">{tarea.id}</th>
            <td>{tarea.tarea}</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <span>🗑️</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
