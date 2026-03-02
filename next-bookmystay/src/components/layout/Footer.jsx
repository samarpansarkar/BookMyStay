const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">BookMyStay</h2>
                    <p className="text-sm">
                        Your trusted platform to search, compare, and book the best hotels worldwide.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/search" className="hover:text-white transition">Search Hotels</a></li>
                        <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                        <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                    <div className="flex space-x-4">
                        {/* Logic: Add social icons here */}
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <a href="#" className="hover:text-white transition">Facebook</a>
                        <a href="#" className="hover:text-white transition">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-8 pt-8 border-t border-gray-700 text-sm text-center">
                &copy; {new Date().getFullYear()} BookMyStay. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;
