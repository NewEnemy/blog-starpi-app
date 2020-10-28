import Articles from "./Articles";
import ReactMarkdown from 'react-markdown'
import React, { Component } from 'react';

import SocialBar from '../SocialButtons/SocialButtonBar.js'

import styles from './Articles.module.css'

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state={
          expanded: false
        }
        
    }
  render() {
    if(!this.state.expanded){
      return (
        <div className={styles.wraperForDots}>
          
           <div className={styles.articleContiner}>
           <SocialBar></SocialBar>
    <h1 className={styles.title}>{this.props.title}</h1>
    <ReactMarkdown>{this.props.tldr}</ReactMarkdown>
        </div>
        <div className={styles.dotsToExpand}><i onClick={()=>{this.setState({expanded:!this.state.expanded})}} class="fas fa-ellipsis-h"></i></div>
        </div>
     

    );
    }
    return(

 <div className={styles.wraperForDots}>
      <div className={styles.articleContinerExpanded}>
      <SocialBar></SocialBar>
<h1 className={styles.title}>{this.props.title}</h1>
<ReactMarkdown>{this.props.content}</ReactMarkdown>
<div className={styles.dotsToExpand}><i onClick={()=>{this.setState({expanded:!this.state.expanded})}} class="fas fa-chevron-up"></i></div>


   </div>
   </div>
    )

  }
}
