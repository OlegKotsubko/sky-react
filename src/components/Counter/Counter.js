import "./counter.css";

const Number = ({ number, small }) => {
    const pClass = "counter__number" + (small ? " counter__number--small" : "");
    const liClass = "counter__item" + (small ? " counter__item--small" : "");
    return (
        <li className={liClass}>
            <p className={pClass}>{number}</p>
        </li>
    )
}

export const Counter = ({ number, small, children }) => {
    const numberString = number.toString();
    return (
        <div>
            <div className="counter max-w-3xl mx-auto">
                <ul className="counter__list flex">
                    {
                        numberString.split('').map((item, index) => {
                            return <Number small={small} number={item} key={index} />
                        })
                    }
                </ul>
            </div>
            {children}
        </div>
    )
}
