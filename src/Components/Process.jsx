const processData = [
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
  {
    icon: '🔍',
    heading: 'Discovery',
    description: 'Understanding your business, goals, and challenges.',
  },
];

const Process = () => {
  return (
    <div className="sm:p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Our <span className="text-blue-700">Process</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl justify-center">
        {processData.map((process, index) => (
          <div
            key={index}
            className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-start mb-4 w-full">
              <div className="text-2xl bg-[#2A2A2A] rounded p-2  mb-4 flex-shrink-0">{process.icon}</div>
              <h2 className="text-2xl font-semibold truncate">{process.heading}</h2>
              <p className="text-[#959595] text-left">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
