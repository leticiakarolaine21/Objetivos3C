const botoes = document.querySelectorAll(".botao");

for(let i=0;i  <botoes.length;i++){
     botoes[i.onclick = function(){

             for(let j=0;j<botoes.leght;j++){
                botoes[j].classList.remove("Ativo");
            }
            botoes[i].classList.add("ativo");
        }
    }
    const contadores = document.querySelectorAll(“.contador”);
    const tempoObjetivo1 = new Date(“2024-10-05T00:00:00”);
    contadores[0].textContent = tempoObjetivo1;
