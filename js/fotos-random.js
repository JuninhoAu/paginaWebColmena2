
     

    
     
     function shuffle(myarray) {

        var i;
        var j;
        var temp;
                  
            for (i = myarray.length - 1; i > 0; i--) {//en vez de incrementar el for va a disminuir
                j = Math.floor(Math.random() * (i + 1));//generamos un numero ramdom entre 0 y el n total de elementos del array
                temp = myarray[i];//obtenemos el elemento en la posicion ramdom antes de intercambiar
                myarray[i] = myarray[j];//cambiamos el ele en la pocision i(la 1ra vez sera el ultimo elemento) con el elemento en la posicion random
                myarray[j] = temp;//el elemento en la posicion random ahora sera el ultimo elemento 
            }
            return myarray;    
        
        };
              
              
            
            $.ajax({
          url: "img/banner/nuevosbanners.txt",
          success: function(data){
              var abanner=[];
               var lbanners = data.split("\n");
              for(var i=0;i<lbanners.length;i++){
                  
                  
                 abanner.push("img/banner/"+lbanners[i]);
        
                  
                  
              }
         
               console.log(abanner)
              
               var myElement = document.getElementById("banner");
               var img1 = document.createElement('img');
               var varandon=Math.floor(Math.random() * (abanner.length-1));     // numero random 
               img1.src =  abanner[varandon];    
              
                myElement.appendChild(img1);  
              
              
              
          }
        });
                    
            $.ajax({
              url: "textos/banner.txt",
              dataType: "text",
          success: function(data){
              var lines = data.split("\n");
              var mbanner = document.getElementById("mbanner");
              var lineran=Math.floor(Math.random() * (lines.length-1));     // numero random
              var entext=lines[lineran];
              mbanner.innerHTML=entext;
        
              
          }
        }); 
              
           $.ajax({
          url: "img/galeria/nuevasobras.txt",
          success: function(data){
              
             var agaleria=[];
              
               var lgaleria = data.split("\n");
              for(var i=0;i<lgaleria.length;i++){
                  
                  
                 agaleria.push(lgaleria[i]);
        
                  
                  
              }
        
           
              
              
              shuffle(agaleria);
        
              
               var row = document.getElementById("row");
              
               
            for(var i=0;i<12;i++){
                
              
                var divimg=document.createElement('div');
                divimg.className = 'img-fluid sigmapad col-lg-4 col-md-6 col-sm-6 contenedor-imagen';
                divimg.onclick="";
                divimg.alt="Image 2";
                
                var imgalery = document.createElement('img');
                imgalery.src = "img/galeria/"+agaleria[i]; 
                imgalery.style='width:100%';
        
        
                
                divimg.appendChild(imgalery);
                ponerTitulo(agaleria[i],divimg);
                row.appendChild(divimg);  
                
           
                
            }  
        
          }
               
               
        });
              
              
        function ponerTitulo(numero,divimg){
            
        
              var ola=numero.replace(".jpg", "");;
               
                $.ajax({
              url: "des/"+ola+".txt",
              dataType: "text",
              success: function(data){
                  
              var lines = data.split("\n");
            
                  var divtxt=document.createElement('div');
                  divtxt.className='texto';
                  var titulo=document.createElement('h3');
                   titulo.innerHTML=lines[0];
                titulo.className='titulo titulo-peque';
        
                divtxt.appendChild(titulo);
                  
                  divimg.appendChild(divtxt);
                  titulo.onclick = function() {
                      
          midata(ola);
        };
        
                  
                 }
             }); 
            
        
            
        };
              
              
              function midata(ola) {
            
                  
                 // alert(ola);
          mostrarData(ola);
        
           
        };   
        
              
              
         $.ajax({
              url: "textos/serv1.txt",
              dataType: "text",
          success: function(data){
             var lines = data.split("\n");
             var sv1 = document.getElementById("sv1");
             var sv2 = document.getElementById("sv2");
                   var sv3 = document.getElementById("sv3");
             var sv4 = document.getElementById("sv4");
        
             var p1=document.createElement('p');
             p1.className="pf";
             p1.style="word-spacing:1px"; 
             var p2 = p1.cloneNode(false);
             var p3=  p1.cloneNode(false);
             var p4=  p1.cloneNode(false);
        
              p1.innerHTML=lines[0];
              p2.innerHTML=lines[1];
                    p3.innerHTML=lines[2];
                    p4.innerHTML=lines[3];
        
              sv1.appendChild(p1);
               sv2.appendChild(p2);
               sv3.appendChild(p3);
               sv4.appendChild(p4);
        
              
        
              
          }
        });    
              
              
        $.ajax({
              url: "textos/nosotros.txt",
              dataType: "text",
          success: function(data){
             var nosotros = document.getElementById("colmena");
            
             var pcol=document.createElement('p');
            
              pcol.innerHTML=data;
            
              nosotros.appendChild(pcol);
             
              
        
              
          }
        });  
              
              
          $.ajax({
              url: "img/client/nuevosclientes.txt",
              
          success: function(data){
              
             var acarusel=[];
              
              
               var lcarusel = data.split("\n");
              
              for(var i=0;i<lcarusel.length;i++){
                  
                  
                 acarusel.push("img/client/"+lcarusel[i]);
        
                  
                  
              }
        
         
              
              
              
              
        for(var y=0;y<acarusel.length;y+=4){
            //y min 0 -4---8--12---16
            var controw=document.getElementById("carouselid");
            var cari=document.createElement("div");
            var carow=document.createElement("div");
            carow.className="row";
            if(y==0){
                
                cari.className="carousel-item active";
            }else{
                
                    cari.className="carousel-item";
        
            }
            
            //i+=5
           for(var i=0;i<4;i++){
                //i min 1 2 3 max 4 
               //0 1 2 3 --4 5 6 7--8 9 10 11 --12 13 14 15 
                     var adiv1=document.createElement('div');
                     var aimg1=document.createElement("img");
                     aimg1.alt="1 slide";
                     adiv1.className="col";
                     aimg1.src=acarusel[i+y];//1234--5678--9.10.11.12--13.
               
                     console.log("nombre del icono del carusel "+acarusel[i+y]);
                     adiv1.appendChild(aimg1);
                     carow.appendChild(adiv1); 
                     cari.appendChild(carow);
           
                
            }
            
            console.log("medidas del carusle"+    acarusel.length);    
            controw.appendChild(cari);
            
            
            
        }      
              
              
        
          }
               
               
        });      
              
             
        
            jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 100,
                    time: 2000,
                    beginAt: 100000000,
                });
            });
              
             
              
                  var scroll = new SmoothScroll('a[href*="#"]', {
            // Selectors
            ignore: '[href="#CarouselColmena"]', // ignorar las anclas del slider principal
            header: null, // Selector for fixed headers (must be a valid CSS selector)
        
            // Speed & Easing
            speed: 1500, // velocidad del scroll en milisegundos
            offset: 45, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            easing: 'easeInOutCubic', // Easing pattern to use
            customEasing: function (time) {
        
                // Function. Custom easing pattern
                // If this is set to anything other than null, will override the easing option above
        
                // return <your formulate with time as a multiplier>
        
                // Example: easeInOut Quad
                return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
        
            },
        
            // Callback API
            before: function (anchor, toggle) {}, // Callback to run before scroll
            after: function (anchor, toggle) {} // Callback to run after scroll
        });