import './shareBtn.css';

export const ShareBtn = ({ link, shareTo, icon, extraClass = '' }) =>
    <a
        href={link}
        className={`shareBtn ${extraClass}`}
        target='_blank'
        rel="noreferrer"
    >
        <img
            className='shareBtnIcon'
            src={icon}
            alt='Twitter logo'
        />
        {`Share on ${shareTo}`}
    </a>;