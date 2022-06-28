"use strict"

$("#country_selector").countrySelect({
	defaultCountry: "fr",
})

{
	const description = document.getElementById("healerDescription");
	const descriptionToggler = document.getElementById("btnToggleOne");

	descriptionToggler.addEventListener("click", ()=> {

	  if (description.classList.contains("d-none")){
		description.classList.remove("d-none");
		description.classList.add("d-block");
		descriptionToggler.innerHTML = "Read Less";
	} 
	
	else if (description.classList.contains("d-block")){
		description.classList.add("d-none")
		descriptionToggler.innerHTML = "Read More";
	  }

	});
}

{
	const listOne = document.getElementById("hoddenSmOne");
	const btnToggleSmOne = document.getElementById("btnToggleSmOne");

	btnToggleSmOne.addEventListener("click", ()=> {

	  if (listOne.classList.contains("d-none")){
		listOne.classList.remove("d-none");
		listOne.classList.add("d-block");
		btnToggleSmOne.innerHTML = "See Less Search";
	  } 
	  
	  else if (listOne.classList.contains("d-block")){
		listOne.classList.add("d-none")
		btnToggleSmOne.innerHTML = "See More Search";
	  }

	});
}

{
	const listDepartment = document.getElementById("magnetizers-department");
	const btnToggleSmTwo = document.getElementById("btnToggleSmTwo");


	btnToggleSmTwo.addEventListener("click", ()=> {

	  if (listDepartment.style.height = "350px"){
		listDepartment.style.height = "auto"
		} 
	});
}

