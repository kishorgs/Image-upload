const input = document.getElementById("input");
const img = document.getElementById("img");
const label = document.getElementById("label");
const upload_icon = document.getElementById("upload-icon");
const change_image = document.getElementById("change_image"); 

input.addEventListener("change", function(){
	const file = this.files[0];
		
	if(file){
		const reader = new FileReader();

		img.style.display="block";
		
		label.style.display="none";
		upload_icon.style.display="none";
		change_image.style.display="block";


		reader.addEventListener("load",function(){
			img.setAttribute("src",this.result);
		});

		reader.readAsDataURL(file);
	}
});