const apikey = '1DAFB70773WSV5PV';


function adicionaOuRemove() {
  let dados = document.getElementsByTagName("li")
  if(dados == null) {
    getData(input.value)
  } else {
    for(index = dados.length - 1; index >= 0; index -= 1){
      dados[index].remove()
    }
    getData(input.value)
  }
}

async function getData(symbol) {
 
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${apikey}`;
  const response = await fetch(url);
  const data = await response.json();
  const valores = data["Time Series (Daily)"];
  const dataArray = Object.keys(valores)
  const ul = document.getElementById("data")
  const ulAbertura = document.getElementById("abertura")
  const ulFechamento = document.getElementById("fechamento")
  const ulMaxima = document.getElementById("maxima")
  const ulMinima = document.getElementById("minima")

  for (let index = 0; index < inputDias.value; index += 1) {
    const li = document.createElement("li")
    li.innerText = `Data: ${dataArray[index]}`;
    li.className = "dados"
    ul.appendChild(li)
  }
  for(let index = 0; index < inputDias.value; index +=1) {
    const li = document.createElement("li")
    li.innerText = `Abertura: ${valores[dataArray[index]]["1. open"]}`;
    li.className = "dados"
    ulAbertura.appendChild(li)
  }
  for(let index = 0; index < inputDias.value; index +=1) {
    const li = document.createElement("li")
    li.innerText = `Fechamento: ${valores[dataArray[index]]["4. close"]}`;
    li.className = "dados"
    ulFechamento.appendChild(li)
  }
  for(let index = 0; index < inputDias.value; index +=1) {
    const li = document.createElement("li")
    li.innerText = `Máxima: ${valores[dataArray[index]]["2. high"]}`;
    li.className = "dados"
    ulMaxima.appendChild(li)
  }
  for(let index = 0; index < inputDias.value; index +=1) {
    const li = document.createElement("li")
    li.innerText = `Mínima: ${valores[dataArray[index]]["3. low"]}`;
    li.className = "dados"
    ulMinima.appendChild(li)
  }
}

