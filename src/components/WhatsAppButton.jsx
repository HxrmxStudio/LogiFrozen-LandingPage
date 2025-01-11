import React from "react"
import { whatsappIcon } from "../assets";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/543412833959"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out shadow-lg"
        >
            <img
                src={whatsappIcon}
                alt="Chat WhatsApp"
                className="w-16 h-16 rounded-lg"
            />
        </a>
    );
};
export default WhatsAppButton