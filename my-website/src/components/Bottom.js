import React from 'react'
import Footer from '../ui/Footer'

function Bottom() {
    //sans serif font !
    let date = new Date()
    let dayOfWeekNumber = date.getDay()
    let nameOfDay
  
    switch (dayOfWeekNumber) {
      case 0:
        nameOfDay = "Sunday"
        break
      case 1:
        nameOfDay = "Monday"
        break
      case 2:
        nameOfDay = "Tuesday"
        break
      case 3:
        nameOfDay = "Wednesday"
        break
      case 4:
        nameOfDay = "Thursday"
        break
      case 5:
        nameOfDay = "Friday"
        break
      case 6:
        nameOfDay = "Saturday"
        break
    }
    console.log(nameOfDay)
  return (
    <>
    <Footer>
      <div className="font-mono"> 
        Happy {nameOfDay}!
      </div>
      <div>
        
      </div>
    </Footer>
    </>
  )
}

export default Bottom