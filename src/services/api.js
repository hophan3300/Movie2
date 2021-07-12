import axios from 'axios';
import jwt from 'jsonwebtoken';

const SERECT_KEY_TOKEN = 'reactjs'    // key nay do server quy dinh va cc cho client

const searchMovieByKeyword = async (key, page = 1) => {
   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`);
   const result = response.data
   return result;
}

const getDataMovieById = async (id)=>{
   const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`);
   const result = res.data
   return result;
}

const checkLogin = (username, password) =>{
   // dung jsonwebtoken : co che ma hoa va giai ma chung client va server
   let token = null
   if(username ==='admin' && password === '123'){
      // ma hoa tt thanh token tra ve
      token = jwt.sign({
         id : 1,
         username: username, 
         fullname : 'ahihi',
         email : 'ahihi@gmail.com'
      }, SERECT_KEY_TOKEN)
   }
   return token
}

export const api = {
   searchMovieByKeyword,
   getDataMovieById,
   checkLogin
}
