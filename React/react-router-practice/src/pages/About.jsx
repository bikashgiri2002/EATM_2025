import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Our Company</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          We're dedicated to providing innovative solutions that make people's lives easier. 
          Our team of experts works tirelessly to deliver high-quality products with 
          exceptional customer service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-800 mb-3">Our Story</h3>
          <p className="text-gray-700">
            Founded in 2020, we started as a small team with big dreams. Today we serve 
            thousands of customers worldwide while maintaining our commitment to quality.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-800 mb-3">Our Values</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Customer-first approach</li>
            <li>Innovation and creativity</li>
            <li>Transparency and honesty</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Meet The Team</h2>
        <p className="text-gray-600">
          We're a diverse group of professionals passionate about what we do.
        </p>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          View Team Members
        </button>
      </div>
    </div>
  )
}

export default About