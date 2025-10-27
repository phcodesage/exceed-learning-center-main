import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, BookOpen, Mic, FileText } from 'lucide-react';

function TeensPage() {
  const navigate = useNavigate();

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
          <h1 className="text-5xl font-bold text-white tracking-wide text-center">Teens Programs</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#e8f4f8' }}>
                <GraduationCap size={40} style={{ color: '#0e1f3e' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>SAT Bootcamp & Strategy Class</h2>
            </div>
            <div className="ml-16 space-y-4">
              <p className="text-lg" style={{ color: '#0e1f3e' }}>
                <strong>Duration:</strong> 2 weeks, 4 hours each session
              </p>
              <p className="text-lg" style={{ color: '#0e1f3e' }}>
                <strong>Schedule:</strong> Sundays 10am-2pm
              </p>
              <p className="text-lg" style={{ color: '#0e1f3e' }}>
                <strong>Format:</strong> One day for English, one day for Math
              </p>
              <div className="mt-6 p-6 rounded-lg" style={{ backgroundColor: '#f7e0e0' }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ca3433' }}>For Dec 6 Exam</h3>
                <p className="text-lg mb-2" style={{ color: '#0e1f3e' }}>
                  <strong>Bootcamp Sessions:</strong> Nov 23 and Nov 30
                </p>
                <p className="text-lg mb-4" style={{ color: '#0e1f3e' }}>
                  Practical strategies to approach the SAT, practice questions and more.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-xl font-bold mb-4" style={{ color: '#0e1f3e' }}>
                    $199 per session (Math or English) | $350 for both
                  </p>
                  <a
                    href="https://sat-bootcamp.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                    style={{ backgroundColor: '#ca3433' }}
                  >
                    Register for SAT Bootcamp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#e8f4f8' }}>
                <BookOpen size={40} style={{ color: '#0e1f3e' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Book Club</h2>
            </div>
            <div className="ml-16 space-y-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#f7e0e0' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ca3433' }}>NOVEMBER</h3>
                <p className="text-xl font-semibold mb-2" style={{ color: '#0e1f3e' }}>
                  "The 6 Most Important Decisions You'll Ever Make: A Guide for Teens"
                </p>
                <p className="text-lg" style={{ color: '#0e1f3e' }}>
                  <strong>Meeting Days:</strong> Thursdays: Nov 13 and Nov 26, at 4pm
                </p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#f7e0e0' }}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#ca3433' }}>DECEMBER</h3>
                <p className="text-xl font-semibold mb-2" style={{ color: '#0e1f3e' }}>
                  "Your Life, Your Way"
                </p>
                <p className="text-lg" style={{ color: '#0e1f3e' }}>
                  <strong>Meeting Days:</strong> Thursdays: Dec 11 and Dec 25, at 4pm
                </p>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://book-club-landing-page-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#ca3433' }}
                >
                  Join Teens Book Club
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#e8f4f8' }}>
                <Mic size={40} style={{ color: '#0e1f3e' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Public Speaking</h2>
            </div>
            <div className="ml-16">
              <p className="text-lg italic" style={{ color: '#0e1f3e', opacity: 0.7 }}>
                Details to follow
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#e8f4f8' }}>
                <FileText size={40} style={{ color: '#0e1f3e' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Regents Prep</h2>
            </div>
            <div className="ml-16">
              <p className="text-lg mb-4" style={{ color: '#0e1f3e' }}>
                Comprehensive preparation for your Regents exams with expert instruction and practice materials.
              </p>
              <a
                href="https://regents-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#ca3433' }}
              >
                View Regents Prep Program
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 mt-12" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            Preparing teens for academic excellence and future success
          </p>
        </div>
      </footer>
    </div>
  );
}

export default TeensPage;
