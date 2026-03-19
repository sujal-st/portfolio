import InputField from "./InputField";

function ContactSection() {
    return (
        <section id="contact" className="max-w-md mx-auto mt-30">
            <h2 className='text-5xl text-primary text-center font-semibold mb-11'>Contact</h2>

            <form action="https://formspree.io/f/mqeynbre" method="post" className="w-full mx-auto p-5 rounded-lg outline-1 outline-ternary">
                <InputField label="name"/>
                <InputField label="email"/>
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="email" className="text-primary font-semibold">Message</label>
                    <textarea 
                        name="message" 
                        className="bg-btn-seconadry rounded-sm p-3 text-sm text-ternary border-2 border-transparent focus:border-secondary focus:outline-none transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button className="w-full p-2 bg-secondary text-white font-semibold rounded cursor-pointer hover:bg-hover-btn-primary transition-colors duration-300">Send Message</button>
            </form>
        </section>
    )
}
export default ContactSection;
