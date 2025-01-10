import React from 'react'

function Button({ styles }) {
    return (
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none  ${styles} transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded`}>
            Descubre mas
        </button>
    )
}

export default Button