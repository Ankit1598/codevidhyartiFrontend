export const homeObjOne = {
	isHero: true,
	bgImg: require("../images/hero.png").default,
	heading: "LEARN  IMPLEMENT  UPSKILL",
	desc:
		"You only have to know one thing, You can learn everything! Anything, Anytime, Anywhere!",
	hasBtn: true,
	btnCaption: "Join For Free",
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
	img: require("../images/about.png").default,
	alt: "About 1",
};
export const homeObjThree = {
	imgStart: true,
	heading:
		"Rule number one: Don’t lose money. Rule number two: Don’t forget rule number one.",
	desc:
		"I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
	hasBtn: true,
	btnCaption: "Coming Soon",
	btnLink: "/",
	start: "",
	img: require("../images/hero_last.jpg").default,
	alt: "About 2",
};

export const featuredCourses = [
	{
		img: require("../images/courses/Python/card.png").default,
		topLine: "Python",
		name: "Python Programming",
		desc:
			"Aid your journey right from the beginning to the very end in becoming the most skilled software engineers across the globe.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/python",
	},
	{
		img: require("../images/courses/C C++/card.png").default,
		topLine: "C/C++",
		name: "C/C++ Fundamentals ",
		desc:
			"Even if you are going to build web applications or fancy web front-end components for the rest of your life, learning C will help you understand how software and hardware actually interact.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/c_c++",
	},
	{
		img: require("../images/courses/webdev/card.jpg").default,
		topLine: "WebDev",
		name: "Web Development",
		desc:
			"Make REAL web applications using cutting-edge technologies and Create responsive, accessible, and beautiful layouts YOURSELF!!",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/webdev",
	},
];

export const experts = [
	{
		img: require("../images/experts/Abhishek Singh.jpg").default,
		name: "Mr. Abhishek Singh",
		desc: "The automated process all your website tasks.",
		link: "/",
	},
	{
		img: require("../images/experts/Nawazish Ansari.jpeg").default,
		name: "Mr. Nawazish Ansari",
		desc: "The automated process all your website tasks.",
		link: "/",
	},
	{
		img: require("../images/experts/Ankit Chaudhari.jpg").default,
		name: "Mr. Ankit Chaudhari",
		desc: "The automated process all your website tasks.",
		link: "/",
	},
	{
		img: require("../images/experts/Ankit Chaudhari.jpg").default,
		name: "Mr. Ankit Chaudhari",
		desc: "The automated process all your website tasks.",
		link: "/",
	},
];

export const coursesCard = [
	{
		img: require("../images/courses/Python/card.png").default,
		topLine: "Python",
		name: "Python Programming",
		desc:
			"Aid your journey right from the beginning to the very end in becoming the most skilled software engineers across the globe.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/python",
	},
	{
		img: require("../images/courses/C C++/card.png").default,
		topLine: "C/C++",
		name: "C/C++ Fundamentals ",
		desc:
			"Even if you are going to build web applications or fancy web front-end components for the rest of your life, learning C will help you understand how software and hardware actually interact.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/c_c++",
	},
	{
		img: require("../images/courses/webdev/card.jpg").default,
		topLine: "WebDev",
		name: "Web Development ",
		desc:
			"Make REAL web applications using cutting-edge technologies and Create responsive, accessible, and beautiful layouts YOURSELF!!",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/webdev",
	},
];

export const courses = [
	{
		slug: "python",
		details: {
			name: "Python",
			oldPrice: "2999",
			newPrice: "1499",
			objective:
				"Python languages can be used in developmental projects. It can speed up the project creation times because python language is easy to read and use. The easy syntax and reduced complexity help the programmer to complete the projects very soon hence they could focus on the logical building sections and this could increase productivity. Due to the simplicity of the python, the maintenance cost of the applications is significantly reduced.",
			outline: {
				"What is Python?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Why do we use it?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where does it come from?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where can I get some?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
			thumbnail: require("../images/courses/Python/card.png").default,
			mentorName: "Mr. Abhishek Singh",
			mentorImg: require("../images/experts/Abhishek Singh.jpg").default,
			mentorDesignation: "UI/UX Designer",
			mentorAbout:
				"Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day",
			mentorSocials: {
				gmail: "dummy@gmail.com",
				github: "https://github.com/AbhiSinghDeveloper/",
				linkedin: "https://www.linkedin.com/abhishek-developer",
			},
		},
	},
	{
		slug: "webdev",
		details: {
			name: "Web Development",
			oldPrice: "2999",
			newPrice: "1499",
			objective:
				"Being a web developer offers benefits most careers cannot. You do not need a college education to be a web developer. Companies will hire you based on your portfolio of sites. Develop A Job is designed to help you build your portfolio and get into your new career field quickly. Pay is based on the knowledge you have, not your education level. Everything you need to learn is available online, free of charge. Many web development jobs allow you to work from anywhere there is an internet connection, even your own home. Because every company and organization needs a website you can work at a variety of places. You can find corporate jobs, non-profit jobs, full-time hours, part-time hours, and even freelance jobs where you work for yourself at your own pace. The position of web developer is in very high demand and the demand continues to grow. A career as a web developer offers stability and long term career viability. The web is probably not going away in your lifetime, and society will always need people to work on it.",
			outline: {
				"What is Python?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Why do we use it?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where does it come from?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where can I get some?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
			thumbnail: require("../images/courses/webdev/card.jpg").default,
			mentorName: "Mr. Ankit Chaudhari",
			mentorImg: require("../images/experts/Ankit Chaudhari.jpg").default,
			mentorDesignation: "UI/UX Designer",
			mentorAbout:
				"Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day",
			mentorSocials: [
				"ankitchaudhari1598@gmail.com",
				"http://github.com/Ankit1598/",
				"https://www.linkedin.com/ankit1598/",
			],
		},
	},
	{
		slug: "c_c++",
		details: {
			name: "C & C++",
			oldPrice: "2999",
			newPrice: "1499",
			objective:
				"Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl male signs his day face waters itself and make be to our itself living. Fish in thing lights moveth. Over god spirit morning, greater had man years green multiply creature, form them in, likeness him behold two cattle for divided. Fourth darkness had. Living light there place moved divide under earth. Light face, fly dry us",
			outline: {
				"What is Python?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Why do we use it?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where does it come from?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
				"Where can I get some?":
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			},
			thumbnail: require("../images/courses/C C++/card.png").default,
			mentorName: "Mr. Nawazish Ansari",
			mentorImg: require("../images/experts/Nawazish Ansari.jpeg").default,
			mentorDesignation: "UI/UX Designer",
			mentorAbout:
				"Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day",
			mentorSocials: [
				"dummy@gmail.com",
				"https://github.com/",
				"https://www.linkedin.com/",
			],
		},
	},
];

export const heroAbout = {
	title: "About Us",
	breadcrumb: "About",
};

export const heroCourse = {
	title: "Our Courses",
	breadcrumb: "Courses",
};

export const heroContact = {
	title: "Contact Us",
	breadcrumb: "Contact",
};
