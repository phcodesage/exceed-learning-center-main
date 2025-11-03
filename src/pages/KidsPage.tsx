import { useNavigate } from 'react-router-dom';
import { ArrowLeft, School, Calculator, Crown, Sun } from 'lucide-react';

function KidsPage() {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'Afterschool Programs',
      icon: School,
      description: 'Comprehensive afterschool learning and enrichment',
      link: 'https://kids-after-school-programs.vercel.app/'
    },
    {
      title: 'ABACUS',
      icon: Calculator,
      description: 'Mental math and cognitive development',
      link: 'https://abacus-kids-landing-page.vercel.app/'
    },
    {
      title: 'Private Chess',
      icon: Crown,
      description: 'Strategic thinking and problem-solving skills',
      link: '/'
    },
    {
      title: 'DAY CAMP',
      icon: Sun,
      description: 'Summer learning adventures and fun activities',
      link: 'https://day-camps.vercel.app/'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7e0e0' }}>
      <header className="py-6" style={{ backgroundColor: '#ca3433' }}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={24} />
            <span className="text-lg">Back to Home</span>
          </button>
          <h1 className="text-5xl font-bold text-white tracking-wide text-center">Kids Programs</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#0e1f3e' }}>
              Empowering Young Minds to Excel
            </h2>
            <p className="text-xl" style={{ color: '#0e1f3e', opacity: 0.8 }}>
              Choose a program to learn more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <a
                  key={program.title}
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2"
                  style={{ borderColor: '#0e1f3e' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="mb-6 p-6 rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#f7e0e0' }}
                    >
                      <Icon size={50} style={{ color: '#ca3433' }} />
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: '#ca3433' }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-lg" style={{ color: '#0e1f3e', opacity: 0.7 }}>
                      {program.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="py-6 mt-12" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            Building a strong foundation for lifelong success
          </p>
        </div>
      </footer>
    </div>
  );
}

export default KidsPage;
