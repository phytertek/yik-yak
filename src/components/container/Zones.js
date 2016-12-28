import React, { Component } from 'react'

import utils from '../../utils'
import { Zone, CreateZone } from '../presentation'

class Zones extends Component {

    constructor() {
        super()
        this.state = {
            selected: 0,
            list: []
        }
    }

    componentDidMount() {
        utils.API.get('zone', null, (err, res) => {
            if (err) {
                console.log(`Error: ${JSON.stringify(err)}`)
            }
            this.setState({
                list: res.results
            })
        })
    }
    
    createZone(zone) {
        utils.API.post('zone', zone, (err, res) => {
            if (err) {
                alert(`Error: ${err}`)
            }
            let updatedList = Object.assign([], this.state.list)
            updatedList.push(res.result)
            this.setState({
                list: updatedList
            })
        })
    }

    selectZone(id) {
        this.setState({
            selected: id
        })
    }

    render() {
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}>
                    <Zone id={i} currentZone={zone} 
                          onSelect={this.selectZone.bind(this)} 
                          isSelected={(i==this.state.selected)} />
                </li>
            )
        })
        return (
            <div>
                <ol>{listItems}</ol>

                <CreateZone onCreate={this.createZone.bind(this)} />
                
            </div>
        );
    }
}

export default Zones