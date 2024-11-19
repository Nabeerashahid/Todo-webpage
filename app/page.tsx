
import type { NextPage } from 'next'
import TodoList from './component/TodoList'

const Home:NextPage =() => {
  return(
    <div>
      <TodoList />
    </div>
  )
}

export default Home