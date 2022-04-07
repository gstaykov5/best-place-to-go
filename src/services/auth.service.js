const API_URL = "http://localhost:5000";

const register = async (data) => {
    const req = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
};

const update = async (data, id) => {
    const req = await fetch(`${API_URL}/users/edit/${id}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
}

const login = async (email, password) => {
    const req = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify({email, password,}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await req.json();

    return res;
};

const logout = () => {
    sessionStorage.removeItem("user");
};

const authService = {
    register,
    update,
    login,
    logout,
};

export default authService;