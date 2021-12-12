import React, { Component } from 'react'

class Message extends Component{
            // state = {
            //             name: "amit",
            //             roll: this.props.roll
            // }
            constructor() {
                        super()
                        this.state = {
                                    message:'welcome vistor'
                        }
            }
            changemessage() {
                        this.setState({
                                    message:'thank u for subscribing'
                        })
            }
            
render() {
            return (
            <div>
                        <h1>
                            {this.state.message}
                                    </h1>
                                    <button onClick={()=>this.changemessage()}>subscribe</button>
                 </div>                   
            )
} 
}
export default Message
