'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Citations: React.FC = () => {
  const citations = [
    {
      title: 'Accountability Partner Statistics',
      source: 'Boss as a Service',
      url: 'https://bossasaservice.com/blog/accountability-partner-statistics/',
      description: 'Research on accountability partnerships and goal completion rates',
    },
    {
      title: 'Goal Achievement Study',
      source: 'Dominican University of California',
      url: 'https://scholar.dominican.edu/cgi/viewcontent.cgi?article=1002&context=psychology-faculty-conference-presentations',
      description: 'Study showing 76% completion rate with weekly progress reports',
    },
    {
      title: 'Social Support and Behavior Change',
      source: 'PMC - National Center for Biotechnology Information',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12504470/',
      description: 'Research on social support improving sustained behavior change',
    },
    {
      title: 'Accountability Partner Benefits',
      source: 'Memorial Hermann',
      url: 'https://memorialhermann.org/health-wellness/fitness/accountability-partner',
      description: 'Benefits of accountability partnerships for goal achievement',
    },
    {
      title: 'Social Support in Health Behavior',
      source: 'PMC - National Center for Biotechnology Information',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3221353/',
      description: 'Impact of social support on health behavior maintenance',
    },
    {
      title: 'Mobile Health Interventions',
      source: 'Journal of Medical Internet Research',
      url: 'https://www.jmir.org/2011/1/e30/',
      description: 'Research on mobile health interventions and social support',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
          Research Citations
        </h3>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          All statistics and claims on this page are backed by peer-reviewed research and studies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {citations.map((citation, index) => (
            <a
              key={index}
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-100 text-sm group-hover:text-blue-400 transition-colors">
                  {citation.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 flex-shrink-0 ml-2" />
              </div>
              <p className="text-xs text-gray-400 mb-1">{citation.source}</p>
              <p className="text-xs text-gray-300">{citation.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
