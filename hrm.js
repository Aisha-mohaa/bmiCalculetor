

const heightInput = document.querySelector("#heightInput");
const weightInput = document.querySelector("#weightInput");
const btncalc = document.querySelector("#btncalc");
const btnrest = document.querySelector("#btnrest");
const result = document.querySelector("#result");

    btncalc.addEventListener("click", () => {
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);

      if (!height || !weight || height <= 0 || weight <= 0) {
        result.textContent = "❌ tira sax ah gali";
        return;
      }

      const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
      let message = "";

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
    message = "please enter without dott . 👈";
    encouragement = "Start again, stay strong 🌟";
  }

  result.textContent = `✅ BMI: ${bmi} (${message})\n${encouragement}`;
});

    btnrest.addEventListener("click", () => {
      heightInput.value = "";
      weightInput.value = "";
      result.textContent = "";
    });
 

