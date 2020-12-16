import { useEffect, useState } from 'react';
import './Menu.css';

const Menu = (props) => {

    const [newPicUrl, setNewPicUrl] = useState('');
    const [newPicComment, setNewPicComment] = useState('');

    const clear = () => {
        setNewPicUrl('');
        setNewPicComment('');
    }

    useEffect(() => {
        clear();
    }, [props.galleryData])

    const onAddBtnHandler = () => {
        if (newPicUrl !== '') {
            props.addPicture(newPicUrl, newPicComment)
        } else {
            alert('Введите URL, пожалуйста!')
        }
    }

    return (
        <div className='gallery__menu'>
            <span>URL</span>
            <input type="url" value={newPicUrl} placeholder='https://example.com/' onChange={(e) => setNewPicUrl(e.target.value)} />
            <span>Комментарий</span>
            <textarea cols="30" rows="5" value={newPicComment} placeholder='Можете указать тут какой-нибудь комментарий :)' onChange={(e) => setNewPicComment(e.target.value)}></textarea>
            <button onClick={onAddBtnHandler}>Добавить</button>
        </div>
    )
}

export default Menu;