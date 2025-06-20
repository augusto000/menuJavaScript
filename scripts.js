/**Agregar un elemento li */
let nuevoLi = document.createElement("li");
nuevoLi.textContent = "Foro";
document.querySelector("#ul-id").appendChild(nuevoLi);

/**Obtener la lista ul */
let items = document.querySelectorAll("ul li");

/**Recorrer la lista items */
items.forEach((item) => {
  if (item.textContent === "Home") {
    //console.log(item);
    //console.log(item.textContent);
  } else if (item.textContent === "Productos") {
    item.innerHTML = '<a href="#">Productos</a>';
  } else if (item.textContent === "Contáctenos") {
    item.innerHTML = '<a href ="#">Contáctenos</a>';
  } else if (item.textContent === "Foro") {
    item.innerHTML = '<a href="#">Foro</a>';
  }
});
let titulo = document.getElementsByTagName('title');
console.log(titulo[0]);
titulo[0].textContent = "Menú Javascript";
/**
productos.forEach(item => {
    Condicion o usar if else 
    if ((items.textContent)=== 'Productos'){
        //item.textContent = '';
        items.innerHTML='<a>Productos</a>';
        //console.log(item.textContent);
    }
    else if (item.lastElementChild){
              //contactenos.innerHTML.set
              console.log(item.textContent);                      
    }   
});
*/
