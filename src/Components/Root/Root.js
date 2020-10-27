import React, { Component } from 'react';
import Posts from '../Posts/Posts.js'
import Articles from '../Articles/Articles.js'
import Header from './Components/Header.js'

import styles from './Root.module.css'

import {drag,stopDrag} from './scripts/Drag.js'

export default class Root extends Component {
  constructor(props){
    super(props)

    
  }
  render() {
    return (
        <div className={styles.root}>
          <div className={styles.Head}>
            <i>Some Logo</i>
            <nav>
              <a hraf="#">Photos</a>
              <a hraf="#">Art</a>
            </nav>
          </div>
        
       
          <div id="mainContiner" className={styles.mainContiner} onMouseDown={drag} onMouseUp={stopDrag}>
          <Posts></Posts>
          </div>
          
          <Articles></Articles>
        
  
         
        </div>

    );
  }
}
