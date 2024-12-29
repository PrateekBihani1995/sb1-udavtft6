import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Story Deserves to Be Heard
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of authors who have successfully published their books with PageTurn Press.
            Professional publishing services tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-700 transition-colors">
              Start Publishing <ArrowRight size={20} />
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              Explore Books
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BookOpen className="text-indigo-600" size={32} />}
            title="Complete Publishing"
            description="From manuscript to market - we handle everything in between."
          />
          <FeatureCard
            icon={<Users className="text-indigo-600" size={32} />}
            title="Expert Support"
            description="Dedicated team of publishing professionals at your service."
          />
          <FeatureCard
            icon={<Award className="text-indigo-600" size={32} />}
            title="Quality Assured"
            description="Industry-standard quality for your book's success."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}