import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Typography } from '@mui/material'
import CourseCard from './components/CourseCard'

function App() {

  let cardDetails = [
    {
      img: 'https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1',
      course: 'MERN FullStack Course',
      courseDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus laborum, eum corrupti inventore mollitia.",
      alt: 'mern fullstack course'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTL5IWvEjmxqXW2MeY23pbWQpxEiS7kF5Ew&s',
      course: 'Spring Boot and Js',
      courseDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus laborum, eum corrupti inventore mollitia.",
      alt: 'springboot and js course'
    },
    {
      img: 'https://www.questionpro.com/blog/wp-content/uploads/2024/09/Data-Analyst.jpg',
      course: 'Data Analyst',
      courseDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus laborum, eum corrupti inventore mollitia.',
      alt: 'data analyst course'
    }
  ]
  return (
    <>
      <Header />
      <div style={{ margin: '15px' }}>
        <Typography variant='h2' align='center' sx={{marginBottom:'10px'}}>
          Welcome to India E-cart website
        </Typography >
        <Typography variant='body2' align='center' sx={{marginBottom:'5px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium perspiciatis sint ea, quis sit assumenda recusandae. Porro maiores facere laborum iure aliquam quasi unde amet corrupti perferendis eligendi aperiam et iste harum id commodi minus, perspiciatis sint dolor? Ratione consequuntur repellendus qui dolor, aliquam aut quisquam unde iste perspiciatis reiciendis exercitationem rem, consectetur asperiores, aliquid magnam fugit quae nostrum.
        </Typography>
        <Typography variant='h3' align='center'>
          Our Amazing Course
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '30px' }}>
          {cardDetails.map((card) => <CourseCard {...card} />)}
        </div>

      </div>

    </>
  )
}

export default App
