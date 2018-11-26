import React, { Component } from 'react'

class TableRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let nation = this.props.nationData
    nation.index = this.props.rowIndex + 1
    nation.flagClass = 'flag flag-' + nation.code.toLowerCase()

    return (
      <tr className="align-center">
        <td className="align-right">{nation.index}</td>
        <td><div className={nation.flagClass}></div></td>
        <td className="pad-r-40"><b>{nation.code}</b></td>
        <td>{nation.gold}</td>
        <td>{nation.silver}</td>
        <td>{nation.bronze}</td>
        <td className="color-black"><b>{nation.total}</b></td>
      </tr>
    )
  }
}

export default TableRow
