import { faker } from "@faker-js/faker";
import axios from 'axios';


// This hooks creates user with random email address to be used by gues users

const useToken = () => {
    let token = localStorage.getItem("token");
    const base_url = import.meta.env.HOST_NAME || "http://localhost:3000";
    if(token){
       console.log("token exists");
    } else {
        const user = {
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        axios.post(buildUrl(base_url, "/users/signup"), user)
            .then(response => response.data)
            .then(data => {
                if(data == "OK"){
                    axios.post(buildUrl(base_url, "/users/login"),{
                        email: user.email,
                        password: user.password
                    }
                )
                .then(response => response.data)
                .then(data => {
                    if(data.token){
                        localStorage.setItem('token', data.token);
                    } else {
                        throw("Error");
                    }
                });
            }
        });
    }

    return token;
}

const buildUrl = (base: string, path: string) =>{
    return `${base}${path}`
} 

export default useToken;