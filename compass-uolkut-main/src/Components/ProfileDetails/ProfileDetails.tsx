import classes from './ProfileDetails.module.css'
import Star from '../../assets/images/Star.png';
import Smile from '../../assets/images/Smiley.png';
import ThumbsUp from '../../assets/images/ThumbsUp.png';
import Heart from '../../assets/images/Heart.png';
import { useEffect } from 'react';


 

function ProfileDetails() {
        
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 360) {
                const spans = document.querySelectorAll(`.${classes.__divPreferences} span`)! as NodeListOf<HTMLSpanElement>;

                spans.forEach((span) => {
                    const text = span.textContent;

                    if (text !== 'Trap' && text !== 'A rede social' && text !== 'Ver Todos') {
                        span.style.display = 'none';
                    }
                });
            }
        };

        
        handleResize();

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className={classes.__divContainer}>

                <h3 className={classes.nameTag}>Boa tarde, Iuri</h3>
                <h3 className={classes.inputName}><span className={classes.inputNameContent}>Programar sem café é igual poeta sem poesia.</span></h3>
                <div className={classes.__divSpans}> 
                    <p className={classes.p}>Fãs</p>
                    <p className={classes.p}>Confiável</p>
                    <p className={classes.p}>Legal</p>
                    <p className={classes.p}>Sexy</p>
                </div>
                <div className={classes.__divImg}>
                    <img className={classes.img}src={Star} alt="Star" />
                    <img className={classes.img}src={Smile} alt="Smile" />
                    <img className={classes.img}src={Smile} alt="Smile" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={ThumbsUp} alt="Like" />
                    <img className={classes.img}src={Heart} alt="Heart" />
                    <img className={classes.img}src={Heart} alt="Heart" />
                </div>
                <div className={classes.__divDetails}>
                    <h4 className={classes.details}>Relacionamento: <span>Solteiro</span></h4>
                    <h4 className={classes.details}>Aniversario: <span>21 de julho</span></h4>
                    <h4 className={classes.details}>Idade: <span>22</span></h4>
                    <h4 className={classes.details}>Interesses no orkut: <span>Solteiro</span></h4>
                    <h4 className={classes.details}>Quem sou eu: <span>Programador</span></h4>
                    <h4 className={classes.details}>Filhos: <span>Não</span></h4>
                    <h4 className={classes.details}>Sexo: <span>Masculino</span></h4>
                    <h4 className={classes.details}>Fumo: <span>Não</span></h4>
                    <h4 className={classes.details}>Bebo: <span>Depende do dia</span></h4>
                    <h4 className={classes.details}>Moro: <span>Guarantã</span></h4>
                    <h4 className={classes.details}>País: <span>Brasil</span></h4>
                    <h4 className={classes.details}>Cidade natal: <span>São Paulo</span></h4>
                </div>
                <div className={classes.__divPreferences}>
                    <h4 className={classes.h}>
                        Músicas: <span className={classes.word}>Trap</span> <span className={classes.word}>Rap</span> <span className={classes.word}>Indie</span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                    <h4 className={classes.h}>
                        Filmes: <span className={classes.word}>A rede social</span> <span className={classes.word}>Meu amigo totoro</span> <span className={classes.verTodos}>Ver Todos</span>
                    </h4>
                </div>

            </div>
        </>
    )
}

export default ProfileDetails