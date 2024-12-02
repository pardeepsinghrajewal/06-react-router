import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams();
  return (
    <>
    User id:{userid} 
    </>
  )
}

export default User