import React from 'react';
import {Card} from 'antd';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';


const { Meta } = Card
const CardMovie =({item})=>{
   return(
      <Link to={`/movie/${slugify(item.title)}~${item.id}`}>
         <Card
            hoverable
            style={{margin:"10px 0 0 10px"}}
            cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />}
         >
            <Meta title={item.title}/>
         </Card>
      </Link>
   )
}
export default React.memo(CardMovie)