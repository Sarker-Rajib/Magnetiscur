"use strict"

$("#country_selector").countrySelect({
	defaultCountry: "fr",
})

// ////////// Progress navigator ////
{
   // indicators
	const indicatorTwo = document.getElementById("second");
	const indicatorThree = document.getElementById("third");
	
   // sections
   const firstSection = document.getElementById("section-one");
   const secondSection = document.getElementById("section-two");
   const thirdSection = document.getElementById("section-three");
  
   // buttons
   const StepOneButton = document.getElementById("stepToTwo");
   const StepTwoButton = document.getElementById("stepToThree");

   // function
   StepOneButton.addEventListener("click", ()=> {
      
      indicatorTwo.classList.add("active");
      firstSection.classList.add("d-none");
      secondSection.classList.remove("d-none");
      secondSection.classList.add("d-block");
   });

   StepTwoButton.addEventListener("click", ()=> {
      
      indicatorThree.classList.add("active");
      secondSection.classList.add("d-none");
      thirdSection.classList.remove("d-none");
      thirdSection.classList.add("d-block");
   });
}