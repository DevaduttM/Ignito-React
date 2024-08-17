import React, { useEffect, useState } from 'react'
import 'ldrs/dotStream'
import Home from '../home/home'

const preloader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2)
    }, [])

  return (
    <>
        loading ? (
            <l-dot-stream
            size="60"
            speed="2.5" 
            color="black" 
            ></l-dot-stream>
        )
        : 

    </>
  )
}

export default preloader