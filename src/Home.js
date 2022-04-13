import texashockey from "./images/texas-hockey.svg";
import StarsCelebrating from "./images/StarsCelebrating.jpg"
import JonCasey from "./images/JonCaseyNorthStars.jpg"
import NorthStarsLogo from "./images/WhiteGreyNorthStarsLogo.png"
import DallasStarsLogo from "./images/DallasStarsLogo.png";
import BlackoutStarsLogo from "./images/BlackoutStarsLogo.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Home = () => {
	const [blogs, setBlogs] = useState([]);
	const [count, setCount] = useState(0);
	useEffect(() => {
		const blogs = async () => {
			const { data } = await axios.get(
				"http://localhost:8000/api/blogs/"
			);
			console.log(data.blogs);
			setBlogs(data.blogs);
		};

		blogs();
	}, []);
	const title = "Texas Hockey";

	return (
		<>

			<div className="Home">
			<img
						src={StarsCelebrating}
						width="225"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/>
					<> 					 </>
						<img
						src={texashockey}
						width="115"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/>
					<>          	    </>
					<img
						src={NorthStarsLogo}
						width="105"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/>
					<>                    </>
						<img
						src={JonCasey}
						width="250"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/> 
					<img
						src={DallasStarsLogo}
						width="250"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/>
					<img
						src={BlackoutStarsLogo}
						width="250"
						alt="Texas Hockey #2 - Dallas Stars 2021 Logo"
						height="130"
					/>


				<div className="container Body" title="Container Body">
					{blogs.length > 0 &&
						blogs.map(({ title, author, content, _id }, index) => (
							<div className="card my-3" key={index}>
								<div className="card-header">
									Author: {author}
								</div>
								<div className="card-body">
									<h4 className="card-title">{title}</h4>
									<p className="card-text">{content}</p>
									<img
						src={DallasStarsLogo}
						width="150"
						alt="Texas Hockey - Dallas Stars 2021 Logo"
						height="130"
					/>
						
									<Link
										to={`/blogs/${_id}`}
										className="btn btn-primary"
									>
										see more...
									</Link>
								</div>
							</div>
						))}
				</div>
				<header className="App-header">
					

					<h2>Dallas Stars Hockey {title}</h2>
					<button onClick={() => setCount(count + 1)}>Increment</button>
					<p>Liked {count} times</p>
				</header>
			</div>
		</>
	);
};

export default Home;
