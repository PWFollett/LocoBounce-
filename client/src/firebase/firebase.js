import * as firebase from 'firebase';
import { devConfig } from './config';
console.log(process.env)
firebase.apps.length && firebase.initializeApp(devConfig);
// Initialize Firebase
firebase.initializeApp(devConfig);
const auth = firebase.auth();
export {
    auth
}