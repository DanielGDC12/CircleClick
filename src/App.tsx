import  React, { useState, useEffect } from 'react'
import * as S from './styles'
interface CircleProps {
  clientX:number,
  clientY:number,
  color:string
}

const initialState : Array<CircleProps> = []

function App() {
  const [circles,setCircles] = useState<Array<CircleProps>>(initialState)

  useEffect(() => {
    if(!circles) return
  },[circles])

  const handlePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const position = { 
      clientX: e.clientX,
      clientY: e.clientY,
      color:randomColor
    } as CircleProps
    setCircles((prev) => [...prev,position])
  }
  
  const removeLastCircle = () => {
    if(!circles.length)return 
    setCircles((prev) => [...prev.slice(0,-1)])
  }

  const removeAllCircles = () => {
    if(!circles.length)return 
    setCircles(initialState)
  }

  return (
    <>
       <S.undoButton onClick={removeLastCircle}>Desfazer</S.undoButton>
       <S.restartButton onClick={removeAllCircles}>Refazer</S.restartButton>
      <S.AppContainer role="button" onClick={(e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => handlePosition(e)}>
      {circles?.map((circle,index:number) => {
        return(
          <S.AppPointer color={circle.color} clientX={circle.clientX} clientY={circle.clientY} key={index} />
          )
        })}
      
    </S.AppContainer>
      </>
  )
}

export default App
