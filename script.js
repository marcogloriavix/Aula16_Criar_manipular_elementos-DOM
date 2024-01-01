const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

// console.log(arrayPostagens[1].titulo)



// ********************
//1º - criar um elemento
let article = document.createElement("article")
//console.log(article)




// ********************
// 2º - Manipular o elemento (fazer alguma coisa ao elemento)
//article.innerText="Elemento criado com JS"  // para alterar só texto
//console.log(article)

// Manipular elemento com estrutura HTML
article.innerHTML=`  
<h3>${arrayPostagens[1].titulo}</h3>
<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[1].texto}</p>`

article.id = "post-2"
//  console.log(article)



// ********************
// ********************
// 3º - Adicionar o elemento na pagina - (ou seja, no site)
// vou criar uma nova postagem, abaixo da primeira postagem

// tenho que capturar o elemento PAI, onde vou colocar 
// o elemento FILHO
let main = document.querySelector("main")  // capturar o elemento PAI , que é o "main"
//console.log(main)
main.appendChild(article)

//===========================================================
//===========================================================

// 4º 
// Tornar o processo de Adicionar Dinamico:
//ATENÇÃO : POSSO APAGAR O CODIGO da parte de CIMA E SÓ
//DEIXAR A PARTIR DA ESTRUTURA DE REPETIÇÃO

for(let i=0; i<arrayPostagens.length; i++){

  // ********************
  //1º - criar um elemento
let article = document.createElement("article")
//console.log(article)


// ********************
// 2º - Manipular o elemento (fazer alguma coisa ao elemento)
//article.innerText="Elemento criado com JS"  // para alterar só texto
//console.log(article)

// Manipular elemento com estrutura HTML
article.innerHTML=`  
<h3>${arrayPostagens[i].titulo}</h3>
<p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
<div class="data">${arrayPostagens[i].data}</div>
<p>${arrayPostagens[i].texto}</p>`

article.id = `post-${i+1}`
console.log(article.id)


// ********************
// ********************
// 3º - Adicionar o elemento na pagina - (ou seja, no site)
// vou criar uma nova postagem, abaixo da primeira postagem

// tenho que capturar o elemento PAI, onde vou colocar 
// o elemento FILHO
let main = document.querySelector("main")  // capturar o elemento PAI , que é o "main"
main.appendChild(article)

}