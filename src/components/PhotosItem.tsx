/**
 * @file PhotosItem.tsx
 * 
 
 * Name: PhotosItem.tsx
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
import { withRouter } from 'react-router-dom';
import {PhotosInterface} from '../res/data/photos';
import {ListItem} from 'material-ui/List';

export interface Props {
  photos: PhotosInterface;
}

export interface State {

}

class PhotosItem extends React.Component<Props, State>{
  public state = {
    open : false
  };
  constructor(props){
    super(props);
  }
  /**
   * 
   * 
   * @param {any} content 
   * @returns 
   * @memberof NewsContentComponent
   */
  createContent(content){
    return {__html: content};
  }
  /**
   * 
   * 
   * @param {any} photo 
   * @returns 
   * @memberof PhotosItem
   */
  itemImage(photo){
    return ( 
      <figure>
        <img style={{width:'100%'}} src={'http://www.navy.mil/management/photodb/webphoto/web_' + photo.src.substr(37)} />
        <figcaption
          style={{width:'100%', textAlign:'center', paddingTop:10}}
          dangerouslySetInnerHTML={this.createContent(photo.title)}>
        </figcaption>
      </figure>
    );
  }
  /**
   * 
   * 
   * @param {any} props 
   * @memberof PhotosItem
   */
  linkToPhotoContent(props){
    props.history.push('/around-the-globe-content/'+props.photos.id);
  }
  render(){
    const {photos} = this.props;
    const listStyle = {
      padding : "10px 5px",maxWidth:'600px',margin:'0 auto'
    }
    return (
      <div style={listStyle}>
        <ListItem primaryText={this.itemImage(photos)} onTouchTap={()=>this.linkToPhotoContent(this.props)}/>
      </div>
    );
  }
}


export default withRouter(PhotosItem);