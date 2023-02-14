import css from './Home.module.css';
import {MdContactPhone} from 'react-icons/md';
export const Home =() => {
    return (
        <div className={css.home}>
            <h1>Save your contacts here</h1>
            <p>Welcome page 🤗</p>
           <MdContactPhone className={css.picture} size={200}/>
        </div>
    )
}