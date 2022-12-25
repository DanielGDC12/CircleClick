import  React, { useState, useEffect } from 'react'
import * as S from './styles'
interface CircleProps {
  clientX:number,
  clientY:number,
  color:string
}
function App() {
  const [circles,setCircles] = useState<Array<CircleProps>>([])


  useEffect(() => {
    if(!circles) return
  },[circles])


  const handlePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    const position = { 
      clientX: e.clientX,
      clientY: e.clientY,
      color:randomColor
    } as CircleProps
    setCircles([...circles,position])
  }
  
  return (
    <S.AppContainer role="button" onClick={(e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => handlePosition(e)}>
      {circles?.map((circle,index:number) => {
         return(
          <S.AppPointer color={circle.color} clientX={circle.clientX} clientY={circle.clientY} key={index} />
         )
      })}
    </S.AppContainer>
  )
}

export default App
