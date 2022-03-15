window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	var Curent_username = document.forms["myLogin"]["username"];
	var Curent_password = document.forms["myLogin"]["password"];

	if(username != Curent_username.value){
		alert("Username does not exist in the system.");
	}
	else if(password != Curent_password.value){
		alert("Password does not exist in the system.");
		return false;
		//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	}
	else{alert("Please wait a moment Logging in...")}
	
}
			