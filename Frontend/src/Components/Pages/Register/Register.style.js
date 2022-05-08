import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import { responsive } from 'Styles/Constants';

export const RegisterWrapper = styled.div`
    height  : calc(100vh - 30px);
    width   : 100%;
`

export const RegisterBox = styled.div`
    width: 100%;
    padding: 30px 145px 2px 145px;
    ${responsive.MOBILE`
          width : 95% !important;
          padding: 30px 0px 0px 25px !important;
      `}
    ${responsive.PHABLET`
          width : 93%;
          padding: 30px 0px 0px 25px;
      `}
    
    .logoWrapper {
        width: 100%;
        display: flex;
        margin-bottom: 35px;
        justify-content: space-between;
        flex-shrink: 0;
  ${responsive.MOBILE`
        margin-bottom: 0px !important;
    `}
  ${responsive.PHABLET`
        margin-bottom: 25px;
    `}
      a {
        font-size: 24px;
        font-weight: 300;
        line-height: 1;
        text-transform: uppercase;
      }
      a img {
        height: 55px;
        ${responsive.MOBILE`
        height: 32px !important;
    `}
  ${responsive.PHABLET`
  height: 42px;
    `}
      }
      img {
        height: 50px;
        ${responsive.MOBILE`
        height:32px !important;
        margin-bottom: 25px !important;
    `}
  ${responsive.PHABLET`
  height:42px !important;
        margin-bottom: 25px;
    `}
      }
    }

    .form-container {
        margin  : 50px auto -28px;
        width   : 100%;
        display: flex;
        ${responsive.MOBILE`
          // margin  : 150px auto -28px !important;
          margin  : auto auto -28px !important;
            `}
        ${responsive.PHABLET`
          // margin  : 0px auto -28px;
          margin  : auto auto -28px;
        `}
        justify-content: space-between;
        ${responsive.MOBILE`
                  flex-direction:column !important;
            `}
        ${responsive.PHABLET`
        flex-direction:column;
          `}
        .form-item {
            margin: 18px 15px 25px 0px;
            width: 100%;
            ${responsive.MOBILE`
            margin: 10px 0px 15px 0px !important;
            `}
            ${responsive.PHABLET`
            margin: 10px 0px 15px 0px;
              `}
        }
    }
    .form-forgot {
      width:100%;
      display: flex;
      justify-content: space-between;
      ${responsive.MOBILE`
      margin-top: 25px !important;
      `}
      ${responsive.PHABLET`
      margin-top: 25px;
              `}
    }
    .remember {
      width:49%;
    }
    .forgot {
      width:49%;
      ${responsive.MOBILE`
      display:flex !important;
      flex-direction:row-reverse !important;
