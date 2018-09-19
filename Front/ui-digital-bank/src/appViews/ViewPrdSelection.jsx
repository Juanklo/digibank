import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import AppFooter from 'commonViews/AppFooter.jsx'

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import textStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";

import image from "img/prdSel_BG.png";
import image2 from "img/prdSel_bar.png";
import image3 from "img/prdSel_Bars.png";
import image4 from "img/prdSel_Save.png";


class ViewPrdSelection extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }

  render(){
    const { classes, ...rest } = this.props;
    return(
      <div>

        <div className={classes.pageHeader} style={{backgroundImage: "url(" + image + ")", backgroundColor:"white", backgroundSize: "100%", backgroundColor:"white", backgroundRepeat: "no-repeat", backgroundPosition: "top center"}}>

          <div style={{position: "absolute", width: "100%", top: "60%", zIndex:"10", textAlign:"center"}}>

            <div style={{backgroundColor: "#0C5CAA",position: "absolute" ,opacity: "0.85", height:"34%", width:"100%", top:"0%",zIndex:"-10"}}>
            </div>
            <div>
              <img src= {image2}/>
            </div>
            <div>
              <h1 style={{color:"white", fontSize:"52px",fontWeight:"bold"}}>APPLY IN MINUTES</h1>
              <h2 style={{color:"white", fontSize:"40px"}}>FOR SAVINGS ACCOUNT OR TERM DEPOSIT WITH GM FINANCIAL</h2>
            </div>
            <div>
              <GridContainer justify="center" spacing={40}>
                <GridItem xs={3} sm={3} md={3}>
                  <Card style={{backgroundColor:"#DEF2FE"}}>
                    <CardBody>
                      <br/><br/>
                      <img src= {image4} style={{height:"13%"}}/>
                      <h2 style={{color:"#333F50", fontSize:"40px"}}>Savings Account</h2>
                      <br/><br/>
                      <h3 style={{color:"#333F50", fontSize:"25px"}}>Manage your money, do payments and access your deposits easily, safely and faster through our different channels. ¡All services available on mobile, desktop and tablet!</h3>
                      <br/><br/>
                      <Button style={{float:"right", backgroundColor:"#0C5CAA", color:"white",textTransform:"none"}}><h4 style={{fontSize:"22px"}}>Start My Application</h4></Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={3} sm={3} md={3}>
                  <Card style={{backgroundColor:"#DEF2FE"}}>
                    <CardBody>
                      <br/><br/>
                      <img src= {image3} style={{height:"13%"}}/>
                      <h2 style={{color:"#333F50",fontSize:"40px"}}>Term Deposit</h2>
                      <br/><br/>
                      <h3 style={{color:"#333F50",fontSize:"25px"}}>Find the opportunity to invest your money in a safe and stable way. Choose the term and payment periodicity of your interests. ¡Control your investments online!</h3>
                      <br/><br/>
                      <Button style={{float:"right", backgroundColor:"#0C5CAA", color:"white", textTransform:"none"}}><h4 style={{fontSize:"22px"}}>Start My Application</h4></Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <div>
              <AppFooter/>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default withStyles(loginPageStyle,textStyle)(ViewPrdSelection);
