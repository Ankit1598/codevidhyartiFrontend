import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ScrollToTop, Navbar, Footer, Cart } from "./components";
import { Home, Courses, Contact, CourseDetails } from "./pages/";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";

const App = () => {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				db.collection("users")
					.doc(authUser.uid)
					.get()
					.then((doc) => {
						dispatch({
							type: "SET_USER",
							user: {
								uid: doc.data().uid,
								email: doc.data().email,
								newUser: doc.data().newUser,
								name: doc.data().name,
								number: doc.data().number,
							},
						});
					});
				db.collection("orders")
					.doc(authUser.uid)
					.get()
					.then((doc) => {
						dispatch({
							type: "SET_BASKET",
							basket: doc.data().orders,
						});
					})
					.catch(
						dispatch({
							type: "SET_BASKET",
							basket: [],
						})
					);
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
				dispatch({
					type: "SET_BASKET",
					basket: [],
				});
			}
		});
	}, []);

	return (
		<>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/cart' exact component={Cart} />
					<Route path='/courses' exact component={Courses} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/course/:slug' component={CourseDetails} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
};

export default App;
