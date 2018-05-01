/**
 * @file SpecialtiesList.tsx
 * 
 
 * Name: SpecialtiesList.tsx
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
import {SpecialtyInterface} from '../res/data/specialties';
import SpecialtyItem from './SpecialtyItem';
import {List} from 'material-ui/List';

export interface Props {
  specialties: SpecialtyInterface[];
}

export interface State {

}

export default class Specialties extends React.Component<Props, State>{

  constructor(props){
    super(props);

  }
  
  render(){
    const {specialties} = this.props;
    return ( 
      <div style={{backgroundColor:"#fff", paddingTop:50}}>
        <div style={{marginTop:'15px',textAlign:'center'}}>
          <a href="https://www.milsuite.mil/book/groups/navy-medical-service-corps" target="_system">
            MSC Corps MilSuite Page Link (requires CAC login)
          </a>
        </div>
        <List>
          {specialties.map(specialty => {
            return <SpecialtyItem key={specialty.id} specialty={specialty} />
          })}
        </List>
      </div>
    );
  }
}