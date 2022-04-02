const API_URL = "http://localhost:8080/api";

const postPlace = async (data) => {
    const req = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const place = await req.json();

    return place;
}

const placeService = {
    postPlace,
};

export default placeService;