// CORE
import React from 'react';

// USER DEFINED
import Routes from "Routes/Route";
import { ContentWrapper } from "./Website.style";
import Dashboard from './Dashboard/Dashboard';

import { useSelector } from 'react-redux';



function Website(props){
	const isLoggedIn = useSelector(state => state.Auth.isLoggedIn);

    return (
        <React.Fragment>
            <ContentWrapper>
                {
                    isLoggedIn ?
                        <LoggedInComponents />
                        :
                        <Routes />
                }
           </ContentWrapper>
        </React.Fragment>
    )
	// return(
	// 	<React.Fragment>
	// 		<ContentWrapper>
	// 			{/* <Dashboard /> */}
	// 			<Routes />
	// 		</ContentWrapper>
	// 	</React.Fragment>
	// )
}

function LoggedInComponents(props) {
    return (
        <>
           <ContentWrapper isLoggedIn={true}>
                    <Routes />
                </ContentWrapper>

        </>
    )
}

export default Website;
