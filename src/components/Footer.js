import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="z-50 text-center shadow-ylg bg-textured2  lg:text-left">
            <div className="flex border-b-2 justify-end border-black p-3">
                {/* <!-- Social network icons container --> */}
                <div className="flex gap-x-6 pt-2 justify-center">
                    <a className=" cursor-pointer hover:text-teal-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    <a className="cursor-pointer hover:text-teal-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a> 
                    <a className="cursor-pointer -mr-2 hover:text-teal-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24">
  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                        </svg>
                    </a> 
                    <a className=" cursor-pointer hover:text-teal-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                        
                    </a>

                </div>

            </div>

            {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* <!-- Casual Legends section --> */}
                    {/* <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Casual Legends
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div> */}
                    {/* <!-- Legal section --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Legal
                        </h6>
                        <ul className="flex flex-col ">
                            <li className='mb-4'>
                                <a href="#" className="hover:text-teal-500">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-teal-500">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Useful links section --> */}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        <p className="mb-4">
                            <Link to="/CasualLegends/pricing" className="hover:text-teal-500">Pricing</Link>
                        </p>
                            <Link to="/CasualLegends/news" className="hover:text-teal-500">Latest Updates</Link>
                        <p className="mb-4">
                        </p>
                        <p className='mb-4'>
                            <a href="#" className="hover:text-teal-500">Feedback Form</a>
                        </p>
                        <p className="">
                            <a href="#" className="hover:text-teal-500">Frequently Asked Questions</a>
                        </p>
                    </div>
                    {/* Download section */}
                    <div>
                    <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            TRY FOR FREE
                        </h6>
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <a href="#" className="hover:text-teal-500">Website</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-teal-500">App Store</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-teal-500">Google Play</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Contact section --> */}
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            Lorem ipsum
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            Loremipsum@gmail.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd" />
                            </svg>
                            + 01 234 567 88
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                                    clipRule="evenodd" />
                            </svg>
                            + 01 234 567 89
                        </p>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className="font-bold p-6 text-center ">
                <span>© 2024 </span>
                <a
                    className="font-semibold"
                    href="https://casuallegends.app/"
                >Casual Legends</a>
            </div>
        </footer>
    );
}

export default Footer;