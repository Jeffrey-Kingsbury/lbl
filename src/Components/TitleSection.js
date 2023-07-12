import styled from 'styled-components';
import bg from '../images/9.jpg';
import logo from '../images/lbl-logo.png';

const TitleSection = () => {
    return (
        <Wrapper>
            <span>
                <img src={logo} alt="logo" draggable="false" />
                <h1>Little Bright Lights</h1>
            </span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: auto;
    height: calc(50dvh - 100px);
    min-height: 600px;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-color: #efeff0;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    font-family: 'work_sans';
    user-select: none;

    --mask: radial-gradient(57.88px at 50% calc(100% - 79.5px), #000 99%, #0000 101%) calc(50% - 60px) 0/120px 100%,
        radial-gradient(57.88px at 50% calc(100% + 49.5px), #0000 99%, #000 101%) 50% calc(100% - 30px) / 120px 100%
            repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);

    span {
        max-width: 750px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #ade1d4b3;
        border-radius: 20% 70% 70% 30% / 30% 69% 51% 70%;
    }

    h1 {
        font-size: clamp(2.5rem, -0.875rem + 8.333vw, 5rem);
        text-align: center;
        margin: 1rem 0 0 0;
        font-family: 'indie_flower';
        color: white;
    }

    p {
        font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
        text-align: center;
        width: 80%;
    }

    img {
        height: 90px;
    }
`;

export default TitleSection;
