import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CtaButtons from './CtaButtons';
import AuroraBackground from './Aurorabackground';

function HeroSection() {

    const buttons=['primary','secondary']

    return (
        <>
        <AuroraBackground/>
        <section className='max-w-xl max-h-screen mx-auto mt-20 text-center z-5'>
            <p className="text-ternary text-base md:text-lg mb-5 ">Front-end Developer</p>
            <h1 className='text-primary text-3xl md:text-5xl font-bold mb-5'>
                <span className='block text-5xl md:text-7xl mb-3'>Sujal Sthapit</span>
                <span className='text-ternary'>I build things</span>
                <span className='text-secondary'> for the web.</span>
            </h1>
            <p className="px-8 md:px-4 text-ternary text-base md:text-xl mb-10">Crafting performant, accessible, and beautifully designed applications. Currently focused on developer tools and open-source.</p>
            <div className='px-5 flex flex-col md:flex-row items-center justify-center gap-4'>
                {buttons.map((b)=>(
                    <CtaButtons key={b} type={b}/>
                ))}
            </div>
        </section>
        </>
    )
}

export default HeroSection
