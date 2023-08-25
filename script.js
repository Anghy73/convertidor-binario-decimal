const conver = document.querySelector("#convert");

conver.addEventListener("click", (e) => {
  const contentBinario = document.querySelector(".binarios");

  const numberDec = document.querySelector("#numberDec");
  let valueDec = numberDec.value.split("");
  if (
    valueDec.length >= 4 ||
    Number(numberDec.value) > 255 ||
    valueDec.find((elem) => elem == "-")
  ) {
    numberDec.setAttribute("aria-invalid", true);
  } else if (numberDec.value == "") {
    numberDec.setAttribute("aria-invalid", "");
  } else {
    contentBinario.style.display = "block";
    converDecToBin(Number(valueDec.join("")));
    numberDec.setAttribute("aria-invalid", false);
  }

  setTimeout(() => {
    numberDec.setAttribute("aria-invalid", "");
  }, 1000);
});

function converDecToBin(num) {
  let numbers = [num];
  let miniBin = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      if (numbers[i] == 0) {
        break;
      }
      miniBin.push(0);
    } else {
      miniBin.push(1);
    }

    numbers.push(Math.floor(numbers[i] / 2));

    if (numbers[i] <= 0) {
      break;
    }
  }

  const goodBin = miniBin.reverse().join("").padStart(8, "0");

  const binario = document.querySelector("#numberBin");
  binario.value = goodBin;

  const contentBinarios = document.querySelector(".contentBinarios");
  const clearButton = document.querySelector(".clearButton");

  contentBinarios.innerHTML += `
  <div class="binarios__item">
  <span class="contentBinario">${goodBin}</span>
  <span> = </span>
  <span class="contentDecimal">${num}</span>
  </div>
  `;

  clearButton.addEventListener("click", () => {
    contentBinarios.innerHTML = "";
  });
}
