import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import axios from 'axios';

class App extends React.Component {
    // eslint-disable-next-line
    constructor() {
        super();
        this.state = {
            data: [],
            editData: []
        }
    }

    createData = (data) => {
        if(!data.isEdit) {
            axios.post("http://localhost:5100/info", data).then(res => {
                this.getData();
            })
        }
        else {
            axios.put("http://localhost:5100/info/edit", data).then(res => {
                this.getData();
            })
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get("http://localhost:5100/info").then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    update = (data) => {
        console.log(data);
        this.setState({
            editData: data
        })
}

    delete = (data) => {
        var option = window.confirm(`Are You Sure You Want To Delete ${data.Name}`);
        if(option) {
            axios.delete(`http://localhost:5100/info/delete/${data._id}`).then(res => {
            console.log(res.data);
            this.getData();
        })
        }
    }

    render() {
        return(
            <div className="container mt-4">
                <div className="row">
                    <div className="col-6">
                        <Form myData = {this.createData} setForm = {this.state.editData} />
                    </div>
                    <div className="col-6">
                        <Table getData = {this.state.data} setData = {this.update} delData = {this.delete} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;