`}
${responsive.PHABLET`
display:flex !important;
flex-direction:row-reverse;
        `}
    }
    .remember-me-and-forgot-pass {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:10px;
        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #1C1B1B;
          border-color: #1C1B1B;
        }
        a {
          text-decoration: none;
          color: #D85767;
          font-weight: 500;
        }
      }
    .button-container {
        text-align      : center;
        font-size: 14px;
        margin:auto;
        width:540px;
        ${responsive.MOBILE`
        margin: 40px 20px 0px 0px !important;
        width:100%;
  `}
  ${responsive.PHABLET`
  margin: 40px 20px 0px 0px;
  width:100%;
          `}
        .btn {
            min-width   : 125px;
            min-height  : 45px;
        }
        .submit-btn-item {
            width: max-content;
            // width: 540px;
            width:100%;
            ${responsive.PHABLET`
                // width: 520px;
                width:100%;
          `}
            height: 60px;
            background-color: #D85767;
            border: none;
            font-size: 16px;
            border-radius: 10px;
        }
        .terms-and-disclaimer {
            display: flex;
            justify-content: center;
            a {
                text-decoration: none;
            color:  #D85767;
            }
      }
    }
`
export const useStyles = makeStyles((theme) => ({
  heading: {
    color: "#1C1B1B",
    fontSize: "18px",
    lineHeight: "20px",
    "@media (max-width: 449px)": {
      fontSize: "30px",
      lineHeight: "26px",
    }
  },
  subHeading: {
    color: "#AAAAAA",
    "@media (max-width: 449px)": {
      fontSize: "1.175rem",
    }
  },
  rememberButton: {
    '& .MuiTypography-body1': {
      fontSize: "14px",

    }
  },
  forgotButton: {
    fontSize: "14px",
    marginTop: "10px",
    "& .forgot-password": {
      textDecoration: "none",
      color: "#1C1B1B"
    }
  },
  btnItem: {
    backgroundColor: "#D85767",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#D85767",
    }
  },
  buttons: {
    backgroundColor: "#C9C9C9 !important",
    color: '#1C1B1B !important',
    '&:hover': {
      backgroundColor: "#C9C9C9 !important",
      color: '#1C1B1B !important',
    },
    '& .MuiButton-contained .Mui-disabled': {
      backgroundColor: '#D85767',
    }
  },
  root: {
    marginTop: '-25px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0px',
    },
    // "@media (max-width: 449px)": {
    //   marginTop: '-45px',
    // },
    '& .MuiFilledInput-root': {
      backgroundColor: "#FFFFFF",
    },
    '& .MuiFilledInput-underline:before': {
      borderBottom: "none"
    },
    '& .MuiFilledInput-underline': {
      border: "1px solid #DDDBE8",
      borderRadius: "12px",
      height: "50px",
      [theme.breakpoints.down('xs')]: {
        height: "60px",
      },
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: "none"
    },
    '& .MuiFilledInput-underline:hover': {
      border: "1px solid #DDDBE8",
      borderRadius: "12px",
    },
    'input: -internal - autofill - selected': {
      backgroundColor: "#DDDBE8 !important"
    },
    '& .MuiFilledInput-input': {
      padding: "0px 12px 0px",
      '&:-webkit-autofill': {
        '-webkit-box-shadow': '0 0 0 100px #FFFFFF inset',
        '-webkit-text-fill-color': '#1C1B1B'
      }
    },
    '& .MuiFilledInput-input:-webkit-autofill': {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      borderBottomLeftRadius: "inherit",
      borderBottomRightRadius: "inherit",
    }

  }
}));

export const OurPartnerBox = styled.div`
    background-color: #D85767;
    flex: 1 1 auto;
    padding: 10px 145px 50px 145px;
    position: fixed;
    height: 235px;
    bottom: 0;
    left: 0;
    right: 0;
     ${responsive.MOBILE`
                 padding: 10px 25px 50px 25px;
                 position: fixed;
            `}
            ${responsive.PHABLET`
            padding: 10px 25px 50px 25px;
            position: fixed;
          `}
    h1 {
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom:0;
  }

  .flickity-prev-next-button.previous {
    left:-10px;
  }
.flickity-prev-next-button.next {
  right:-10px;
}
  .carousel {
    margin-top:20px;
    z-index:1;
}

.carousel-cell {
  width: 30%;
  height: 110px;
  margin-right: 10px;
  background: #D85767;
  border-radius: 5px;
  //  display: flex;
  align-items: center;
  // justify-content: center;
}
.carousel-cell-image {
  // display: block;
  max-height: 100%;
  height:80%;
 ${responsive.MOBILE`
                  width: 88%;
            `}
            ${responsive.PHABLET`
            width: 88%;
          `}
}
.carousel-cell.is-selected {
  background: #FFFFFF;
}

/* cell number */
.carousel-cell:before {
  // display: block;
  text-align: center;
  // content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}


  .partner-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .partner-container {
      background-color: white;
      width: 350px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      margin-top: 30px;
      .image-container img {
        height: 80px;
      }
    }
  }

  .hexagons-img {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    top:215px;
    color: white;
    p {
      text-align: center;
    }
  }

`;