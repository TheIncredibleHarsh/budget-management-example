import axios from "axios";

const useAppSettingsApi = () => {
    const base_url = "http://localhost:3000";
    const getAppSettings = async () => {
        const response = await axios.get(`${base_url}/appSettings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data;
    }

    const updateCurrency = async (currency: string) => {
        const response = await axios.put(`${base_url}/appSettings/currency`, {
            currency: currency
        })
        return response.data;
    }

    const createCategory = async (name: string) => {
        const response = await axios.post(`${base_url}/appSettings/category`, {
            categoryName: name
        })
        return response;
    }

    const deleteCategory = async (id: number) => {
        const response = await fetch(`${base_url}/appSettings/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    }

    const createTag = async (name: string) => {
        const response = await axios.post(`${base_url}/appSettings/tag`, {
            tagName: name
        })
        return await response.data;
    }

    const deleteTag = async (id: number) => {
        const response = await fetch(`${base_url}/appSettings/tag/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.json();
    }

    return {
        getAppSettings,
        updateCurrency,
        createCategory,
        deleteCategory,
        createTag,
        deleteTag
    }
}

export default useAppSettingsApi;