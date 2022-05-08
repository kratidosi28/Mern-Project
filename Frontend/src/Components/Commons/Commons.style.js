import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    rootErrorWithOutLabel: {
        bottom: "- 15px",
        color: "#d32f2f",
        fontSize: "10px",
        left: "10px",
        position: "relative"
    },
    root: {
        '& .MuiFilledInput-root': {
            backgroundColor: "#FFFFFF",
            paddingTop: "0px !important"
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: "none"
        },
        '& .MuiFilledInput-underline': {
            border: "1px solid #DDDBE8",
            borderRadius: "12px"
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: "none"
        },
        '& .MuiFilledInput-underline': {
            border: "1px solid #DDDBE8",
            borderRadius: "12px",
        },
        '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
            borderBottom: "none",
        },
        '& .MuiFilledInput-root:hover': {
            backgroundColor: "#FFFFFF"
        },
        '& .MuiFilledInput-root.Mui-focused': {
            backgroundColor: "#FFFFFF"
        },
        '& div.MuiAutocomplete-root': {
            paddingTop: "0px",
            paddingLeft: "0px"
        },
        '& div.MuiAutocomplete-root.MuiFilledInput-root': {
            paddingTop: "0px",
            paddingLeft: "0px"
        }
    },
    rootAutoComplete: {
        '& div.MuiAutocomplete-root': {
            paddingTop: "0px",
            paddingLeft: "0px"
        },
        '& div.MuiAutocomplete-root.MuiFilledInput-root': {
            paddingTop: "0px",
            paddingLeft: "0px"
        }
    }
}));