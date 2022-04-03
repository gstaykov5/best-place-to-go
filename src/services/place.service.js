const API_URL = "http://localhost:8080/api";

const postPlace = async (data) => {
    const req = await fetch(`${API_URL}/places`, {
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
    const data = await fetch(`${API_URL}/places`);
    const places = data.json();
    return places;
}

const placeService = {
    postPlace,
    getAllPlaces,
};

export default placeService;