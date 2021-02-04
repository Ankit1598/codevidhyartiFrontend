import axios from "axios";

function loadScript(src) {
	if (!document.querySelectorAll(`script[src="${src}"]`).length > 0) {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	} else {
		return true;
	}
}

async function displayRazorpay(
	coursePrice,
	courseName,
	uid,
	setCurrentUser,
	db
) {
	const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

	if (!res) {
		alert("Razorpay SDK failed to load. Are you online?");
		return;
	}
	const currentUser = await db
		.collection("users")
		.doc(uid)
		.get()
		.then((doc) => {
			return {
				uid: doc.data().uid,
				email: doc.data().email,
				newUser: doc.data().newUser,
				name: doc.data().name,
				number: doc.data().number,
			};
		});
	setCurrentUser(currentUser);

	if (currentUser.newUser) coursePrice += 250;
	const data = { amount: coursePrice, name: courseName };

	const result = await axios.post(
		`${process.env.REACT_APP_SERVER}/payment`,
		data
	);

	if (!result) {
		alert("Server error. Are you online?");
		return;
	}

	const { amount, id: order_id, currency } = result.data;

	const options = {
		key: process.env.REACT_APP_RAZORPAY_KEY,
		amount: amount.toString(),
		currency: currency,
		name: courseName,
		description: "Course By: CodeVidhyarti",
		image: `${process.env.REACT_APP_SERVER}/logo.png`,
		order_id: order_id,
		handler: async function (response) {
			// const data = {
			// 	orderCreationId: order_id,
			// 	razorpayPaymentId: response.razorpay_payment_id,
			// 	razorpayOrderId: response.razorpay_order_id,
			// 	razorpaySignature: response.razorpay_signature,
			// };
			db.collection("users").doc(currentUser.uid).set(
				{
					newUser: false,
				},
				{ merge: true }
			);
		},
		prefill: {
			name: currentUser.name,
			email: currentUser.email,
			contact: currentUser.number,
		},
		notes: {
			address: "CodeVidhyarti",
		},
		theme: {
			color: "#5274ff",
		},
	};

	const paymentObject = new window.Razorpay(options);
	paymentObject.open();
}

export default displayRazorpay;
