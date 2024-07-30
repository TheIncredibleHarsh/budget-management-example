import axios from "axios";
import urlBuilder from "../utils/urlBuilder";
import { TUserProfile } from "../types";

const useUserProfileApi = () => {
    const base_url = "http://localhost:3000";
    const updateUserProfile = async (userProfile: TUserProfile) => {
        await axios.put(urlBuilder(base_url, `/users/user-profile/${userProfile.id}`), {userProfile: userProfile})
            .then(response => {
                return response
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });

    }

    const fetchUserProfile = async (userId: number) => {
        const userProfile = await axios.get(urlBuilder(base_url, `/users/${userId}/settings`))
            .then(response => {
                return response.data.userProfile
            })
            .catch(() => {
                throw new Error("Something went wrong, try after some time.")
            });
        return userProfile
    }

    return {
        fetchUserProfile,
        updateUserProfile
    }
}

export default useUserProfileApi;