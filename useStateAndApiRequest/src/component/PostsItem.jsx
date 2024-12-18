import React from 'react'

const PostsItem = ({title,id}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
    </div>
  )
}

export default PostsItem