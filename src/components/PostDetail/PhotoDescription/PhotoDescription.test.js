import { render, screen, fireEvent } from '@testing-library/react';
import PhotoDescription from './PhotoDescription';
import { Provider } from 'react-redux';

describe("Photo description component", () => {

    test('testing title and description content',  () => {
        
        const { getByTestId } =  render(
            <PhotoDescription 
                postId="1" 
                title="Testing title" 
                description="Testing description"
                isEditable={false}
            />
            );
        const title = getByTestId("title");
        expect(title.textContent).toBe("Testing title")

        const description = getByTestId("description");
        expect(description.textContent).toBe("Testing description")

    })

})

