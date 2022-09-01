export const createCharacterClass = ( usersName, className ) => {
    const classData = {
        name: usersName,
        charClass: className,
        level: 1,
        experience: 0,
        health: 100,
        mana: 100,
    }

    switch (className) {
        case 'commander':
            classData.health = 70;
            classData.mana = 150;
            break;
        case 'swordsman':
            classData.health = 150;
            classData.mana = 50;
            break;
        case 'pistoler':
            classData.health = 50;
            classData.mana = 200;
            break;
        case 'gunner':
            classData.health = 75;
            classData.mana = 150;
            break;
        default:
            classData.health = 100;
            classData.mana = 100;
            break;
    }
    return classData;
};
