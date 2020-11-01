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

    return (
      <div className={styles.wraperForDots}>
        
         <div className= { this.state.expanded?styles.articleContinerExpanded:styles.articleContiner}>
         <SocialBar></SocialBar>
  <h1 className={styles.title}>{this.props.title}</h1>
  <ReactMarkdown>
    
    {this.state.expanded?this.props.content:this.props.tldr}
    
    </ReactMarkdown>
      </div>
      <div className={styles.dotsToExpand}><i onClick={()=>{this.setState({expanded:!this.state.expanded})}} className={this.state.expanded?"fas fa-chevron-up":"fas fa-ellipsis-h"}></i></div>
      </div>
    )

    

  }
}
