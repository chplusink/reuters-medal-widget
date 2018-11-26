import React, { Component } from 'react'

class TableHeaders extends Component {
  constructor() {
    super()

    this.headerValues = [
      { name:'', classes:'', text:'' },
      { name:'', classes:'', text:'' },
      { name:'', classes:'', text:'' },
      { name:'gold', classes:'medal-header bg-gold sortable', text:'' },
      { name:'silver', classes:'medal-header bg-silver sortable', text:'' },
      { name:'bronze', classes:'medal-header bg-bronze sortable', text:'' },
      { name:'total', classes:'color-black sortable', text:'TOTAL' }
    ]
  }

  render() {
    let headerColumns = []
    for (var i = 0; i < this.headerValues.length; i++) {
      let activeClass = (this.props.sort == this.headerValues[i].name) ? 'active' : ''
      headerColumns.push(<th key={i} className={activeClass} onClick={this.props.updateSort.bind(this,this.headerValues[i].name)}><div className={this.headerValues[i].classes}>{this.headerValues[i].text}</div></th>)
    }
    return (
      <tr>
        {headerColumns}
      </tr>
    )
  }
}

export default TableHeaders
