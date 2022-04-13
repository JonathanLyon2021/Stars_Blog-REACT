import React, {useState} from 'react';
import login from "./actions/login";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState(null);
	const history = useNavigate();

	const submitHandler = async (event) => {
		event.preventDefault();
		if (email && password) {
			console.log(password);
		}
		const result = await login(email, password);
		console.log(result);

		if (result.data) {
			toast.error(result.data[0].msg, {
				position: "bottom-center",
				theme: "dark",
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
		} else {
			localStorage.setItem("userId", result._id);
			localStorage.setItem("userEmail", result.email);
			setIsLoggedIn();
			toast.success("Login Successful", {
				position: "bottom-center",
				theme: "dark",
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
			history("/");
		}
    };
    return ( 
        <> 
        <div>
           <h1 style={{color: "green"}} class="text-center">Login Page</h1>
           <h1 class="text-center" style={{ color: "white" }}>Sign in</h1>
			{message && <h1 style={{ color: "white" }}>{message}</h1>}

			<div className="container">
				<form>
					<div className="form-group">
						<label
							htmlFor="exampleInputEmail1"
							style={{ color: "blue" }}
						>
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							name="email"
							required
							value={email}
							onChange={(eventObj) =>
								setEmail(eventObj.target.value)
							}
						/>
					</div>
					<div className="form-group">
						<label
							htmlFor="exampleInputPassword1"
							style={{ color: "blue" }}
						>
							Password
						</label>
						<input
							type="password"
							className="form-control"
							name="password"
							required
							value={password}
							onChange={(eventObj) =>
								setPassword(eventObj.target.value)
							}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary mt-2"
						onClick={submitHandler}
					>
						Submit
					</button>
				</form>
			</div>
        </div>
        
        </>
     );
}
 
export default Login;