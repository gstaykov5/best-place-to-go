const API_URL = "http://localhost:5000";

const postPlace = async (data) => {
    const req = await fetch(`${API_URL}/bestPlaces/place`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const res = await req.json();

    return res;
}

const getAllPlaces = async () => {
    const req = await fetch(`${API_URL}/bestPlaces/place`);
    const res = await req.json();

    return res;
}

const updatePlace = async (id, data) => {
    const req = await fetch(`${API_URL}/bestPlaces/place/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const res = await req.json();

    return res;
}

const deletePlace = async id => {
    const req = await fetch(`${API_URL}/bestPlaces/place/delete/${id}`, {
        method: 'DELETE',
    })
    const res = await req.json();

    return res;
}

const placeService = {
    postPlace,
    getAllPlaces,
    updatePlace,
    deletePlace,
};

export default placeService;