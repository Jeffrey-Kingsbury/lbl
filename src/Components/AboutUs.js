import { styled } from 'styled-components';

const AboutUs = ({ lang }) => {
    return (
        <Wrapper id='about'>
            {lang === 'en' && (
                <>
                    <h1>About us</h1>
                    <p>
                        Specializing in the growth and development of children aged between 2 and 12 years, Little
                        Bright Lights Clinic's mission is twofold.
                        <br /> <br /> Firstly, we aim to address challenging behaviors that adversely impact a child's
                        quality of life, such as tantrums, defiance, inattention, hyperactivity, and violent or
                        aggressive actions.
                        <br /> Secondly, we seek to foster the development of skills in various areas where they may be
                        lagging, including communication, language, social interaction, self-sufficiency, eating habits,
                        toilet training, play, and academics.
                        <br /> <br /> While many of our young clients have been diagnosed with Autism Spectrum Disorder
                        (ASD), we provide our specialized services to all children who could benefit from them,
                        irrespective of their diagnosis. This includes those requiring assistance with language
                        stimulation, behavior management, or academic tutoring.{' '}
                    </p>
                </>
            )}

            {lang === 'fr' && (
                <>
                    <h1>À Propos de Nous</h1>

                    <p>
                        Spécialisée dans la croissance et le développement des enfants âgés de 2 à 12 ans, la mission de
                        la Clinique des Petites Lumières Brillantes est double.
                        <br /> <br /> Premièrement, nous visons à adresser les comportements difficiles qui impactent
                        négativement la qualité de vie d'un enfant, tels que les crises de colère, le refus d'obéir,
                        l'inattention, l'hyperactivité et les actions violentes ou agressives.
                        <br /> Deuxièmement, nous cherchons à favoriser le développement des compétences dans divers
                        domaines où ils pourraient être en retard, y compris la communication, le langage, l'interaction
                        sociale, l'autonomie, les habitudes alimentaires, l'apprentissage de la propreté, le jeu et les
                        apprentissages scolaires.
                        <br /> <br /> Bien que beaucoup de nos jeunes clients aient été diagnostiqués avec le Trouble du
                        Spectre de l'Autisme (TSA), nous offrons nos services spécialisés à tous les enfants qui
                        pourraient en bénéficier, quel que soit leur diagnostic. Cela inclut ceux qui ont besoin d'aide
                        avec la stimulation du langage, la gestion du comportement ou le soutien scolaire.{' '}
                    </p>
                </>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    min-height: calc(70dvh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ade1d4;

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
