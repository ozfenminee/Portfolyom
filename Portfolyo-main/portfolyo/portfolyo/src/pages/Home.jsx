import React from 'react'

 function Home  ()  {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi,My name is Mine</h2>
        <div className='prompt'>
          <p>
          "I'm a front-end developer dedicated to building responsive and user-friendly web interfaces."
          </p>
          
        </div>
 </div>
 <div className='skills'>
  <h1>Skills</h1>
  <ol className='list'>
    <li className='item'>
      <h2>Front-End</h2>
      <span>
        ReactJS,HTML,CSS,TailwindCSS,BootStrap
      </span>
      <li className='item'>
      <h2>DataBase</h2>
      <span>
        SQL,PLSQL
      </span>
      <li className='item'>
       <h2>Programming Languages</h2>
       <span>JavaScript, Java, Python, TypeScript</span>
      </li>
      <li className='item'>
       <h2> Languages</h2>
       <span>English</span>
      </li>

      </li>
      

    </li>

  </ol>

 </div>

    </div>
  )
}

export default Home;