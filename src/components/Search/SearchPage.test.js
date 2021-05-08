import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../storev2/store';
import {fireEvent, getAllByLabelText, getAllByTestId, render} from "@testing-library/react";
import SearchPage from './SearchPage.js';
import Searchbar from './Searchbar.js';


 // testing that the searchPage render correctly
it( "SearchPage rendering without problem ", ()=>{

const div=document.createElement("div");
ReactDom.render(<Provider store={store}><SearchPage/></Provider>,div);



})
// testing that tab1 renders

it("render tab1 correct",()=>{

const {getByTestId}=render(<Provider store={store}><SearchPage/></Provider>);
const tab1button=getByTestId("1");


})
    // testing that tab2 renders
it("render tab2 correct",()=>{

    const {getByTestId}=render(<Provider store={store}><SearchPage/></Provider>);
    const tab2button=getByTestId("2");
    
    
    })
    // testing that tab3 renders
it("render tab3 correct",()=>{

    const {getByTestId}=render(<Provider store={store}><SearchPage/></Provider>);
    const tab3button=getByTestId("3");
    
    
    })
    // testing that the searchbar render correctly
    it( "Searchbar rendering without problem ", ()=>{

        const div=document.createElement("div");
        ReactDom.render(<Provider store={store}><Searchbar/></Provider>,div);
        
        
        
        })
        // testing the search bar button that it renders
        it("render search button correct",()=>{

            const {getByTestId}=render(<Provider store={store}><Searchbar/></Provider>);
            const searchbutton=getByTestId("5");
            
            
            })

            it("render images search correct",()=>{

                const {getAllByTestId}=render(<Provider store={store}><SearchPage/></Provider>);
                const searchimg=getAllByTestId("6");
                
                
                })


            //testing the search bar input that it renders
            it("render search input correct",()=>{

                const {getByTestId}=render(<Provider store={store}><Searchbar/></Provider>);
                const input=getByTestId("4");
                
                
                })


               

  


