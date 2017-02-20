console.log('Loaded!');
    var img=document.getElementById('anony');
    var marginLeft=0;
    
    function moveRight(){
        marginLeft=marginLeft+1;
        img.style.marginLeft=marginleft+"px";
    }
    img.onclick(){
        var interval=setInterval(moveRight,20);
    };
    