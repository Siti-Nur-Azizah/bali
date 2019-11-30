import React , { Component } from 'react';

class HelloWorld extends Component {
    state = {
        nama: 'Code',
        age: '16',
        gender: 'male',
        number: 0
    }
    componentDidMount() {
        this.setState({
            nama: 'HALOOOOOO',
            age: '59',
            gender: 'female'
        })
    }

    handLeAddValue() {
        this.setState({
            number:
            this.state.number + 1
        })
    }

    handLeMinValue() {
        if(this.state.number > 0)
        {
            this.setState({
                number:
                this.state.number - 1
            })
        }
    }

    handLeResetValue() {
        this.setState({
            number: 0
        })
    }
    render() {
        return (
            <div>
                <h1>Hello World {this.state.nama} my age is: {this.state.age} my gender :{this.state.gender}</h1>
            
            <div>
                <h1><b>{this.state.number}</b></h1>

                <button onClick={() => this.handLeAddValue()}>Tambahkan 1</button>
                <button onClick={()=> this.handLeMinValue()}>Kurangkan 1</button>
                <button onClick={()=> this.handLeResetValue}>Reset value</button>
            </div>
            </div>
        )
    }
}

export default HelloWorld;