const formatDollar = num => {
                         
    var p = num.toFixed(2).split(".");
    
    return  p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        
               return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        
      }, "") ;
    
     };


  const gfalta2 = flimite =>{
   
   finicial=new Date('Nov 05 2019 10:32:50 GMT-0500');
   tiempoinicial=(new Date(flimite) -finicial+1000)/1000;//diferencia entre la la fecha futura y la fecha actual
   ti=Math.floor(tiempoinicial);                              
   return ti;//regresamos la diferencia
    
};



const gfalta = flimite =>{
   
   factual=new Date();//fecha actual en este momento
   tiempofaltante=(new Date(flimite) -factual+1000)/1000;//diferencia entre la la fecha futura y la fecha actual
   tf=Math.floor(tiempofaltante);
   return tf;//regresamos la diferencia
    
};





const actualizarf = (deadline) => {
                       
                       
                               var mhoy = document.getElementById("hoy");


                              var tiempoI=gfalta2(deadline);
                              var tiempoA=gfalta(deadline);
                              var ma=tiempoI+(tiempoI-tiempoA);
 
                              mhoy.innerHTML=formatDollar(ma);

                           
                       const timerupdate=setInterval( () => {
                           
                           ma=ma+1;
                           mhoy.innerHTML=formatDollar(ma);
                          
                       },500);
                       
                       
                       
                   };


actualizarf('jul 27 2032 10:32:50 GMT-0500');