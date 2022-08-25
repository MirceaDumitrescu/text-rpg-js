const URL_DB = 'http://localhost:5050/api/user/register';


export const saveUser = async (user) => {
    const { username, password, email } = user;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
        }),
        mode: 'cors',
        cache: 'default',
    };

    const response = await fetch(URL_DB, settings);
    return response;
};
