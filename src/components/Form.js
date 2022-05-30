import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            current: {
                name: '',
                company: '',
                school: ''
            },
            toAdd: {
                name: '',
                company: '',
                school: ''
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const old = this.state.current;
        const newItems = this.state.toAdd;
        const updated = {...old, ...newItems}

        this.setState({
            current: updated
        });

        console.log(this.state.current);
    }

    handleChange = (e) => {
        const newValue = e.target.value;
        const updated = {name: newValue}
        this.setState({toAdd: updated});
        console.log(this.state.toAdd);
    }

    render() {
        const { current, toAdd } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>General</h2>
                    <input 
                        value={this.state.toAdd.name}
                        type="text" 
                        placeholder="" 
                        name="name"
                        onChange={this.handleChange}
                    />
                </div>
                
                <div>
                    <h2>Experience</h2>
                    <input type="text" placeholder="" />
                </div>

                <div>
                    <h2>Education</h2>
                    <input type="text" placeholder="" />
                </div>
                
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form;