    
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");    
var titulo = document.getElementById("mtitulo");  
var mubi = document.getElementById("mubi");   
var mtexto = document.getElementById("jtexto");
var span = document.getElementsByClassName("closes")[0];





function mostrarData(cod) {
   
   modal.style.display = "block";     
   
   modalImg.src = 'img/galeria/'+cod+'.jpg';   
    
    console.log( "imagenes para mostrar: "+'img/galeria/'+cod+'.jpg' );
    
    var filesx = 'des/'+cod+'.txt';
        
    
    $.get(filesx,function(data){
        
        var lines = data.split("\n");
        mtexto.innerHTML=lines[1];
        mubi.innerHTML=lines[2];
        titulo.innerHTML =lines[0];

   });
  

   
};   
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


