import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {NavHashLink} from 'react-router-hash-link';
type PropType={
    type: string;
}

function CtaButtons({type}:PropType) {
  return (
    <NavLink to={type==='primary'?'#projects':''} className={`px-6 py-3 md:w-fit rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer hover:scale-105 transition ${type==='secondary'? 'bg-btn-seconadry border-2 border-gray-700 text-primary hover:bg-gray-700 hover:text-white':'bg-secondary text-white hover:bg-hover-btn-primary'}`}>
        {type==='secondary'?(
            <>
            <DownloadIcon/>
            Download Resume
            </>
        ):
        (
            <>
            <RemoveRedEyeIcon/>
            View Projects
            </>
        )}
    </NavLink>
  )
}

export default CtaButtons
