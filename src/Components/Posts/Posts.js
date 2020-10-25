import React from 'react';
import SinglePost from './SinglePost.js'
import { useQuery,gql } from '@apollo/client';
import styles from './Posts.module.css'

export default function Posts(){
    const postQuery = gql`
    query {
      artPosts{
        Title
        body
        id
       postImage{
         formats
       }
       
      }
    }
    `
    const{loading,error,data} = useQuery(postQuery)
    if(loading)return <h1>Loading..</h1>
    if(error) return <h1>Error :</h1>
    console.warn(styles)
    return data.artPosts.map(({Title,body,id,postImage})=>(
        <div className={styles.continer}>
    <SinglePost id={id} title={Title} body={body} postImage = {postImage}></SinglePost>
    </div>
    ))

}



