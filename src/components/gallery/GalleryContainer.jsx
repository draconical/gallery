import React from 'react';
import { connect } from "react-redux";
import { addPicture, setLoadingMultiplier, setPictureOnFullReview, deletePicture, editComment } from '../../redux/galleryReducer';
import Gallery from './Gallery';

class GalleryContainer extends React.Component {
    render = () => {
        return (
            <Gallery galleryData={this.props.galleryData} addPicture={this.props.addPicture}
                loadingMultiplier={this.props.loadingMultiplier} setLoadingMultiplier={this.props.setLoadingMultiplier}
                picturesPerLoad={this.props.picturesPerLoad} pictureOnFullReview={this.props.pictureOnFullReview}
                setPictureOnFullReview={this.props.setPictureOnFullReview} deletePicture={this.props.deletePicture}
                editComment={this.props.editComment} />
        )
    }
}

let mapStateToProps = (state) => ({
    galleryData: state.gallery.galleryData,
    loadingMultiplier: state.gallery.loadingMultiplier,
    picturesPerLoad: state.gallery.picturesPerLoad,
    pictureOnFullReview: state.gallery.pictureOnFullReview
})

export default connect(mapStateToProps, {
    addPicture,
    setLoadingMultiplier,
    setPictureOnFullReview,
    deletePicture,
    editComment
})(GalleryContainer)