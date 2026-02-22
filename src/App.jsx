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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum nisi quasi earum odit iste ipsa distinctio tempore molestias eaque delectus velit nam asperiores ad deserunt beatae exercitationem natus nesciunt, similique pariatur a commodi numquam assumenda adipisci? A aspernatur illum sunt possimus eius deserunt corporis nulla fugiat iusto tempora in neque, voluptas, doloremque ipsum quibusdam exercitationem fuga eligendi molestias soluta tempore ullam itaque. Quae, ducimus molestias totam ullam nesciunt non maiores quos sint, consectetur odit porro similique quasi natus! Voluptates, in. Unde quibusdam qui voluptatibus nihil, libero voluptatum voluptas distinctio exercitationem numquam. Blanditiis praesentium eius veniam ipsum quisquam fugit molestias voluptates quae nulla laudantium adipisci culpa deserunt dignissimos aperiam illum enim similique vitae, maxime aliquam rerum. Minima odio veritatis delectus ex expedita nisi, autem laboriosam sequi itaque architecto assumenda, quos omnis iusto praesentium incidunt provident vitae. Deleniti incidunt saepe possimus cum sequi! Dolorem dolore architecto explicabo maiores ad. Voluptates, et pariatur. Esse incidunt voluptatem enim laudantium consequatur odio, et praesentium atque labore ex eveniet, deleniti optio possimus voluptas voluptate, illum maiores assumenda beatae. Dolorem, sequi! Iste consectetur numquam impedit, praesentium ipsam doloribus consequatur voluptate minus beatae molestiae inventore optio minima suscipit! Corporis fuga debitis voluptas architecto reiciendis quasi iusto dignissimos non nesciunt nam, quos distinctio aspernatur nihil praesentium, temporibus error doloribus officia deserunt consequatur? Doloribus alias optio earum incidunt! Quo voluptas voluptates sint natus porro aperiam dicta, suscipit rem vitae ipsa facilis eum quibusdam doloremque cum debitis quam, perferendis eius. Ullam explicabo voluptas aperiam distinctio perferendis, similique delectus ex ad laborum ducimus amet tenetur quae vel, voluptates molestiae dignissimos consequuntur architecto esse quia nostrum quo! Commodi, incidunt, dolore sunt id fugiat numquam quia officia at assumenda quam nobis, porro explicabo enim corporis sit? Beatae, pariatur facilis accusantium fugit ipsa ad voluptas. Provident consectetur et, reprehenderit perspiciatis minima veniam aliquid nulla. Molestiae in ducimus quo odit sit nesciunt eos totam eaque, sequi modi atque minus error unde tempora sunt nemo at soluta assumenda nobis quas eligendi mollitia molestias. Reiciendis adipisci earum aliquam magni, perferendis cum sint commodi quaerat cumque pariatur ipsum consequuntur, odit voluptatibus dolor quos repellat asperiores autem necessitatibus quia ab animi cupiditate excepturi! Aliquid, maxime animi. Numquam assumenda, hic exercitationem accusantium laborum repellendus tempore, harum iure obcaecati consequatur iusto. Reprehenderit nisi sunt earum quisquam voluptatem saepe, dicta dolores voluptas, minus quo ullam molestias at sapiente optio porro deleniti aliquid doloremque unde mollitia eligendi accusantium natus, ex itaque! A, totam!
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
