import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Login from './components/Login';
import MovieCard from './components/MovieCard'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  
  // Put your TMDB API key here
  const apiKey = 'a9652645c98323618c36663ac4d80ed9'
  async function getMovie () {
    setLoading(true)
    try{
      let res
      // Make movie search more forgiving
      const shortSearchTerm = searchTerm.toLowerCase().replace(/\s/g, '').trim();
      
      // prevent search with only spaces
      if (searchTerm.trim().length > 0) {
        res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(shortSearchTerm)}&include_adult=false`);
      } else {
        res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false`)
        } 
        
      const data = await res.json();
      setMovieData(data.results);
      
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  }

  // render every time searchTerm changes
  useEffect (()=>{
    console.log("search term:", searchTerm);
    getMovie()
  },[searchTerm])

  // Make login modal close
  function handleCloseLogin () {
    setIsLogin(false)
  }



  return (
    <div>
      <Layout isLogin={isLogin} setIsLogin={setIsLogin} setSearchTerm={setSearchTerm} >

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

        {movieData.length === 0 && !loading ? (
          <p>No movies found</p>
          ) : (
          <MovieCard movieData={movieData} />
        )}
      </Layout>
    </div>
  );
};

export default App;