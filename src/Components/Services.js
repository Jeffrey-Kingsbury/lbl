import { styled } from 'styled-components';

const Services = () => {
    return (
        <Wrapper>
            <h1>Services</h1>
            <ul>
                <li>ABA Therapy sessions</li>
                <li>Behaviour management consultations</li>
                <li>Social skills groups</li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(50dvh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(173, 225, 212);
    background: linear-gradient(180deg, rgba(173, 225, 212, 1) 0%, rgba(255, 255, 255, 1) 100%);
    user-select: none;

    h1 {
        font-size: clamp(2.5rem, -0.875rem + 8.333vw, 5rem);
        text-align: center;
        margin: 1rem 0 0 0;
        font-family: 'indie_flower';
        text-decoration: underline;
    }

    p {
        font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
        text-align: center;
        width: 80%;
    }

    ul {
        width: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    li {
        font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
        text-align: center;
        width: 632px;
        height: 332px;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        border: 2px solid black;
    }

    li:nth-child(1) {
        border-radius: 60% 40% 73% 27% / 72% 73% 27% 28% ;
    }

    li:nth-child(2) {
        border-radius: 60% 40% 73% 27% / 30% 24% 76% 70% ;
    }

    li:nth-child(3) {
        border-radius: 60% 40% 73% 27% / 47% 73% 27% 53%  ;
    }
`;

export default Services;
