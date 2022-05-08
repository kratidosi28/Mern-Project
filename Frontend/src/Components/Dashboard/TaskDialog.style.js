import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import { Form } from "formik";

export const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: "#D85767",
    },
    heading: {
        color: "#1C1B1B",
        fontSize: "24px",
        lineHeight: "24px"
    },
    root: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#DDDBE8 !important"
        },
        '& .MuiFilledInput-input': {
            padding: "15px"
        },
        '& .MuiFilledInput-root': {
            backgroundColor: "#FFFFFF",
            paddingTop: "0px"
        },
        '& .MuiFilledInput-underline:before': {
            borderBottom: "none"
        },
        '& .MuiFilledInput-underline': {
            border: "1px solid #DDDBE8",
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: "none"
        },
        '& .MuiFilledInput-underline': {
            border: "1px solid #DDDBE8",
        },
        '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
            borderBottom: "none",
        },
        '& .MuiFilledInput-root:hover': {
            backgroundColor: "#FFFFFF"
        },
        '& .MuiFilledInput-root.Mui-focused': {
            backgroundColor: "#FFFFFF"
        }
    },
    btnItem: {
        width: "max - content",
        width: "40px",
        height: "50px",
        backgroundColor: "#D85767",
        border: "none",
        fontSize: "16px",
        borderRadius: "10px",
        flexGrow: 1,
        marginRight: "20px",
        "&:hover": {
            backgroundColor: "#D85767",
        }
    },
    btnCloseItem: {
        width: "40px",
        height: "50px",
        backgroundColor: "#D85767",
        border: "none",
        fontSize: "16px",
        borderRadius: "10px",
        flexGrow: 1,
        marginRight: "20px",
        "&:hover": {
            backgroundColor: "#D85767",
        }
    },
    buttons: {
        backgroundColor: "#C9C9C9 !important",
        color: '#1C1B1B !important',
        borderRadius: "12px !important",
        width: "max - content",
        width: "100px !important",
        height: "20px !important",
        border: "none !important",
        fontSize: "16px !important",
        minWidth: "125px !important",
        minHeight: "45px !important",
        '&:hover': {
            backgroundColor: "#C9C9C9 !important",
            color: '#1C1B1B !important',
        },
        '& .MuiButton-contained .Mui-disabled': {
            backgroundColor: '#D85767',
        }
    },
    btnAction: {
        "& .css-hlj6pa-MuiDialogActions-root": {
            padding: "18px 8px 8px 8px"
        }
    }
}));

export const FormWrapper = styled(Form)`
	margin	: 0 auto;
	width	: 100%;
	
	 .profile-text {
          	margin-bottom		: 15px;
        }
	
	.image-wrapper {
		cursor : pointer;
		margin 	: 5px auto 15px;
		height 	: 105px;
		width 	: 105px;
		background-size : cover;
		background-position : center;
	}

	.input-wrapper {
		.input-label-wrapper {
			margin : 5px 0;
		}
	}

	.button-wrapper {
		margin-top : 45px;

		.styled {
			width : 200px;
			margin : 0 20px;
		}
	}
	
	 .label {
        font-size               : 13px;
        text-transform  : uppercase;

    }
`
