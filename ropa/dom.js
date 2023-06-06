var producto=document.getElementById("productos").value
var cantidad=document.getElementById("cantidad").value


for(var i=0; i<cantidad;i++){

var card = document.getElementById("primercard" + i)
var primerdiv = document.createElement("div")
primerdiv.className = "card"
primerdiv.style = "with 18rem"
primerdiv.id = "div1"+i
card.appendChild(primerdiv)

var divuno = document.getElementById("div1"+i)
var imagem = document.createElement("img")
imagem.className = "card-img-top"
imagem.src = "/img/"+producto+i+".webp"
divuno.appendChild(imagem)

var div1 = document.getElementById("div1")
var div2 = document.createElement("div")
div2.className = "card-body"
div2.id = "div2"+i
divuno.appendChild(div2)

var titulodecard = document.getElementById("div2"+i)
var titulotexto = document.createElement("h5")
titulotexto.className = "card-title"
titulotexto.innerHTML = "Card tittle"
div2.appendChild(titulotexto)

var textodecard = document.getElementById("div2")
var parrafo = document.createElement("p")
parrafo.className = "card-text"
parrafo.innerHTML = "Some quick example text to build on the card title and make up the bulk of the cards content."
div2.appendChild(parrafo)

var etiqueta=document.getElementById("div2")
var aa=document.createElement("a")
aa.href="#"
aa.className="btn btn-primary"
aa.textContent="Go somewhere"
div2.appendChild(aa)
}


//otro card//



