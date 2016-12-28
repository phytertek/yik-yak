import React, { Component } from 'react'

class CreateZone extends Component {
    constructor() {
        super()
        this.state = {
            zone: {
                name: '',
                zipCodes: '',
                numComments: ''
            }
        }
    }

    updateZone(event) {
        let zone = Object.assign({}, this.state.zone)
        zone[event.target.id] = event.target.value
        this.setState({
            zone: zone
        })
    }

    createZone() {
        let zone = Object.assign({}, this.state.zone)
        zone.zipCodes = zone.zipCodes.split(',').map(zip=>{return zip.trim()})
        this.props.onCreate(zone)
    }
    render() {
        return (
            <div>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
                <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /><br />
                <input id="numComments" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Comment Count" /><br />
                <button className="btn btn-danger" onClick={this.createZone.bind(this)}>Create Zone</button>
            </div>
        )
    }
}

export default CreateZone