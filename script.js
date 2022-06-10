window.onload = function(){
    var stage = document.getElementById('stage');
    var ctx = stage.getContex("2d");
    
    setInterval(game, 1000/15)

    const vel = 1

    var vx = vy = 0
    var px =10
    var py = 15
    

    function game(){
        
    }
    ctx.fillStyle = "black"
    ctx.fellReact(0,0,stage.width, stage.heigth);
    
}
