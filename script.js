let pontos = 0;
let score = 0;
let atual = 0;
let fonte = 16;

/* TROCAR TELA */
function abrirTela(id){
  document.querySelectorAll(".tela")
  .forEach(t => t.classList.remove("ativa"));

  document.getElementById(id)
  .classList.add("ativa");
}

/* MODO ESCURO */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* FONTE */
function aumentarFonte(){
  fonte += 2;
  document.body.style.fontSize = fonte + "px";
}

function diminuirFonte(){
  fonte -= 2;
  document.body.style.fontSize = fonte + "px";
}

/* PLANTIO */
document.getElementById("campo").onclick = () => {

  pontos += 10;
  document.getElementById("pontos").innerText = pontos;

  let arvore = document.createElement("div");
  arvore.classList.add("arvore");
  arvore.innerHTML = "🌳";

  arvore.style.left = Math.random()*90 + "%";
  arvore.style.top = Math.random()*80 + "%";

  document.getElementById("campo").appendChild(arvore);
};

/* QUIZ */
const perguntas = [

{
q:"O que é agrofloresta?",
o:["Sistema sustentável","Desmatamento","Fogo"],
a:0
},

{
q:"Sustentabilidade é:",
o:["Cuidar do futuro","Gastar tudo","Poluir"],
a:0
},

{
q:"Árvores ajudam a:",
o:["Proteger o solo","Poluir","Destruir"],
a:0
},

{
q:"Biodiversidade é:",
o:["Variedade de vida","Máquina","Produto"],
a:0
},

{
q:"Tecnologia no campo:",
o:["Ajuda a produção","Prejudica sempre","Não serve"],
a:0
},

{
q:"Agrofloresta combina:",
o:["Árvores e cultivo","Fogo","Areia"],
a:0
},

{
q:"Água deve ser:",
o:["Economizada","Desperdiçada","Poluída"],
a:0
},

{
q:"Drones servem para:",
o:["Monitorar lavouras","Desmatar","Poluir"],
a:0
},

{
q:"O futuro sustentável depende de:",
o:["Preservação","Destruição","Poluição"],
a:0
},

{
q:"Agricultura sustentável busca:",
o:["Equilíbrio","Excesso","Caos"],
a:0
}

];

function carregarQuiz(){

  let p = perguntas[atual];

  document.getElementById("pergunta")
  .innerText = p.q;

  let op = document.getElementById("opcoes");
  op.innerHTML = "";

  p.o.forEach((v,i)=>{

    let b = document.createElement("button");
    b.innerText = v;

    b.onclick = () => {

      if(i === p.a){
        score += 10;
      }

      document.getElementById("score").innerText = score;

      atual++;

      if(atual < perguntas.length){
        carregarQuiz();
      } else {
        abrirTela("educacao");
      }

    };

    op.appendChild(b);
  });

}

/* RESULTADO FINAL */
function mostrarResultado(){

  abrirTela("final");

  let total = pontos + score;

  let nivel =
    total < 60 ? "🌱 Iniciante" :
    total < 120 ? "🌿 Sustentável" :
    "🏆 Mestre da Agrofloresta";

  document.getElementById("resultado").innerHTML =
  `Pontuação: ${total}<br>Nível: ${nivel}`;
  }
