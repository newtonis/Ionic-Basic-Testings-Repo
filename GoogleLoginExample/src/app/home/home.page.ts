import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase';
import { auth } from 'firebase/app';

import {Platform} from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private firebaseAuthentication: FirebaseAuthentication,
    private googlePlus: GooglePlus,
    private afAuth: AngularFireAuth,
    private af: AngularFirestore,
    private platform: Platform
    ) {

      //if (this.is_local()){ 
      if (this.platform.is("android")){
        
        console.log("runing in android");

        googlePlus.login({
          'webClientId': '595783418414-hea8p6gl93dnmiu67f0kt917tnpvjvm6.apps.googleusercontent.com',
          'offline': true
        }).then((obj) => {
            if (!firebase.auth().currentUser) {
                firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
                .then((success) => {
                  console.log("signInWithCredential successful");
                })
                .catch((gplusErr) => {
                  console.log("GooglePlus failed error="+gplusErr);
                });
            }
        }).catch( (msg) => {
          console.log("Gplus signin failed error=" + msg);
        });
      }else if(this.platform.is("desktop")){
          console.log("runing in desktop");

          var provider = new auth.GoogleAuthProvider();

          this.afAuth.signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential;
            // The signed-in user info.
            var user = result.user;

            console.log("Signed in user=" + user.displayName + " token=" + token.providerId);
            // ...
          }).catch(function(error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log("Error in login = " + errorCode);
          });
      }
        //}else{
        //    console.log("no device");
            //this.afAuth.
        //} 
  }

  /*is_local(){ // determina si es localhost me parece
    if( /^file:\/{3}[^\/]/i.test(window.location.href) ){
        return true;
    }
    return false;
  }*/

}
