
var s1 = parseInt(document.getElementById("sub1").innerHTML = "94");
var s2 = parseInt(document.getElementById("sub2").innerHTML = "80");
var s3 = parseInt(document.getElementById("sub3").innerHTML = "90");
var s4 = parseInt(document.getElementById("sub4").innerHTML = "92");
var s5 = parseInt(document.getElementById("sub5").innerHTML = "100");
var s6 = parseInt(document.getElementById("sub6").innerHTML = "97");
var s7 = parseInt(document.getElementById("sub7").innerHTML = "89");
var s8 = parseInt(document.getElementById("sub8").innerHTML = "40");


var total = s1 + s2 + s3 + s4 + s5 + s6 + s7;


for (var i = 1; i <= 8; i++) {
    var score = parseInt(document.getElementById("sub" + i).innerHTML);
    var grade;
    if(score >= 90 && score <= 100){

        grade = "A+";
    }else if(score >= 80){

        grade = "A";
    }else if(score >= 70){

        grade = "B";
    }else if(score >= 60){

        grade = "C";
    }else if(score >= 50){

        grade = "D";
    }else{

        grade = "FAIL"; 
    }
    document.getElementById("gra" + i).innerHTML = grade;
}


document.getElementById("total").innerHTML = total;

var per = total / 7;
// var per = Math.floor(per);
document.getElementById("percentage").innerHTML = per;

if(per >= 90 && per <= 100){

    document.getElementById("grade").innerHTML = "A+";
}else if(per >= 80){

    document.getElementById("grade").innerHTML = "A";
}else if(per >= 70){

    document.getElementById("grade").innerHTML = "B";
}else if(per >= 60){

    document.getElementById("grade").innerHTML = "C";
}else if(per >= 50){

    document.getElementById("grade").innerHTML = "D";
}else{

    document.getElementById("grade").innerHTML = "FAIL";
}

if(per >= 50){

    document.getElementById("result").innerHTML = "PASS";
}else{

    document.getElementById("result").innerHTML = "FAIL";
}


if(s1 <= 50 && s2 <= 50&& s3 <= 50 && s4 <= 50 && s5 <= 50 && s6 <= 50 && s7 <= 50 && s8 <= 50){

    document.getElementById("result").innerHTML = "FAIL";
    
    
}