function expand(){
	//var e = document.getElementById(id);
	if(this.nextElementSibling.style.display == "none"){
		this.nextElementSibling.style.display = "block";
		this.value = this.value.replace("►", "▼");
	}
	else{
		this.nextElementSibling.style.display = "none";
		this.value = this.value.replace("▼", "►");
	}
}

function left(){
	var e = document.getElementsByName('i');
	for(var i = 0; i < e.length; i++){
		if(e[i].style.display == "block"){
			e[i-1].style.display = "block";
			e[i].style.display = "none";
		}
	}
}

function right(){
	var e = document.getElementsByName('i');
	for(var i = 0; i < e.length; i++){
		if(e[i].style.display == "block"){
			e[i+1].style.display = "block";
			e[i].style.display = "none";
			break;
		}
	}
}