import * as ActionTypes from '../ActionTypes';
import { RegisterUserService, LoginUserService, } from '../../services/AuthService';

export const RegisterAction = (credentials) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        RegisterUserService(credentials).then((res) => {
            console.log(res);
            if (res.hasOwnProperty('success') && res.success === true) {
                dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
            } else if (res.hasOwnProperty('success') && res.success === false) {
                dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}

export const LoginAction = (credentials, history) => {
    return (dispatch) => {
        dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
        dispatch({ type: ActionTypes.LOADING });
        LoginUserService(credentials).then((res) => {
            if (res.hasOwnProperty('success') && res.success === true) {
                localStorage.setItem('token', res.token)
                //console.log(localStorage.getItem('token'));
                dispatch({ type: ActionTypes.LOGIN_SUCCESS ,res});
               // history.push('/');
            } else if (res.hasOwnProperty('success') && res.success === false) {
                dispatch({ type: ActionTypes.LOGIN_ERROR, res });
            }
        }, error => {
            dispatch({ type: ActionTypes.CODE_ERROR, error })
        })
    }
}
