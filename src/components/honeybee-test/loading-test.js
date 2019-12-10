import React from 'react'
import BasicExample from './formik-test'
import { Loading, PrivacyPolicyText, TermsOfServiceText, PageWrapper} from 'honeybee-ui'

const LoadingComp = (props) => {
  return (
    <div>
      <PageWrapper>
        {/* <Loading main={false}/>
        <PrivacyPolicyText />
        <TermsOfServiceText /> */}
        <BasicExample />
      </PageWrapper>
    </div>
  )
}


export default LoadingComp
