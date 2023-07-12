import { styled } from 'styled-components';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import TitleSection from './Components/TitleSection';
import Services from './Components/Services';
function App() {
    return (
        <Wrapper>
            <Header />
            <TitleSection />
            <Services />
            <AboutUs />
        </Wrapper>
    );
}

const Wrapper = styled.div`
background-color: #ade1d4;
`;
export default App;
