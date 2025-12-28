import React from 'react'
import './footer.css'
import { FaFacebookF, FaPaperPlane } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
        <div className="wrapper">
            <div className='flex between border-btm p-block-2 gap-4'>
                <h2>Let's <span className='green-text'>Connect</span> There</h2>
                <a href="#" className='btn self-end'>Hire Me Now</a>
            </div>
            <div className='p-block-7 flex flex-start gap-4'>
                <div className="footer-wrapper">
                    <a href="#" className='logo'>
                        <span>T</span>Y
                    </a> 
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam tempora quisquam ad eos atque facere hic, tempore dolor veniam veritatis, natus ullam doloribus aliquam rem, rerum voluptates exercitationem! Suscipit?</p>
                    <div className="flex gap-1 mt-2">
                        <a href="#" className="icon-container green-inverse">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="icon-container green-inverse">
                            <LiaTelegramPlane />
                        </a>
                        <a href="#" className="icon-container green-inverse">
                            <MdOutlineEmail />
                        </a>
                        <a href="#" className="icon-container green-inverse">
                            <FaInstagram />
                        </a>
                        <a href="#" className="icon-container green-inverse">
                            <SlSocialLinkedin />
                        </a>
                    </div>
                </div>
                <ul className="footer-wrapper">
                    <li className='mt-2'>
                        <h6>Navigation</h6>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">Home</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">Service</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">About Me</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">Testimonials</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">Contact Me</a>
                    </li>
                </ul>
                <ul className="footer-wrapper">
                    <li>
                        <h6>Contact</h6>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">016 639 011</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">suontii2023@gmail</a>
                    </li>
                    <li className='mt-2'>
                        <a href="#" className="link">Nº 9e2, St 372, Beong Salang , Toul Kork, Phnom Penh</a>
                    </li>
                </ul>
                <div className="footer-wrapper">
                    <h6>Get the latest Information</h6>
                    <div className="footer-input mt-2 stretch">
                        <input className='email-field' type="email" autoComplete='off' placeholder='Email Here' />
                        <button className='input-btn'>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="wrapper flex between">
                <p>Copyright &copy; Ty. All Rights Reserved</p>
                <p>User Terms & Condition | Privacy Policy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
