const btn = document.getElementById("btn")
const inputBox = document.getElementById("inputValue")

btn.addEventListener("click", () => {
    let eye = document.querySelector(".eye")
    if (eye.classList.contains("fa-eye")) {
        inputBox.type = "text"
        eye.classList.replace("fa-eye", "fa-eye-slash")
    } else {
        eye.classList.replace("fa-eye-slash", "fa-eye")
        inputBox.type = "password"
    }
})

async function passwordStrength(password) {
    let i = 0;

    if (password.length > 7) {
        i++;
    }
    if (password.length > 16) {
        i++;
    }
    if (password.length > 25) {
        i++;
    }
    if (/[A-Z]/.test(password)) {
        i++;
    }
    if (/[a-z]/.test(password)) {
        i++;
    }
    if (/[A-Za-z0-9]/.test(password)) {
        i++;
    }
    if (/[!@#$%^&*()]/.test(password)) {
        i++;
    }
    if (/[\d+]/.test(password)) {
        i++;
    }
    // console.log(i);
    return i;
}

inputBox.addEventListener("input", async () => {
    const strength = await passwordStrength(inputBox.value);

    if (strength > 6) {
        inputBox.style.borderBottomColor = "green";
    } else if (strength > 4) {
        inputBox.style.borderBottomColor = "yellow";
    } else if (strength > 2) {
        inputBox.style.borderBottomColor = "red";
    } else {
        inputBox.style.borderBottomColor = "blue"; // Reset to default if strength is not high enough
    }
});
