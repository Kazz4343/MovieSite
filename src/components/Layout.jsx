import React from 'react';

const Layout = (props) => {
    
    const { children, setIsLogin, setSearchTerm} = props

    return (
        <div>
            <header>
                <div className='header-logo'>
                    <div>
                        <h1>MovieHD4343</h1>
                    </div>
                </div>

                <div className='search-bar'>
                    <div className='search-form'>
                        <input placeholder='Search for Movie' onChange={(e)=>{setSearchTerm(e.target.value)}} />
                    </div>
                </div>

                <button onClick={()=>{setIsLogin(true)}} className='login-btn'>Login</button>

            </header>
            
            {children}
            
            <footer>

                <div>
                    <small>
                        Disclaimer: This project is created for the purpose of practicing only. 
                    </small>
                </div>
                <div className='social-icon'>
                    <a target='_blank' href='https://github.com/Kazz4343'><i className="fa-brands fa-square-github"></i></a>
                    <a target='_blank' href='https://www.linkedin.com/feed/' ><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;