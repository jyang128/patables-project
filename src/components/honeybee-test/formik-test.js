import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { FieldError } from 'honeybee-ui'
import * as Yup from 'yup'

class BasicExample extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  FormSchema = Yup.object().shape({
    name: Yup.string().required('error msg')
  })
  render() {
    return (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ name: 'jared' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {props => (
            <div>
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              <FieldError error={'hahahah'} touched={true} />
              <button type="submit">Submit</button>
            </form>

            <div >
              <label htmlFor='phone'>Accreditation Reason</label>
              <select
                name='phone'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.phone}>
                <option value=''>Select One</option>
                <option>Compliance with state law and/or CMS conditions for coverage</option>
                <option>To obtain education and consultation regarding standards of care</option>
                <option>To demonstrate to the public your facility's dedication to high standards of care</option>
                <option>HMO or other third-party payer recognition/reimbursement</option>
                <option>Other</option>
              </select>
              <FieldError error={'hohoho'} touched={props.touched.phone} />
            </div>
            </div>
         
      )}
        </Formik>
      </div>
    )
  }
};

export default BasicExample