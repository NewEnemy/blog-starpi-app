import React, { Component } from 'react';
import styles from './Posts.module.css'


export default class FullscreenModial extends Component {
  render() {

    return (
      <div className={styles.GreyOut}>

     
      <div className={styles.FullscreenModial}>
    
        <div onClick={()=>{this.props.closeFunction("close")}}>X close</div>
        <h1>{this.props.modialData.title}</h1>
       <img src={this.props.modialData.image}></img>
        </div>
        </div>
    );
  }
}
