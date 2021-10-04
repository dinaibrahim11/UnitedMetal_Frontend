
 import React from 'react'
 import {Link} from 'react-router-dom'
 /**
 * Page contact
 * @function Contact
 * @author Dina Mohsen
 */

 
 const Contact = (props) => {
     return(
 <div>
     
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
          <main className="bg_gray">
            <div className="container">
              <div className="main_title">
                <h2>Contact Us</h2>
                <a href="tel://+20 111 888 0095">+20 111 888 0095</a>
                Phone number available
                From Sunday to Thursday from 10AM till 7PM
                Saturday from 10AM till 4PM
              </div>
            </div>
            <div className="bg_white">
              <div className="container margin_60_35">
                <div className="row">
                  <div className="col-lg-4 col-md-6 add_bottom_25">
                    <p className="success" id="success" style={{display: 'none'}}>Message sent</p>
                    <p className="error" id="error" style={{display: 'none'}} />
                    <form name="contact_form" id="contact_form" method="post" action="contact">
                      <input type="hidden" name="act" defaultValue="checkmail" />
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Real Name *" name="contact_name" id="contact_name" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email *" defaultValue name="contact_email" id="contact_email" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" style={{height: '150px'}} placeholder="Subject *" name="contact_subject" id="contact_subject" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" style={{height: '150px'}} placeholder="Message *" name="message" id="message" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <input className="btn_1 full-width" type="submit" defaultValue="Send" />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-8 col-md-6 add_bottom_25">
                    <iframe src="https://www.google.com/maps/d/embed?mid=1zQWbTdx5zeeRQLDS70ZjLIny1p13tUEp" width="100%" height={480} style={{border: 'none'}} />
                  </div>
                </div>
              </div>
            </div>
          </main>
       
        
        </div>
        <div id="toTop" />
 </div>
 
     )
 }
 
 
 
 export default Contact;