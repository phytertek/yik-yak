import React, { Component } from 'react'
import superagent from 'superagent'

import styleSheet from '../style' 

import Comment from '../presentation/Comment'

class Comments extends Component {

    constructor() {
        super()
        this.state = {
            list: [],
            comment: {
                username: '',
                body: '',
            }
        }
    }

    componentDidMount() {
        superagent
        .get('/api/comment')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                alert(`Error: ${err}`)
            }
            this.setState({
                list: res.body.results
            })
        }) 
    }

    submitComment() {
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)
        superagent
        .post("/api/comment")
        .send(this.state.comment)
        .end((err, res) => {
            if (err) {
                alert(`Error: ${err}`)
            }
            this.setState({
                list: updatedList
            })
        })
    }

    updateComment(event) {
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[event.target.id] = event.target.value
        this.setState({
            comment: updatedComment
        })
    }

    render() {
        const style = styleSheet.comments
        const listItems = this.state.list.map((thisComment, i) => {
            return (
                <li key={i}><Comment comment={thisComment} /></li>
            )
        })
        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={style.commentsBox}>

                    <ul style={style.commentsList}>{listItems}</ul>

                    <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
                    <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
                    <button className="btn btn-info" onClick={this.submitComment.bind(this)}>Submit Comment</button>

                </div>
            </div>
        )
    }
}

export default Comments