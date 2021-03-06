import React, { Component } from "react";
import styled from '@emotion/styled'
import { PatablesAsync } from "patables2.0";
import {API_URL, TOKEN} from '../../../credentials'

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

class Example4 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const renderTable = props => {
      console.log('4) props from PatablesAsync:', props);
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
                <th name="name">
                  Name
                </th>
                <th name="original_name">
                  Original name
                </th>
                <th name="uri">
                  Download
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
              : props.visibleData.map((asset, i) => {
                return (
                  <tr key={i}>
                    <TableData>{asset.name}</TableData>
                    <TableData>{asset.original_name}</TableData>
                    <TableData><a href={`${asset.uri}`} target="_blank">Download 🏹</a></TableData>
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
              <h1>PatablesAsync - SCT</h1>
              <hr className="mb-4" />
              <PatablesAsync
                render={renderTable}
                limitParam={'max'}
                searchParam={['q', 'sanity']} 
                url={`${API_URL}/assets/`}
                config={{ 
                  headers: {
                      'Authorization': TOKEN
                    }
                }}
                pathToData={['data']}
                pathToPageTotal={['data']}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example4;
