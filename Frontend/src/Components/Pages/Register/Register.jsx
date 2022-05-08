import React, { useEffect, useState } from "react";
import clsx from 'clsx';
import { connect, useDispatch } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

// DESIGN
import { Button, TextField, Typography,InputAdornment, IconButton } from "@material-ui/core";

// STYLES
import { RegisterWrapper, RegisterBox, useStyles } from "./Register.style";
import LoaderButton from 'Components/Commons/Loader/LoaderButton';

import { Visibility, VisibilityOff } from "@material-ui/icons";
import { MODAL_TYPES } from "Helpers/Constants";
// CONSTANTS
import { URL_DASHBOARD, URL_LOGIN } from "Helpers/Paths";

// REDUX
// import { RegisterUser } from "Redux/Auth/Actions";

function Register(props) {
    let [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [names, setNames] = useState('');
    const [userName, setUserName] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        checkIfAlreadyLoggedIn();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var details = {
            'name':names,
            'userName':userName,
            'email': email,
            'password': password,
        };
        try {
            setLoading(true);
            let response;
            response = await axios.post("http://localhost:5000/user/sign-up",details)
            console.log("response:",response.data);
            setEmail('');
            setPassword('');
            setUserName('');
            setNames('');
            props.history.push(URL_LOGIN);
            setLoading(false);
        }
        catch (error) {
            // store.dispatch(showToast(error.message && error.message, null));
            setLoading(false);
            console.log(
                "TCL ~ file: Drawer.jsx ~ line 25 ~ formSubmit ~ error",
                error
            );
        }
    };

    function checkIfAlreadyLoggedIn() {
        if (props.isLoggedIn)
            props.history.push(URL_DASHBOARD)
    }

    return (
        <RegisterWrapper className="flexs">
            <RegisterBox className="box">
                <Typography className={classes.heading} align='left' variant="h6" gutterBottom>
                    <b>Sign Up</b>
                </Typography>
                <form className={classes.root} onSubmit={handleSubmit} noValidate>
                    <div className="form-container">
                        <div className={clsx("form-item", classes.division)}>
                            <TextField
                                name="names"
                                variant="filled"
                                type="text"
                                fullWidth
                                placeholder="Name"
                                value={names}
                                onChange={e => setNames(e.target.value)}
                            />
                        </div>
                        <div className="form-item" style={{ marginRight: "0px" }}>
                            <TextField
                                placeholder="UserName"
                                variant="filled"
                                type={"text"}
                                fullWidth
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                            />
                           
                        </div>
                    </div>
                    <div className="form-container">
                        <div className={clsx("form-item", classes.division)}>
                            <TextField
                                name="email"
                                variant="filled"
                                type="email"
                                fullWidth
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-item" style={{ marginRight: "0px" }}>
                            <TextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Password"
                                variant="filled"
                                type={showPassword ? "text" : "password"}
                                fullWidth
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                           
                        </div>
                    </div>
                    <div className="form-forgot">
                        <div className="remember">
                            </div>
                            <div className="forgot">
                            <Typography align='left' className={classes.forgotButton}>
                                <Link to="/login" className={"forgot-password"}>Sign In?</Link>
                            </Typography>
                            </div>
                    </div>
                    <div className="button-container">
                        <LoaderButton
                            type="submit"
                            // width={"540px"}
                            width="100%"
                            className={"btn submit-btn-item"}
                            variant="contained"
                            loading={loading}
                        >
                            Register
                        </LoaderButton>

                    </div>
                </form>
            </RegisterBox>
        </RegisterWrapper >
    )
}

const mapReduxStateToProps = (state) => ({
    isLoggedIn: state.Auth.isLoggedIn,
})

export default connect(mapReduxStateToProps)(withRouter(Register));