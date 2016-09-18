 function HCF() 
 {
        var a = document.getElementById("longtext1").value;
        var b = document.getElementById("longtext2").value;
		
		var t;
	        if (a == '' || b == '')
                document.getElementById("showhcf").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
               document.getElementById("showhcf").innerHTML = "INVALID INPUT ";
		    else if(a<0 || b<0)
				document.getElementById("showhcf").innerHTML = "Please Enter a Positive Number ";
            else {
                while (b != 0) {
                    t = b;
                    b = a % b;
                    a = t;
                }
                document.getElementById("showhcf").innerHTML = "H.C.F of these two numbers is  " + a;
            }
 }

 
function LCM() 
{
            var a = document.getElementById("lcmnum1").value;
            var b = document.getElementById("lcmnum2").value;
            if (a == '' || b == '')
                document.getElementById("showlcm").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showlcm").innerHTML = "INVALID INPUT ";
            else if(a<0 || b<0)
				document.getElementById("showhcf").innerHTML = "Please Enter a Positive Number ";
            else {
                var t;
                var m = a * b;
                while (b != 0) {
                    t = b;
                    b = a % b;
                    a = t;
                }
                var l = m / a;
                document.getElementById("showlcm").innerHTML = "L.C.M of these two numbers is  " + l;
            }
}

 

function POWER() 
{
            var a = document.getElementById("pownum1").value;
            var b = document.getElementById("pownum2").value;
            if (a == '' || b == '')
                document.getElementById("showpower").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showpower").innerHTML = "INVALID INPUT ";
			else {
                var t=1;
				t=Math.pow(a,b);
                document.getElementById("showpower").innerHTML = "Power of these two numbers is  " + t;
            }
}


function XOR() 
{
            var a = document.getElementById("xornum1").value;
            var b = document.getElementById("xornum2").value;
            if (a == '' || b == '')
                document.getElementById("showxor").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showxor").innerHTML = "INVALID INPUT ";
            else {
                var t=a^b;
                document.getElementById("showxor").innerHTML = "XOR of these two numbers is  " + t;
            }
}


function OR() 
{
            var a = document.getElementById("ornum1").value;
            var b = document.getElementById("ornum2").value;
            if (a == '' || b == '')
                document.getElementById("showor").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showor").innerHTML = "INVALID INPUT ";
			else if(a<0 || b<0)
				document.getElementById("showhcf").innerHTML = "Please Enter a Positive Number ";
            else {
                var t=a|b;
                document.getElementById("showor").innerHTML = "OR of these two numbers is  " + t;
            }
}


function AND() 
{
            var a = document.getElementById("andnum1").value;
            var b = document.getElementById("andnum2").value;
            if (a == '' || b == '')
                document.getElementById("showand").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showand").innerHTML = "INVALID INPUT ";
            else {
                var t=a&b;
                document.getElementById("showand").innerHTML = "AND of these two numbers is  " + t;
            }
}



function RATIO() 
{
            var a = document.getElementById("rationum1").value;
            var b = document.getElementById("rationum2").value;
            var t;
            if (a == '' || b == '')
                document.getElementById("showratio").innerHTML = "INVALID INPUT ";
            else if (isNaN(a) || isNaN(b))
                document.getElementById("showratio").innerHTML = "INVALID INPUT ";
			else if(a<0 || b<0)
				document.getElementById("showhcf").innerHTML = "Please Enter a Positive Number ";
            else {
                var m = a;
                var n = b;
                while (b != 0) {
                    t = b;
                    b = a % b;
                    a = t;
                }
                var l = m / a;
                var c = n / a;
                document.getElementById("showratio").innerHTML = "RATIO of these two numbers is  " + (l + "/" + c);
            }
}


function B2D() 
{
            var a = document.getElementById("binarynum1").value;
			var number=a,fl=0;
			var testValue=a;

             if (testValue.search(/^[10]+$/) != -1){
                 fl=0;
             } else { 
                fl=1;
             }
				
			if(fl==1)
				document.getElementById("showb2d").innerHTML = "Invalid Binary Number Entered";
			else if (a == '')
                document.getElementById("showb2d").innerHTML = "INVALID INPUT ";
            else if (isNaN(a))
                document.getElementById("showb2d").innerHTML = "INVALID INPUT ";
            else {
                var m =parseInt(a,2);
				if(isNaN(m))
					document.getElementById("showb2d").innerHTML = "Invalid Binary Number Entered";
				else
                document.getElementById("showb2d").innerHTML = "Decimal representation is " + (m);
            }
}



function D2B() 
{
            var a = document.getElementById("decimalnum1").value;
            var t;
            if (a== '')
                document.getElementById("showd2b").innerHTML = "INVALID INPUT ";
            else if (isNaN(a))
                document.getElementById("showd2b").innerHTML = "INVALID INPUT ";
            else {
                var number =a;
				var binaryArr = [];
                for (; number; number >>= 1) {
                    binaryArr.push(number & 1);
                    }
                var m=binaryArr.reverse().join('');
			
                document.getElementById("showd2b").innerHTML = "Decimal representation is " + (m);
            }
}