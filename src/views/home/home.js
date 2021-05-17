import React from 'react';
import './home.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends React.Component{

    render()
    {
        return(
            
            <div className="content-area">   
            <ToastContainer autoClose={3000} hideProgressBar pauseOnHover={false} />             
                <div className="home-cover" style={{}}>
                   <div className="home-content" style={{"max-width":"585px"}}>
                        <h1 className="home-heading">Extraordinary projects deserve extraordinary work</h1>
                        <div className="home-button">
                            <a href="#" className="button-link"> Our Services</a>
                        </div>
                    </div>
                </div>
               
                <div className="row home-card">
                    <div className="col-sm-4 col-md-4 col-lg-3 card-block">
                        <div className="card border-0">
                            <div className="card-body justify-content-center d-flex">
                                <div className="card-icon"  style={{}}>
                                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z"></path>
                                    </svg>
                                </div>                               
                            </div>
                        </div>
                        <div className="card-footer border-0 p-3">
                            <h4 className="card-footer-tag">Buy/Sell</h4>
                        </div>  
                        <p className="card-footer-content">Creating real value in property and places.</p>                      
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 card-block">
                        <div className="card border-0">
                            <div className="card-body justify-content-center d-flex">
                                <div className="card-icon">
                                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z"></path>
                                    </svg>
                                </div>                               
                            </div>
                        </div>
                        <div className="card-footer border-0 p-3">
                            <h4 className="card-footer-tag">Leasing</h4>
                        </div>  
                        <p className="card-footer-content">For service beyond the sale, <a href="#" className="button-link1">Contact Us!</a></p>                      
                    </div> 
                    <div className="col-sm-4 col-md-4 col-lg-3 card-block">
                        <div className="card border-0">
                            <div className="card-body justify-content-center d-flex">
                                <div className="card-icon">
                                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z"></path>
                                    </svg>
                                </div>                               
                            </div>
                        </div>
                        <div className="card-footer border-0 p-3">
                            <h4 className="card-footer-tag">Renovation</h4>
                        </div>  
                        <p className="card-footer-content">Service you deserve. People you trust.</p>                      
                    </div>                  
                </div>                
            </div>




        )
    }
}
export default Home;