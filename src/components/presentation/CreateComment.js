import React, { Component } from 'react'


class CreateComment extends Component {
    constructor(){
        super()
        this.state = {
            comment:{
                username: '',
                body: ''
            }
        }
    }
    updateComment(event) {
        let comment = Object.assign({}, this.state.comment)
        comment[event.target.id] = event.target.value
        this.setState({
            comment: comment
        })
    } 
    submitComment() {
        this.props.onCreate(this.state.comment)
    }
    render() {
        return (
            <div>
                <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
                <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
                <button className="btn btn-info" onClick={this.submitComment.bind(this)}>Submit Comment</button>
            </div>
        )
    }
}

export default CreateComment