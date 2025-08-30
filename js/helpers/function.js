export function showMessage(type, text) {
  const successMsg = document.querySelector("#successMsg");
  const errorMsg = document.querySelector("#errorMsg");
  if (type === "success") {
    successMsg.textContent = text;
    successMsg.style.display = "block";
  } else {
    errorMsg.textContent = text;
    errorMsg.style.display = "block";
  }
}
