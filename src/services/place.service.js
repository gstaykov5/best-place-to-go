const API_URL = "http://localhost:5000";

const postPlace = async (data) => {
    const req = await fetch(`${API_URL}/bestPlaces/place`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const place = await req.json();

    return place;
}

const getAllPlaces = async () => {
    const req = await fetch(`${API_URL}/bestPlaces/place`);
    const res = await req.json();

    return res;
}

const placeService = {
    postPlace,
    getAllPlaces,
};

export default placeService;