window.addEventListener("load", function(){

    var ctx = document.getElementById("canvas").getContext("2d");
    var canavas = document.getElementById("canvas");
    
    var color = document.querySelectorAll(".colors");
    var line = document.getElementById("line");
    var figure = document.getElementById("figure");
    var clear = document.getElementById("clear");
    var tool = document.querySelectorAll(".tool");
    var toolClicked = document.getElementsByClassName('toolClicked')[0];
    var dragging = false;
    var lineWidth = document.getElementById("lineWidth");
    
   // alert(lineWidth.value);
    
    
    canvas.width = window.innerWidth;
    canavas.height = window.innerHeight;
    
       
        
    function colorStyle()
     {
        
        for(var i = 0; i < color.length; i++)
        {
               
            var colorArr = color[i];
            var colorId = colorArr.id;
            colorArr.style.backgroundColor = colorId;
            //alert(colorArr);
               
        }
        
     }
     colorStyle();
    
       
       
     canvas.addEventListener("mousedown", start);
     canvas.addEventListener("mouseup", stop);
     canvas.addEventListener("mousemove", drawing);
    var colorId = 'black';
    
    function selectedColor()
    {
        
        
        for(var i = 0; i < color.length; i++)
            {
                
              var colorArr = color[i];
                
                colorArr.addEventListener("click", function(e){
                    
                    colorId = e.target.id;
                  
                    
                })
                
            }
        
      
        
    }
    selectedColor();
    
    
    function start()
    {
        
        dragging = true;
        
    }
    
    
    function stop()
    {
        
        dragging = false;
        ctx.beginPath();
        
    }
    
    
    function drawing(e)
    {
        
        
          if(dragging)
          {
             // var mouseX = e.clientX;
              //var mouseY = e.clientY;
              //selectedColor();
              
             ctx.lineWidth = lineWidth.value;
             ctx.lineTo(e.clientX,e.clientY);
              ctx.stroke();
             ctx.fillStyle = colorId;
             ctx.strokeStyle = colorId;
            // ctx.lineWidth = 40;
             ctx.beginPath();
             ctx.arc(e.clientX,e.clientY, lineWidth.value/2, 0, Math.PI*2);
             ctx.fill();
              ctx.beginPath();
              ctx.moveTo(e.clientX,e.clientY);
                  
          }
        
    }
    
    
    clear.addEventListener("click", function(){
        
        ctx.clearRect(0,0,1500,1000);
        
    })
   
     
})
