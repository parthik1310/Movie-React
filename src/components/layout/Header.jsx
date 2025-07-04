import { NavLink } from "react-router-dom";
export const Header = () => {
    return (
        <>
            <header className="section-navbar"> 
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>I am Best Dealer of Gold and Diamond</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="#">SIGN IN</NavLink>
                            <NavLink to="#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index">
                            <p>ParthikFlix</p>
                        </NavLink>
                    </div>  

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/" className={({isActive}) =>  
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                                >
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movie" className="nav-link">
                                    Movies
                                </NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    contact
                                </NavLink>
                                 
                            </li> 
                        </ul>  
                    </nav>
                </div>
            </header>
        </>
    )
};  