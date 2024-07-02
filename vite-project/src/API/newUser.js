const apiURL = 'https://wedev-api.sky.pro/api/user'

export const Registration = async({login, password, name}) => {
    const response = await fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({login, password, name})
    })
    if (response.status === 400) {
        throw new Error('Пользователь с таким логином уже существует')
    }
    if (!response.ok) {
        throw new Error("Упс... Что-то не так")
    }
    return response.json()
}