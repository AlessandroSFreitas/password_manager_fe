import axios from 'axios';

class LoginService {
    async get() {
        try {
            return await axios.get('http://localhost:8000/login/');
        } catch (error) {
            console.log(error)
        }
    }

    async post(user, password) {
        try {
            const token = btoa(user + ':' + password)

            return await axios.post('http://localhost:8000/home/', {
                headers: { "Authorization" : `Basic ${token}` },
                auth: { username: user, password: password },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default new LoginService();
