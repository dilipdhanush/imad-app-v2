console.log('Loaded!');
   var marginLeft=0;
var img=document.getElementById('anony');
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}
img.onclick=function(){
    document.getElementById('renderhtml').innerHTML="Image clicked..";
   var interval=setInterval(moveRight,50);
};