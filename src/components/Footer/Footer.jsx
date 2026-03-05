import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 pt-16 pb-6">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Logo + Description */}
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Whether you're reporting a bug, requesting a feature, or just need a hand TicketDesk makes it easy to get the right help, fast. Submit a ticket in seconds, track its progress in real time.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Our Mission</li>
                            <li className="hover:text-white cursor-pointer">Contact Sales</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Products & Services
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Customer Stories
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Download Apps
                            </li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Information</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">
                                Privacy Policy
                            </li>
                            <li className="hover:text-white cursor-pointer">
                                Terms & Conditions
                            </li>
                            <li className="hover:text-white cursor-pointer">Join Us</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Social Links</h3>

                        <ul className="space-y-3 text-sm">

                            <li className="flex items-center gap-3">
                                <FaXTwitter className="text-white" />
                                @CS — Twitter
                            </li>

                            <li className="flex items-center gap-3">
                                <FaLinkedinIn className="text-white" />
                                @CS — LinkedinIn
                            </li>

                            <li className="flex items-center gap-3">
                                <FaFacebookF className="text-white" />
                                @CS — FaceBook
                            </li>

                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-white" />
                                support@cst.com
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
                    © 2026 CS — Ticket System. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;