  $(document).ready(function() {
  clockUpdate();
  setInterval(clockUpdate, 1000);
})

function clockUpdate() {
  var date = new Date();
  $('.digital-clock').css({'color': '#1D2D44', 'text-shadow': '0 0 6px #ced4da'});
  function addZero(x) {
    if (x < 10) {
      return x = '0' + x;
    } else {
      return x;
    }
  }

  function twelveHour(x) {
    if (x > 12) {
      return x = x - 12;
    } else if (x == 0) {
      return x = 12;
    } else {
      return x;
    }
  }

  var h = addZero(twelveHour(date.getHours()));
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());

  $('.digital-clock').text(h + ':' + m + ':' + s)
}

$("#device").change( function(){
  let device = $("#device option:selected").val();
  if(device == 2|| device == 3){
    $("#config").show();
  } else {
    $("#config").hide();
  }
});

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

$("#date").html((formatDate(new Date())));

$("#submit-btn").click(function(){
     $('html, body').animate({
        scrollTop: eval($("#buttons").offset().top-200)
    	}, 500);
    $("#copy-btn").show();
let fname = $("#fname").val();
let pnumber = $("#pnumber").val();
let eadd = $("#eadd").val();
let pcase = $("#pcase").val();
let issue = $("#issue").val();
let in1 = $("#in1").val();
let in2 = $("#in2").val();
let ts = $("#ts").val();
let config = $("#configuration").val();
let resolution = $("#resolution").val();
let ft = $("#ft").val();
let wiring = [];
let color = [];    
   $("#submit-case").remove();
$.each($('input[name="wiring"]:checked'),function(){
    wiring.push($(this).val());
});
    
$("input[name='color']").each(function(){
    let eachcolor = $(this).val();
    if(eachcolor.length != ''){
       let colorarray = color.push($(this).val());
    }       
});    
   $(".case").after("<textarea class='form-control mb-3' rows='30' id='submit-case'></textarea>");
   $("#submit-case").val("\n===== CUSTOMER INFO ===== \n Contact Name: " + fname + "\n Contact Phone: " + pnumber + "\n Contact E-mail: " + eadd + "\n Case Number: " + pcase + "\n\n===== CUSTOMER STATEMENT=====\n" + issue + "\n\n===== TIMELINE =====\n•Installed on: " + in1 + "\n•Issued since: " + in2 + "\n\n===== CONFIGURATION =====\n"+ config +"\n\n=====TROUBLESHOOTING =====\n" + ts + "\n\n ===== RESOLUTION =====\n" + "\n" + resolution);
});

$("#reset-btn").click(function(){ 
  $('html, body').animate({scrollTop:0}, '300');
  $('#myForm')[0].reset();
  $("#submit-case").remove();
  $("#copy-btn").hide();  
});
    
$("#ts").focus(function() {
    if(document.getElementById('ts').value === ''){
        document.getElementById('ts').value +='• ';
	}
});
$("#ts").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('ts').value +='• ';
	}
	var txtval = document.getElementById('ts').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('ts').value = txtval.substring(0,txtval.length - 1);
	}
});
    
$("#issue").focus(function() {
    if(document.getElementById('issue').value === ''){
        document.getElementById('issue').value +='• ';
	}
});

$("#issue").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('issue').value +='• ';
	}
	var txtval = document.getElementById('issue').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('issue').value = txtval.substring(0,txtval.length - 1);
	}
});

$("#configuration").focus(function() {
    if(document.getElementById('configuration').value === ''){
        document.getElementById('configuration').value +='• ';
	}
});

$("#configuration").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('configuration').value +='• ';
	}
	var txtval = document.getElementById('configuration').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('configuration').value = txtval.substring(0,txtval.length - 1);
	}
});

$("#in4").focus(function() {
    if(document.getElementById('in4').value === ''){
        document.getElementById('in4').value +='• ';
	}
});
    
$("#in4").keyup(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        document.getElementById('in4').value +='• ';
	}
	var txtval = document.getElementById('in4').value;
	if(txtval.substr(txtval.length - 1) == '\n'){
		document.getElementById('in4').value = txtval.substring(0,txtval.length - 1);
	}
});
    
$("#copy-btn").click(function(){
  let copyText = $("#submit-case");
  copyText.select();
  document.execCommand("copy");
});
          $(function(){
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });

            $(window).resize(function(e) {
              if($(window).width()<=768){
                $("#wrapper").removeClass("toggled");
              }else{
                $("#wrapper").addClass("toggled");
              }
            });
          });