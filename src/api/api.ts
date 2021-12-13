import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "438b43d8-c9fc-4009-a5e7-db75e710334c"
    }
})


export const userAPI = {

    getUsers(pageSize: number, currentPage: number) {
        return (
            instance.get(`users?count=${pageSize}&page=${currentPage}`)
                .then(response => response.data)
        )
    },

    followUser(id: number) {
        return (
            instance.post(`follow/${id}`).then(response => response.data)
        )
    },

    unfollowUser(id: number) {
        return (
            instance.delete(`follow/${id}`).then(response => response.data)
        )
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },

    getStatus(userId: number) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },

    updateStatus(status: string) {
        return (
            instance.put(`profile/status`, {status})
        )

    }
}

export const authAPI = {
    authMe() {
        return (
            instance.get('auth/me').then(response => response.data)
        )
    }
}
