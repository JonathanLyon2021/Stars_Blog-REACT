import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './Home';
import Create from "./Create";
import Registration from "./Registration";
import Login from "./Login";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NorthStarsLogo from "./images/WhiteGreyNorthStarsLogo.png";
import About from "./About";


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);

	const toggleEditMode = () => {
		setIsEditMode(!isEditMode);
	};
	const handleLogIn = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<>
		<div className="App">
			<Router>
				<ToastContainer
					position="bottom-center"
					pauseOnFocusLoss={false}
				/>
				<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogIn} />
				<Routes>
						<Route exact path="/" element={<Home/>}/>

						<Route exact path="/edit/:id" element={<Create/>} edit={isEditMode}
								isEditMode={toggleEditMode}/>
								
						<Route path="/create" element={<Create/>} edit={isEditMode}
								isEditMode={toggleEditMode}/>
								
						<Route path="/about" element={<About/>}/>		

						<Route path="/registration" element={<Registration/>}/>
							
						<Route path="/login" element={<Login setIsLoggedIn={handleLogIn}/>}/>
							
						<Route path="/blogs/:id" element={<BlogDetails
								edit={isEditMode}
								isEditMode={toggleEditMode}
							/>}/>
							
						<Route path="*" element={<NotFound />}/>
				</Routes>
			</Router>
 		</div>
			<div className="Footer">
				<Footer/>
			</div>
		</>
	);
}

export default App;
