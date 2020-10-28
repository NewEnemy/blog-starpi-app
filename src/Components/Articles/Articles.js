import React, { Component } from 'react';
import Article from './Article.js'
import { useQuery,gql } from '@apollo/client';

import {ShowHide} from './filterScripts.js'
import styles from './Articles.module.css'
const postQuery = gql`
query {
  articles{
    title
    content
  }
}`

export default function Articles (){

    const{loading,error,data} = useQuery(postQuery)
    
    if(loading){
        return <h1>Just wait a sec</h1>
    }

    if(error){
        return <h4>ERROR</h4>
    }
return(
    <div className={styles.articlesContiner}>
     
     <div className={styles.filterMainWraper}>
     <i className={"fas fa-filter "+styles.filter} onClick={ShowHide}></i>
     <nav id="filterOptions" className={styles.filterOptions} >
     
      <div id="optionBar" className={styles.optionBar} data-show={false} >
      <p>Name</p>
      <p>Date</p>
      <p>Topic</p>
      </div>

      </nav>
     </div>
   

    {
    data.articles.map(({title,content})=>{
      return <Article title={title} content={content} ></Article>
        
     })
    }
    </div>

     )
 
 
    
    

}