// Exercise: Choose a number, and the corresponding month for that number will be displayed.

month = parseInt(prompt("Escolha um número que represente algum mês."));
switch (month) {
  case 1:
    alert("O mês escolhido foi Janeiro.");
    break;
  case 2:
    alert("O mês escolhido foi Fevereiro.");
    break;
  case 3:
    alert("O mês escolhido foi Março.");
    break;
  case 4:
    alert("O mês escolhido foi Abril.");
    break;
  case 5:
    alert("O mês escolhido foi Maio.");
    break;
  case 6:
    alert("O mês escolhido foi Junho.");
    break;
  case 7:
    alert("O mês escolhido foi Julho.");
    break;
  case 8:
    alert("O mês escolhido foi Agosto.");
    break;
  case 9:
    alert("O mês escolhido foi Setembro.");
    break;
  case 10:
    alert("O mês escolhido foi Outubro.");
    break;
  case 11:
    alert("O mês escolhido foi Novembro.");
    break;
  case 12:
    alert("O mês escolhido foi Dezembro.");
    break;
  case month < 1 || month > 12:
    alert("Mês Inválido.");
    break;
  default:
    alert("Mês Inválido.");
    break;
}
