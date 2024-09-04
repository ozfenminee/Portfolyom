import React from 'react'
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function Experience ()  {
  return (
    <div className='expContainer'>
      <div className='expElements'>
        <ol>
          <li>
            <SchoolIcon />
            <h3>High Scholl Graduation 2019</h3>
            <p>Milas Sabahattin Akyüz Fen Lisesi</p>
          </li>
          <li>
          <SchoolIcon />
          <h3>University Graduation 2024</h3>
          <p>Balıkesir Üniversitesi,Computer Engineering </p>
          </li>
          <li>
          <BusinessCenterIcon />
          <h3>Consulta ,Intern Software Engineer</h3>
          <p className='text'>During my internship, I worked on projects related to web scraping. In these projects, I collected data from various websites and performed data cleaning tasks. Using the data I gathered, I focused on machine learning and artificial intelligence, particularly on classification using TensorFlow and Keras libraries. Throughout this process, I gained significant experience in data analysis and model building. These projects allowed me to acquire both theoretical and practical knowledge in data processing and AI applications. </p>
          </li>
          <li>
          <BusinessCenterIcon />
          <h3>BEST ,Intern Software Engineer</h3>
          <p className='text'>During my internship, I took on various tasks involving the creation and management of databases using PL/SQL. Through this process, I gained experience in database design, data entry, and ensuring data integrity. Additionally, I analyzed the databases I created based on specific queries and prepared data reports. I improved my skills in writing complex queries and effectively analyzing data. These activities provided me with hands-on experience in database management and data analysis. </p>
          </li>
          <li>
          <BusinessCenterIcon />
          <h3>MODSOFT,FRONT-END DEVELOPER</h3>
          <p className='text'>At Modsoft, I completed a frontend project using React.js and TypeScript to finish a previously initiated project. This allowed me to gain professional experience by working on a comprehensive and large-scale application. Throughout the project, I actively collaborated on GitHub, enhancing my version control and teamwork skills. This experience significantly improved my competencies in frontend development and project management. </p>
          </li>

        </ol>

      </div>

    </div>
  )
}

export default Experience