import { DEFAULT_ERROR_MESSAGE } from "./constants.js";

export function handleError(msg = DEFAULT_ERROR_MESSAGE) {
  /*    
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  */
  const alertContainer = document.createElement("div");
  alertContainer.className = "alert alert-warning alert-dismisible fade show";
  alertContainer.setAttribute("role", "alert");
  alertContainer.innerHTML = `
  <strong>${msg}</strong>  
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
      `;
  document.body.prepend(alertContainer);
}

export function handleCustomError(err) {
  handleError(err.message);
}
