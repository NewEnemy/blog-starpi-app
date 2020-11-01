import React, { Component } from 'react';
import styles from './Posts.module.css'


export default class FullscreenModial extends Component {
  render() {

    return (
      <div className={styles.GreyOut}>

     
      <div className={styles.FullscreenModial}>
     
      <div className={styles.closeButton} onClick={()=>{this.props.closeFunction("close")}}>
        <i class="fas fa-times"></i>
        </div>


      <div className={styles.imageContiner}>
      <img src={this.props.modialData.image}></img>
      </div>
   
        </div>
        </div>
    );
  }
}
