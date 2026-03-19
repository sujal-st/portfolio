import React from 'react'

function TechStack() {
    const techStack = [
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', title: 'HTML5' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', title: 'CSS3' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', title: 'Tailwind CSS' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', title: 'React' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg', title: 'React Router' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', title: 'Figma' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', title: 'MongoDB' },
        { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', title: 'Express' },
    ]
    return (
        <section id="stacks" className="max-w-2xl mx-auto mt-30 px-10">
            <h2 className='text-5xl text-primary text-center font-semibold mb-11'>Tech Stack</h2>

            <div className='py-4 bg-nav-main-bg grid grid-cols-3 md:grid-cols-4 items-center gap-6 rounded-xl'>
                {techStack.map((tech) => (
                    <span key={tech.title} className='flex flex-col items-center gap-2 place-items-stretch'>
                        <img src={tech.logo} className='h-12 w-12 object-contain' alt={tech.title} />
                        <p className='text-sm text-center text-primary font-semibold'>{tech.title}</p>
                    </span>
                ))}
            </div>

        </section>
    )
}

export default TechStack
