import React from 'react'
import { NavLink } from 'react-router-dom'


const Signup = () =>{
    return (
        <>
        <section>
            <div>
                <div>
                    <div>
                        <h2>Sign Up</h2>
                        <form id="signup">
                            <div>
                                <label htmlFor="name">
                                <i class="zmdi zmdi-account"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                placeholder="your name"></input>
                            </div>
                            <div>
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email"></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                placeholder="your email"></input>
                            </div>

                            <div>
                                <label htmlFor="mobile">
                                <i class="zmdi zmdi-mobile-in-talk"></i>
                                </label>
                                <input type="text" name="mobile" id="mobile" autoComplete="off"
                                placeholder=" Contact Number"></input>
                            </div>

                            <div>
                                <label htmlFor="address">
                                <i class="zmdi zmdi-address"></i>
                                </label>
                                <input type="text" name="address" id="address" autoComplete="off"
                                placeholder="your proffession"></input>
                            </div>

                            <div>
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock"></i>
                                </label>
                                <input type="text" name="password" id="password" autoComplete="off"
                                placeholder="password"></input>
                            </div>

                            <div>
                                <label htmlFor="cpassword">
                                <i class="zmdi zmdi-lock"></i>
                                </label>
                                <input type="text" name="cpassword" id="cpassword" autoComplete="off"
                                placeholder="confirm password"></input>
                            </div>
<div>
    <input type="submit" name="signup" id="signup" value="Register"></input>
</div>
                            
                        </form>
                        </div>
                        <div>
                            <figure>
                                <img src ="" alt="register img"></img>
                            </figure>
                            <NavLink to="/Login"> I am already register</NavLink>
                        
                    </div>
                </div>

            </div>
        </section>
         </>
    )
}

export default Signup;
