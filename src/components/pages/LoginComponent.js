import React, { useState } from 'react';
//useSelector
import { useDispatch,useSelector } from 'react-redux';
import { LoginAction } from '../../redux/actions/AuthActions';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
function LoginComponet(props) {
   // const auth=props.auth; 
    
    const history = useHistory();
    console.log(history);
    // const classes = useStyles();
    const dispatch = useDispatch();
    const authResponse = useSelector(state=>state.userAuth.authResponse);
    
    const [fields, setState] = useState({
        email: "",
        password: "",
    });
    const handleFieldChange = e => {
        setState({
            ...fields,
            [e.target.id]: e.target.value
        })
    }
    const UserLogin = (e) => {
        e.preventDefault();
        console.log(fields);
        dispatch(LoginAction(fields, history));
        console.log(props.auth);
    };
    return (
        <div class="hold-transition login-page">
            <div className="login-box">
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
                    </div>
                    <div className="card-body">
                        
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={UserLogin}>
                            <div className="input-group mb-3">
                                <input type="email" id="email" onChange={handleFieldChange} value={fields.email} className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" id="password" onChange={handleFieldChange} value={fields.password} className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>

                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>

    );

}
// const mapStateToProps = (state) => ({
//     auth: state.userAuth.authResponse
// });
//export default connect(mapStateToProps)(LoginComponet);
export default LoginComponet;