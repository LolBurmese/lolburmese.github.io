const btn = document.querySelectorAll(".container .tabbtn button");
const panel = document.querySelectorAll(".container .tabcontentbox .tabcontent"); 
const tabcontentbox = document.getElementsByClassName("tabcontentbox")[0];

const showPanel = (index,code,tcolor) =>{
	tabcontentbox.classList.add("tabtoggle");
	// tabcontentbox.classList.toggle("tabno");
	btn.forEach((node)=>{
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	btn[index].style.backgroundColor = code;
	btn[index].style.color = "white";

	panel.forEach((node)=>{
		node.style.display = "none";
	});

	tabcontentbox.style.backgroundColor = code;
	panel[index].style.display = "block";
	panel[index].style.color = tcolor;

	setTimeout(()=>{
		panel[index].style.opacity = "1";
	},400);

}
const removeall = () =>{
	tabcontentbox.classList.remove("tabtoggle");
	btn.forEach((node)=>{
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	panel.forEach((node)=>{
		node.style.display = "none";
		node.style.opacity = "0";
	});
}