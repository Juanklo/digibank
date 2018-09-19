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
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from 'components/CustomButtons/Button.jsx';

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import textStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";

import image from "img/social_facebook.png";
import image2 from "img/social_linkedin.png";
import image3 from "img/social_tweet.png";
import image4 from "img/brand_chevrolet.png";
import image5 from "img/brand_buick.png";
import image6 from "img/brand_gmc.png";
import image7 from "img/brand_cadillac.png";


const customStyles = {

  color: "white",

}

class AppFooter extends React.Component {

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
      <div style={{backgroundColor:"#333F50", width: "100%"}}>

        <div>
          <br/>
          <div>
          <Grid container justify="center" spacing={8}>
            <Grid item xs={3}>
              <Grid container justify="center" spacing={40}>
                <Grid item xs={2} >
                </Grid>
                <Grid item xs={2} >
                  <img src={image}/>
                </Grid>
                <Grid item xs={2} >
                  <img src={image2}/>
                </Grid>
                <Grid item xs={2} >
                  <img src={image3}/>
                </Grid>
                <Grid item xs={1} >
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid container justify="flex-start" spacing={8}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={6}>
                  <img src={image4} style={{height:"60%"}}/>
                  <span /> <span />
                  <img src={image5} />
                  <span /> <span />
                  <img src={image6} style={{height:"40%"}}/>
                  <span /> <span />
                  <img src={image7} style={{height:"60%"}}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </div>
          <hr width="85%" />
          <div>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={3}>
              <h3 style={customStyles}>GM Financial Leader</h3>
            </Grid>
            <Grid item xs={3}>
              <h3 style={customStyles}>AmeriCredit Dealer</h3>
            </Grid>
            <Grid item xs={3}>
              <h3 style={customStyles}>Chevroletfs.com.co</h3>
            </Grid>
          </Grid>
          </div>
        </div>

      </div>
    );
  }
}

export default withStyles(loginPageStyle,textStyle)(AppFooter);
