import Head from 'next/head';

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us - Better.com</title>
        <meta name="description" content="Learn more about Better.com and our mission" />
      </Head>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Mission</h1>
          <h2 className="text-xl md:text-5xl font-bold text-gray-700 leading-relaxed">
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="  text-3xl md:text-4xl font-bold text-center mb-12">Company timeline</h2>
          <div className=" bg-green-50 flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2014</h3>
                <p className="text-gray-700">After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-2">2015</h2>
                <p className="text-gray-700">Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2016</h3>
                <p className="text-gray-700">Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2017</h3>
                <p className="text-gray-700">Better expands into the real estate market with Better Real Estate.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2018</h3>
                <p className="text-gray-700">Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2019</h3>
                <p className="text-gray-700">Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold mb-2">2023</h3>
                <p className="text-gray-700">Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Today</h3>
          <a href="/contact" className="bg-green-300 text-gray-700 py-2 px-6 rounded-full text-lg font-semibold hover:bg-green-900 hover:text-white">
            Contact Us
          </a>
          </div>
        </div>
          </div>
          
        </div>
      </section>

      
    </div>
  );
};

export default AboutUs;
