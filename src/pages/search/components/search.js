import React from 'react';
import {Input, Row, Col} from 'antd';

const { Search } = Input;
const InputSearch= (props)=>{
   return(
      <Row>
         <Col span={12} offset={6}>
            <Search 
               placeholder="Movies name ..." 
               enterButton="Search" 
               size="large" 
               
               loading={props.loading}
               onSearch={val => props.search(val)}
               />
         </Col>
      </Row>
   )
}
export default React.memo(InputSearch)