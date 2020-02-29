import React from "react";

const Formulario = () => {
  return (
    <form>
      <div class="form-group row">
        <label htmlfor="ciudad" class="col-sm-2 col-form-label">
          Ciudad:
        </label>

        <div class="col-sm-10">
          <input
            type="text"
            readonly
            name="ciudad"
            class="form-control-plaintext"
            id="ciudad"
          />
        </div>
        <label htmlfor="pais" class="col-sm-2 col-form-label">
          País:
        </label>
        <select id="inputState" class="form-control">
          <option selected>--Seleccione un país --</option>
          <option>...</option>
        </select>
      </div>
    </form>
  );
};
export default Formulario;
