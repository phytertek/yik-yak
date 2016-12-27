import React, { Component } from 'react'
import superagent from 'superagent'

import Zone from '../presentation/Zone'

class Zones extends Component {

    constructor() {
        super()
        this.state = {
            list: [],
            zone: {
                name: '',
                zipCodes: '',
                numComments: ''
            }
        }
    }

    componentDidMount() {
        superagent
        .get('/api/zone')
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
    
    createZone() {
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.zone)
        superagent
        .post("/api/zone")
        .send(this.state.zone)
        .end((err, res) => {
            if (err) {
                alert(`Error: ${err}`)
            }
            this.setState({
                list: updatedList
            })
        })
        
    }

    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value
        this.setState({
            zone: updatedZone
        })
    }

    render() {
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}><Zone currentZone={zone} /></li>
            )
        })
        return (
            <div>
                <ol>{listItems}</ol>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" /><br />
                <input id="zipCodes" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" /><br />
                <input id="numComments" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Comment Count" /><br />
                <button className="btn btn-danger" onClick={this.createZone.bind(this)}>Create Zone</button>
            </div>
        );
    }
}

export default Zones