import data from './data';
import { Card } from "../Card";

export const Cards = () => 
    <div>
        {data.map(item =>
            <Card
                img={item.img}
                city={item.city}
                key={item.city}
            />
        )}
    </div>;
