import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        business: '',
        need: '',
    });
    const [isSending, setIsSending] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const serviceID = 'service_5irirmj';
            const templateID = 'template_v5ioz4w';
            const userID = 'kdJEJFTZbQfY8I6rH';

            const templateParams = {
                from_name: formData.name,
                phone: formData.phone,
                business: formData.business,
                need: formData.need,
                to_email: 'logifrozenok@gmail.com',
            };

            const response = await emailjs.send(
                serviceID,
                templateID,
                templateParams,
                userID
            );
            console.log('SUCCESS!', response.status, response.text);

            toast.success('Mensaje enviado con éxito', {
                position: 'top-right',
            });

            setFormData({
                name: '',
                phone: '',
                business: '',
                need: '',
            });
        } catch (err) {
            console.error('ERROR:', err);
            toast.error('Error al enviar el mensaje. Por favor, intente de nuevo.', {
                position: 'top-right',
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="
          bg-primary 
          p-8 
          rounded-lg 
          shadow-xl 
          border 
          border-gray-700 
          w-full 
          max-w-md 
          relative 
          mx-4
        "
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
            >
                <button
                    className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl font-bold"
                    onClick={onClose}
                    aria-label="Cerrar formulario de contacto"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-4 text-white">Contacto</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-white mb-1">
                            Nombre y Apellido
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-white mb-1">
                            Teléfono de contacto
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="business" className="block text-white mb-1">
                            Rubro comercial
                        </label>
                        <input
                            type="text"
                            name="business"
                            id="business"
                            value={formData.business}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="need" className="block text-white mb-1">
                            Información acerca de su necesidad
                        </label>
                        <textarea
                            name="need"
                            id="need"
                            value={formData.need}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <p className="text-red-400 text-sm">
                        La información solicitada nos ayudará a brindarte una respuesta lo más precisa posible en menos de 24 horas.
                    </p>

                    <button
                        type="submit"
                        className="
              w-full 
              bg-blue-gradient 
              text-gray-900
              p-3 
              rounded 
              hover:opacity-90 
              transition-opacity 
              shadow-md 
              font-semibold 
              flex 
              items-center 
              justify-center
            "
                        disabled={isSending}
                    >
                        {isSending ? (
                            <div className="flex items-center">

                                <svg
                                    className="animate-spin mr-2 h-5 w-5 text-current"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8z"
                                    ></path>
                                </svg>
                                Enviando...
                            </div>
                        ) : (
                            'Enviar'
                        )}
                    </button>
                </form>
                <ToastContainer />
            </motion.div>
        </motion.div>
    );
};

export default ContactForm;
