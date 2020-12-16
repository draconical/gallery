import './Picture.css'
import testPic from '../../../assets/testPic.png'

const Picture = (props) => {
    return (
        <div className='content__picture' onClick={() => props.setPictureOnFullReview(props.id)}>
            <img src={props.url ? props.url : testPic} alt={props.url} />
            {props.comment ? <span>{props.comment}</span> : null}
        </div>
    )
}

export default Picture;