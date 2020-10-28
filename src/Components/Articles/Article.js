import Articles from "./Articles";
import ReactMarkdown from 'react-markdown'
import React, { Component } from 'react';

import SocialBar from '../SocialButtons/SocialButtonBar.js'

import styles from './Articles.module.css'

export default class Article extends Component {
    constructor(props){
        super(props)
        
    }
  render() {
    return (
        <div className={styles.articleContiner}>
    <h1 className={styles.title}>{this.props.title}</h1>
    <ReactMarkdown>{this.props.content}</ReactMarkdown>
     
    <SocialBar></SocialBar>
        </div>

    );
  }
}
