import React, { Component } from "react";
import styled from '@emotion/styled'
import { Patables, Pagination } from "patables2.0";
import axios from 'axios'

const TableData = styled.td`
  min-width: 120px;
`

const SearchHeader = styled.h3`
  display: inline-block;
  margin-right:10px;
`

const Label = styled.label`
  width: 100px;
`

const StyledDiv = styled.div`
  margin-right:10px;
  margin-bottom:20px;
`

const Error = styled.div`
  position: absolute;
  font-size: small;
  color: red; 
  bottom: -17px;
  right: 48%;
`

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    axios.get('https://icanhazdadjoke.com/search', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log('jokes from API', response)
        this.setState(prevState => ({ jokes: response.data.results }))
      })
      .catch(err => console.error(err))
  }

  render() {
    const renderTable = props => {
      console.log('props from Patables', props);
      return (
        <div>
          <div className="form-row mb-3 col">
            <SearchHeader>Search</SearchHeader>
            <input
              className="form-control col-6"
              placeholder="Search..."
              value={props.search}
              onChange={props.setSearchTerm}
            />

            <div className="col offset-2">
              <div className="form-inline">
                <label className="my-1 mr-2">Result set: </label>
                <select
                  className="form-control"
                  value={props.resultSet}
                  onChange={e => {
                    props.setResultSet(parseInt(e.target.value));
                  }}
                >
                  <option>5</option>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>
              </div>
            </div>
          </div>
          <table className="table table-hover mb-4">
            <thead className="bg-primary text-white">
              <tr>
                <th name="id" onClick={props.setColumnSortToggle}>
                  Permalink
                </th>
                <th name="firstname" onClick={props.setColumnSortToggle}>
                  Joke
                </th>
                <th name="action" onClick={props.setColumnSortToggle}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props.visibleData.map((joke, i) => {
                return (
                  <tr key={i}>
                    <TableData><a href={`https://icanhazdadjoke.com/j/${joke.id}`} target="_blank">Link 🏹</a></TableData>
                    <TableData>{joke.joke}</TableData>
                    <TableData onClick={() => props.removeTableData(this.state.jokes, joke.id)}>Remove ❌</TableData>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <Pagination
            totalPage={props.totalPages}
            prevDisabled={props.prevDisabled}
            nextDisabled={props.nextDisabled}
            setPageNumber={props.setPageNumber}
            pageNumber={props.currentPage}
            paginationButtons={props.paginationButtons} />

        </div>
      );
    };

    return (
      <div className="mt-5">
        <div className="row">
          <div className="col ml-5">
            <div>
              <h1>Dad Jokes</h1>
              <hr className="mb-4" />
              <Patables
                render={renderTable}
                initialData={this.state.jokes}
                resultSet={5}
                sortColumn="id"
                sortOrder="asc"
                searchKeys={["id"]}
                startingPage={1}
                pageNeighbors={3}
                URL={this.state.baseURL}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
