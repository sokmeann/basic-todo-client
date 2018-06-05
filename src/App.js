import React, { Component } from 'react'
import axios from 'axios'
import CreateTaskForm from './components/create-task-form'
import TodoList from './components/todo-list'

import './App.css'

class App extends Component {
  state = {
    tasks: []
  }
  componentDidMount() {
    this.fetchTasks()
  }
  fetchTasks = () => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/tasks/all`).then(
      function(response) {
        if (response.statusText === 'OK') {
          this.setState({
            tasks: response.data
          })
        } else {
          alert('Something went wrong!')
        }
      }.bind(this)
    )
  }
  deleteTask = id => {
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`).then(
      function(response) {
        if (response.status === 204) {
          this.fetchTasks()
        } else {
          alert('Something went wrong!')
        }
      }.bind(this)
    )
  }
  render() {
    return (
      <div className="App flex col-cc">
        <div className="App-title">BASIC TODO LIST</div>
        <CreateTaskForm fetchTasks={this.fetchTasks} />
        <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    )
  }
}

export default App
