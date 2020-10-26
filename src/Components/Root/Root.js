import React, { Component } from 'react';
import Posts from '../Posts/Posts.js'
import styles from './Root.module.css'

export default class Root extends Component {
  render() {
    return (
        <div className={styles.root}>
        <Posts></Posts>
        </div>

    );
  }
}
