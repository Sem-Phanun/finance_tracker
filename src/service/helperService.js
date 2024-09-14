import apiClient from "./apiService";

export const isEmptyOrNull = (value) => {
    return (value == "" || value == null || value == undefined) ? true : false
}


export const login = async (credentials) => {
    try {
        const response = await apiClient.post('auth/login', credentials);
        localStorage.setItem('token', response.data.token);
        console.log(response);
        return response.data;
    
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                data: error.response.data,
            };
        } else {
            throw new Error('Network error');
        }
    }
}

export const register = async (params) => {
    
    try {
        const response = await apiClient.post('auth/register', params);
        localStorage.setItem('token', response.data.token);
        console.log(response);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw {
                status: error.response.status,
                data: error.response.data,
            };
        } else {
            throw new Error('Network error');
        }
    }
} 

export const getCurrentUser = async () => {
    try {
        if(!isEmptyOrNull(user)) {
            user = JSON.parse(user)
            return user;
        }

    } catch (error) {
        throw new Error(`Error getting current user: ${error.message}`)
    }
}