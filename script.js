const canvas = document.getElementById("captchaCanvas");
const ctx = canvas.getContext("2d");

// Generate random captcha text
const captchaText = generateCaptchaText();

// Draw captcha image
ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = "bold 24px Arial";
ctx.fillStyle = "#666";
ctx.fillText(captchaText, 30, 35);

// Helper function to generate random captcha text
function generateCaptchaText() {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let captchaText = "";
  for (let i = 0; i < 6; i++) {
    captchaText += chars[Math.floor(Math.random() * chars.length)];
  }
  return captchaText;
}
const form = document.querySelector("form");
const captchaInput = document.getElementById("captcha");

form.addEventListener("submit", (event) => {
  if (captchaInput.value.toLowerCase() !== captchaText.toLowerCase()) {
    event.preventDefault();
    alert("Captcha validation failed. Please try again.");
  }
});