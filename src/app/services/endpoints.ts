export const Endpoints = {
    user: {
        getUser: { method: 'get', path: () => `api/v1/User` },
        createUser: { method: 'post', path: () => `api/v1/User` },
        updateUser: { method: 'put', path: () => `api/v1/User` },
        deleteUser: { method: 'delete', path: () => `api/v1/User` },
    }
}