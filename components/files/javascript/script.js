const titleTextELements = document.querySelector(".title");

const introHeadingELements = document.querySelector("#introHeading");
const introTextELements = document.querySelector("#introText");

const agentsHeadingELements = document.querySelector("#agentsHeading");
const agentsTextELements = document.querySelector("#agentsText");

const mapHeadingELements = document.querySelector("#mapHeading");
const mapTextELements = document.querySelector("#mapText");

const hamburgerIcon = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".hamburgerMenu");
const closeIcon = document.querySelector(".closeIcon");

window.addEventListener("scroll", (e) => {
	animateText();
});

window.addEventListener("load", (event) => {
	const yValue = document.documentElement.scrollTop || window.pageYOffset;

	if (yValue > 0) animateText();

	const childComponents = titleTextELements.children;

	for (let i = 0; i < childComponents.length; i++) {
		childComponents[i].classList.remove("hidden");
		childComponents[i].classList.add("show");
	}
});

hamburgerIcon.addEventListener("click", () => {
	mobileNav.style.display = "block";
	mobileNav.classList.add("showMenu");
});
closeIcon.addEventListener("click", () => {
	mobileNav.classList.remove("showMenu");
});

const animateText = () => {
	const yValue = document.documentElement.scrollTop || window.pageYOffset;

	if (yValue > 150) {
		introHeadingELements.classList.remove("hidden");
		introHeadingELements.classList.add("show");
	}
	if (yValue > 350) {
		const childComponents = introTextELements.children;
		for (let i = 0; i < childComponents.length; i++) {
			childComponents[i].classList.remove("hidden");
			childComponents[i].classList.add("show");
		}
	}
	if (yValue > 900) {
		agentsHeadingELements.classList.remove("hidden");
		agentsHeadingELements.classList.add("show");
	}
	if (yValue > 1200) {
		const childComponents = agentsTextELements.children;
		for (let i = 0; i < childComponents.length; i++) {
			childComponents[i].classList.remove("hidden");
			childComponents[i].classList.add("show");
		}
	}
	if (yValue > 1600) {
		mapHeadingELements.classList.remove("hidden");
		mapHeadingELements.classList.add("show");
	}
	if (yValue > 1900) {
		const childComponents = mapTextELements.children;
		for (let i = 0; i < childComponents.length; i++) {
			childComponents[i].classList.remove("hidden");
			childComponents[i].classList.add("show");
		}
	}
};
