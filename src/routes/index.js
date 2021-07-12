import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { Skeleton } from "antd";
import {helper} from '../helper/common';

const SearchMovie = lazy(()=> import('../pages/search/index'))
const PopularMovie = lazy(()=> import('../pages/popular/index'))
const DetailMovies = lazy(()=> import('../pages/detail/index'))
const LoginMovie = lazy(()=> import('../pages/login/index'))

function IsLogin({children, ...rest}){
   let auth = helper.fakeAuthLogin()    // biet login hay chua
   return(
      <Route
       {...rest}
       render={({ location }) =>
         auth ? (
            <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
         ) : (
           children
         )
       }
     />
   )
}

function PrivateRoute({ children, ...rest }) {
   let auth = helper.fakeAuthLogin()
   return (
     <Route
       {...rest}
       render={({ location }) =>
         auth ? (
           children
         ) : (
           <Redirect
             to={{
               pathname: "/movie/login",
               state: { from: location }
             }}
           />
         )
       }
     />
   );
 }

const RouteMovie =()=>{
   return(
      <Router>
         <Suspense fallback={<Skeleton active/>}>
         <Switch>
            <PrivateRoute path="/" exact>
               <PopularMovie/>
            </PrivateRoute>
            <PrivateRoute path="/popular-movies">
               <PopularMovie/>
            </PrivateRoute>
            <PrivateRoute path="/search-movies">
               <SearchMovie/>
            </PrivateRoute>
            <PrivateRoute path="/movie/:slug~:id">
               <DetailMovies/>
            </PrivateRoute>
            <IsLogin path="/movie/login" >
               <LoginMovie/>
            </IsLogin>
            <Route path="*">
               <h1 style={{textAlign: 'center',marginTop:'25px'}}>Page not found</h1>
            </Route>
         </Switch>
         </Suspense>
      </Router>
   )
}

export default React.memo(RouteMovie)