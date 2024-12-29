import React from 'react';
import { Check } from 'lucide-react';

const services = [
  {
    title: 'Essential',
    price: 499,
    features: [
      'Professional Editing',
      'Custom Cover Design',
      'Print & eBook Formats',
      'ISBN Assignment',
      'Basic Marketing Kit'
    ]
  },
  {
    title: 'Premium',
    price: 999,
    features: [
      'Everything in Essential',
      'Advanced Editorial Review',
      'Marketing Campaign',
      'Author Website',
      'Social Media Kit',
      'Worldwide Distribution'
    ]
  }
];

export function PublishingServices() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Publishing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect publishing package for your book
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="border-2 border-gray-200 rounded-xl p-8 hover:border-indigo-600 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-6">
                ${service.price}
              </div>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}