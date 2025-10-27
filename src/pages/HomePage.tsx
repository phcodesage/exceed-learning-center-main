import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Lightbulb } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'Kids Programs',
      icon: Users,
      path: '/kids',
      description: 'Afterschool Programs, ABACUS, Private Chess, Day Camp',
      color: '#ca3433',
      bgColor: '#f7e0e0'
    },
    {
      title: 'Teens Programs',
      icon: BookOpen,
      path: '/teens',
      description: 'SAT Bootcamp, Book Club, Public Speaking, Regents Prep',
      color: '#0e1f3e',
      bgColor: '#e8f4f8'
    },
    {
      title: 'Adults Programs',
      icon: Briefcase,
      path: '/adults',
      description: 'Brain Training, Book Club, Parents Programs',
      color: '#ca3433',
      bgColor: '#f7e0e0'
    },
    {
      title: 'Workshops & Masterclass',
      icon: Lightbulb,
      path: '/workshops',
      description: 'Professional development and skill building workshops',
      color: '#0e1f3e',
      bgColor: '#e8f4f8'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7e0e0' }}>
      <header className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <img 
              src="https://lirp.cdn-website.com/3bba8822/dms3rep/multi/opt/Exceed-learning-center-194w.png" 
              alt="Exceed Learning Center Logo" 
              className="mx-auto h-24 w-auto mb-4"
            />
          </div>
          <h1 className="text-6xl font-bold tracking-wide mb-4" style={{ color: '#0e1f3e' }}>EXCEED LEARNING CENTER</h1>
          <p className="text-2xl mb-2" style={{ color: '#ca3433' }}>Education Opens Up The Mind</p>
          <p className="text-xl" style={{ color: '#0e1f3e', opacity: 0.8 }}>Igniting Minds, Illuminating Futures!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#0e1f3e' }}>EXPLORE THROUGH OUR COURSES</h2>
            <p className="text-2xl" style={{ color: '#0e1f3e', opacity: 0.8 }}>Unlock Your Potential with Knowledge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <button
                  key={program.path}
                  onClick={() => navigate(program.path)}
                  className="group relative bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2"
                  style={{ borderColor: program.color }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-6 p-6 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: program.bgColor }}
                    >
                      <Icon size={60} style={{ color: program.color }} />
                    </div>
                    <h3
                      className="text-3xl font-bold mb-3"
                      style={{ color: program.color }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-lg" style={{ color: '#0e1f3e', opacity: 0.7 }}>
                      {program.description}
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-2 rounded-b-xl transition-all duration-300 group-hover:h-3"
                    style={{ backgroundColor: program.color }}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Registration Form Link */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2" style={{ borderColor: '#ca3433' }}>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#ca3433' }}>Ready to Get Started?</h3>
              <p className="text-xl mb-6" style={{ color: '#0e1f3e', opacity: 0.8 }}>
                Register for our programs and begin your learning journey today!
              </p>
              <a
                href="https://olga-one-page-form.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white font-bold text-xl rounded-lg transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: '#ca3433' }}
              >
                Exceed Learning Center Registration Form
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 mt-12" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">EXCEED LEARNING CENTER</h3>
          <p className="text-white text-lg mb-2">
            Education Opens Up The Mind
          </p>
          <p className="text-white text-sm opacity-80">
            Igniting Minds, Illuminating Futures - Transforming lives through education and community
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
