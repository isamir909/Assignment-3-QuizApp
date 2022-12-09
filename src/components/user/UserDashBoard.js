import React from 'react'
import NavBar from '../admin/NavBar'
import QuizList from '../user/QuizList'

const UserDashBoard = () => {
  return (
    <div>
      <NavBar item1="Home" item2="Profile"/>
      <QuizList />
    </div>
  )
}

export default UserDashBoard
