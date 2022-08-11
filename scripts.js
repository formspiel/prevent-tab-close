const beforeUnloadListener = (event) => {
    event.preventDefault();
    return event.returnValue = "";
  };
  
  const nameInput = document.querySelector("#emailAddress");
  
  nameInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
      removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
  });

  const passwordInput = document.querySelector("#passwordInput");
  
  passwordInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      addEventListener("beforeunload", beforeUnloadListener, {capture: true});
    } else {
      removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
    }
  });
