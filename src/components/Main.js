import axios from 'axios';
import React, { Component } from 'react'

 class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            serverLink:process.env.REACT_APP_SERVER,
            showDigimons: false,
            digimons:[]

        }
    }

    componentDidMount= async()=>{
        const digimons= await axios.get(`http://localhost:3001/digimons?`)
        // console.log(digimons.data);
        this.setState({
            showDigimons: true,
            digimons: digimons.data
        })
    }



    render() {
        return (
            <div>
                {
                    this.state.showDigimons && this.state.digimons.map(digimon,index)=>{
                        return( )
                    } 

                    }
                }
                
            </div>
        )
    }
}

export default Main
// ${this.state.serverLink}