/**
 * @file DetailingPage.tsx
 * 
 
 * Name: DetailingPage.tsx
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
import DetailingContainer from '../containers/DetailingList';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  params;
}

export interface State {
  
}

class Detailing extends React.Component<Props, State>{
  constructor(props,state){
    super(props,state);
  }
  componentWillMount(){
    this.props.setPageTitle("Detailing");
  }
  // putting this here in case it is necessary to add it back in.
  detailingContainer(){
    return (
      <DetailingContainer />
    )
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="Detailing" />
        <div style={{backgroundColor:"#fff",width:'100%',padding:'50px 20px 10px'}}>
          <h3>Key Contacts</h3>
          <div>
            <h4>Community Management</h4>
            <div>
              <p>
                MSC Community Manager <br />
                <b>CDR Raymond Bristol</b> <br />
                BUPERS, Millington, TN <br />
                901-874-2370  DSN 882 <br />
                Email: <a href="mailto:Raymond.bristol@navy.mil" target="_system">Raymond.bristol@navy.mil</a>
              </p>
            </div>
          </div>
          <div>
            <h4>Officer Assignment and Placement</h4>
            <div>
              <p>
                <b>MSC Detailers</b> <br />
                PERS-4415, Millington, TN <br />
              </p>
            </div>
            <div>
              <p>
                Head/HCCS:  <b>CAPT Jody Dreyer</b> <br />
                901-874-3756  DSN: 882 <br />
                Email: <a href="">jody.dreyer@navy.mil</a>
              </p>
            </div>
            <div>
              <p>
                HCA: <b>CDR Rona Green</b>
                901-874-4120 DSN: 882 <br />
                Email: <a href="">rona.green@navy.mil</a> 
              </p>
            </div>
            <div>
              <p>
                HCS: <b>LCDR Chuck Wilhite</b> <br />
                901-874-4115  DSN 882 <br />
                Email: <a href="">charles.wilhite@navy.mil</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detailing);