import { userActions } from './user-slice';

const FIREBASE_ENDPOINT = 'https://react-http-23f9c-default-rtdb.firebaseio.com';

export const fetchFavedPhotos = () => {
    return async (dispatch) => {

        const fetchData = async () => {
            const response = await fetch(
                `${FIREBASE_ENDPOINT}/faves.json`);

            if (!response.ok) {
                throw new Error("Fetching faved photos failed.");
            }

            const data = await response.json();
            console.log(data);
            return data;
        };

        try {
            const favedPhotosData = await fetchData();
            dispatch(userActions.replaceFavedPhotos({
                favedPhotos: favedPhotosData.favedPhotos || []
            }));
        } catch (error) {
            // TODO: show a ui element that states the failure of sending
            console.log('fetching faved photos failed.');
        }

    }
}


export const sendFavedPhotos = (photos) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch(
                `${FIREBASE_ENDPOINT}/faves.json`,{
                    method: 'PUT',
                    body: JSON.stringify({
                        favedPhotos: photos
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Sending faved photos failed.");
            }
        };


        try {
            await sendRequest();
        } catch (error) {
            // TODO: show a ui element that states the failure of sending
            console.log('Sending faved photos failed.');
        }

    }

}


//a single photo using POST request instead of PUT
export const sendFavedPhoto = (photo) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await fetch(
                `${FIREBASE_ENDPOINT}/faves.json`,{
                    method: 'POST',
                    body: JSON.stringify(photo)
                    // body: JSON.stringify({
                    //     favedPhotos: photo
                    // })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Sending faved photos failed.");
            }
        };


        try {
            await sendRequest();
        } catch (error) {
            // TODO: show a ui element that states the failure of sending
            console.log('Sending faved photos failed.');
        }

    }

}