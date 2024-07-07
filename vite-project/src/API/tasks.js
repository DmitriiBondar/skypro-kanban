export const ApiURL = 'https://wedev-api.sky.pro/api/kanban'

export const getTasks = async(token) => {
    const response = await fetch(ApiURL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error("Упс...")
    }
    return response.json()
}