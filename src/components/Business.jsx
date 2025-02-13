import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { motion } from 'framer-motion';
import { textVariant, fadeIn, staggerContainer } from '../util/motion';

const FeatureCard = ({ icon, title, content, index }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.2, 1)}
        className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'
            } feature-card`}
    >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </motion.div>
);

function Business() {
    return (
        <motion.section
            id="Servicio"
            className={layout.section}
            variants={staggerContainer(0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                variants={textVariant(0.1)}
                className={layout.sectionInfo}
            >
                <h2 id="business-heading" className={styles.heading2}>
                    Tu confianza nos mueve, <br className="sm:block hidden" /> llevamos tu negocio con seguridad.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Con nuestro servicio logístico, podés optimizar tu negocio asegurando entregas puntuales, reduciendo los tiempos de entrega. ¿por qué? Porque, a comparación de los servicios de línea, una vez que retiramos, lo entregamos el mismo día. LogiFrozen es tu aliado estratégico en transporte refrigerado.
                </p>
                <Button styles="mt-10" />

            </motion.div>
            <motion.div
                variants={staggerContainer(0.2, 0.5)}
                className={`${layout.sectionImg} flex-col`}
            >
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </motion.div>
        </motion.section>

    );
}

export default Business;
