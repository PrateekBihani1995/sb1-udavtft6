import React from 'react';
import { BookOpen, Edit, PenTool, Lightbulb } from 'lucide-react';

const resources = [
  {
    icon: <Edit size={24} />,
    title: 'Writing Tips',
    description: 'Expert advice on crafting your story'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Publishing Guide',
    description: 'Step-by-step publishing process'
  },
  {
    icon: <PenTool size={24} />,
    title: 'Marketing Tools',
    description: 'Promote your book effectively'
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Author Community',
    description: 'Connect with fellow writers'
  }
];

export function AuthorResources() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resources for Authors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in your publishing journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div 
              key={resource.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600 mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
              <a 
                href="#" 
                className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}