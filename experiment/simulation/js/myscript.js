function calculation() {
  var voltage = document.getElementById("fname1").value;
  var current = document.getElementById("fname2").value;
  var vol=document.getElementById("fname1").value;
  var cur=document.getElementById("fname2").value;
  var val=vol*cur;
  
  var x=0;
  var d=0;
  if(val>24.0)
  {
    d=val-24.0;
    x=x+(0.08*d);
  }
  else if(val<24.0)
  {
    d=24.0-val;
    x=x-(0.08*d);
  }
 

  var t3h=34.5+x; var t3c=30.7+x; var t3s=23.5+x;

  
  document.getElementById("amp").setAttribute("data-value", current);
  document.getElementById("vol").setAttribute("data-value", voltage);
  document.getElementById("temp1").setAttribute("data-value", t3h);
  document.getElementById("temp2").setAttribute("data-value", t3c);
  document.getElementById("temp3").setAttribute("data-value", t3s); 
  
}
  
    



var mybt=document.querySelector(".b1");
var myoff=document.querySelector(".ig2");
var img=myoff.querySelector("img");



function machine()
{ 
  document.getElementById('start_button').style.display='none';
  document.getElementById('progress_bar').style.display='';
  document.getElementById('message').innerHTML='Machine is now started.'
  
  document.getElementById('sidebar').style.display='';
  document.getElementById('myProgress').style.display='none';
  document.getElementById('switch').setAttribute('src','images/on.png');

}
function timer(){
  document.getElementById('progress_bar').style.display='';
  setInterval("machine()",1700);
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function togglesidebar()
{
    document.querySelector("#sidebar").classList.toggle("active");
}

var i = 0;
function move() {
 
}