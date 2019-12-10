import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Patables } from 'patables'
//import Pagination from '../../utils/Pagination'
import {SortArrow} from 'honeybee-ui'

class SCT extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      sortOrder: 'asc',
      sortColumn: '',
    }
  }
  setColumnSortToggle = (e) => {
    let sortColumn = e.target.getAttribute('name')
    let sortOrder = this.state.sortOrder
    if (sortColumn === this.state.sortColumn) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    } else {
      sortOrder = 'asc'
    }
    this.setState(() => ({ sortColumn, sortOrder }))
  }
  sortByColumn = (array) => {
    let order = this.state.sortOrder.toLowerCase()

    return array.sort((a, b) => {
      var x = a[this.state.sortColumn]
      var y = b[this.state.sortColumn]

      if (typeof x === 'string') { x = ('' + x).toLowerCase() }
      if (typeof y === 'string') { y = ('' + y).toLowerCase() }

      if (order === 'desc') {
        return ((x < y) ? 1 : ((x > y) ? -1 : 0))
      } else {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      }
    })
  }
  render() {
    return (
      <div className='col-md-12 p-0'>

      <table className='table table-hover table-striped mb-4'>
        <thead className='custom-table-header'>
          <tr>
            <th className='pointer' name='title' onClick={this.setColumnSortToggle} style={{ width: '30%' }}>
              TITLE <SortArrow name='title' sortColumn={this.state.sortColumn} sortOrder={this.state.sortOrder} />
            </th>
            <th className='pointer' name='type' onClick={this.setColumnSortToggle} style={{ width: '30%' }}>
              FREQUENCY <SortArrow name='type' sortColumn={this.state.sortColumn} sortOrder={this.state.sortOrder} />
            </th>
            <th className='pointer' name='active' onClick={this.setColumnSortToggle} style={{ width: '30%' }}>
              ACTIVE <SortArrow name='active' sortColumn={this.state.sortColumn} sortOrder={this.state.sortOrder} />
            </th>
          </tr>
        </thead>
      </table>
    </div>
    )
  }
}

export default SCT
