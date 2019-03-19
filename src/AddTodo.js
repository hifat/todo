import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo( this.state )
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="addTodo">Add new todo</label>            
                    <input type="text" id="addTodo" onChange={ this.handleChange } value={ this.state.content } required="required"/>
                </form>
            </div>
        )
    }
}

export default AddTodo

