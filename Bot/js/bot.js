function cargar() {
    console.log("Pagina cargada...");
    document.getElementById("inicio-bot").addEventListener("click",iniciarBot,false);


}
///////////////////////////////////////////////////////////////////////////
function Bot(nombre) {
    console.log("bot inicializado");
    this.nombre = nombre;
    this.estado = 0;
}
Bot.prototype.actualizarBot = function(){
    var contenedor = document.getElementById("imagen-bot");
    
    switch (this.estado) {
        case 0:
            contenedor.innerHTML = "<img src = sprites/cara_base.png>"; 
        break;
        case 1:
            contenedor.innerHTML = "<img src = sprites/cara_01.png>";
        break;    
        case 2:
            contenedor.innerHTML = "<img src = sprites/cara_02.png>";
        break;
        case 3:
            contenedor.innerHTML = "<img src = sprites/cara_03.png>";
        break;
        case 4:
            contenedor.innerHTML = "<img src = sprites/cara_04.png>";
        break;
        case 5:
            contenedor.innerHTML = "<img src = sprites/cara_05.png>";
        break;
        default:
        break;
    }
};
Bot.prototype.cambiarEstado = function(estado) {
    this.estado = estado;
    actualizarBot();
};
Bot.prototype.saludar = function() {
    return "Hola mi nombre es: " + this.nombre;
 };
Bot.prototype.hablar = function(contenido) {
    document.getElementById("conversacion").innerHTML += "<div class=arrow_box>"+contenido+"</div>";
}; 

////////////////////////////////////////////////////////////////////////////
function iniciarBot() {
    //Desactivamos el button de iniciar bot;
    document.getElementById("inicio-bot").disabled = true;
    
    var bot = new Bot("mybot");
    bot.actualizarBot();
    bot.hablar(bot.saludar);
}
function iniciarConversacion(){

}

window.addEventListener("load", cargar, false);