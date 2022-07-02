const inputRef = document.querySelector("#validation-input");
const checkLength = Number(inputRef.dataset.length);

inputRef.addEventListener("input", onFocusInput);

function onFocusInput(event) {
    if (event.currentTarget.value.length !== 0) {
        inputRef.style.outline = "none";

        if (event.currentTarget.value.length !== checkLength) {
            inputRef.classList.remove("valid");
            inputRef.classList.add("invalid");
      
        } else if (event.currentTarget.value.length === checkLength) {
            inputRef.classList.remove("invalid");
            inputRef.classList.add("valid");
        }
    } else {
        inputRef.style.outline = "";
        inputRef.classList.remove("invalid");
        inputRef.classList.remove("valid");
    }
}