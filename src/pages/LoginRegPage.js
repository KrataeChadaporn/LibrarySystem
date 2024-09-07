import React, { useState } from 'react'; // Import useState from React
import axios from 'axios'; // Import axios for HTTP requests
import styled from 'styled-components'; // Import styled-components for styling
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth_context'; // Import auth context


function LoginReg({ className }) {
    const navigate = useNavigate(); // Create a navigate instance
    const { login } = useAuthContext(); // Use the auth context's login function

    // State for login inputs
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPhone, setLoginPhone] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    // State for registration inputs
    const [regEmail, setRegEmail] = useState('');
    const [regName, setRegName] = useState('');
    const [regAddress, setRegAddress] = useState('');
    const [regPhone, setRegPhone] = useState('');
    const [regMessage, setRegMessage] = useState('');

   // Handle login form submission using GET request
const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.get(`http://localhost:8900/login`, {
            params: {
                email: loginEmail,
                phone: loginPhone,
            },
        });
        
        if (response.data && response.data.id) {
            // Assuming `id` is the customerId being returned from the backend
            login(response.data.id); // Use the customerId in the Auth context
            setLoginMessage('Login successful');
            console.log("Logged in customer ID:", response.data.id); // Debug log
            navigate('/'); // Redirect to home page on success
        } else {
            setLoginMessage('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error("Login error:", error); // Log the error for debugging
        setLoginMessage('Login failed. Please check your email and phone number.');
    }
};


    // Handle registration form submission using POST request
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8900/customers', {
                email: regEmail,
                name: regName,
                address: regAddress,
                phone: regPhone,
            });
            setRegMessage(response.data); // Show registration success message
        } catch (error) {
            setRegMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className={className}>
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Login</header>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={loginEmail} 
                        onChange={(e) => setLoginEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter your phone number" 
                        value={loginPhone} 
                        onChange={(e) => setLoginPhone(e.target.value)} 
                    />
                    <input type="submit" className="button" value="Login" />
                </form>
                <p>{loginMessage}</p>
                <div className="signup">
                    <span>Don't have an account? <label htmlFor="check">Signup</label></span>
                </div>
            </div>

            <div className="registration form">
                <header>Signup</header>
                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        value={regEmail} 
                        onChange={(e) => setRegEmail(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Create a username" 
                        value={regName} 
                        onChange={(e) => setRegName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter your address" 
                        value={regAddress} 
                        onChange={(e) => setRegAddress(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        placeholder="Enter your phone number" 
                        value={regPhone} 
                        onChange={(e) => setRegPhone(e.target.value)} 
                    />
                    <input type="submit" className="button" value="Signup" />
                </form>
                <p>{regMessage}</p>
                <div className="signup">
                    <span>Already have an account? <label htmlFor="check">Login</label></span>
                </div>
            </div>
        </div>
    );
}


export default styled(LoginReg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 450px;
  max-height: 500px;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;

  
  
  .registration {
    margin: -20px 0px;
    display:flex;
    justify-content: center;
    
    display: none;
  }
  
  #check:checked ~ .registration {
  
    display: block;
  }
  
  #check:checked ~ .login {
    display: none;
  }
  
  #check {
    display: none;
  }
  
  .form {
   
    padding: 3rem;
    text-align: center;
  }
  
  .form header {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;
  }
  
  .form input {
    height: 40px;
    width: 100%;
    padding: 10px 20px;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: 0.3s ease-in-out;
  }
  
  .form input:focus {
    border-color: #009579;
    box-shadow: 0 0 8px rgba(0, 149, 121, 0.2);
  }
  
  .form input.button {
    color: #fff;
    background: linear-gradient(135deg, #009579, #006653);
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.4s;
    border: none;
    border-radius: 8px;
    padding: 15px;
  }
  
  .form input.button:hover {
    background: linear-gradient(135deg, #007e66, #004d3b);
    box-shadow: 0 4px 15px rgba(0, 149, 121, 0.2);
  }
  
  .signup {
    font-size: 1rem;
    color: #555;
  }
  
  .signup label {
    color: #009579;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .signup label:hover {
    color: #006653;
    text-decoration: underline;
  }

  /* Customizing the navbar appearance */
  .navbar {
    background-color: #fff;
    padding: 1rem 2rem;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;
  }
  
  .navbar .login-btn {
    color: #009579;
    font-size: 1rem;
    font-weight: bold;
  }
  
  /* Adding a smooth transition effect to the form container */
  .form-container {
    transition: all 0.5s ease-in-out;
  }
`;
