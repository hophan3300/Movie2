import React from 'react';
import HeaderMovie from './partinals/header';
import FooterMovie from './partinals/footer';
import { Layout } from 'antd';
import '../App.css';

const {  Content } = Layout;
const LayoutMovie =(props)=>{
   return(
      <Layout className="layout">
         <HeaderMovie/>
         <Content style={{ padding: '0 50px' }}>
           {props.children}
         </Content>
         <FooterMovie/>
      </Layout>
   )
}
export default React.memo(LayoutMovie)