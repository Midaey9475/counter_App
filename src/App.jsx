import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('white')
  const styles = {
    color: color
  }
  return (
    <>
    <div className='h-[100svh] flex flex-col items-center justify-center gap-y-3 bg-gradient-to-l from-blue-500 to-red-500'>
      <h1 style={styles} className='text-9xl font-extrabold'>{count}</h1>
      <div className='rounded-3xl px-3 py-5 flex items-center justify-center gap-x-3 bg-gradient-to-l from-blue-400 to-red-300'>
        <button onClick={()=> {setCount((count <= 0 ? count : count - 1))
                              setColor('red')}} className='font-extrabold text-4xl border-2 border-red-500 rounded-2xl px-2.5 py-1.5 cursor-pointer hover:bg-red-500 hover:text-white'>-</button>
        
        <button onClick={()=> {setCount(0)
                              setColor('#fff')}} className='font-extrabold text-4xl border-2 border-amber-500 rounded-2xl px-2.5 py-1.5 cursor-pointer hover:text-white hover:bg-amber-500'>Reset</button>
        
        <button onClick={()=> {setCount(count + 1)
                              setColor('blue')}} className='font-extrabold text-4xl border-2 border-sky-500 rounded-2xl px-2.5 py-1.5 cursor-pointer hover:bg-sky-500 hover:text-white'>+</button>
      </div>
    </div>
    </>
  );
}
export default App