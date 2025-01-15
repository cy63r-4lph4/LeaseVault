const Home = () => {
    return (
      <div className="bg-background text-gray-100">
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center px-6 animate-fadeIn"
          style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg animate-slideUp">
            <h1 className="text-5xl font-bold text-white animate-textGlow">Decentralized Lease Management</h1>
            <p className="text-lg text-gray-300 mt-4 animate-fadeIn">Eliminate middlemen and manage leases securely on the blockchain.</p>
            <button className="btn bg-primary mt-6 animate-bounce">Get Started</button>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-accent animate-fadeIn">Why Choose LeaseVault?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[ 
              { title: "Trustless Transactions", text: "Smart contracts handle payments securely without third-party interference." },
              { title: "Immutable Records", text: "Lease agreements are permanently stored on the blockchain." },
              { title: "Secure Escrow System", text: "Funds are locked in escrow until lease terms are met." },
            ].map((feature, index) => (
              <div key={index} className="p-6 shadow-lg rounded-lg bg-card text-white text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* How It Works Section */}
        <section className="py-16 bg-secondary px-6">
          <h2 className="text-3xl font-bold text-center text-accent animate-fadeIn">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
            {[ 
              { step: "1. List Your Property", text: "Landlords create a listing with details and pricing." },
              { step: "2. Tenants Apply", text: "Tenants browse listings and submit lease applications." },
              { step: "3. Smart Contract Secures Payment", text: "Payments are handled through escrow and released upon lease approval." },
            ].map((process, index) => (
              <div key={index} className="p-6 shadow-lg rounded-lg bg-card text-white transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold">{process.step}</h3>
                <p className="mt-2">{process.text}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-accent animate-fadeIn">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 shadow-lg rounded-lg bg-card text-white">
              <p className="italic">"LeaseVault changed how I manage my rental properties. Seamless and transparent!"</p>
              <h4 className="font-semibold mt-4">- Alex J.</h4>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-card text-white">
              <p className="italic">"I love how easy and secure the entire process is. No more middlemen!"</p>
              <h4 className="font-semibold mt-4">- Sarah W.</h4>
            </div>
          </div>
        </section>
  
        {/* Call-To-Action Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-accent animate-fadeIn">Get Started with LeaseVault</h2>
          <p className="text-gray-300 mt-2 animate-fadeIn">Join the decentralized leasing revolution today.</p>
          <button className="btn bg-primary mt-6 animate-pulse">List a Property</button>
        </section>
  
        {/* Footer */}
        <footer className="bg-secondary text-white py-6 text-center">
          <p>&copy; {new Date().getFullYear()} LeaseVault. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Home;
  