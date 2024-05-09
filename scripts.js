const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Initial state
result.innerText = "No calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation for empty inputs
  if (dividend.trim() === "" || divider.trim() === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Validation for non-numeric inputs
  if (isNaN(dividend) || isNaN(divider)) {
    console.error("Non-numeric value provided");
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
      return;
  }

  // Validation for division by zero
  if (parseFloat(divider) === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero attempted");
    return;
  }


  const resultValue = dividend / divider;

  // Display whole number result
  result.innerText = Math.trunc(resultValue);
});
