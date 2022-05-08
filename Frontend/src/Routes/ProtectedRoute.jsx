import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { URL_LOGIN } from "Helpers/Paths";

function ProtectedRoute(props) {
	const { children } = props
	const isLoggedIn = useSelector(state => state.Auth.isLoggedIn);
	return (
		<div>
			{
				!isLoggedIn ?
					<Redirect to={URL_LOGIN} />
					: <Fragment>
						{children}
					</Fragment>
			}
		</div>
	)
}

// const mapReduxStateToProps = (state) => ({
// 	isLoggedIn: state.Auth.isLoggedIn,
// })

export default ProtectedRoute;