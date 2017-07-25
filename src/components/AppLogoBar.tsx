/**
 * @file AppLogoBar.tsx
 * 
 
 * Name: AppLogoBar.tsx
 * 
 *
 * Modified by Daniel Gilfoy <daniel.gilfoy@tee2.org> on 7/25/2017.
 *
 * Navy MSC Cordova App
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */ 
import * as React from 'react';

const logoImg = require("../res/images/ui/mscLogo.png");

export interface Props {
  hasPaddingTop: boolean;
}

export interface State {}

export default class AppLogoBar extends React.Component<Props, State>{
  render(){
    const logoHeaderWrapper = {
      width:'100%',
      backgroundColor: '#000',
      padding: '50px 0 0'
    }
    const logoHeaderWrapperNoTopPadding = {
      width:'100%',
      backgroundColor: '#000',
      padding: '0'  
    }
    const logoWrapper = {
      maxWidth : 245,
      margin : '0 auto'
    }
    const logoWrapperPaddedTop = {
      maxWidth : 245,
      margin : '0 auto',
      paddingTop: 10  
    }
    const {hasPaddingTop} = this.props;
    return (
      <div>
         <div style={(hasPaddingTop) ? logoHeaderWrapper : logoHeaderWrapperNoTopPadding}>
          <div style={(hasPaddingTop) ? logoWrapper : logoWrapperPaddedTop}>
            <img src={logoImg}/>
          </div>
        </div>
      </div>
    );
  }
}