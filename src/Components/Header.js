import { styled } from 'styled-components';
import logo from '../images/lbl-logo.png';

const Header = ({ lang, setLang }) => {
    return (
        <Wrapper>
            <span>
                <ul>
                    {lang === 'en' && (
                        <>
                            <a href="#services">
                                <li>Services</li>
                            </a>
                            <a href="#about">
                                <li>About Us</li>
                            </a>
                            <li>Our team</li>
                            <li>Contact us</li>
                            <li className="book">
                                Book an
                                <br />
                                appointment
                            </li>
                        </>
                    )}

                    {lang === 'fr' && (
                        <>
                            <a href="#services">
                                {' '}
                                <li>Services</li>
                            </a>
                            <a href="#about">
                                <li>À Propos de Nous</li>
                            </a>
                            <li>Notre équipe</li>
                            <li>Contactez-nous</li>
                            <li className="book">
                                Prenez un
                                <br />
                                rendez-vous
                            </li>
                        </>
                    )}
                    <li
                        style={{ textTransform: 'uppercase' }}
                        onClick={() => {
                            lang === 'en' ? setLang('fr') : setLang('en');
                        }}
                    >
                        {lang}
                    </li>
                </ul>
            </span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: #ade1d4;
    font-family: 'work_sans';
    font-size: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    box-sizing: border-box;
    overflow: hidden;
    user-select: none;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.4);
    z-index: 1000;
    position: relative;
    span {
        width: 100%;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0 1rem;
        box-sizing: border-box;
        align-items: center;
        width: 100%;
    }

    li {
        cursor: pointer;
        text-align: center;
        font-size: clamp(1rem, -0.875rem + 2.333vw, 1.5rem);
        font-weight: 500;
        color: white;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover {
            transform: scale(1.05);
            text-decoration: underline;
        }
        &:active {
            color: white;
            transform: scale(0.98);
        }
    }

    a {
        text-decoration: none;
    }

    .book {
        box-sizing: border-box;
        padding: 0.24rem;
        border-radius: 10px;
        outline: 4px solid white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 5px 5px;
        &:hover {
            text-decoration: none;
        }
    }
`;

export default Header;
