const API_URL = "http://localhost:8080/api";

const newComment = async (comment) => {
    const req = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = req.json();

    return res;
}


const commentsService = {
    newComment,
}

export default commentsService;