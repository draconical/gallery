import './Gallery.css';
import icon from '../../assets/cameraIcon.png';
import Picture from './picture/Picture';
import Menu from './menu/Menu';
import { useState } from 'react';
import FullPicture from './fullPicture/FullPicture';

const Gallery = (props) => {
    let pictures = props.galleryData.slice(0, props.picturesPerLoad * props.loadingMultiplier).map((picture, id) => {
        return <Picture url={picture.url} comment={picture.comment} key={id}
            setPictureOnFullReview={props.setPictureOnFullReview} id={id} />
    })

    const [isMenuOpen, toggleMenu] = useState(false)
    const onAddBtnClick = () => {
        toggleMenu(true)
    }

    const onDelBtnClick = () => {
        props.deletePicture(props.pictureOnFullReview)
    }

    const onBlurHandler = () => {
        toggleMenu(false)
        if (props.pictureOnFullReview !== null) {
            props.setPictureOnFullReview(null)
        }
        console.log('closed!')
    }

    return (
        <div className='gallery'>
            <div className='gallery__header' onClick={onBlurHandler}>
                <img src={icon} alt="cameraIcon.png" />
                <span>Gallerygram</span>
            </div>
            <div className='gallery__content' onClick={onBlurHandler}>
                <div className='content__pictures'>
                    {pictures}
                </div>
                {props.galleryData.length > props.picturesPerLoad * props.loadingMultiplier ?
                    <div className='content__moreBtn'><button onClick={props.setLoadingMultiplier}>Показать еще</button></div> : null}
            </div>
            <div className='gallery__footer' onClick={isMenuOpen ? onBlurHandler : null}>
                {isMenuOpen ?
                    null : props.pictureOnFullReview !== null ?
                        <button className='footer__delBtn' onClick={onDelBtnClick}></button>
                        : <button className='footer__addBtn' onClick={onAddBtnClick}></button>}
            </div>
            {isMenuOpen ?
                <Menu galleryData={props.galleryData} addPicture={props.addPicture} toggleMenu={toggleMenu} /> : null}
            {props.pictureOnFullReview !== null ?
                <FullPicture picture={props.galleryData[props.pictureOnFullReview]} editComment={props.editComment} /> : null}
        </div>
    )
}

export default Gallery;