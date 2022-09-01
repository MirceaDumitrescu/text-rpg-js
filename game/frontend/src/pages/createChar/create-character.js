import { addCharacterData } from '../../services/addCharacterData.js';
import { getUserID } from '../../services/getUserId.js';
import { createCharacterClass } from '../../utils/assignClassValues.js';

const commanderImage = '../../styles/assets/images/commander.png';
const gunnerImage = '../../styles/assets/images/gunner.png';
const pistolerImage = '../../styles/assets/images/pistoler.png';
const swordsmanImage = '../../styles/assets/images/swordsman.png';
const classNameField = document.getElementById('class-name');
const leftArrow = document.querySelector('.character-select--left');
const rightArrow = document.querySelector('.character-select--right');
const imageWrapper = document.querySelector('#character-image');
const charNameForm = document.querySelector('.character_select__name');
const userName = document.querySelector('#name');

let initialImageIndex = 0;
let currentClassSelected = 'commander';
imageWrapper.src = commanderImage;
classNameField.textContent = 'Commander';

/*
 * navigate through images and change the image and class name
 * based on arrow navigation
 * {param} direction - the direction of the arrow
 */
const navigateThroughImages = (direction) => {
  const imageArray = [
    commanderImage,
    gunnerImage,
    pistolerImage,
    swordsmanImage,
    commanderImage
  ];
  imageWrapper.src = imageArray[0];
  const reversedImageArray = imageArray.reverse();

  if (direction === 'left') {
    initialImageIndex--;
    console.log(initialImageIndex);
    if (initialImageIndex < -3) {
      initialImageIndex = 0;
    }
    imageWrapper.src = reversedImageArray[Math.abs(initialImageIndex)];
    displayClassName(initialImageIndex);
  }

  if (direction === 'right') {
    initialImageIndex++;
    if (initialImageIndex > 3) {
      initialImageIndex = 0;
    }
    imageWrapper.src = imageArray[Math.abs(initialImageIndex)];
    displayClassName(initialImageIndex);
  }
};

const displayClassName = (index) => {
  switch (index) {
    case -3:
      classNameField.textContent = 'Gunner';
      currentClassSelected = 'gunner';
      break;
    case -2:
      classNameField.textContent = 'Pistoler';
      currentClassSelected = 'pistoler';
      break;
    case -1:
      classNameField.textContent = 'Swordsman';
      currentClassSelected = 'swordsman';
      break;
    case 0:
      classNameField.textContent = 'Commander';
      currentClassSelected = 'commander';
      break;
    case 1:
      classNameField.textContent = 'Swordsman';
      currentClassSelected = 'swordsman';
      break;
    case 2:
      classNameField.textContent = 'Pistoler';
      currentClassSelected = 'pistoler';
      break;
    case 3:
      classNameField.textContent = 'Gunner';
      currentClassSelected = 'gunner';
      break;
    default:
      classNameField.textContent = 'Commander';
      currentClassSelected = 'commander';
      break;
  }
};

/*
 * Validates the length of the user name
 * Checks if the username is already in the database
 * {param} e - the event
 */
const validateUserName = (e) => {
  e.preventDefault();
  const inputUsername = userName.value;

  if (inputUsername.length <= 3) {
    alert('Please enter a valid name');
    return;
  } else {
    return inputUsername;
  }
};

/* Saves the new char data to existing user data
 * {param} e - the event
 */
const saveNewCharData = async (e) => {
  const inputUsername = validateUserName(e);

  const userOriginalData = await createCharDataObject( inputUsername );

  const response = await addCharacterData(
    userOriginalData.characterData,
    userOriginalData._id
  );
  if (response.message) {
    console.error(response.message);
    // window.location.href = '/game';
  } else {
    console.log('success');
  }
};

/*
* Creates the character data object to be saved to the database
* by combining the new character data with the existing user data
* {param} inputUsername - the username
*/
const createCharDataObject = async ( inputUsername ) => {

    const characterData = createCharacterClass(
        inputUsername,
        currentClassSelected
      );
      const originalData = await getUserID(inputUsername);
      if (!originalData) {
        alert('User not found');
        return;
      }

      Object.keys(characterData).forEach((key) => {
        userOriginalData.characterData[key] = characterData[key];
      });

      return originalData;

};

leftArrow.addEventListener('click', () => {
  navigateThroughImages('left');
});
rightArrow.addEventListener('click', () => {
  navigateThroughImages('right');
});
charNameForm.addEventListener('submit', (e) => {
  saveNewCharData(e);
});
