import bg from '../images/9.jpg';
import styled from 'styled-components';

const TitleSection = ()=>{
    return(<Wrapper>
        <span>
        <h1>Little Bright Lights</h1>
        <p>Children’s clinic for support with verbal or behavioral challenges and autism. Your child’s development is our passion.</p>
        </span>
    </Wrapper>)
}

const Wrapper = styled.div`
width: 100%;
height: calc(50dvh - 100px);
min-height: 600px;
background-image: url(${bg});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'work_sans';
user-select: none;

span{
    max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.35);
    border-radius: 10px;
    color: white;
}

h1{
    font-size: clamp(2.5rem, -0.875rem + 8.333vw, 5rem);
    text-align: center;
    margin: 1rem 0 0 0;
    font-family: 'indie_flower';
}

p{
    font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
    text-align: center;
    width: 80%;
}
`;

export default TitleSection;