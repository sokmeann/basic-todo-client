import React, { Component } from 'react'
import axios from 'axios'

class CreateTaskForm extends Component {
  state = {
    name: ''
  }

  createNewTask = ev => {
    ev.preventDefault()
    const newTask = { name: this.state.name }
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/tasks/`, newTask).then(
      function(response) {
        this.props.fetchTasks()
        this.setState({ name: '' })
      }.bind(this)
    )
  }

  handleInputChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  render() {
    return (
      <form className="form flex row-cc">
        <input
          name="name"
          placeholder="Task Name"
          onChange={this.handleInputChange}
          value={this.state.name}
        />
        <button onClick={this.createNewTask}>Create Task</button>
      </form>
    )
  }
}

export default CreateTaskForm
