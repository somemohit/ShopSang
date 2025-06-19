import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {Link} from 'react-router';

const Home = () => {
  return (
    <>
      {/* hero section starts */}
      <section className="relative overflow-hidden bg-gray-500">
        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-48 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Discover the New Collection
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Style meets comfort in our latest drop. Shop now and stand out
                effortlessly.
              </p>
              <div className="mt-6">
                <Link
                  to="/products"
                  className="inline-block bg-black text-white px-6 py-3 text-base font-medium rounded-md hover:bg-gray-800 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-96 lg:h-[600px] overflow-visible">
              <img
                src="/assets/hero-img.jpg"
                alt="Featured Product"
                className="w-auto h-full max-h-[700px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero section ends */}

      <ImageSlider />
    </>
  );
};

export default Home;
