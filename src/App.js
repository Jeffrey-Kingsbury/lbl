import { styled } from 'styled-components';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import TitleSection from './Components/TitleSection';
import Services from './Components/Services';
import { useState } from 'react';
import usePersistedState from './usePersistedState';

function App() {
    const [lang, setLang] = useState(usePersistedState('en', 'lbl_lang_choice')[0]);

    return (
        <Wrapper>
            <Header setLang={setLang} lang={lang} />
            <TitleSection lang={lang} />
            <Services lang={lang} />
            <AboutUs lang={lang} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
scroll-behavior: smooth;
`;
export default App;
