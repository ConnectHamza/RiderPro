import React from 'react'
import Banner from './Banner/Banner'
import Content from './Body/Content'
import RootLayout from '../layout'

const NoHeaderFooterPage = () => {
  return (
    
    <RootLayout showHeader={false} showFooter={false} className="no-footer">
    <div>        
        <Content />
    </div>
    </RootLayout>
    
  )
}

export default NoHeaderFooterPage;