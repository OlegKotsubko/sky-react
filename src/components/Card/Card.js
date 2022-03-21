import './card.css';
import { ShareBtns } from '../ShareBtns';

export const Card = ({img, city }) => {
    return (
        <div className="card">
            <img className="cardImg" src={img} alt={city} />
            <ShareBtns />
        </div>
    )
}