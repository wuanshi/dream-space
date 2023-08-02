import React, { useEffect } from 'react'


const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight

function Canvas() {
  useEffect(() => {

  }, [])

  const getColor = () => {
    const Color = ['#3df']
    return Color[Math.floor(Math.random() * Color.length)]
  }

  const getChar = () => {
    const Char = 'HELLOWORLD'
    return Char[Math.floor(Math.random() * Char.length)]
  }

  const init = () => {
    const cvs = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = cvs.getContext('2d')
    // ctx.width = 
    // const COLUMN_WIDTH = 20


  }
  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  )
}

export default Canvas