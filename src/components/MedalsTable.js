import React, { Component } from 'react'
import axios from 'axios'

import TableHeaders from './TableHeaders'
import TableRow from './TableRow'
import TableErrors from './TableErrors'

class MedalsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nations: [],
      sort: this.props.initSort,
      errors: []
    }
  }

  componentWillMount() {
    axios.get('https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json')
    .then(response => {
      let nations = response.data.map(nation=>{
        nation.total = nation.gold + nation.silver + nation.bronze
        return nation
      })
      this.setState({ nations: nations })
    })
    .catch(error => {
      this.setState({ errors: [error] })
    })
  }

  updateSort(column) {
    this.setState({ sort: column })
  }

  getSortedNations() {
    let nations = [].concat(this.state.nations)
    if (this.state.sort == 'gold') {
      nations.sort((a,b)=>{
        return (b[this.state.sort] != a[this.state.sort]) ? (b[this.state.sort] - a[this.state.sort]) : (b.silver - a.silver)
      })
    } else {
      nations.sort((a,b)=>{
        return (b[this.state.sort] != a[this.state.sort]) ? (b[this.state.sort] - a[this.state.sort]) : (b.gold - a.gold)
      })
    }
    return nations
  }

  render() {
    let tableContent
    if (this.state.errors.length) {
      tableContent = <TableErrors errors={this.state.errors} />
    } else {
      let sortedNations = this.getSortedNations()
      let rows = []
      for (var i = 0; i < sortedNations.length; i++) {
        if (i > 9) { break }
        rows.push(<TableRow key={i} rowIndex={i} nationData={sortedNations[i]}/>)
      }
      tableContent = rows
    }

    return (
      <table>
        <tbody>
          <TableHeaders sort={this.state.sort} updateSort={this.updateSort.bind(this)}/>
          {tableContent}
        </tbody>
      </table>
    )
  }
}

export default MedalsTable
