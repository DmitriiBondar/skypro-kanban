const apiURL = 'https://wedev-api.sky.pro/api/user/login'

export const signIn = async({login, password}) => {
    const response = await fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify({login, password})
    })
    if (response.status === 400) {
        throw new Error('Неверный логин или пароль')
    }
    if (!response.ok) {
        throw new Error("Упс... Что-то не так")
    }
    return response.json()
}