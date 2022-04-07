const API_URL = "http://localhost:5000";

const newComment = async (comment) => {
    const req = await fetch(`${API_URL}/placesComments/comment`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
}

const getAllComments = async () => {
    const req = await fetch(`${API_URL}/placesComments/comment`);
    const res = await req.json();

    return res;
}

const deleteComment = async (id) => {
    const req = await fetch(`${API_URL}/placesComments/comment/${id}`, {
        method: 'DELETE',
    });
    const res = await req.json();

    return res;
}

const commentsService = {
    newComment,
    getAllComments,
    deleteComment
}

export default commentsService;
