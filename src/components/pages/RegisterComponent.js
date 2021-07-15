import React, { useState } from "react";
//import { Button, TextField, Card } from "@material-ui/core";
//import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//import { useStyles } from "../../styles/styles";
//import { Link } from "react-router-dom";
//useSelector
import { useDispatch, } from 'react-redux';
import { RegisterAction } from '../../redux/actions/AuthActions';
function RegisterComponent() {
    //const classes = useStyles();
    const dispatch = useDispatch();
    //const authResponse = useSelector(state=>state.userAuth.authResponse);
    const [fields, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",

    });
    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value
        })
    }
    const UserRegister = (e) => {
        e.preventDefault();
        const passwordMatch = checkPasswordMatch(fields.password, fields.password_confirmation);
        if (passwordMatch === true) {
            alert('passwords dont match. please check your password again');
            return;
        }
        dispatch(RegisterAction(fields));
    };
    const checkPasswordMatch = (password, password_confirmation) => {
        return password !== password_confirmation ? true : false;
    }


    return (
        <form onSubmit={UserRegister}>
            <h3>Register</h3>

            <div className="form-group">
                {/* <label>First name</label> */}
                <input type='text' name='first_name' id="first_name" onChange={handleFieldChange} value={fields.first_name} className='form-control' placeholder="First name" required />
            </div>

            <div className="form-group">
                {/* <label>Last name</label> */}
                <input type='text' name='last_name' id="last_name" onChange={handleFieldChange} value={fields.last_name} className='form-control' placeholder="Last name" required />
            </div>
            <div className="form-group">
                {/* <label>Phone Number</label> */}
                <input type='text' name='phone_number' id="phone_number" onChange={handleFieldChange} value={fields.phone_number} className='form-control' placeholder='Phone number' required />
            </div>

            <div className="form-group">
                {/* <label>Email address</label> */}
                <input type='text' name='email' id="email" onChange={handleFieldChange} value={fields.email} className='form-control' placeholder='Email' required />
            </div>

            <div className="form-group">
                {/* <label>Password</label> */}
                <input type='password' name='password' id="password" onChange={handleFieldChange} value={fields.password} className='form-control' placeholder='Password' required />
            </div>
            <div className="form-group">
                {/* <label>Password</label> */}
                <input type='password' name='password_confirmation' id="password_confirmation" onChange={handleFieldChange} value={fields.password_confirmation} className='form-control' placeholder='password_confirmation' required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Register</button>
            {/* <p className="forgot-password text-right">
                Already registered <Link to="/Login">Login?</Link>
            </p> */}
        </form>
    );

}
export default RegisterComponent;