function formValidation1()
{
	/*var name=document.forms.['registration']['uname'];
	or
	var name=document.getElementById('uname').value;
    or*/

var uid = document.registration.userid;
var passid = document.registration.passid;

if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{

}
}
return false;
} 

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}


function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
window.location.reload();
return true;
}
