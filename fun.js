function expand(){
	//var e = document.getElementById(id);
	if(this.nextElementSibling.style.display == "none"){
		this.nextElementSibling.style.display = "block";
	}
	else{
		this.nextElementSibling.style.display = "none";
	}
}