import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { usersActions } from '../../storev2/users-slice';
import { useDispatch, useSelector } from 'react-redux';
import './logo.png';
/**
 * Navigation bar at the top
 * @author Dina Mohsen
 * using flickr library for styling
 */
const GuestHeader = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const preventRefresh = (event, path) => {
    event.preventDefault();
    history.push(path);
  }

  const currentUserId = useSelector(state => state.users.currentUser.userId);

  const [searchQuery, setSearchQuery] = useState('');

  //To avoid the refreshing problem:
  //https://stackoverflow.com/questions/63880605/react-js-how-to-prevent-page-reload-once-click-on-the-link-right-now-the-whole

  const handleChange = (event) => {
      setSearchQuery(event.target.value);
      
  }

  const handleClick = (event) => {
      event.preventDefault();
      if (searchQuery === '') {
          return;
      }
      history.push("/SearchPage/?"+searchQuery);
      setSearchQuery('');
  }


    return (   <div>
      
      <base href="https://braes.co/" />
        <title> - BRÆS</title>
        <meta name="keywords" content />
        <meta name="description" content=" Braes " />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" hrefLang="ar-eg" href="https://braes.co//index/?action=lang&Id=Arabic&return=__2Fcontact" />
        <link rel="icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-32x32.png" sizes="32x32" />
        <link rel="icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-180x180.png" />
        <meta name="msapplication-TileImage" content="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-270x270.png" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
        <link href="themes/braes/assets/css/bootstrap.custom.min.css" rel="stylesheet" />
        <link href="themes/braes/assets/css/style.css?key=54" rel="stylesheet" />
        <link href="themes/braes/assets/css/custom.css" rel="stylesheet" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        .mt-3 a {\n            color: #bf8c8a !important;\n            text-decoration: none;\n            background-color: transparent;\n        }\n    " }} />
        <noscript>&lt;img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=4070651586295301&amp;ev=PageView&amp;noscript=1" /&gt;</noscript>
        <noscript>&lt;img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=433856431319815&amp;ev=PageView&amp;noscript=1" /&gt;</noscript>
        <div id="page">
          <header className="version_1">
            <div className="layer" />
            <div className="countdownTimer">
              <div className="container-fluid">
                <div className="row">
                  <div className="offset-md-0 offset-lg-1 col-md-12 col-lg-10 center-items">
                    <div className="content marquee" style={{textAlign: 'center'}}>
                      <p className="Marquee-content" style={{margin: 0}}>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-body-overlay" style={{opacity: 0, display: 'none'}} />
            </div>
            <div className="main_header">
              <div className="container">
                <div className="row small-gutters">
                  <div className="col-xl-2 col-lg-1 d-lg-flex align-items-center">
                    <div id="logo">
                      <a href="index.html">
                        <img src="./logo.png" alt="UnitedMetal" width={100} style={{width: '85px'}} /></a>
                    </div>
                  </div>
                  <nav className="col-xl-7 col-lg-8">
                    <a className="open_close" href="javascript:void(0);">
                      <div className="hamburger hamburger--spin">
                        <div className="hamburger-box">
                          <div className="hamburger-inner" />
                        </div>
                      </div>
                    </a>
                    <div className="main-menu">
                      <div id="header_menu">
                        <a href="index.html">
                          <img src="./logo.png" alt="" width={100} height={35} /></a>
                        <a href="javascript:void(0)" className="open_close" id="close_in"><i className="ti-close" /></a>
                      </div>
                      <ul> 
                        <li><a href="/"  onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/home")}} >HOME</a></li>
                        <li>  <a href="/about"  onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/home")}} >ABOUT</a></li>
                        <li> <a href="shop/all"  onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/home")}} >PROJECTS</a></li>
                              
                       <li><a href="shop/all/best:1"  onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/home")}} >CAREERS</a></li> <li><a href="shop/category/11/">SERVICES</a></li>
                        
                         <li><a href="/contact"  onClick={(e) => {e.preventDefault(); dispatch(usersActions.logout()); history.push("/home")}} >CONTACTUS</a></li>
                      </ul>
                    </div>
                  </nav>
                  <div className="col-xl-3 col-lg-3 d-lg-flex align-items-center justify-content-end text-right right-icons">
                    <ul className="top_tools">
                      <li className="d-block d-none d-sm-block d-md-none">
                      </li>
                      <li>
                        <div className="dropdown dropdown-cart">
                          <a href="/cart" className="cart_bt mobile-ddl">
                            <strong>0 </strong>
                            <i className="ti-shopping-cart" />
                          </a>
                          <div className="dropdown-menu cart-menu">
                            <ul>
                            </ul>
                            <div className="total_drop">
                              <div className="clearfix" style={{display: 'none'}}>
                                <strong>Total</strong><span />
                              </div>
                              <a style={{backgroundColor: '#faeaea', color: '#000'}} href="cart/" className="btn_1 cart">View cart</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="wishlist" className="wishlist"><span>Wishlist</span></a>
                      </li>
                      <li>
                        <a className="phone_top" href="https://braes.co/contact"><strong><span>Need Help</span></strong></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="countdownTimer">
              <div className="container-fluid">
                <div className="row">
                  <div className="offset-md-0 offset-lg-1 col-md-12 col-lg-10 center-items">
                    <div className="content marquee" style={{textAlign: 'center'}}>
                      <p className="Marquee-content" style={{margin: 0}}>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-body-overlay" style={{opacity: 0, display: 'none'}} />
            </div>
            <div className="main_nav Sticky">
              <div className="container">
                <div className="row small-gutters">
                  <div className="col-xl-8 col-lg-8 col-md-6">
                    <ul className="top_tools">
                      <li className="d-block d-none d-sm-block d-md-none search-icon">
                        <a href="javascript:void(0);" className="btn_search_mob"><span>Search</span></a>
                      </li>
                      <li>
                        <div className="dropdown dropdown-access">
                          <a href="javascript:void(0)" className="access_link mobile-ddl">
                            <span>Account</span></a>
                          <div className="dropdown-menu">
                            <a href="member/?action=Register" className="btn_1">Sign In or Sign Up</a>
                            <ul>
                              <li>
                                <a href="member/?action=orders&act=track"><i className="ti-truck" />Track your Order</a>
                              </li>
                              <li>
                                <a href="member/?action=orders"><i className="ti-package" />My Orders</a>
                              </li>
                              <li>
                                <a href="member/?action=profile"><i className="ti-user" />My Profile</a>
                              </li>
                              <li>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li style={{display: 'block'}} className> <a className="lang-select " href="index/?action=lang&Id=Arabic&return=__2Fcontact">
                          AR
                        </a>
                      </li>
                      <li style={{display: 'block'}} className="lang-active">
                        <a className="lang-select" href="index/?action=lang&Id=English&return=__2Fcontact">
                          EN
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">

                    <div className="custom-search-input" style={{marginTop: '-5px'}}>
                      <form action="shop/all/" method="post">
                        <input type="text" placeholder="Projects, collaboratios or careers.."  name="keyword" defaultValue  onChange={handleChange} value={searchQuery}  data-track="gnSearchSearchIcon" className="search-icon-button" tabIndex={-1} aria-label="Search" role="button"  />
                        
                        <input type="SEARCH" className="btn_1 full-width" defaultValue="Search" />
                  
                      </form>
                    </div>


    
  
                  </div>
                </div>
              </div>
              <div className="search_mob_wp">
                <form action="shop/all/" method="post">
                           
    <input onChange={handleChange} value={searchQuery} type="text" id="search-field" className="autosuggest-selectable-item" placeholder="Projects, collaboratios or careers.." name="text" defaultValue autoComplete="off" aria-label="Search" role="textbox" />
  
                  <input type="submit" className="btn_1 full-width" defaultValue="Search" />
                </form>
              </div>

            </div>

          </header>
          <div className="modal fade" id="myModel" tabIndex={-1} role="dialog" aria-labelledallabedby="myMol" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <h3 className="modal-title" id="myModalLabel"> </h3>
                </div>
                <div className="modal-body">
                  <p>
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn_1 " data-dismiss="modal">Close</button>
                  <button type="button" className="btn_1 " id="submitvariations">Save</button>
                </div>
              </div>
            </div>
          </div>
          <link href="themes/braes/assets/css/contact.css" rel="stylesheet" />
          
        </div>
        <div id="toTop" />
    </div>







              );
            }
export default GuestHeader;