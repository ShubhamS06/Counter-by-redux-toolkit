import React from 'react'
function Home({Number}) {

  console.log(Number);
  return (
    <div>
      <h1> Welcome to React Redux Toolkit Application </h1>
      <div className='Num1'>
        <h1>{Number}</h1>
      </div>
    </div>
  )
}

export default Home;