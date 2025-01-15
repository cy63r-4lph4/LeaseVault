const Navbar = () => {
    return (
      <nav className="bg-secondary text-white py-4 px-6 fixed top-0 w-full z-50 shadow-md backdrop-blur-md bg-opacity-80">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-accent">LeaseVault</a>
          <ul className="hidden md:flex space-x-6">
            {/* <li><a href="#features" className="hover:text-primary transition">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition">Testimonials</a></li> */}
            <li><a href="properties" className="hover:text-primary transition">Explore</a></li>
          </ul>
          <button className="btn bg-primary hover:bg-opacity-80 transition">Connect Wallet</button>
        </div>
      </nav>
    );
    };
  
  export default Navbar;