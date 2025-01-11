import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col border-t-[1px] border-t-[rgba(63, 62, 69, 0.5)]`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                {/* Logo e Información */}
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                        src={logo}
                        alt="LogiFrozen"
                        className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                        Entrega congelada garantizada
                    </p>
                </div>

                {/* Enlaces */}
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                            }`}
                                    >
                                        <a href={link.link} target="_blank" rel="noopener noreferrer">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Información */}
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            Información
                        </h4>
                        <ul className="list-none mt-4">
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                                Lunes a Viernes, 9 AM - 6 PM
                            </li>
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                                <a href="tel:+54-341-2833959" className="hover:text-secondary">+54-341-2833959</a>
                            </li>
                            <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                                <a href="mailto:logifrozenok@gmail.com" className="hover:text-secondary">logifrozenok@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Derechos y Redes Sociales */}
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[rgba(63, 62, 69, 0.5)]">
                <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    Copyright Ⓒ {currentYear} LogiFrozen. All Rights Reserved.
                </p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, index) => (
                        <a
                            key={social.id}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ir a ${social.id}`}
                        >
                            <img
                                src={social.icon}
                                alt={social.id}
                                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
