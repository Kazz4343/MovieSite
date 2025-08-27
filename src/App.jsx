import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Login from './components/Login';
import MovieCard from './components/MovieCard'


const App = () => {
  
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  
  function handleCloseLogin () {
    setIsLogin(false)
  }


  const apiKey = 'a9652645c98323618c36663ac4d80ed9'
  async function getMovie () {
    try{
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      const data = await res.json();
      setMovieData(data.results);
      console.log(data.results);
   
    } catch(err) {
      console.error(err);
    } 
  }

  useEffect (()=>{
    getMovie()
  },[])

  return (
    <div>
      <Layout isLogin={isLogin} setIsLogin={setIsLogin}>


        {/*LOGIN MODAL*/}
        {isLogin && 
          (<Login handleCloseLogin={handleCloseLogin}>     
            <form>
                <h2>Login</h2>
                <div className='user-password'>
                    <i className="fa-solid fa-user-secret"></i>
                    <input placeholder='Username' />
                </div>
                <div className='user-password'>
                    <i className="fa-solid fa-lock"></i>
                    <input placeholder='Password'/>
                </div>
                <div className='remember-forgot'>
                    <div className='remember'>
                      <input type='checkbox'/>
                      <p>Remember me</p>
                    </div>
                    <p>Forget password?</p>
                </div>
                <button>Login</button>
                <p className='create-account'>Create Account</p>
            </form>
          </Login>)
          }
          {/* Movie card */}
        <MovieCard movieData={movieData} />
      </Layout>
    </div>
  );
};

export default App;