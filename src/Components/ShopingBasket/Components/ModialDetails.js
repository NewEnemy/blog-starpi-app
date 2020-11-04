import React, { Component } from 'react';
import styles from './ModialDetails.module.css'
export default class ModialDetails extends Component {
    constructor(props){
        super(props)
        this.controler = this.props.controler
        
    }
    componentDidMount(props){
       
    }
            //this.controler.getArray().map((item)=>{return item[0]})
  render() {
    return (
      <div className={styles.ModialContiner}>
          
        </div>
    );
  }
}
