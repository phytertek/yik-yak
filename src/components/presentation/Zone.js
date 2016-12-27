import React, { Component } from 'react'

import styleSheet from '../style'

class Zone extends Component {
  render() {
    const styles = styleSheet.zone
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>
          <a style={styles.title} href="#">{this.props.currentZone.name}</a>
        </h2>
        <span>{this.props.currentZone.zipCodes.join(', ')}</span><br/>
        <span>{this.props.currentZone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone