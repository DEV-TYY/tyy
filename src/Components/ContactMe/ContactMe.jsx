import { FaFacebookF } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import "./ContactMe.css"
import React from 'react'

const ContactMe = () => {
    return (
        <section>
            <div className="wrapper p-block-9 border-btm">
                <div className='text-center'>
                    <span className='sub-text overlay-text middle' datatype='Contact Me'>Contact Me</span>
                    <h2>
                        Let's Talk for <span className='green-text'> Your Next Project</span>
                    </h2>
                </div>
                <div className="flex gap-5 mt-5 start">
                    <form>
                        <div className="flex gap-2">
                            <div className="input-container">
                                <label htmlFor="name">Your Name*</label>
                                <input type="text" name="name" id="name" required autoComplete="off" placeholder="Enter Yor Name" className="input-field" />
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">Your Email*</label>
                                <input type="text" name="email" id="email" required autoComplete="off" placeholder="example@gmail.com" className="input-field" />
                            </div>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <div className="input-container">
                                <label htmlFor="phone">Phone Number*</label>
                                <input type="tel" name="phone" id="phone" required autoComplete="off" placeholder="Enter Your Phone Number" className="input-field" />
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">I'm interested in*</label><br />
                                <select name="interest" id="interest" defaultValue="" className="input-field select">
                                    <option value="" disabled>Select interest</option>
                                    <option value="Website">Website</option>
                                    <option value="Mobile App">Mobile App</option>
                                    <option value="E-Commerce">E-Commerce</option>
                                    <option value="Landing Page">Landing Page</option>
                                    <option value="Portfolio">Portfolio</option>
                                    <option value="Company Profile">Company Profile</option>
                                    <option value="Business Software">Business Software</option>
                                    <option value="POS System">POS System</option>
                                    <option value="CRM System">CRM System</option>
                                    <option value="ERP System">ERP System</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <div className="input-container">
                                <label htmlFor="email">Budge Range(USD)*</label><br />
                                <select name="range" id="range" defaultValue="" className="input-field select">
                                    <option value="" disabled>Select country</option>
                                    <option value="100-300">$100 – $300</option>
                                    <option value="300-500">$300 – $500</option>
                                    <option value="500-1000">$500 – $1,000</option>
                                    <option value="1000-2000">$1,000 – $2,000</option>
                                    <option value="2000-3000">$2,000 – $3,000</option>
                                    <option value="3000+">Above $3,000</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="email">I'm interested in*</label><br />
                                <select name="interest" id="interest" defaultValue="" className="input-field select">
                                    <option value="" disabled>Select country</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="United States">United States</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Japan">Japan</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="China">China</option>
                                    <option value="Australia">Australia</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-1">
                            <label htmlFor="message">Your Message*</label><br/>
                            <textarea name="message" id="message" placeholder="Enter Here..." className="input-field" rows={9} required></textarea>
                        </div>
                        <div className="mt-1">
                            <a href="#" className="btn">Send Message</a>
                        </div>
                    </form>
                    <div className='info'>
                        <div className='detail'>
                            <div>
                                <h6>Address</h6>
                                <p>Nº 9e2, St 372, Beong Salang , Toul Kork, <br />Phnom Penh</p>
                            </div>
                            <div>
                                <h6>Contact</h6>
                                <p>
                                    Phone: 016 639011<br />
                                    Email: suontii2023@gmail.com
                                </p>
                            </div>
                            <div>
                                <h6>Time:</h6>
                                <p>
                                    Monday - Friday: 08.00AM - 05.00PM<br />
                                    Saturday-Sunday: 12:00 PM - 05.00PM
                                </p>
                            </div>
                        </div>
                        <div className="bg-header rounded-b">
                            <h5>Stay Connected</h5>
                            <div className="flex gap-1 mt-2">
                                <a href="#" className="icon-container black-inverse">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="icon-container black-inverse">
                                    <LiaTelegramPlane />
                                </a>
                                <a href="#" className="icon-container black-inverse">
                                    <MdOutlineEmail />
                                </a>
                                <a href="#" className="icon-container black-inverse">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="icon-container black-inverse">
                                    <SlSocialLinkedin />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
