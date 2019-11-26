import React, { Component } from "react";
import styled from '@emotion/styled'
import { PatablesAsync } from "patables2.0";
import Pagination from '../Pagination'

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

class Example3 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const renderTable = props => {
      console.log('2) props from PatablesAsync:', props);
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
                <th name="News" onClick={props.setColumnSortToggle}>
                  News Title
                </th>
                <th name="PublishedAt" onClick={props.setColumnSortToggle}>
                  PublishedAt
                </th>
                <th name="id" onClick={props.setColumnSortToggle}>
                  Permalink
                </th>
              </tr>
            </thead>
            <tbody>
              {props.isLoading
              ? <tr><TableData>Loading...<CatLoading /></TableData></tr>
              : !props.isLoading && props.visibleData.length === 0 
              ? <tr>
                  <TableData>No result</TableData>
                </tr>
              : props.visibleData.map((news, i) => {
                return (
                  <tr key={i}>
                    <TableData>{news.title}</TableData>
                    <TableData>{news.publishedAt}</TableData>
                    <TableData><a href={`${news.url}`} target="_blank">Link 🏹</a></TableData>
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
              <h1>PatablesAsync - news API</h1>
              <hr className="mb-4" />
              <PatablesAsync
                render={renderTable}
                pageParam={'page'}
                limitParam={'pageSize'}
                searchParam={['q', 'Listening to Your Siri Commands']}
                sortParam={['sortBy','popularity']}
                url={'https://newsapi.org/v2/everything?'}
                apiKey={['apiKey','84e1a2b37e994f70a59d1c73e54333c4']}
                config={{ 
                  headers: {
                      'Accept': 'application/json'
                    }
                }}
                pathToData={['data','articles']}
                pathToPageTotal={['data','totalResults']}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example3;
