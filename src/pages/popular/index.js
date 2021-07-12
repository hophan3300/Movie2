import React from 'react';
import LayoutMovie from '../../components/layout';
import BreadcrumbMovie from '../../components/partinals/breadcrumb';

const PopularMovie =()=>{
   return(
      <LayoutMovie>
         <BreadcrumbMovie
            item_lv1 = "Home"
            item_lv2 = "List"
            item_lv3 = "Popular"
         />
          <div className="site-layout-content">
             <h3>This is popular movies</h3>
          </div>
      </LayoutMovie>
   )
}
export default React.memo(PopularMovie)