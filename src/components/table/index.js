import React, { Component } from "react";
import styled from '@emotion/styled'
import { Patables, Pagination } from "patables2.0";

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
      users: []
    };
  }

  componentDidMount() {
    this.setState(() => ({ users: data }))
  }

  render() {
    const initialValues = {
      firstname: '',
      lastname: '',
      dob: '',
      occupation: '',
      phone: ''
    }
    const BasicForm = (props) => (
      <div className='form-group mb-2 col'>
        <form onSubmit={props.handleSubmit}>
          <StyledDiv className='input-group'>
            <Label htmlFor=''>First name</Label>
            <input
              className='form-control'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.firstname}
              name="firstname"
            />
            {props.errors.firstname && <Error id="feedback" className='col-2' >{props.errors.firstname}</Error>}
          </StyledDiv>
          <StyledDiv className='input-group'>
            <Label htmlFor=''>Lastname</Label>
            <input
              className='form-control'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.lastname}
              name="lastname"
            />
            {props.errors.lastname && <Error id="feedback" className='col-2' >{props.errors.lastname}</Error>}
          </StyledDiv>
          <StyledDiv className='input-group'>
            <Label htmlFor=''>DOB</Label>
            <input
              className='form-control'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.dob}
              name="dob"
            />
            {props.errors.dob && <Error id="feedback" className='col-2' >{props.errors.dob}</Error>}
          </StyledDiv>
          <StyledDiv className='input-group'>
            <Label htmlFor=''>Occupation</Label>
            <input
              className='form-control'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.occupation}
              name="occupation"
            />
            {props.errors.occupation && <Error id="feedback" className='col-2' >{props.errors.occupation}</Error>}
          </StyledDiv>
          <StyledDiv className='input-group'>
            <Label htmlFor=''>Phone</Label>
            <input
              className='form-control'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.phone}
              name="phone"
            />
            {props.errors.phone && <Error id="feedback" className='col-2' >{props.errors.phone}</Error>}
          </StyledDiv>
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}

          <button type="submit" className="btn btn-primary mt-3" >
            Add Data
            </button>
        </form>
      </div>
    );

    const renderTable = props => {
      console.log(props);
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
                  id
                </th>
                <th name="firstname" onClick={props.setColumnSortToggle}>
                  FirstName
                </th>
                <th name="lastname" onClick={props.setColumnSortToggle}>
                  LastName
                </th>
                <th name="dob" onClick={props.setColumnSortToggle}>
                  Date Of Birth
                </th>
                <th name="occupation" onClick={props.setColumnSortToggle}>
                  occupation
                </th>
                <th name="phone" onClick={props.setColumnSortToggle}>
                  phone
                </th>
                <th name="action" onClick={props.setColumnSortToggle}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props.visibleData.map((user, i) => {
                return (
                  <tr key={i}>
                    <TableData>{user.id}</TableData>
                    <TableData>{user.firstname}</TableData>
                    <TableData>{user.lastname}</TableData>
                    <TableData>{user.dob}</TableData>
                    <TableData>{user.occupation}</TableData>
                    <TableData>{user.phone}</TableData>
                    <TableData onClick={() => props.removeTableData(this.state.users, user.id)}>Remove ❌</TableData>
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
          <div className="col-8 ml-5">
            <div>
              <h1>Mumu Table</h1>
              <hr className="mb-4" />
              <Patables
                render={renderTable}
                initialData={this.state.users}
                resultSet={5}
                sortColumn="id"
                sortOrder="ASC"
                searchKeys={["firstname", "lastname", 'id']}
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
