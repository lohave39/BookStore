import React from 'react'

function AboutUs() {
  return (
   <>
   <div>
   <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-96" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Welcome to Our Bookstore</h1>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-gray-600">To provide a welcoming space for book lovers and promote a love for reading in our community.</p>
        </div>
      </section>

      {/* Unique Offerings */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Local Authors</h3>
            <p className="mt-2 text-gray-600">Discover books from talented local writers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Events</h3>
            <p className="mt-2 text-gray-600">Join us for book readings, signings, and community events.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cozy Reading Nooks</h3>
            <p className="mt-2 text-gray-600">Relax and enjoy your favorite book in our comfortable spaces.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
          <div className="mt-6 space-y-4">
            <blockquote className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">"A wonderful place to find hidden gems!"</p>
              <footer className="mt-2 text-sm text-gray-500">- Jane Doe</footer>
            </blockquote>
            <blockquote className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-600">"The staff is incredibly knowledgeable and friendly."</p>
              <footer className="mt-2 text-sm text-gray-500">- John Smith</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold">Join Our Community</h2>
        <p className="mt-4 text-gray-600">Sign up for our newsletter to stay updated on events and new arrivals.</p>
        <a href="#" className="mt-6 inline-block bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">Subscribe Now</a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Your Bookstore. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
   </div>
   </>
  )
}

export default AboutUs
