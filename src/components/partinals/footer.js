import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const FooterMovie =()=>{
   return(
      <Footer style={{ textAlign: 'center' }}>My movies</Footer>
   )
}

export default React.memo(FooterMovie)