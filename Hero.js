import React from 'react';

const Hero =({handleLogout})=>{
    return(
        <section className="Hero">
            <h1>WELCOME</h1>
            <button onClick={handleLogout}>Log Out</button>
        </section>
    )
}
export default Hero;