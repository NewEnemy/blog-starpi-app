import React ,{useState} from 'react';
import styles from './Posts.module.css'
import { Component } from 'react';
import Orderbox from './Orderbox.js'

export default class singlePost extends Component {
    constructor(props){
        super(props)
        this.state={
            expanded:false,
            selected:false
        }
    }
 select(that){
    that.setState({selected:!that.state.selected})
 }
  render() {
   
    return (


        <div className={styles.singleContiner} >
            <Orderbox function={()=>{this.select(this)}} selected = {this.state.selected}></Orderbox>
            <i className={this.state.selected?"fas fa-check-circle "+styles.selectMarker:styles.hide}></i>
        <div className={styles.postImage}>
        <img src={this.props.postImage[0].formats.thumbnail.url}></img>
        </div>
  
        <div className={styles.details}>

   
        <h4>{this.props.title}</h4>
       
        <p  className={this.state.expanded?styles.postBodyExpanded:styles.postBodyColapsed} >{this.props.body} </p>

        <span className={this.state.expanded?styles.arrowUp:styles.arrowDown} onClick={()=>{this.setState({expanded:!this.state.expanded})}} ></span>


        </div>
        <div className={styles.votingContiner}>
            {console.warn(this.props.vote)}
    <i className= {"far fa-thumbs-up "+styles.thumbUp}>{this.props.vote.likes}</i>
        <i className= {"far fa-thumbs-down " +styles.thumbDown}>{this.props.vote.dislikes}</i>
        </div>

    </div>
      

        
    );
  }
}

