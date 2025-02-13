import React, { useState } from 'react';
import styles from '../style';
import { robot, discount } from '../assets';
import { GetStarted, ContactForm } from './index';

function Hero() {
    const [showContactForm, setShowContactForm] = useState(false);

    const handleOpenForm = () => {
        setShowContactForm(true);
    };

    const handleCloseForm = () => {
        setShowContactForm(false);
    };


    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* Left Section */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                {/* Discount Badge */}
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="Icono de descuento" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">10% </span>
                        Off <span className="text-white">clientes </span> nuevos
                    </p>
                </div>
                {/* Main Title */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        Soluciones <br className="sm:block hidden" />{' '}
                        <span className="text-gradient">Logísticas</span>{' '}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted onClick={handleOpenForm} />
                    </div>
                </div>
                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                    de confianza.
                </h1>
                {/* Description */}
                <p className={`${styles.paragraph} max-w-[470px]`}>
                    Especializados en el transporte de alimentos congelados y productos que requieren refrigeración precisa. Garantizamos la conservación de calidad y propiedades de sus productos comestibles y farmacéuticos, adaptándonos a las necesidades específicas de temperatura.
                </p>
            </div>
            {/* Right Section */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="Camión de transporte refrigerado" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient" />
            </div>
            {/* Mobile GetStarted Button */}
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted onClick={handleOpenForm} />
            </div>
            {showContactForm && <ContactForm onClose={handleCloseForm} />}
        </section>
    );
}

export default Hero;
