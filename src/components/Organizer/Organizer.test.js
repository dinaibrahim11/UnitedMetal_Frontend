import React, {useState, useEffect, useReducer} from 'react' ;
import ReactDOM from 'react-dom' ;
import Organizer from './Organizer';
import {render, cleanup, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../storev2/store';


afterEach(cleanup);

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><Organizer /></Provider>, div);
})

    test('photos count is equal to zero initially',  () => {
        
        const { getByTestId } = render(<Provider store={store}><Organizer/></Provider>);
        const photosCount = getByTestId("photos-count");
        expect(photosCount.textContent).toBe("0 items in the album");
    })
    
    test('photos count increases on dropping a photo', () => {

        const {getByTestId} = render(<Provider store={store}> <Organizer /> </Provider>);
        const photosCount = getByTestId("photos-count");
        const dropDiv = getByTestId("drop-div");
   
         fireEvent.drop(dropDiv);
         expect(photosCount.textContent).not.toBe("0 items in the album");
        
        })

        test('album name value actually changes, on changing albumName input ', () => {

            const {getByTestId} = render(<Provider store={store}> <Organizer /> </Provider>);
            const nameInput = getByTestId("name-input");
            expect(nameInput).not.toBeNull();
        
             fireEvent.change(nameInput, {target: {value:"album1"}});
             expect(nameInput.value).toBe("album1");
            
            })

            test('album description value actually changes, on changing albumDescription input', () => {

                const {getByTestId} = render(<Provider store={store}> <Organizer /> </Provider>);
                const descriptionInput = getByTestId("description-input");
                expect(descriptionInput).not.toBeNull();
            
                 fireEvent.change(descriptionInput, {target: {value:"description1"}});
                 expect(descriptionInput.value).toBe("description1");
                
                })
        
                test('save button is disabled initially', () => {

                    const {getByTestId} = render(<Provider store={store}> <Organizer /> </Provider>);
                    const saveBtn = getByTestId("save-btn");
                    expect(saveBtn).toHaveAttribute('disabled');  
                    })

                  test('save button is enabled on adding a photo', () => {

                        const {getByTestId} = render(<Provider store={store}> <Organizer /> </Provider>);
                        const saveBtn = getByTestId("save-btn");
                        const dropDiv = getByTestId("drop-div");

                        fireEvent.drop(dropDiv);
                        expect(saveBtn).not.toHaveAttribute('disabled');  
                        })

            