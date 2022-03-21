import './shareBtns.css';
import { ShareBtn } from '../ShareBtn';

export const ShareBtns =  () => 
    <div className="btnsWrap">
        <ShareBtn
            shareTo='twitter'
            icon='icons/twitter.svg'
            extraClass='twitterBg'
            link='https://twitter.com/intent/tweet?text=Hello%20world'
            />
        <ShareBtn
            shareTo='facebook'
            icon='icons/fb.svg'
            extraClass='fbBg'
            link='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com'
        />
    </div>;