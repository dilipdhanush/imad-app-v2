console.log('Loaded!');
   var marginLeft=0;
var img=document.getElementById('anony');
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.left=marginLeft+"px";
}
img.onclick=function(){
   setInterval(function(){moveRight();},50);
};