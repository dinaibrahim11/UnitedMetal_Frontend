import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { usersActions } from '../../storev2/users-slice';
import { useDispatch, useSelector } from 'react-redux';

/**
 * Navigation bar at the buttom
 * @author Dina Mohsen
 * 
 */
const Footer = (props) => {
    
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


    return (
        <div>
               
            
            <base href="https://braes.co/" />
            <title>BRÆS | Home - BRÆS</title>
            <link rel="alternate" hrefLang="ar-eg" href="https://braes.co//index/?action=lang&Id=Arabic&return=__2Findex.html" />
            <link rel="icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-32x32.png" sizes="32x32" />
            <link rel="icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-192x192.png" sizes="192x192" />
            <link rel="apple-touch-icon" href="themes/braes/assets/img/cropped-4E8229D4-1B5F-4447-B899-BD67042E4819-180x180.png" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
            <link href="themes/braes/assets/css/bootstrap.custom.min.css" rel="stylesheet" />
            <link href="themes/braes/assets/css/style.css?key=41" rel="stylesheet" />
            <link href="themes/braes/assets/css/custom.css" rel="stylesheet" />
            <link rel="canonical" href="https://braes.co/" />
            <style type="text/css" dangerouslySetInnerHTML={{__html: ".mt-3 a{color:#bf8c8a!important;text-decoration:none;background-color:transparent}" }} />
            <noscript>&lt;img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=4070651586295301&amp;ev=PageView&amp;noscript=1" data-pagespeed-url-hash="921026155"/&gt;</noscript>
            <noscript>&lt;img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=433856431319815&amp;ev=PageView&amp;noscript=1" data-pagespeed-url-hash="1817792367"/&gt;</noscript>
            <div id="page">
             
              
              <link href="themes/braes/assets/css/home_1.css?key=16" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
              <style dangerouslySetInnerHTML={{__html: ".videoWrapper{position:relative;padding-bottom:56.25%;padding-top:25px;height:0}.videoWrapper iframe{position:absolute;top:0;left:0;width:100%;height:100%}figure{margin:0 0 .60rem}" }} />
              
              <footer className="revealed">
        <div className="container">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <h3 data-target="#collapse_1">About</h3>
                      <div className="collapse dont-collapse-sm links" id="collapse_1">
                        <ul>
                          <a href="member/?action=profile">United Metal is a leading manufacturer in the field of metallic construction, located in the 6th October Trading center and the factory is located in the 3rd industrial zone in 6th of October city.</a> 
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h3 data-target="#collapse_2">Services</h3>
                      <div className="collapse dont-collapse-sm links" id="collapse_2">
                        <ul>
                         <li> <a href="post/view/6/sub:1">SUBSCRIBE
        Don’t miss Unitedmetal latest news and events. Subscribe to our newsletter channel and be informed</a>
                          
        </li>
                              <li className="gn-search-box" role="menuitem">
        
                                <div className="view search-autosuggest-field-view requiredToShowOnServer" data-view-signature="search-autosuggest-field-view__UA_1__adConfig_1__disableMobileNav_true__enableBrowserUpgradeBanner_true__isMobile_false__isOwner_false__requiredToShowOnClient_true__requiredToShowOnServer_true__theme_semi-transparent-theme__whichTabIsActiveOnRender_none"><form  role="search" className="search-form">
                                    <label data-track="gnSearchSearchIcon" aria-label="Search">
                                      <svg className="icon search-icon" style={{width: '22px', height: '22px'}} data-track="gnSearchSearchIcon" aria-label="Search"><use xlinkHref="#icon-search" /></svg>
                                      <input type="submit" data-track="gnSearchSearchIcon" className="search-icon-button" tabIndex={-1} aria-label="Search" role="button" />
                                    </label>
                                    <ul className="search-pillbox">
                                    </ul>
                                    <input  type="text" id="search-field" className="autosuggest-selectable-item" placeholder="write your mail.." name="text" defaultValue autoComplete="off" aria-label="Search" role="textbox" />
                                  </form>
                                  <div className="view search-autosuggest-items-list-view" data-view-signature="search-autosuggest-items-list-view__UA_1__adConfig_1__disableMobileNav_true__enableBrowserUpgradeBanner_true__isMobile_false__isOwner_false__requiredToShowOnClient_false__requiredToShowOnServer_false__theme_semi-transparent-theme__whichTabIsActiveOnRender_none" />
                                </div>
                              </li>
                            <li>  <a className="black-btn" href="member/?action=community" role="button">
                      SUBSCRIBE</a></li>
                      </ul>
                
                      </div>
            
                  
                  
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <h3 data-target="#collapse_3">Contact us</h3>
                      <div className="collapse dont-collapse-sm contacts" id="collapse_3">
                        <ul>
                          <li><i className="ti-home" />Head office : 6 October Trading center building no 1</li>
                          <li><i className="fas fa-shipping-fast" /> Work Shop : 3rd industrial zone 6th of October </li>
                        </ul>
                      </div>
                    </div>
                
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6">
                      <ul className="additional_links">
                        <li><span>2021 United Metal</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <div id="toTop" />
          </div> 
                
        
        
       )   }
    export default Footer;