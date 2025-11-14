const btn = document.getElementById("calcBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  const birthInput = document.getElementById("birthdate").value;

  if (!birthInput) {
    output.textContent = "Please select your birthdate.";
    return;
  }

  const birthDate = new Date(birthInput);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  output.innerHTML = `
    <strong>${years}</strong> years  
    <strong>${months}</strong> months  
    <strong>${days}</strong> days
  `;
});
