function pegarValores() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
   }
   function somar() {
    const { num1, num2 } = pegarValores();
    document.getElementById("resultado").textContent = `Resultado: ${num1 + num2}`;
   }
   function subtrair() {
    const { num1, num2 } = pegarValores();
    document.getElementById("resultado").textContent = `Resultado: ${num1 - num2}`;
   }
   function multiplicar() {
    const { num1, num2 } = pegarValores();
    document.getElementById("resultado").textContent = `Resultado: ${num1 * num2}`;
   }
   function dividir() {
    const { num1, num2 } = pegarValores();
    if (num2 === 0) {
      document.getElementById("resultado").textContent = "Não é possível dividir por zero.";
    } else {
      document.getElementById("resultado").textContent = `Resultado: ${num1 / num2}`;
    }
   }