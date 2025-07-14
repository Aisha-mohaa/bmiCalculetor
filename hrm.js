const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const btncalc = document.querySelector("#btncalc");
const btnrest = document.querySelector("#btnrest");
const result = document.querySelector("#result");

btncalc.addEventListener("click", () => {
  const height = parseFloat(heightInput.value); // height in meters
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "❌ Geli tiro sax ah";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1); // 💥 No need to divide by 100
  let message = "";
  let encouragement = "";

  if (bmi < 18.5) {
    message = "Underweight";
    encouragement = "Eat healthy & gain strength 💪";
  } else if (bmi < 25) {
    message = "Normal";
    encouragement = "Great! Keep it up! 🎉";
  } else if (bmi < 30) {
    message = "Overweight";
    encouragement = "You got this! Stay active 🏃";
  } else {
    message = "Obese";
    encouragement = "Start small, stay strong 🌟";
  }

  result.textContent = `✅ BMI: ${bmi} (${message})\n${encouragement}`;
});

btnrest.addEventListener("click", () => {
  heightInput.value = "";
  weightInput.value = "";
  result.textContent = "";
});
