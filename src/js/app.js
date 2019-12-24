const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	window.scrollY > 100
		? navBar.classList.add("navBar-bg")
		: navBar.classList.remove("navBar-bg");
});

const burgerBtn = document.querySelector(".burger-btn");
const exitBtn = document.querySelector("#exit-btn");
const burgerMenu = document.querySelector("#burger-menu");

burgerBtn.addEventListener("click", () => {
	if (!burgerMenu.classList.contains("burger-menu-open")) {
		burgerMenu.classList.add("burger-menu-open");
		gsap.to("#burger-menu", {
			duration: 0.15,
			opacity: 0.98,
			scale: 1,
			ease: "power3.inOut"
		});
	}
});

exitBtn.addEventListener("click", () => {
	setTimeout(() => {
		burgerMenu.classList.remove("burger-menu-open");
	}, 300);
	gsap.to("#burger-menu", {
		duration: 0.2,
		opacity: 0,
		scale: 0,
		ease: "power3.inOut"
	});
});
