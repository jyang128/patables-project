import React, { Component } from "react";
import styled from '@emotion/styled'
import { PatablesAsync } from "patables2.0";

const TableData = styled.td`
  min-width: 120px;
`

const SearchHeader = styled.h3`
  display: inline-block;
  margin-right:10px;
`

const CatLoading = styled.div`
  background-image: url('https://thumbs.gfycat.com/LongShortAustraliancurlew-size_restricted.gif');
  width:200px;
  height:200px;
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

class Example5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  render() {
    const renderTable = props => {
      console.log('5) props from PatablesAsync:', props);
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
            <button className="btn btn-info ml-2" onClick={props.submitSearch}>Submit</button>
            <button className="btn btn-link ml-2" onClick={props.clearSearch}>Reset</button>

            <div className="col offset-2">
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
            <thead className="bg-primary text-white">
              <tr>
                <th name="title" onClick={props.setColumnSortToggle}>
                  title
                </th>
                <th name="rating" onClick={props.setColumnSortToggle}>
                  rating
                </th>
                <th name="year" onClick={props.setColumnSortToggle}>
                  year
                </th>
                <th name="thumbnail">
                  thumbnail
                </th>
              </tr>
            </thead>
            <tbody>
              {props.isLoading
                ? <tr><TableData>Loading...<CatLoading /></TableData></tr>
                : !props.isLoading && !props.visibleData
                  ? <tr>
                    <TableData>No result</TableData>
                  </tr>
                  : props.visibleData.map((movie, i) => {
                    return (
                      <tr key={i}>
                        <TableData>{movie.title}</TableData>
                        <TableData>{movie.rating}</TableData>
                        <TableData>{movie.year}</TableData>
                        <TableData><img src={`${movie.small_cover_image}`} /></TableData>
                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
      );
    };

    return (
      <div className="my-5">
        <div className="row">
          <div className="col ml-5">
            <div>
              <h1>PatablesAsync - Shady Movie API</h1>
              <hr className="mb-4" />
              <PatablesAsync
                render={renderTable}
                sortColumn={'title'}
                pageParam={['page_number']}
                limitParam={['limit']}
                orderByParam={['order_by']}
                searchParam={['query_term','']} 
                sortParam={['sort_by', 'rating']} 
                customParam={[
                  { param: 'kate', value: 'ha' },
                  { param: 'jess', value: 'woo'} 
                ]}
                url='https://yts.lt/api/v2/list_movies.json?'
                config={{
                  headers: {
                    Accept: 'application/json'
                  }
                }}
                pathToData={['data', 'data', 'movies']}
                pathToPageTotal={['data', 'data', 'movie_count']}
                // showURI
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example5;
