export const InputTarea = () => {
  return (
    <div class="input-group mb-3 mx-auto p-2" style={{ width: "600px" }}>
      <span class="input-group-text" id="inputGroup-sizing-default">
        Tarea
      </span>
      <input type="text" class="form-control" />
      <button className="btn btn-primary">Agregar</button>
    </div>
  );
};
