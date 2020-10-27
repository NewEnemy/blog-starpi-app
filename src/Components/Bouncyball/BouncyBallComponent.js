import React, { Component } from 'react';
import {ballInit} from './scripts/bouncyBall'
import styles from './bouncyBall.module.css'

export default class Bouncyball extends Component {
    componentDidMount(   
    ){
        ballInit()
    }
  render() {
    
    return (
 <span id="ball"  className={styles.ball}> </span>
       
      
        
    );
  }
}
