import { styled } from 'styled-components';
import logo from '../lbl-logo.png';

const Header = () => {
    return (
        <Wrapper>
            <span>
                <img src={logo} alt="logo" draggable='false'/>
            </span>

            <span>
                <ul>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Our team</li>
                    <li>Contact us</li>
                    <li className='book'>Book an appointment</li>
                </ul>
            </span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100dvw;
    height: 100px;
    background-color: #ade1d4;
    font-family: 'work_sans';
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    box-sizing: border-box;
    overflow: hidden;
    user-select: none;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
    z-index: 1000;

    span{
        width: 50%;
    }
    
    ul{
        display: flex;
        gap: 1rem;
        list-style: none;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0 1rem;
        box-sizing: border-box;
        align-items: center;
        width:100%;
    }

    li{
        cursor: pointer;
        text-align: center;
        font-size: clamp(1rem, -0.875rem + 2.333vw, 2rem);
        font-weight: 500;
        color: white;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover{
            transform: scale(1.05);
            text-decoration: underline;
        }
        &:active{
            color: white;
            transform: scale(0.98);
        }
        
    }

    .book{
    box-sizing: border-box;
    padding: .24rem;
    border-radius: 10px;
    outline: 4px solid white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 5px 5px;
    &:hover{
            text-decoration: none;
        }
    }
    
`;

export default Header;
