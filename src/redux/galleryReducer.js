let ADD_PICTURE = 'ADD_PICTURE';
let SET_LOADING_MULTIPLIER = 'SET_LOADING_MULTIPLIER';
let SET_PICTURE_ON_FULL_REVIEW = 'SET_PICTURE_ON_FULL_REVIEW';
let DELETE_PICTURE = 'DELETE_PICTURE';
let EDIT_COMMENT = 'EDIT_COMMENT';

let ininitalState = {
    galleryData: JSON.parse(localStorage.getItem('galleryData')) || [
        {url: 'https://nerdist.com/wp-content/uploads/2020/10/Keanu-Reeves-Cyberpunk-2077-Featured-540x305.jpg', comment: 'You\'re breathtaking!'},
        {url: 'https://www.psu.com/wp/wp-content/uploads/2019/06/KeanuReeves.jpg', comment: 'You\'re breathtaking!'},
        {url: 'https://www.ixbt.com/img/n1/news/2020/11/5/2b3e3092ce4207ae_1920xH_large.jpg', comment: 'You\'re breathtaking!'},
        {url: 'https://i.kym-cdn.com/photos/images/newsfeed/001/495/653/e43.jpg', comment: 'You\'re breathtaking!'},
        {url: 'https://i.pinimg.com/originals/a8/9e/22/a89e222be0c46029a494030692261aed.png', comment: 'You\'re breathtaking!'},
        {url: 'https://www.ixbt.com/img/n1/news/2020/11/1/cyberpunk2077-credit-cdprojektred@2000x1270_large.jpg', comment: 'You\'re breathtaking!'},
        {url: 'https://www.indiewire.com/wp-content/uploads/2020/04/tilezoom.jpeg', comment: 'You\'re breathtaking!'}
    ],
    picturesPerLoad: 6,
    loadingMultiplier: 1,
    pictureOnFullReview: null
}

const galleryReducer = (state = ininitalState, action) => {
    let newState = {}
    switch (action.type) {
        case ADD_PICTURE:
            newState = {
                ...state,
                galleryData: [...state.galleryData, { url: action.url, comment: action.comment }]
            }
            localStorage.setItem('galleryData', JSON.stringify(newState.galleryData))
            return newState;
        case SET_LOADING_MULTIPLIER:
            return {
                ...state,
                loadingMultiplier: state.loadingMultiplier + 1
            }
        case SET_PICTURE_ON_FULL_REVIEW:
            return {
                ...state,
                pictureOnFullReview: action.id
            }
        case DELETE_PICTURE:
            newState = {
                ...state,
                galleryData: state.galleryData.filter((picture, id) => {
                    return id !== action.id
                }),
                pictureOnFullReview: null
            }
            localStorage.setItem('galleryData', JSON.stringify(newState.galleryData))
            return newState;
        case EDIT_COMMENT:
            newState = {
                ...state,
                galleryData: state.galleryData.map((picture, id) => {
                    if (id === state.pictureOnFullReview) {
                        return { ...picture, comment: action.comment }
                    }
                    return picture;
                })
            }
            localStorage.setItem('galleryData', JSON.stringify(newState.galleryData))
            return newState;
        default:
            return state;
    }
}

export const addPicture = (url, comment) => ({ type: ADD_PICTURE, url, comment });
export const setLoadingMultiplier = () => ({ type: SET_LOADING_MULTIPLIER });
export const setPictureOnFullReview = (id) => ({ type: SET_PICTURE_ON_FULL_REVIEW, id });
export const deletePicture = (id) => ({ type: DELETE_PICTURE, id });
export const editComment = (comment) => ({ type: EDIT_COMMENT, comment });

export default galleryReducer;