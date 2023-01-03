const beforeUnloadListener = (event) => {
	event.preventDefault();
	return event.returnValue = "";
};

// Get the Input for email 

const nameInput = document.querySelector("#emailAddress");

// Prevent the tab to close if the input is empty

nameInput.addEventListener("input", (event) => {
	if (event.target.value !== "") {
		addEventListener("beforeunload", beforeUnloadListener, {capture: true});
	} else {
		removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
	}
});

// Get the Input for password

const passwordInput = document.querySelector("#passwordInput");

// Prevent the tab to close if the input is empty

passwordInput.addEventListener("input", (event) => {
	if (event.target.value !== "") {
		addEventListener("beforeunload", beforeUnloadListener, {capture: true});
	} else {
		removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
	}
});
