// change class on sticky navBar

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
	window.scrollY > 100
		? navBar.classList.add("navBar-bg")
		: navBar.classList.remove("navBar-bg");
});

// OPEN / CLOSE burger menu

const body = document.querySelector("body");
const burgerBtn = document.querySelector(".burger-btn");
const exitBtn = document.querySelector("#exit-btn");
const burgerMenu = document.querySelector("#burger-menu");

burgerBtn.addEventListener("click", () => {
	burgerMenu.classList.add("burger-menu-open");
	body.classList.add("noScroll");
	gsap.to("#burger-menu", {
		duration: 0.15,
		opacity: 0.98,
		scale: 1,
		ease: "power3.inOut"
	});
});

exitBtn.addEventListener("click", () => {
	body.classList.remove("noScroll");
	setTimeout(() => {
		burgerMenu.classList.remove("burger-menu-open");
	}, 210);
	gsap.to("#burger-menu", {
		duration: 0.2,
		opacity: 0,
		scale: 0.9,
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
		duration: 0.6,
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
const cta = document.querySelector(".cta");
const ctaH2 = document.querySelector(".cta h2");
const ctaButton = document.querySelector(".cta button");
const ctaImg = document.querySelector(".cta .cta-img");

const containerOneTL = gsap.timeline();
const containerTwoTL = gsap.timeline();
const containerThreeTL = gsap.timeline();
const ctaTL = gsap.timeline();

containerOneTL.from([firstImg, firstImgH3, firstImgP], {
	duration: 0.4,
	y: 50,
	autoAlpha: 0,
	ease: "power3.inOut",
	stagger: 0.2
});

containerTwoTL.from([secondImg, secondImgH3, secondImgP], {
	duration: 0.4,
	y: 50,
	autoAlpha: 0,
	ease: "power3.inOut",
	stagger: 0.2
});

containerThreeTL.from([thirdImg, thirdImgH3, thirdImgP], {
	duration: 0.4,
	y: 50,
	autoAlpha: 0,
	ease: "power3.inOut",
	stagger: 0.2
});

ctaTL.from([ctaH2, ctaButton, ctaImg], {
	duration: 0.4,
	y: 50,
	autoAlpha: 0,
	ease: "power3.inOut",
	stagger: 0.2
});

let controller = new ScrollMagic.Controller();

let ContainerOneScene = new ScrollMagic.Scene({
	triggerElement: containerOne,
	triggerHook: 0,
	reverse: false
})
	// .addIndicators()
	.setTween(containerOneTL)
	.addTo(controller)
	.offset(-600);

let ContainerTwoScene = new ScrollMagic.Scene({
	triggerElement: containerTwo,
	triggerHook: 0,
	reverse: false
})
	// .addIndicators()
	.setTween(containerTwoTL)
	.addTo(controller)
	.offset(-600);

let ContainerThreeScene = new ScrollMagic.Scene({
	triggerElement: containerThree,
	triggerHook: 0,
	reverse: false
})
	// .addIndicators()
	.setTween(containerThreeTL)
	.addTo(controller)
	.offset(-600);

let ctaScene = new ScrollMagic.Scene({
	triggerElement: cta,
	triggerHook: 0,
	reverse: false
})
	// .addIndicators()
	.setTween(ctaTL)
	.addTo(controller)
	.offset(-600);

//TODO
// - NEED TO CREATE ABOUT PAGE
// - NEED TO GET PICTURES FROM SLACK TO SHOW TEAM
