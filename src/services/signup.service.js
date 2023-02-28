import axios from 'axios';

class SignUpService {
    async post(user, password, confirm_password) {
        try {
            return await axios.post('http://localhost:8000/signup/', {
                username: user, password: password, confirm_password: confirm_password,
            });
        } catch (error) {
            return { error }
        }
    }
}

export default new SignUpService();
