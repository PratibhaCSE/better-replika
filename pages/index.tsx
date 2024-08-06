// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link'; // Ensure Link is imported

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Better.com</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-green-900 text-white text-center py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Mortgages made simple</h1>
          <p className="text-lg mb-8">Get a fast and easy mortgage with no hidden fees.</p>
          <Link href="/start" className="bg-green-300 text-black py-2 px-6 rounded-full font-semibold hover:bg-green-900">
            Set my approval
          </Link>
        </div>
        <br />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <Link href="/start" className="bg-green-300 text-black py-2 px-6 rounded-full font-semibold hover:bg-green-900">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">No Hidden Fees</h3>
                <p className="text-gray-700">Transparent pricing with no surprises.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Fast Approval</h3>
                <p className="text-gray-700">Get approved in minutes, not days.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Expert Support</h3>
                <p className="text-gray-700">Our team is here to guide you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">“The process was smooth and straightforward. Highly recommend!”</p>
                <cite className="block font-semibold">Jane Doe</cite>
                <p className="text-gray-500">Homeowner</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">“Great experience! Fast approval and excellent support.”</p>
                <cite className="block font-semibold">John Smith</cite>
                <p className="text-gray-500">Investor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
