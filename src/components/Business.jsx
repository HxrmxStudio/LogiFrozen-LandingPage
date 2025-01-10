import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img
                src={icon || '/default-icon.svg'}
                alt="icon"
                className='w-[50%] h-[50%] object-contain'
            />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
);

function Business() {
    return (
        <section id='Nosotros' className={layout.section} aria-labelledby="business-heading">
            <div className={layout.sectionInfo}>
                <h2 id="business-heading" className={styles.heading2}>
                    Seguridad en cada entrega, <br className='sm:block hidden' /> confianza en cada kilómetro.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Con el servicio adecuado de logística, podés optimizar tu negocio asegurando entregas puntuales,
                    reduciendo costos y ganando la confianza de tus clientes. LogiFrozen es tu aliado estratégico en transporte refrigerado.
                </p>
                <Button styles='mt-10 ' text="Descubre más" onClick={() => console.log('Button clicked')} />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features && features.length > 0 ? (
                    features.map((feature, index) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))
                ) : (
                    <p className="text-center text-dimWhite">Cargando características...</p>
                )}
            </div>
        </section>
    );
}

export default Business;
