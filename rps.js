$('#paper').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
$('#scissor1').hide();
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#tie').hide();
$('#refresh-btn').click(allset);
function mainfunc(){
   var max=2;
var p1=Math.round(Math.random()*max);
var p2=Math.round(Math.random()*max);
  if(p1==0 && p2==1){
    $('#rock').show();
    $('#paper1').show();
    $("#text2").show();
    $("#text3").show();
$('#text1').hide();
$('#text4').hide();
    $('#paper').hide();
$('#scissor').hide();
$('#rock1').hide();
$('#scissor1').hide();
    $('#tie').hide();
  }
  else if(p1==1 && p2==0){
    $('#paper').show();
     $('#rock1').show();
    $("#text1").show();
    $("#text4").show();
$('#text2').hide();
$('#text3').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#scissor1').hide();
    $('#tie').hide();
  }
else if(p1==0 && p2==2){
  $("#rock").show();
  $('#scissor1').show();
  $("#text1").show();
    $("#text4").show();
$('#text2').hide();
$('#text3').hide();
  $('#paper').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
  $('#tie').hide();
}
else if(p1==2 && p2==0){
  $('#scissor').show();
  $('#rock1').show();
  $("#text2").show();
    $("#text3").show();
$('#text1').hide();
$('#text4').hide();
  $('#paper').hide();
$('#rock').hide();
$('#paper1').hide();
$('#scissor1').hide();
  $('#tie').hide();
}
else if(p1==1 && p2==2){
  $('#paper').show();
  $('#scissor1').show();
  $("#text2").show();
    $("#text3").show();
$('#text1').hide();
$('#text4').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
  $('#tie').hide();
}
else if(p1==2 && p2==1){
  $("#scissor").show();
  $('#paper1').show();
  $("#text1").show();
    $("#text4").show();
  $('#text3').hide();
  $('#text2').hide();
  $('#paper').hide();
$('#rock').hide();
$('#rock1').hide();
$('#scissor1').hide();
  $('#tie').hide();
}
else if(p1==0 && p2==0){
    $('#rock').show();
     $('#rock1').show();
  $('#paper').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#scissor1').hide();
  $('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
  $('#tie').show();
  }
else if(p1==1 && p2==1){
    $('#paper').show();
     $('#paper1').show();
$('#rock').hide();
$('#scissor').hide();
$('#rock1').hide();
$('#scissor1').hide();
  $('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
  $('#tie').show();
  }
else if(p1==2 && p2==2){
    $('#scissor').show();
     $('#scissor1').show();
  $('#paper').hide();
$('#rock').hide();
$('#paper1').hide();
$('#rock1').hide();
  $('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
   $('#tie').show();
  }
};
$("#left1").hide();
$("#left2").hide();
$("#right1").hide();
$("#right2").hide();

function animate1(){
  $('#paper').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
$('#scissor1').hide();
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#tie').hide();
  $("#left1").fadeIn(500);
  $("#left1").fadeOut(500);
}
function animate2(){
  $('#paper').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
$('#scissor1').hide();
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#tie').hide();
    $("#right1").fadeIn(500);
  $("#right1").fadeOut(500);
}
function animate3(){
  $('#paper').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
$('#scissor1').hide();
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#tie').hide();
    $("#left2").fadeIn(400);
  $("#left2").fadeOut(500);
}
function animate4(){
  $('#paper').hide();
$('#rock').hide();
$('#scissor').hide();
$('#paper1').hide();
$('#rock1').hide();
$('#scissor1').hide();
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();
$('#tie').hide();
    $("#right2").fadeIn(500);
  $("#right2").fadeOut(500);
}
function allset(){
setTimeout(animate1,0);
setTimeout(animate2,1000);
setTimeout(animate3,2000);
setTimeout(animate4,3000);
  setTimeout(mainfunc,4000);
};
