import React from "react";
import LazyLoader from '@loadable/component'

import { URL_DASHBOARD} from "Helpers/Paths";

import DashboardIcon from '@material-ui/icons/Dashboard';

export default  [
    {
        path        :   "/",
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard')),
    }, {
        path        :   URL_DASHBOARD,
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard')),
        sidebar     : {
            name    : "Dashboard",
            icon    :  <DashboardIcon/>
        }
    }
]
