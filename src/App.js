import React from 'react';
import './App.css';
import { useQuery,gql } from '@apollo/client';

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
function App() {
  const{loading,error,data}=useQuery(postQuery)
  if(loading)return <p>Loading...</p>
  if(error) return <p>Error</p>
 console.warn(data)
return(data.artPosts.map(({title,body,id,postImage})=>(
  <div>
    <h1>{title}</h1>
<p>{body}</p>
<p>{id}</p>
{console.warn(postImage[0].formats.small)}
<img src={postImage[0].formats.small.url}></img>

  </div>


)))
}

export default App;
