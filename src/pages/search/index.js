import React, { useState } from 'react';
import LayoutMovie from '../../components/layout';
import BreadcrumbMovie from '../../components/partinals/breadcrumb';
import CardMovie from '../../components/card';
import InputSearch from './components/search';
import { Row, Col } from 'antd';
import { api } from '../../services/api';

const SearchMovie = () => {
   const [loading, setLoading] = useState(false);
   const [dataSearch, setDataSearch] = useState([]);
   const search = async (keyword) => {
      setLoading(true);
      const data = await api.searchMovieByKeyword(keyword, 1);
      setDataSearch(data.results);
      setLoading(false);
   }
   return (
      <LayoutMovie>
         <BreadcrumbMovie
            item_lv1="Home"
            item_lv2="List"
            item_lv3="Search"
         />
         <div className="site-layout-content">
            <Row>
               <Col span={24}>
                  <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>This is search movies</h3>
                  <InputSearch
                     search={search}
                     loading={loading}
                  />
                  <Row style={{ marginTop: '30px' }}>
                     {dataSearch.map((item) => (
                           <Col span={6} key={item.id}>
                              <CardMovie item={item} />
                           </Col>
                        ))} 
                  </Row>
               </Col>
            </Row>
         </div>
      </LayoutMovie>
   )
}
export default React.memo(SearchMovie)
