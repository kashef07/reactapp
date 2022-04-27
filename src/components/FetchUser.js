import React from "react";
import axios from "axios";
import '../index.css'




class App extends React.Component {

    // Constructor
    constructor() {
        super();

        this.state = {
            items: [],
            data: {
                customerId: null,//i have called this using id
                client: "",
                address: ""
            }

        };
    }

    //for sending data to back-end
    submit(e) {
        try {
            e.preventDefault();
            
            axios.post('https://localhost:44300/api/Customers/add-Customer', {
                customerId: parseInt(this.state.data.customerId),
                client: this.state.data.client,
                address: this.state.data.address
            })
                .then(res => {
                    console.log(res.data)
                    alert('added')
                    window.location.reload()
                })
        }
        catch (e) {
            alert('server error')
        }

    }

    handle(e) {
        const newdata = this.state.data
        newdata[e.target.id] = e.target.value
        this.setState(newdata)
        console.log(newdata)
    }

    
    //for fetching data from back-end
    // ComponentDidMount is used to execute the code
    componentDidMount() {
        try {
            fetch(
                "https://localhost:44300/api/Customers/Get-all-Customers")
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        items: json,
                    });
                })
        }
        catch (e) {
            alert("server not found")
        }
    }

    //function for validating table
    validateTable=() =>{
        var cusid=document.getElementById('customerId').value
        var client=document.getElementById('client').value
        var address=document.getElementById('address').value

        if(!cusid || !client ||!address){
            if(isNaN(cusid)){
                alert('enter num')
            }
            alert('enter all the fields')
        }

    }

    render() {



        return (
            <div>

                <h2>Add users</h2>
                <form onSubmit={(e) => this.submit(e)}>
                    <label for='customerId'>CustomerID:</label><br />
                    <input type='text' onChange={(e) => this.handle(e)} value={this.state.data.customerId} id="customerId"></input><br />
                    <label for='client'>Client:</label><br />
                    <input type='text' onChange={(e) => this.handle(e)} value={this.state.data.client} id="client"></input><br />
                    <label for='address'>Address:</label><br />
                    <input type='text' onChange={(e) => this.handle(e)} value={this.state.data.address} id="address"></input><br />
                    <input type='submit' className="btn3" onClick={this.validateTable}/>

                </form>

                <table className="table" >
                    <thead>
                        <tr>
                            <td>CustomerID</td>
                            <td>Client</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.customerId}</td>
                                    <td>{item.client}</td>
                                    <td>{item.address}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
