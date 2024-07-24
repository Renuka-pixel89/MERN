function formvalidation()
{
var username = document.registration1.username;
var age=document.registration1.age;
var pincode=document.registration1.pincode;
var panno=document.registration1.panno;
var password=document.registration1.password;
var phoneno=document.registration1.phoneno;
if(allleter(username))
{
if(allnumeric(age))
{
if(allnumeric(pincode))
{
if(alphanumeric(panno))
{
if(password_validation(password,5,10))
{
if(phoneno_validation(phoneno,0,9))
{
}
}
}
}
}
}
return false;
}

function allletter(username)
{
var username_len=username.value.length;
var letter=/^[A-Za-z]+$/;
if (username_len == 0 || username_len >= 10 || username_len < 8 || (!username.value.match(letter)))
{
alert("User Id should not be empty / length be between 8 to 10");
username.focus();
return false;
}
return true;
}

function allnumeric(age)
{
var num;
if(num<=0 || num>99)
{
alert('Enter a valid age');
return false;
}
return true;
}

function allnumeric(pincode)
{
var number=/^[0-9]\d{6}+$/;
if(pincode.value.match(number))
{
return true;
}
else
{
alert('Enter a valid pincode');
return false;
}
}

function alphanumeric(panno)
{
var pattern=/^[A-Za-z0-9]*\d{9}+$/;
if(panno.value.match(pattern))
{
return true;
}
else
{
alert('Enter a valid panno');
return false;
}
}

function password_validation(password,mx,my)
{
var password_len = password.value.length;
if (password_len == 0 ||password_len >= my || password_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
password.focus();
return false;
}
return true;
}

function phoneno_validation(phoneno,h1,h2)
{
var phoneno_len = 10;
var r1=/^8\d{9}$/;
if(((phoneno_len==0)||(phoneno_len>h1)||(phoneno_len<h2))&&(phoneno.value.match(r1)))
{
return true;
}
else
{
alert('User Mobileno must start with 9');
phoneno.focus();
return false;
}
}