import logo from '../assets/KamalrajLogo.png';
import { FaDownload, FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import resume from '../assets/Kamalraj resume-f.pdf'

export const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2' style={{ width: "200px" }} src={logo} alt="logo" />
      </div>
      <div className='m-8 flex item-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/kamalraj-d-b0a829218/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/07-kamal-03' target='_blank'><FaGithub /></a>
        <a href='https://x.com/07_kamal_03' target='_blank'><FaSquareXTwitter /></a>
        <a href='https://www.instagram.com/07_kamal_03' target='_blank'><FaInstagram /></a>
        <a href={resume} download="Kamalraj_resume" target='_blank'><FaDownload />
          <span className="shiny-text text-sm font-light italic">Resume</span></a>
      </div>
    </div>
  )
}
