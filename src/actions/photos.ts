/**
 * @file photos.ts
 * File in charge of setting up the actions necessary for pulling in the photos page
 
 * Name: photos.ts
 * Purpose of this file is to provide various functionality for retrieving the data for the photos page
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
import {schema, normalize} from 'normalizr';
import 'whatwg-fetch';

const photosSchema = new schema.Entity('photos');
const photosArraySchema = new schema.Array(photosSchema);

export interface PhotosInterface{
  id: number;
  title: string;
  content: string;
  src : string;
}

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  }
}

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
function receivePhotos(photosItems) {
  return {
    type: RECEIVE_PHOTOS,
    posts: photosItems,
    receivedAt: Date.now()
  }
}
export const SET_PHOTOS_IDS = 'SET_PHOTOS_IDS'
function setPhotosIds(photosIds) {
  return {
    type : SET_PHOTOS_IDS,
    ids : photosIds
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export default function fetchPhotos() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestPhotos())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    var photosItems = [];
    return fetch('http://www.navy.mil/viewGallery.asp?id=161').then(function(resp){ return resp; }).then(function(response){
        // parse response
        return response.text().then(function(data){
          var oParser = new DOMParser();
          var oDOM = oParser.parseFromString(data, "text/html");
          var htmlItems = oDOM.getElementsByClassName('galleryPhoto');
          Object.keys(htmlItems).map(function(iter){
            if( htmlItems[iter].children !== undefined){
                photosItems.push({
                id : parseInt(iter)+1,
                title : htmlItems[iter].getElementsByClassName('hiddenCap')[0].innerHTML,
                content : htmlItems[iter].getElementsByClassName('imgGall')[0].getAttribute('alt'),
                src : htmlItems[iter].getElementsByClassName('imgGall')[0].src
              });
            }
          });
          let normalizedPhotos = normalize(photosItems, photosArraySchema),
          defaultPhotos = normalizedPhotos.entities.photos,
          defaultPhotosIds = normalizedPhotos.result;
          dispatch(receivePhotos(defaultPhotos));
          dispatch(setPhotosIds(defaultPhotosIds));
          return this;
        });
    });
  }
}