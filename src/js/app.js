// change class on sticky navBar

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	window.scrollY > 100
		? navBar.classList.add("navBar-bg")
		: navBar.classList.remove("navBar-bg");
});

// OPEN / CLOSE burger menu

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

// ANIMATING header & hero section

const header = document.querySelector("header");
const h1Hero = document.querySelector(".hero-text h1");
const btnHero = document.querySelector(".hero-text button");
const imgHero = document.querySelector(".hero-img");

const onLoadTL = gsap.timeline();

onLoadTL
	.from(header, {
		duration: 0.8,
		y: 16,
		opacity: 0,
		ease: "power3.inOut"
	})
	.from(h1Hero, {
		duration: 0.4,
		y: -60,
		opacity: 0,
		ease: "power3.out",
		delay: -0.2
	})
	.from(btnHero, {
		duration: 0.4,
		y: 60,
		opacity: 0,
		ease: "power3.out",
		delay: -0.2
	})
	.from(imgHero, {
		duration: 0.4,
		y: 60,
		opacity: 0,
		ease: "power3.out",
		delay: -0.2
	});

// ANIMATING content on scroll

const containerOne = document.querySelector("#container1");
const containerTwo = document.querySelector("#container2");
const containerThree = document.querySelector("#container3");
const firstImg = document.querySelector(".content-first-img");
const secondImg = document.querySelector(".content-second-img");
const thirdImg = document.querySelector(".content-third-img");
const firstImgH3 = document.querySelector("#container1-title");
const secondImgH3 = document.querySelector("#container2-title");
const thirdImgH3 = document.querySelector("#container3-title");
const firstImgP = document.querySelector("#container1-p");
const secondImgP = document.querySelector("#container2-p");
const thirdImgP = document.querySelector("#container3-p");

const containerOneTL = gsap.timeline();

containerOneTL
	.from(firstImg, {
		duration: 0.25,
		y: 50,
		opacity: 0,
		ease: "power3.inOut"
	})
	.from(firstImgH3, {
		duration: 0.25,
		y: 50,
		opacity: 0,
		ease: "power3.inOut",
		delay: -0.05
	})
	.from(firstImgP, {
		duration: 0.25,
		y: 50,
		opacity: 0,
		ease: "power3.inOut",
		delay: -0.05
	});

let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
	triggerElement: containerOne,
	triggerHook: 0,
	reverse: false
})
	.setTween(containerOneTL)
	.addTo(controller)
	.offset(-300);
