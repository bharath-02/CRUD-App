import React from 'react';

class Form extends React.Component {
    // eslint-disable-next-line
    constructor() {
        super();
        this.state = {
            Name: '',
            Age: '',
            City: '',
            _id: '',
            isEdit: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        if (!this.state.isEdit) {
            let data = {
                Name: this.state.Name,
                Age: this.state.Age,
                City: this.state.City,
                isEdit: this.state.isEdit
            }
            this.props.myData(data);
        } else {
            let data = {
                _id: this.state._id,
                Name: this.state.Name,
                Age: this.state.Age,
                City: this.state.City,
                isEdit: this.state.isEdit
            }
            this.props.myData(data);
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.setForm);
        if (props.setForm._id != null) {
            this.setState({
                _id: props.setForm._id,
                Name: props.setForm.Name,
                Age: props.setForm.Age,
                City: props.setForm.City,
                isEdit: true
            })
        }
    }

    render() {
        return ( <
            form onSubmit = { this.handleSubmit }
            autoComplete = "off" >
            <
            div className = "form-group" >
            <
            label > Name: < /label> <
            input type = "text"
            className = "form-control"
            placeholder = "Enter Name"
            onChange = { this.handleChange }
            name = "Name"
            value = { this.state.Name }
            /> <
            /div> <
            div className = "form-group" >
            <
            label > City: < /label> <
            input type = "text"
            className = "form-control"
            placeholder = "Enter City"
            onChange = { this.handleChange }
            name = "City"
            value = { this.state.City }
            /> <
            /div> <
            div className = "form-group" >
            <
            label > Age: < /label> <
            input type = "text"
            className = "form-control"
            placeholder = "Enter Age"
            onChange = { this.handleChange }
            name = "Age"
            value = { this.state.Age }
            /> <
            /div> <
            button type = "submit"
            className = "btn btn-primary" > { this.state.isEdit ? 'Update' : 'Submit' } < /button> <
            /form>
        )
    }
}

export default Form;