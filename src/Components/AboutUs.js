import { styled } from 'styled-components';

const AboutUs = () => {
    return (
        <Wrapper>
            <h1>About us</h1>
            <p>
                Specializing in the growth and development of children aged between 2 and 12 years, Little Bright Lights
                Clinic's mission is twofold.<br/> <br/> Firstly, we aim to address challenging behaviors that adversely impact a
                child's quality of life, such as tantrums, defiance, inattention, hyperactivity, and violent or
                aggressive actions.<br/> Secondly, we seek to foster the development of skills in various areas where they
                may be lagging, including communication, language, social interaction, self-sufficiency, eating habits,
                toilet training, play, and academics.<br/> <br/>  While many of our young clients have been diagnosed with Autism
                Spectrum Disorder (ASD), we provide our specialized services to all children who could benefit from
                them, irrespective of their diagnosis. This includes those requiring assistance with language
                stimulation, behavior management, or academic tutoring.{' '}
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(50dvh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;

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
`;

export default AboutUs;
