const servicesData = [
  {
    icon: '🚀',
    heading: 'UI/UX Design',
    description: 'We design intuitive and aesthetically pleasing user interfaces and experiences tailored to your needs.',
  },
  {
    icon: '🛠️',
    heading: 'Web Development',
    description: 'We build robust and scalable websites that provide a seamless user experience and meet your business goals.',
  },
  {
    icon: '📈',
    heading: 'Frontend Development',
    description: 'We create engaging and dynamic front-end interfaces using the latest technologies for a responsive web experience.',
  },
  {
    icon: '🔒',
    heading: 'SaaS Development',
    description: 'We develop Software as a Service (SaaS) solutions that are secure, scalable, and tailored to your specific requirements.',
  },
  {
    icon: '💻',
    heading: 'CMS Development',
    description: 'We build and customize Content Management Systems (CMS) to help you manage and update your website content with ease.',
  },
  {
    icon: '🌐',
    heading: 'Cloud Service',
    description: 'We offer cloud services that enhance your IT infrastructure with flexibility, scalability, and reliable performance.',
  },
];

const Services = () => {
  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Our <span className="text-textPrimaryBlue">Services</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="hover:bg-[#212121] p-6 rounded-lg shadow-lg flex flex-col items-start overflow-hidden"
          >
            <div className="flex  flex-col items-center mb-4 w-full">
              <div className="text-4xl mr-4 flex-shrink-0">{service.icon}</div>
              <h2 className="text-2xl font-semibold truncate">{service.heading}</h2>
            </div>
            <p className="text-[#959595]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
