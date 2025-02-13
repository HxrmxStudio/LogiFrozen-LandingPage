import { motion } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { textVariant, staggerContainer } from "../util/motion";

function Testimonials() {
    return (
        <motion.section
            id="Clientes"
            className={`${styles.paddingY} ${styles.flexCenter} flex-col relative w-full `}
            variants={staggerContainer(0.2, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }} // Solo dispara una vez y cuando el 30% del elemento esté visible
        >
            {/* Gradiente de fondo */}
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
            {/* Encabezado */}
            <motion.div variants={textVariant(0.1)} className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>
                    Qué dicen <br className="sm:block hidden" /> nuestros clientes
                </h1>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Transporte seguro y eficiente de alimentos refrigerados para impulsar el crecimiento de tu negocio.
                </p>
            </motion.div>

            {/* Contenedor de testimonios */}
            <motion.div
                variants={staggerContainer(0.2, 0.5)}
                className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
            >
                {feedback.map((card, index) => (
                    <FeedbackCard
                        key={card.id}
                        {...card}
                        index={index} // Pasa el índice para controlar el retraso
                    />
                ))}

            </motion.div>
        </motion.section>
    );
}

export default Testimonials;
