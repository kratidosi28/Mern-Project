import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";



const LoaderButton = ({
  type,
  loading,
  loaderColor = "#686060",
  children,
  disabled,
  buttonColor = "#D85767",
  radius = "4px",
  ...otherProps
}) => {
  const useStyles = makeStyles((theme) => ({
    loader: {
      color: (props) => props.loaderColor,
      width: "0px !important",
      height: "unset !important",
      transition: "all 0.3s",
    },
    show: {
      width: "1em !important",
      marginLeft: "10px",
    },
    button: {
      backgroundColor: otherProps.bg ? otherProps.bg : "#D85767",
      color: otherProps.color ? otherProps.color : '#FFFFFF',
      // (props) => theme.palette.siteblue[props.buttonColor],
      borderRadius: otherProps.borderRadius ? otherProps.borderRadius : "12px",
      // (props) => props.radius
      width: "max - content",
      width: otherProps.width ? otherProps.width : "540px",
      height: otherProps.height ? otherProps.height : "50px",
      border: "none",
      fontSize: "16px",
      minWidth: "125px",
      minHeight: "40px",
      '&:hover': {
        backgroundColor: otherProps.bg ? otherProps.bg : '#D85767',
        color: otherProps.color ? otherProps.color : '#FFFFFF',
      },
      '& .MuiButton-contained .Mui-disabled': {
        backgroundColor: '#D85767',
      }
    },
  }));
  const classes = useStyles({ loaderColor, buttonColor, radius });

  return (
    <Button
      type={type}
      {...otherProps}
      disabled={loading || disabled}
      className={classes.button}
      onClick={otherProps.onConfirm}
      endIcon={
        <CircularProgress className={clsx(classes.loader, { [classes.show]: loading })} />
      }
    >
      {children}
    </Button>
  );
};

export default LoaderButton;
