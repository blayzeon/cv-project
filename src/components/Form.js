import React, { Component } from 'react'
import Fields from './Fields.js'

class Form extends Component {
    constructor(props) {
        // super allows children to share properties of the parent
        super(props); 

        this.state = {
            field: {
                text: '',
                id: '',
            },
            fields: this.props.props
        }
    }

    // sets the state for onSubmitTask to load into the fields array
    handleChange = (e) => {
        this.setState({
            field : {
                text: e.target.value,
                id: this.state.field.id,
            }
        });
    }
    
    // adds the current setState to the fields list and refreshes the default state
    onSubmitTask = (e) => {
        e.preventDefault();

        const checkedElm = document.querySelector('input:checked');

        if (checkedElm) {
            const newTasks = [];
            this.state.fields.forEach((field) => {
                const taskToAdd = field;
                if (field.id === checkedElm.id) {
                    taskToAdd.text = this.state.field.text;
                }

                newTasks.push(taskToAdd);
            });
            this.setState({
                fields: newTasks,
                field: { 
                    text: '',
                },
            });

        }
    }

    render() {
        const { field } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <Fields fields={this.state.fields} />
                    <label htmlFor="taskInput">Update Field: </label>
                    <input 
                        onChange={this.handleChange} 
                        value={field.text} 
                        type="text" 
                        id="taskInput" 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;