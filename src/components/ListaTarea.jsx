export const ListaTarea = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <span>🗑️</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
