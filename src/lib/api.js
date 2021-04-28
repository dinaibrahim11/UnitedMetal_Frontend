const FIREBASE_ENDPOINT = 'https://react-http-23f9c-default-rtdb.firebaseio.com';

export const addComment = async (comment) => {
    const response = await fetch(`${FIREBASE_ENDPOINT}/comments.json`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not add comment');
    }

    return {commentId: data.name};

}