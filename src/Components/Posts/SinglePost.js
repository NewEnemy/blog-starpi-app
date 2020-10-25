import React ,{useState} from 'react';
import styles from './Posts.module.css'



import { Component } from 'react';

export default class singlePost extends Component {
    constructor(props){
        super(props)
        this.state={
            expanded:false
        }
    }

  render() {
   
    return (
        <div className={styles.singleContiner}>
        <div className={styles.postImage}>
        <img src={this.props.postImage[0].formats.thumbnail.url}></img>
        </div>
        <div className={styles.details}>
        <h4>{this.props.title}</h4>
       
        <p  className={this.state.expanded?styles.postBodyExpanded:styles.postBodyColapsed} >{this.props.body} </p>
        <span className={this.state.expanded?styles.arrowUp:styles.arrowDown} onClick={()=>{this.setState({expanded:!this.state.expanded})}} ></span>
        </div>


    </div>
      

        
    );
  }
}

