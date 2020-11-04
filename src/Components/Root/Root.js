import React, { Component } from 'react';
import Posts from '../Posts/Posts.js'
import Articles from '../Articles/Articles.js'
import ShopingBasket from '../ShopingBasket/ShopingBasket.js'
import Bouncyball from '../Bouncyball/BouncyBallComponent.js'

import styles from './Root.module.css'

import {drag,stopDrag} from './scripts/Drag.js'


export default class Root extends Component {
  constructor(props){
    super(props)

    
  }

  render() {
    return (
        <div className={styles.root} id="#root">
         
          <ShopingBasket></ShopingBasket>
       
          <div id="mainContiner" className={styles.mainContiner} onMouseDown={drag} onMouseUp={stopDrag}>
          <Posts></Posts>
          </div>

          <Articles></Articles>
        <Bouncyball></Bouncyball>
  
         
        </div>

    );
  }
}
