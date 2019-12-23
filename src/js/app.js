const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	window.scrollY > 100
		? navBar.classList.add("navBar-bg")
		: navBar.classList.remove("navBar-bg");
});
