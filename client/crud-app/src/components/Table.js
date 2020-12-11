import React from 'react';

class Table extends React.Component {
    constructor() {
        super();
    }

    render() {
        return ( <
            table className = "table" >
            <
            thead >
            <
            tr >
            <
            th > Name < /th> <
            th > Age < /th> <
            th > City < /th> <
            th > Edit < /th> <
            th > Delete < /th> <
            /tr> <
            /thead> <
            tbody > {
                this.props.getData.length > 0 ?
                (
                    this.props.getData.map(data =>
                        <
                        tr key = { data._id } >
                        <
                        td > { data.Name } < /td> <
                        td > { data.Age } < /td> <
                        td > { data.City } < /td> <
                        td > < button className = "btn btn-success"
                        onClick = {
                            (event) => {
                                this.props.setData(data)
                            }
                        } >
                        Edit < /button></td >
                        <
                        td > < button className = "btn btn-danger"
                        onClick = {
                            (event) => {
                                this.props.delData(data)
                            }
                        } >
                        Delete < /button></td >
                        <
                        /tr>
                    )
                ) :
                    ( <
                    tr >
                    <
                    td > No Data < /td> <
                    /tr>
                )
            } <
            /tbody> <
            /table>
        )
    }
}

export default Table;