import React, { Component } from "react";
import styled from '@emotion/styled'
import { Patables, Pagination } from "patables2.0";
import axios from 'axios';

const TableData = styled.td`
  min-width: 120px;
`

const SearchHeader = styled.h3`
  display: inline-block;
  margin-right:10px;
`

class Example1 extends Component {
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
      this.setState({ jokes: response.data.results })
    })
    .catch(err => console.error(err))
  }

  render() {
    const renderTable = props => {
      console.log('1) props from Patables:', props);
      return (
        <div>
          <div className="form-row mb-3 col">
            <SearchHeader>Search</SearchHeader>
            <input
              className="form-control col-5"
              placeholder="Search..."
              value={props.search}
              onChange={props.setSearchTerm}
            />

            <div className="col offset-4">
              <div className="form-inline">
                <label className="my-1 mr-2">Result set: </label>
                <select
                  className="form-control"
                  value={props.limit}
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
            <thead className="bg-secondary text-white">
              <tr>
                <th name="firstname" onClick={props.setColumnSortToggle}>
                  Joke
                </th>
                <th name="id" onClick={props.setColumnSortToggle}>
                  Permalink
                </th>
              </tr>
            </thead>
            <tbody>
              {props.visibleData.map((joke, i) => {
                return (
                  <tr key={i}>
                    <TableData>{joke.joke}</TableData>
                    <TableData><a href={`https://icanhazdadjoke.com/j/${joke.id}`} target="_blank">Link 🏹</a></TableData>
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
      <div className="my-5">
        <div className="row">
          <div className="col ml-5">
            <div>
              <h1>Patables</h1>
              <hr className="mb-4" />
              <Patables
                initialData={this.state.jokes}
                render={renderTable}
                resultSet={5}
                sortColumn="id"
                sortOrder="asc"
                searchKeys={["joke"]}
                startingPage={1}
                pageNeighbors={2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example1;
