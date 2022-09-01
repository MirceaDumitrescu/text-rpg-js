const URL_DB = 'http://localhost:5050/api/v1/users/save/';


export const addCharacterData = async (charData, id) => {
    const { name, charClass, level, experience, health, mana, location } = charData;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const settings = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            characterData: {
                name: name,
                charClass: charClass,
                level: level,
                experience: experience,
                health: health,
                mana: mana,
                location: location,
            }
        }),
        mode: 'cors',
        cache: 'default',
    };

    try {
        const fetchResponse = await fetch(`${URL_DB}${id}`, settings);
        const data = await fetchResponse.json();
        return data;
    } catch (e) {
        console.error(e)
        return data.message;
    }
};
