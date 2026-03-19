import React from 'react'

type propsType={
    label: string;
}

function InputField({label}:propsType) {
    return (
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="name" className="text-primary font-semibold">{label.charAt(0).toUpperCase()+label.slice(1)}</label>
            <input
                name={label}
                type="text"
                className="bg-btn-seconadry rounded-sm p-3 text-sm text-ternary border-2 border-transparent focus:border-secondary focus:outline-none transition-colors duration-200 ease-in-out"
            />
        </div>
    )
}

export default InputField
