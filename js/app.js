class Mesa{
    constructor(nombre){
        this.nombre = nombre;
    }
}
class Producto {
    constructor(nombre,tipo,precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}
let listaPedidoColores = [];
let listaPedidoCentro = [];
let mesa = 0;
const colores = document.querySelector(".btn-colores");
const centro = document.querySelector(".btn-centro");
const cola = document.querySelector(".btn-coca");
const pepsi = document.querySelector(".btn-pepsi");
const ita = document.querySelector(".btn-italiano");
const cha = document.querySelector(".btn-chacarero");
const listar = document.querySelector(".btn-listar");

const mesa01 = new Mesa('Colores');
const mesa02 = new Mesa('Centro');
const producto01 = new Producto("Coca-Cola","Bebida",1500);
const producto02 = new Producto("Pepsi","Bebida",1500);
const producto03 = new Producto("Sandwitch Italiano","Comida",3500);
const producto04 = new Producto("Sandwitch Chacarero","Comida",4000);

mesaColores = () => {
    listaPedidoColores =[];
    mesa = 1;
    const h2 = document.querySelector(".titulo");
    h2.textContent="Ingrese Pedio Mesa Colores";
    listaPedidoColores.push(mesa01.nombre);
    console.log(mesa);
}
mesaCentro = () => {
    listaPedidoCentro =[];
    mesa = 2;
    const h2 = document.querySelector(".titulo");
    h2.textContent="Ingrese Pedio Mesa Centro";
    listaPedidoCentro.push(mesa02.nombre);
    console.log(mesa);
}
    CocaCola = () =>{
        if(mesa == 1){
            const h2 = document.querySelector(".bebida");
            h2.textContent="Eligio Coca-cola";
            listaPedidoColores.push(producto01.nombre);
            listaPedidoColores.push(producto01.precio);
            console.log(listaPedidoColores);
        }
        if(mesa == 2){
            const h2 = document.querySelector(".bebida");
            h2.textContent="Eligio Coca-cola";
            listaPedidoCentro.push(producto01.nombre);
            listaPedidoCentro.push(producto01.precio);
            console.log(listaPedidoCentro);
        }
        
        
       
    }
    MostrarP = () =>{
        if(mesa == 1){
            const h2 = document.querySelector(".bebida");
            h2.textContent="Eligio Pepsi";
            listaPedidoColores.push(producto02.nombre);
            listaPedidoColores.push(producto02.precio);
            console.log(listaPedidoColores);
        }
        if(mesa == 2){
            const h2 = document.querySelector(".bebida");
            h2.textContent="Eligio Pepsi";
            listaPedidoCentro.push(producto02.nombre);
            listaPedidoCentro.push(producto02.precio);
            console.log(listaPedidoCentro);
        }
    }
    italiano =()=>{
        if(mesa == 1){
            const h2 = document.querySelector(".comida");
            h2.textContent="Eligio Italiano";
            listaPedidoColores.push(producto03.nombre);
            listaPedidoColores.push(producto03.precio);
            console.log(listaPedidoColores);
        }
        if(mesa == 2){
            const h2 = document.querySelector(".comida");
            h2.textContent="Eligio Italiano";
            listaPedidoCentro.push(producto03.nombre);
            listaPedidoCentro.push(producto03.precio);
            console.log(listaPedidoCentro);
        }
    }
    chacarero =()=>{
        if(mesa == 1){
            const h2 = document.querySelector(".comida");
            h2.textContent="Eligio Chacarero";
            listaPedidoColores.push(producto04.nombre);
            listaPedidoColores.push(producto04.precio);
            console.log(listaPedidoColores);
        }
        if(mesa == 2){
            const h2 = document.querySelector(".comida");
            h2.textContent="Eligio Chacarero";
            listaPedidoCentro.push(producto04.nombre);
            listaPedidoCentro.push(producto04.precio);
            console.log(listaPedidoCentro);
        }
    }
    listarPedido=()=>{
        const h2 = document.querySelector(".titulo");
        const ul = document.querySelector(".lista");
        h2.textContent="  Pedidos ";
        ul.innerHTML = "";
        listaPedidoColores.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        });
        listaPedidoCentro.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        });
        
    }
colores.addEventListener('click',mesaColores);
centro.addEventListener('click',mesaCentro);
cola.addEventListener('click',CocaCola);
pepsi.addEventListener('click',MostrarP);
ita.addEventListener('click',italiano);
cha.addEventListener('click',chacarero);
listar.addEventListener('click',listarPedido);

