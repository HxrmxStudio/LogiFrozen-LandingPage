import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

function GetStarted({ text1 = "Cotiza", text2 = "ahora" }) {
    return (
        <button
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer button`}
            aria-label={`${text1} ${text2}`}
        >
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">{text1}</span>
                    </p>
                    <img src={arrowUp} alt="Icono de flecha hacia arriba" className="w-[23px] h-[23px] object-contain" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">{text2}</span>
                </p>
            </div>
        </button>
    );
}


export default GetStarted;
