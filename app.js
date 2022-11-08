var btnTranslate = document.querySelector("#btn-trans");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickEventHandler()
{
  outputDiv.innerText= textInput.value;
}

btnTranslate.addEventListener("click",clickEventHandler)

