
	const burger = document.getElementsByClassName("burger")[0];
	const navlinks = document.querySelector(".nav-links");
	const navlink = document.querySelectorAll(".nav-links li");
	function clickbur(){
		navlinks.classList.toggle('activeslide');
		navlink.forEach((link,index) =>{
			if(link.style.animation){
				link.style.animation = "";
			}
			else{
			link.style.animation = `slideshow 0.5s ease forwards ${index / 7}s`;
		}
	});
} 