import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Calendar } from 'lucide-react';

function WorkshopsPage() {
  const navigate = useNavigate();

  const events = [
    {
      date: 'Nov. 9, 2025',
      type: 'Masterclass',
      title: 'From Surviving to Thriving – Habits, Mindsets, and Practices for a Better Life'
    },
    {
      date: 'Nov. 12, 2025',
      type: 'Workshop',
      title: 'The Science of Gratitude'
    },
    {
      date: 'Nov. 23, 2025',
      type: 'Workshop',
      title: 'The Power of Joyful Moments'
    },
    {
      date: 'Nov. 25, 2025',
      type: 'Workshop',
      title: 'Discover Core Values'
    },
    {
      date: 'Dec. 2, 2025',
      type: 'Workshop',
      title: 'Goals with Souls'
    },
    {
      date: 'Dec. 17, 2025',
      type: 'Workshop',
      title: 'Letter To Your Future Self'
    },
    {
      date: 'Dec. 23, 2025',
      type: 'Workshop',
      title: 'Reflect, Reset, End the Year and Start a New One - Stronger'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8f4f8' }}>
      <header className="py-6" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={24} />
            <span className="text-lg">Back to Home</span>
          </button>
          <h1 className="text-5xl font-bold text-white tracking-wide text-center">Workshops & Masterclass</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Lightbulb size={60} style={{ color: '#ca3433' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#0e1f3e' }}>
            Transform Your Life Through Learning
          </h2>
          <p className="text-xl" style={{ color: '#0e1f3e', opacity: 0.8 }}>
            Join our transformative workshops and masterclasses designed to help you thrive
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-102 border-l-4"
              style={{ borderLeftColor: event.type === 'Masterclass' ? '#ca3433' : '#0e1f3e' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 md:min-w-[200px]">
                  <Calendar size={24} style={{ color: '#ca3433' }} />
                  <span className="text-lg font-bold" style={{ color: '#0e1f3e' }}>
                    {event.date}
                  </span>
                </div>
                <div className="flex-1">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-2"
                    style={{ backgroundColor: event.type === 'Masterclass' ? '#ca3433' : '#0e1f3e' }}
                  >
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#0e1f3e' }}>
                    {event.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2" style={{ borderColor: '#ca3433' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#ca3433' }}>
              Workshops & Masterclass Programs
            </h3>
            <p className="text-lg mb-6" style={{ color: '#0e1f3e' }}>
              Each workshop and masterclass is designed to provide practical tools and insights you can apply immediately to create lasting positive change.
            </p>
            <a
              href="https://workshops-masterclass.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded-lg transition-all hover:opacity-90 hover:scale-105 mr-4 mb-4"
              style={{ backgroundColor: '#ca3433' }}
            >
              View All Workshops & Masterclass
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2" style={{ borderColor: '#0e1f3e' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#0e1f3e' }}>
              October Special Workshops
            </h3>
            <p className="text-lg mb-6" style={{ color: '#0e1f3e' }}>
              Special October workshop sessions designed for teens and adults with focused learning outcomes.
            </p>
            <a
              href="https://registraton-form-day-camp-exceed-le.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded-lg transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: '#0e1f3e' }}
            >
              Register for October Workshops
            </a>
          </div>
        </div>
      </main>

      <footer className="py-6 mt-12" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            Empowering transformation through knowledge and community
          </p>
        </div>
      </footer>
    </div>
  );
}

export default WorkshopsPage;
