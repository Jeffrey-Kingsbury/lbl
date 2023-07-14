import { useState } from 'react';
import { styled } from 'styled-components';
import aba from '../images/9.jpg';
import behaviour from '../images/consult.jpg';
import social from '../images/group.jpg';
import ultra from '../images/logo_ultra_navy.png';

const Services = ({ lang }) => {
    const [abaDialog, setAbaDialog] = useState(false);
    const [behaviorDialog, setBehaviorDialog] = useState(false);
    const [socialDialog, setSocialDialog] = useState(false);

    return (
        <Wrapper id='services'>
            {lang === 'en' && (
                <>
                    <h1>Services</h1>
                    <ul>
                        <li
                            onClick={() => {
                                setAbaDialog(true);
                                setBehaviorDialog(false);
                                setSocialDialog(false);
                            }}
                            className="aba"
                        >
                            ABA Therapy sessions
                        </li>
                        <li
                            onClick={() => {
                                setAbaDialog(false);
                                setBehaviorDialog(true);
                                setSocialDialog(false);
                            }}
                            className="behavior"
                        >
                            Behaviour management consultations
                        </li>
                        <li
                            onClick={() => {
                                setAbaDialog(false);
                                setBehaviorDialog(false);
                                setSocialDialog(true);
                            }}
                            className="social"
                        >
                            Social skills groups
                        </li>
                    </ul>

                    <h3>
                        Are you looking for a developmental assessment or speech therapy? Meet our partners at Ultra
                        Health Services.
                    </h3>
                    <a rel="noreferrer" target="_blank" href="https://ultrahealthservices.com/">
                        <img src={ultra} alt="Ultra Health Services logo" />
                    </a>
                </>
            )}

            {lang === 'fr' && (
                <>
                    <h1>Services</h1>
                    <ul>
                        <li
                            onClick={() => {
                                setAbaDialog(true);
                                setBehaviorDialog(false);
                                setSocialDialog(false);
                            }}
                            className="aba"
                        >
                            Séances de thérapie ABA
                        </li>
                        <li
                            onClick={() => {
                                setAbaDialog(false);
                                setBehaviorDialog(true);
                                setSocialDialog(false);
                            }}
                            className="behavior"
                        >
                            Consultations pour la gestion du comportement
                        </li>
                        <li
                            onClick={() => {
                                setAbaDialog(false);
                                setBehaviorDialog(false);
                                setSocialDialog(true);
                            }}
                            className="social"
                        >
                            Groupes de compétences sociales
                        </li>
                    </ul>

                    <h3>
                        Vous cherchez une évaluation du développement ou une thérapie d'élocution? Rencontrez nos
                        partenaires chez Ultra Health Services.
                    </h3>
                    <a rel="noreferrer" target="_blank" href="https://ultrahealthservices.com/">
                        <img src={ultra} alt="Ultra Health Services logo" />
                    </a>
                </>
            )}
            {lang === 'en' && (
                <>
                    <dialog open={abaDialog} className="dialog">
                        <div>
                            <h2>ABA Therapy sessions</h2>
                            <p>
                                Our positive-reinforcement-based ABA therapy sessions are individualized two-hour
                                periods that take place between one behavior technician and one lucky learner.
                                <br />
                                <br /> Goals that are unique to that child are targeted through a combination of play
                                and structured activities. Goals are selected based on the child’s age-appropriate
                                milestones across the domains of communication, speech, socialization, autonomy,
                                feeding, toilet training, play and academics.
                                <br /> Of course, any challenging behaviors the child exhibits throughout their ABA
                                therapy sessions that inhibit their learning, such as tantrums, opposition, inattention,
                                hyperactivity, violence and aggression are equally managed during that time. <br />
                                <br />
                                All of our team members are very experienced and trained in promoting skill acquisition
                                as well as in behavior management. We require a weekly minimum of 4 hours of ABA therapy
                                to all families interested in this option. <br />
                                ABA therapy sessions are available seven days per week. However, weekend sessions are
                                only available to families who attend at least one ABA therapy session on a weekday.
                                <br />
                                <br /> Our sessions begin at 8:30, 10:30, 1:00 and 3:00. <br />
                                Our ABA therapy sessions are offered in French and in English, depending on the family’s
                                preference. <br />
                                <br />
                                <br />
                                Contact us for more information at (450) 963-7173
                            </p>
                            <button onClick={() => setAbaDialog(false)}>Close</button>
                        </div>
                    </dialog>

                    <dialog open={behaviorDialog} className="dialog">
                        <div>
                            <h2>Behaviour management consultations</h2>
                            <p>
                                Our behavior management consultations offer effective behavior intervention plans for
                                caregivers who need help managing challenging behaviors they observe in their daily
                                environment. <br />
                                <br />
                                Behavior management consultations are recommended for parents and educators who seek
                                behavior management strategies for their home environment or their classrooms.
                                <br />
                                This option is appropriate for reducing tantrums, opposition, overdependence on
                                caregivers, food refusal, inappropriate fears, violence and aggression. These
                                consultations are equally useful for promoting autonomy, compliance, and respectful
                                social behavior in the home and educational environments. <br />
                                Caregivers who are interested in this option meet with our behavior analyst either in
                                person or via web-based platform, and create an effective behavior plan together. <br />
                                <br />
                                <br />
                                Contact us for more information at (450) 963-7173
                            </p>
                            <button onClick={() => setBehaviorDialog(false)}>Close</button>
                        </div>
                    </dialog>

                    <dialog open={socialDialog} className="dialog">
                        <div>
                            <h2>Social skills groups</h2>
                            <p>
                                Our social skills group includes two behavior technicians and a maximum of six peers.
                                <br />
                                The activities and games vary each session and are child-led. The purpose of our social
                                skills group is to desensitize children to situations they may currently find aversive,
                                such as circle time, transitions between activities, waiting, sharing, facing difficult
                                tasks and not getting chosen first, and to teach them strategies and appropriate social
                                behaviors they can use to master those situations. <br />
                                We then encourage the children to generalize those new skills in their natural social
                                settings, such as classrooms and playgrounds, to help them build and maintain healthy
                                peer relationships. <br />
                                <br />
                                <br />
                                Contact us for more information at (450) 963-7173
                            </p>
                            <button onClick={() => setSocialDialog(false)}>Close</button>
                        </div>
                    </dialog>
                </>
            )}

            {lang === 'fr' && (
                <>
                    <dialog open={abaDialog} className="dialog">
                        <div>
                            <h2>Séances de thérapie ABA</h2>
                            <p>
                                Nos séances de thérapie ABA basées sur le renforcement positif sont des périodes
                                individualisées de deux heures qui se déroulent entre un technicien du comportement et
                                un élève chanceux.
                                <br />
                                <br /> Les objectifs qui sont uniques à cet enfant sont ciblés par une combinaison de
                                jeu et d'activités structurées. Les objectifs sont choisis en fonction des jalons
                                appropriés à l'âge de l'enfant dans les domaines de la communication, de la parole, de
                                la socialisation, de l'autonomie, de l'alimentation, de l'apprentissage de la propreté,
                                du jeu et des compétences académiques.
                                <br /> Bien sûr, tout comportement difficile que l'enfant manifeste au cours de ses
                                séances de thérapie ABA qui entrave son apprentissage, comme les crises de colère,
                                l'opposition, l'inattention, l'hyperactivité, la violence et l'agression sont également
                                gérés pendant ce temps. <br />
                                <br />
                                Tous les membres de notre équipe sont très expérimentés et formés à la promotion de
                                l'acquisition de compétences ainsi qu'à la gestion du comportement. Nous exigeons un
                                minimum hebdomadaire de 4 heures de thérapie ABA pour toutes les familles intéressées
                                par cette option. <br />
                                Les séances de thérapie ABA sont disponibles sept jours par semaine. Cependant, les
                                séances du week-end ne sont disponibles que pour les familles qui assistent à au moins
                                une séance de thérapie ABA en semaine.
                                <br />
                                <br /> Nos séances commencent à 8h30, 10h30, 13h00 et 15h00. <br />
                                Nos séances de thérapie ABA sont offertes en français et en anglais, selon la préférence
                                de la famille. <br />
                                <br />
                                <br />
                                Contactez-nous pour plus d'informations au (450) 963-7173
                            </p>
                            <button onClick={() => setAbaDialog(false)}>Fermer</button>
                        </div>
                    </dialog>

                    <dialog open={behaviorDialog} className="dialog">
                        <div>
                            <h2>Consultations pour la gestion du comportement</h2>
                            <p>
                                Nos consultations en gestion du comportement offrent des plans d'intervention
                                comportementale efficaces pour les aidants qui ont besoin d'aide pour gérer les
                                comportements difficiles qu'ils observent dans leur quotidien.
                                <br />
                                <br />
                                Les consultations en gestion du comportement sont recommandées pour les parents et les
                                éducateurs qui cherchent des stratégies de gestion du comportement pour leur
                                environnement domestique ou leurs salles de classe.
                                <br />
                                Cette option est appropriée pour réduire les crises de colère, l'opposition, la
                                dépendance excessive envers les aidants, le refus de nourriture, les peurs
                                inappropriées, la violence et l'agression. Ces consultations sont également utiles pour
                                promouvoir l'autonomie, le respect des règles et le comportement social respectueux dans
                                les environnements domestiques et éducatifs. <br />
                                Les aidants qui sont intéressés par cette option rencontrent notre analyste du
                                comportement soit en personne soit via une plateforme web, et créent ensemble un plan de
                                comportement efficace. <br />
                                <br />
                                <br />
                                Contactez-nous pour plus d'informations au (450) 963-7173
                            </p>
                            <button onClick={() => setBehaviorDialog(false)}>Fermer</button>
                        </div>
                    </dialog>

                    <dialog open={socialDialog} className="dialog">
                        <div>
                            <h2>Groupes de compétences sociales</h2>
                            <p>
                                Notre groupe de compétences sociales comprend deux techniciens du comportement et un
                                maximum de six pairs.
                                <br />
                                Les activités et les jeux varient à chaque séance et sont dirigés par les enfants. Le
                                but de notre groupe de compétences sociales est de désensibiliser les enfants à des
                                situations qu'ils peuvent actuellement trouver aversives, telles que le temps de cercle,
                                les transitions entre les activités, l'attente, le partage, le fait de faire face à des
                                tâches difficiles et de ne pas être choisi en premier, et de leur enseigner des
                                stratégies et des comportements sociaux appropriés qu'ils peuvent utiliser pour
                                maîtriser ces situations. <br />
                                Nous encourageons ensuite les enfants à généraliser ces nouvelles compétences dans leurs
                                environnements sociaux naturels, tels que les salles de classe et les terrains de jeux,
                                pour les aider à construire et à maintenir des relations saines avec leurs pairs. <br />
                                <br />
                                <br />
                                Contactez-nous pour plus d'informations au (450) 963-7173
                            </p>
                            <button onClick={() => setSocialDialog(false)}>Fermer</button>
                        </div>
                    </dialog>
                </>
            )}
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
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 75%,
        rgba(173, 225, 212, 1) 100%
    );
    user-select: none;

    h1 {
        font-size: clamp(2.5rem, -0.875rem + 8.333vw, 5rem);
        text-align: center;
        margin: 1rem 0 0 0;
        font-family: 'indie_flower';
        text-decoration: underline;
    }

    h3 {
        margin: 3rem 0 0 0;
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
        font-size: clamp(2rem, -0.875rem + 5.333vw, 2.5rem);
        text-align: center;
        width: 632px;
        height: 332px;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        border: 3px solid black;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &.aba {
            background-image: url(${aba});
            background-size: cover;
            background-position: center;
            filter: grayscale(100%);
            transition: all 0.3s ease-in-out;
            color: white;
            text-shadow: 0 0 10px black;

            &:hover {
                font-size: clamp(3rem, -0.875rem + 5.333vw, 3.5rem);
                filter: grayscale(0%);
            }
        }

        &.behavior {
            background-image: url(${behaviour});
            background-size: cover;
            background-position: center;
            filter: grayscale(100%);
            transition: all 0.3s ease-in-out;
            color: white;
            text-shadow: 0 0 10px black;

            &:hover {
                font-size: clamp(3rem, -0.875rem + 5.333vw, 3.5rem);
                filter: grayscale(0%);
            }
        }

        &.social {
            background-image: url(${social});
            background-size: cover;
            background-position: center;
            filter: grayscale(100%);
            transition: all 0.3s ease-in-out;
            color: white;
            text-shadow: 0 0 10px black;

            &:hover {
                font-size: clamp(3rem, -0.875rem + 5.333vw, 3.5rem);
                filter: grayscale(0%);
            }
        }
    }

    .dialog {
        background: white;
        width: 80%;
        border-radius: 10px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px black;
        background: white;
        background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(173, 225, 212, 1) 100%);
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        h2 {
            font-size: clamp(2rem, -0.875rem + 5.333vw, 3rem);
            text-align: center;
            margin: 1rem 0 0 0;
            text-decoration: underline;
        }

        p {
            font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
            text-align: center;
        }

        button {
            font-size: clamp(1rem, -0.875rem + 5.333vw, 1.5rem);
            margin: 1rem 0 1rem 0;
            padding: 0.5rem 1rem 0.5rem 1rem;
            border-radius: 10px;
            border: 2px solid black;
            background: white;
            cursor: pointer;
            transition: all 0.1s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }

            &:active {
                transform: scale(0.9);
            }
        }
    }

    /* li:nth-child(1) {
        border-radius: 60% 40% 73% 27% / 72% 73% 27% 28%;
    }

    li:nth-child(2) {
        border-radius: 60% 40% 73% 27% / 30% 24% 76% 70%;
    }

    li:nth-child(3) {
        border-radius: 60% 40% 73% 27% / 47% 73% 27% 53%;
    } */
`;

export default Services;
