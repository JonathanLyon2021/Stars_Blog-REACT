import GreenNorthStarsLogo from "./images/GreenNorthStarsLogo.png";
import StarsHistory from "./images/StarsHistory.jpg";
import StarsHistory2 from "./images/StarsHistory2.jpg";


const About = () => {
	return (
		<>
			<div className="History">
				<img src={GreenNorthStarsLogo} width="250" height="200"/>
				<img src={StarsHistory} width="475"/>
				<img src={StarsHistory2} width="350"/>

				<h6>
					Here is some Dallas Stars history! From 1966 starting out in
					Minnesota North Stars territory and then making the move
					south of the border to be the Dallas Stars in 1991 -
					present.
				</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>

				<p>
					LikedLorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</>
	);
};

export default About;
