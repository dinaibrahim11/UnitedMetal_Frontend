import React from 'react';
const GuestHeader = (props) => {
    return (    <header className="version_1">
                      <div className="main_header">
                        <div className="container">
                          <div className="row small-gutters">
                            <nav className="col-xl-7 col-lg-7">
                              <div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-left">
                              <a className="phone_top" href="javascript:void(0);"><strong><span>FLICKR</span></strong></a>
                             </div>
                              <div className="main-menu">
                              </div>
                            </nav>
                            <div className="col-xl-3 col-lg-2 d-lg-flex align-items-center justify-content-end text-right">
                            <ul> <a className="phone_top" href="/SignUp"><strong><span>SignUp</span></strong></a></ul>
                             <ul> <a className="phone_top" href="/LogIn"><strong><span>LogIn</span></strong></a></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main_nav Sticky">
                        <div className="container">
                          <div className="row small-gutters">
                            <div className="col-xl-8 col-lg-8 col-md-10">
                              <ul className="top_tools">
                                <li className="d-block d-none d-sm-block d-md-none">
                                  <a href="javascript:void(0);" className="btn_search_mob"><span></span></a>
                                  <div className="custom-search-input">
                                <form action="/Search" method="post">
                                  <input type="text" placeholder="Search photos, people, and groups." name="keyword" value='' />
                                  <button type="submit">Q</button>
                                </form>
                              </div>
                                </li>
                              </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
                              <div className="custom-search-input">
                                <form action="Search" method="post">
                                  <input type="text" placeholder="Search photos, people, and groups." name="keyword" value='' />
                                  <button type="submit">Q </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </header>
              );
            }
export default GuestHeader;