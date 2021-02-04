export const homeObjOne = {
	isHero: true,
	bgImg: require("../../images/hero.png").default,
	heading: "LEARN  IMPLEMENT  UPSKILL",
	desc:
		"You only have to know one thing, You can learn everything! Anything, Anytime, Anywhere!",
	hasBtn: true,
	btnCaption: "Register Now",
	btnLink: "/",
};
export const homeObjTwo = {
	heading: "Learn new skills with top educators",
	desc:
		"Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
	hasFeature: true,
	features: [
		"Enhance teaching and learning online",
		"Increase access to high-quality education for everyone, everywhere.",
		"Personalized learning.",
		"Build Your Logic and transform your career!",
	],
	start: "",
	img: require("../../images/about.png").default,
	alt: "About 1",
};
export const homeObjThree = {
	imgStart: true,
	heading: "Learn How The Share Market Works",
	desc:
		"We will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
	hasBtn: true,
	btnCaption: "Coming Soon",
	btnLink: "/",
	start: "",
	img: require("../../images/hero_last.jpg").default,
	alt: "About 2",
};

export const featuredCourses = [
	{
		id: 1,
		img: require("../../images/courses/Python/card.png").default,
		topLine: "Python",
		name: "Python Programming",
		desc:
			"Aid your journey right from the beginning to the very end in becoming the most skilled software engineers across the globe.",
		oldPrice: "2999",
		newPrice: "10",
		isFree: true,
		slug: "/course/python",
	},
	{
		id: 2,
		img: require("../../images/courses/C C++/card.png").default,
		topLine: "C/C++",
		name: "C/C++ Fundamentals ",
		desc:
			"Even if you are going to build web apps or websites but learning C will help you understand how software & hardware actually interact.",
		oldPrice: "2999",
		newPrice: "0",
		isFree: true,
		slug: "/course/c_c++",
	},
	{
		id: 3,
		img: require("../../images/courses/webdev/card.jpg").default,
		topLine: "WebDev",
		name: "Web Development",
		desc:
			"Make REAL web applications using cutting-edge technologies and Create responsive, accessible, and beautiful layouts YOURSELF!!",
		oldPrice: "2999",
		newPrice: "0",
		isFree: true,
		slug: "/course/webdev",
	},
	{
		img: require("../../images/courses/C C++/card.png").default,
		topLine: "C/C++",
		name: "C/C++ Fundamentals ",
		desc:
			"Even if you are going to build web apps or websites but learning C will help you understand how software & hardware actually interact.",
		oldPrice: "2999",
		newPrice: "0",
		isFree: true,
		slug: "/course/c_c++",
	},
	{
		img: require("../../images/courses/webdev/card.jpg").default,
		topLine: "WebDev",
		name: "Web Development",
		desc:
			"Make REAL web applications using cutting-edge technologies and Create responsive, accessible, and beautiful layouts YOURSELF!!",
		oldPrice: "2999",
		newPrice: "0",
		isFree: true,
		slug: "/course/webdev",
	},
];

export const faculty = [
	{
		img: require("../../images/faculty/Praveen.jpg").default,
		name: "Mr. Praveen Kumar",
		desc: "Full Stack JavaScript Specialist",
		link: "/",
	},
	{
		img: require("../../images/faculty/Ankit Chaudhari.jpg").default,
		name: "Mr. Ankit Chaudhari",
		desc: "Full Stack Developer",
		link: "/",
	},
	{
		img: require("../../images/faculty/Abhishek Singh.jpg").default,
		name: "Mr. Abhishek Singh",
		desc: "Python Developer",
		link: "/",
	},
	{
		img: require("../../images/faculty/Nawazish Ansari.jpeg").default,
		name: "Mr. Nawazish Ansari",
		desc: "Software Developer",
		link: "/",
	},
];
