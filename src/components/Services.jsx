import React from 'react';
import { FaRocket, FaTools, FaPalette, FaTachometerAlt, FaComments, FaCogs } from 'react-icons/fa';
import './styles/Home.css';

const servicesData = [
  {
    title: 'Upgrades',
    description: 'Enhance your system performance with the latest hardware upgrades, ensuring faster speeds, higher efficiency, and seamless multitasking.',
    icon: <FaRocket />,
  },
  {
    title: 'Repair',
    description: 'Professional diagnosis and repair services for all types of computer hardware issues, including overheating and malfunctioning components.',
    icon: <FaTools />,
  },
  {
    title: 'Customization',
    description: 'Tailor your PC to match your needs—whether it’s for high-performance gaming, content creation, or business efficiency.',
    icon: <FaPalette />,
  },
  {
    title: 'Optimization',
    description: 'Fine-tune your hardware and software settings for maximum efficiency. From overclocking to resource allocation.',
    icon: <FaTachometerAlt />,
  },
  {
    title: 'Consultation',
    description: 'Expert guidance on selecting the right hardware for your needs, whether you’re building a new PC or setting up a server.',
    icon: <FaComments />,
  },
  {
    title: 'Installation',
    description: 'Seamless installation services for new hardware components, ensuring compatibility and proper setup for motherboards and GPUs.',
    icon: <FaCogs />,
  },
];

const Services = () => {
  return (
    <div className='max-w-container mx-auto px-4'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white mb-4'>Our Services</h2>
        <p className='text-gray-400 max-w-2xl mx-auto'>
          Comprehensive solutions for your high-performance computing needs.
        </p>
      </div>

      <div className='services-grid'>
        {servicesData.map((service, index) => (
          <div key={index} className='service-card'>
            <div className='service-icon-box'>
              {service.icon}
            </div>
            <h3 className='service-title'>{service.title}</h3>
            <p className='service-desc'>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
