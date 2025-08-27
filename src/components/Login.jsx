import React from 'react';
import ReactDom from 'react-dom'


const Login = (props) => {
    
    const {  children, handleCloseLogin  } = props;

    return ReactDom.createPortal (
        <div className='login-form'>
            <button className='login-overlay' onClick={()=>{handleCloseLogin()}}></button>
            <div className='login-content'>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    ); 
};

export default Login;