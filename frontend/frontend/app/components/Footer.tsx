import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    const socials=[
        {logo:<GitHubIcon fontSize='medium'/>,href:"https://github.com/sujal-st"},
        {logo:<LinkedInIcon fontSize='medium'/>,href:"https://www.linkedin.com/in/sujal-sthapit-216373312/"},
        {logo:<InstagramIcon fontSize='medium'/>,href:"#"}
    ]
  return (
    <footer className='bg-nav-main-bg max-w-screen mt-8 py-6 text-center flex flex-col space-y-4'>
        <h2 className='text-2xl md:text-3xl font-semibold'>Let's Connect</h2>
        <p className='max-w-xs md:max-w-xl mx-auto text-base md:text-xl'>I'm always open to discussing new projects, creative ideas, or opportunities to build something together.</p>
        <p className='md:text-lg flex items-center justify-center gap-2'><MailIcon/>sujal.sthapit4@gmail.com</p>
        <p className='min-w-[50vw] mx-auto pb-4 flex items-center justify-center gap-3 border-b-2'>
            {socials.map((s)=>(
                <a href={s.href} target='_blank'>{s.logo}</a>
            ))}
        </p>
        <div className='flex items-center justify-center text-xs'>
            <CopyrightIcon fontSize='small'/> 2026 | www.sujalsthapit.com.np
        </div>
    </footer>
  )
}

export default Footer
