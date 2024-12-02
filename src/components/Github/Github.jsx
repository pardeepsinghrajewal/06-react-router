import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'



const Github = () => {
  const data = useLoaderData();
  return (
    <>
    Github followers: {data.followers}
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}