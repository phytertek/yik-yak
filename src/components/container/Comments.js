import React, { Component } from 'react'

import utils from '../../utils'
import { Comment, CreateComment } from '../presentation'
import styleSheet from '../style' 

class Comments extends Component {

    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        utils.API.get('comment', null, (err, res) => {
            if(err) {
                console.log(`Error: ${JSON.stringify(err)}`)
            }
            this.setState({
                list: res.results
            })
        })
    }

    submitComment(comment) {
        utils.API.post('comment', comment, (err, res) => {
            if(err) {
                console.log(`Error: ${JSON.stringify(err)}`)
            }
            let updatedList = Object.assign([], this.state.list)
            updatedList.push(res.result)
            this.setState({
                list: updatedList
            })
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
                <div style={style.commentsBox}>

                    <ul style={style.commentsList}>{listItems}</ul>

                    <CreateComment onCreate={this.submitComment.bind(this)}/>

                </div>
            </div>
        )
    }
}

export default Comments