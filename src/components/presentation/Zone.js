import React, { Component } from 'react'

import styleSheet from '../style'

class Zone extends Component {
  select() {
    this.props.onSelect(this.props.id)
  }
  render() {
    const styles = styleSheet.zone

    const title = (this.props.isSelected) ? 
      <div style={styles.title}>{this.props.currentZone.name}</div> 
      : 
      <div>{this.props.currentZone.name}</div>

    return (
      <div style={styles.container} onClick={this.select.bind(this)}>
        <h2 style={styles.header}>
          {title}
        </h2>
        <span>{this.props.currentZone.zipCodes.join(', ')}</span><br/>
        <span>{this.props.currentZone.numComments ? `${this.props.currentZone.numComments} comments` : ''}</span>
      </div>
    )
  }
}

export default Zone