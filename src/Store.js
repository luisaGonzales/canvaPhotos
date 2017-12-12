import createStore from 'redux-zero';
import polo from './Polo.png';
import logo from './Logo.png';

const initialState = {
    title: 'Create it Yourself', 
    gender: null,
    genderSelect: false, 
    age: null,
    ageSelected: false, 
    sizeOptions : [["XS", "S", "M", "L", "XL", "XXL", "XXXL"], ["10", "12", "14", "16"], ["3", "6", "9", "12", "24"]],
    size : null, 
    color: "black",
    imgs : [
        "// ",
        "//image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/2/appearances/2?width=350&height=350&mediaType=webp",
        "//image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/3/appearances/2?width=350&height=350&mediaType=webp",
        "//image.spreadshirtmedia.net/image-server/v1/productTypes/812/views/4/appearances/2?width=350&height=350&mediaType=webp"
    ],
    imgSelected : 0, 
    // polo : 'http://174.138.48.60/Polo.png', 
    // logo : 'http://174.138.48.60/Logo.png', 
    logo:"http://174.138.48.60/Logo.png",
    polo: "http://174.138.48.60/Polo.png", 
    // logo : logo,
    allImage : null
}

const store = createStore(initialState);
export default store;