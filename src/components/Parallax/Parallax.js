/**
 * Libraries
 */

import React,{
    Component
 } from 'react';
 
 /**
  * Components
  */
import Stars from './Stars/stars';
 
 /**
  * Styles
  */
 
import './parallax.scss';

import Text from './Text/text'
 
 /**
  * App component definition and export
  */
 export class Parallax extends Component {
 
    /**
      * Constructor
      */
 
     constructor(props) {
       super(props);
   }

 
    render(){
       return(
            <div className="main">
               <div className="backgroundBox">
                  <Stars/> 
                  <div className="logo">
                     <Text/>
                  </div>
                  <div className="starsRight"/>
               </div>
               <div className="text">
                  <h1>Text</h1>
                  <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <br/>
               </div>
               <div className="backgroundBox2">
               <div className="text">
                  <h1>Text</h1>
                  <div>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
               </div>
              </div>
            </div>
       );
    }
 }
 
 export default Parallax;
 