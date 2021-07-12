import React, { useState, useEffect} from 'react';
import LayoutMovie from '../../components/layout';
import BreadcrumbMovie from '../../components/partinals/breadcrumb';
import {Row, Col, Image, Skeleton} from 'antd';
import { useParams } from 'react-router-dom';
import {api} from '../../services/api';

const DetailMovies =()=>{
   const {id, slug} = useParams()
   const [loading,setLoading] = useState(true)
   const [detail,setDetail] = useState([])
   useEffect(() => {
       const getData = async ()=>{
         const data = await api.getDataMovieById(id)
         const result = {}
         result.poster_path = data.poster_path
         result.original_title = data.original_title
         result.title = data.title
         result.overview = data.overview
         result.imdb_id = data.imdb_id
         result.vote_average = data.vote_average
         result.vote_count = data.vote_count
         result.image = data['images']['posters'] || []
         setDetail(result)
         setLoading(false)
       }
       getData()
   },[id])
   if(loading){
      return <Skeleton active/>
   }
   return(
      <LayoutMovie>
         <BreadcrumbMovie
             item_lv1 = "Home"
             item_lv2 = "List"
             item_lv3 = {slug}
          />
           <div className="site-layout-content">
            <Row>
               <Col span={8}>
                  <div style={{padding:'25px'}}>
                  <Image
                   src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
                  />
                  <p style={{textAlign:'center'}}>{detail.title}</p>
                  </div>
               </Col>
               <Col span={16}>
                  <div>
                     <h2>{detail.title}</h2>
                     <p>{detail.overview}</p>
                     <p>Vote average : {detail.vote_average}</p>
                     <p>Vote Count : {detail.vote_count}</p>
                     <p>imdb id: {detail.imdb_id}</p>
                     <Row style={{marginTop:'20px'}}>
                        {detail.image.map((item, index) =>(
                           <Col span={4} key={index} style={{margin:'10px'}}>
                              <Image
                                 src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                              />
                           </Col>
                        ))}
                     </Row>
                  </div>
               </Col>
            </Row>
           </div>
      </LayoutMovie>
   )
}
export default React.memo(DetailMovies)