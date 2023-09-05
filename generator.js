const generatePassword = () => {
  const length = 12; // Change this to set the desired password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById("password").value = password;
};
document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  passwordInput.blur();
  alert("Password copied to clipboard");
});

// Initial password generation
generatePassword();
