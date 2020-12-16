import './FullPicture.css'
import testPic from '../../../assets/testPic.png'
import { useState } from 'react'

const FullPicture = (props) => {

    const [isEditModeActivated, toggleEditMode] = useState(false);
    const activateEditMode = () => {
        toggleEditMode(true)
    }

    const deactivateEditMode = () => {
        props.editComment(newPicComment)
        toggleEditMode(false)
    }

    const [newPicComment, setNewPicComment] = useState(props.picture.comment)

    return (
        <div className='gallery__fullPicture'>
            <div className='fullPicture__img'>
                <img src={props.picture.url ? props.picture.url : testPic} alt={props.picture.url} />
            </div>
            <div className='fullPicture__comment'>
                {isEditModeActivated ?
                    <textarea value={newPicComment} onFocus={(e) => e.target.value += ' '} onChange={(e) => setNewPicComment(e.target.value)} onBlur={deactivateEditMode} autoFocus={true}></textarea>
                    : <span onClick={activateEditMode}>{props.picture.comment}</span>}
            </div>
        </div>
    )
}

export default FullPicture;