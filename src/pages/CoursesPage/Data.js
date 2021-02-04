export const heroData = {
	title: "Our Courses",
	breadcrumb: "Courses",
};

export const courses = [
	{
		id: 1,
		img: require("../../images/courses/Python/card.png").default,
		topLine: "Python",
		name: "Python Programming",
		desc:
			"Aid your journey right from the beginning to the very end in becoming the most skilled software engineers across the globe.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/python",
	},
	{
		id: 2,
		img: require("../../images/courses/C C++/card.png").default,
		topLine: "C/C++",
		name: "C/C++ Fundamentals ",
		desc:
			"Even if you are going to build web apps or fancy websites, learning C will help you understand how software and hardware actually interact.",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/c_c++",
	},
	{
		id: 3,
		img: require("../../images/courses/webdev/card.jpg").default,
		topLine: "WebDev",
		name: "Web Development ",
		desc:
			"Make REAL web applications using cutting-edge technologies and Create responsive, accessible, and beautiful layouts YOURSELF!!",
		oldPrice: "2999",
		newPrice: "1499",
		slug: "/course/webdev",
	},
];
