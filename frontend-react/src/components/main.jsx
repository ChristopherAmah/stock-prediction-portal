import React from 'react'
import Button from './Button'

const main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam dolores suscipit qui magnam voluptate facilis, pariatur officia perspiciatis perferendis fugiat aperiam exercitationem, possimus harum soluta nulla necessitatibus iste incidunt!</p>
                <Button text="Explore Now" class="btn-outline-info" url="/dashboard" />  
            </div>
        </div>
    </>
  )
}

export default main