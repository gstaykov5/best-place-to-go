const API_URL = "http://localhost:8080/api";

const register = async (data) => {
    const postNewUser = await fetch(`${API_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const res = await postNewUser.json();
    
    return res;
};

const update = async (data, id) => {
    const updateUser = await fetch(`${API_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const user = await updateUser.json();

    return user;
}

const login = async (email, password) => {
    const getUser = await fetch(`${API_URL}/users`);
    const user = await getUser.json();

    return user;
};

const logout = () => {
    localStorage.removeItem("user");
};

const authService = {
    register,
    update,
    login,
    logout,
};

export default authService;