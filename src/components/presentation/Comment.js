import React, { Component } from 'react'

import styleSheet from '../style'

class Comment extends Component {
    render() {
        const styles = styleSheet.comment
        return (
            <div>
                <p style={styles.body}>{this.props.comment.body}</p>
                <span style={styles.subText}>{this.props.comment.username}</span>
                <span style={styles.seperator}>|</span>
                <span style={styles.subText}>{this.props.comment.timestamp}</span>
                <hr />
            </div>
        )
    }
}

export default Comment

