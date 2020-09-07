var tombol=document.getElementById('startnow');
var x = document.getElementById("myVideo").controls = true;
x = document.getElementById("myVideo").autoplay = true;
x = document.getElementById("myVideo").poster = "file:///home/suga/Documents/CODE/SUNITSUGA-WEB-SITE/pac/one/assets/img/demo-image-01.jpg";
x=document.getElementById("myVideo");
// x=document.getElementById("myVideo").duration=true;
function playVid() {
  x.play();
}
function myFunction() {
  var hasil = document.getElementById("myVideo").duration;
  return hasil;
  // document.getElementById("demo").innerHTML = hasil;
  // alert (hasil-2000);
}


// console.log(x);



tombol.addEventListener("click",()=>{
  console.log('run');  
   var i=0;
   var ii=0;
   var iii=0;

var inter=setInterval(() => {
  console.log(i)
  console.log(ii)
var dura=myFunction();
console.log(dura);
   
switch (i) {
    case 1:
      // alert(i);
      document.getElementById("dt1").click();
      playVid();
      break;
      case 3:
      // alert(i);
      document.getElementById("dt1").click();
      break;

    case 6:
      document.getElementById("dt2").click(); 
      break;

      case 9:
        document.getElementById("dt1").click();
        break;

        case 13:
          document.getElementById("dt2").click();
          break;

          case 16:
            document.getElementById("dt3").click();
            break;
      
    default:
      break;
  }
if (i>17) {
  i=0;
}
  if (ii>dura) {
    // i=1;
    // ii++
    clearInterval(inter);
console.log('selesai');
  }
  i++
  ii++
  i*1000;
  }, 1000);


  // run;
    // alert('kena');

})

// console.log(x);
function run() {
    alert('bisa');
}