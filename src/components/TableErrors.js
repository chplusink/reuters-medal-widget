import React, { Component } from 'react'

class TableErrors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let errorsArray = this.props.errors
    let errors = []
    for (var i = 0; i < errorsArray.length; i++) {
      if (errorsArray[i].response) {
        errors.push(<li key={i}>{errorsArray[i].response.status} Error from Data Source: {errorsArray[i].response.statusText}</li>)
      } else {
        errors.push(<li key={i}>{errorsArray[i].message}</li>)
      }
    }

    return (
      <tr>
        <td colSpan="7" className="color-red">
          <div>Sorry, we could not retrieve the necessary data</div>
          <ul>
            {errors}
          </ul>
        </td>
      </tr>
    )
  }
}

export default TableErrors
