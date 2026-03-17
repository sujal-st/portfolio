import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

type PropType={
    type: string;
}

function CtaButtons({type}:PropType) {
  return (
    <button className={`px-6 py-3 md:w-fit rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition ${type==='secondary'? 'bg-btn-seconadry border-2 border-gray-700 text-primary hover:bg-gray-700 hover:text-white':'bg-secondary text-white hover:bg-hover-btn-primary'}`}>
        {type==='secondary'?(
            <a href='/Sujal_Sthapit_Resume.pdf' download="Sujal_Sthapit_Resume.pdf">
            <DownloadIcon/>
            Download Resume
            </a>
        ):
        (
            <a href='#projects'>
            <RemoveRedEyeIcon/>
            View Projects
            </a>
        )}
    </button>
  )
}

export default CtaButtons
