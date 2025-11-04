import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, BookOpen, Users, X, Calendar } from 'lucide-react';
import { useState } from 'react';

function AdultsPage() {
  const navigate = useNavigate();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

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
          <h1 className="text-5xl font-bold text-white tracking-wide text-center">Adults Programs</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#f7e0e0' }}>
                <Brain size={40} style={{ color: '#ca3433' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Brain Training</h2>
            </div>
            <div className="ml-16">
              <p className="text-lg italic" style={{ color: '#0e1f3e', opacity: 0.7 }}>
                Details to follow
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#f7e0e0' }}>
                <BookOpen size={40} style={{ color: '#ca3433' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Book Club</h2>
            </div>
            <div className="ml-16 space-y-6">
              <div className="p-6 rounded-lg border-2" style={{ borderColor: '#0e1f3e' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-white p-2 rounded" style={{ backgroundColor: '#ca3433' }} size={40} />
                  <h3 className="text-2xl font-bold" style={{ color: '#ca3433' }}>NOVEMBER</h3>
                </div>
                <div className="flex items-start gap-6 ml-14">
                  <div className="flex-shrink-0">
                    <img
                      src="/living-life-as-a-thank-you.jpg"
                      alt="Living Life as a Thank You book cover"
                      className="w-24 h-32 object-cover rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setModalImageSrc('/living-life-as-a-thank-you.jpg');
                        setIsImageModalOpen(true);
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold mb-3" style={{ color: '#0e1f3e' }}>
                      "Living Life as a Thank You"
                    </p>
                    <div className="flex items-center gap-2 text-lg" style={{ color: '#0e1f3e' }}>
                      <span className="font-medium">Meetings:</span>
                      <span>Nov 11 and Nov 25, 6pm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg border-2" style={{ borderColor: '#0e1f3e' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-white p-2 rounded" style={{ backgroundColor: '#ca3433' }} size={40} />
                  <h3 className="text-2xl font-bold" style={{ color: '#ca3433' }}>DECEMBER</h3>
                </div>
                <div className="flex items-start gap-6 ml-14">
                  <div className="flex-shrink-0">
                    <img
                      src="/the-magic-of-believing-1.jpg"
                      alt="The Magic of Believing book cover"
                      className="w-24 h-32 object-cover rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setModalImageSrc('/the-magic-of-believing-1.jpg');
                        setIsImageModalOpen(true);
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold mb-3" style={{ color: '#0e1f3e' }}>
                      "The Magic of Believing"
                    </p>
                    <div className="flex items-center gap-2 text-lg" style={{ color: '#0e1f3e' }}>
                      <span className="font-medium">Meetings:</span>
                      <span>Dec 15 and Dec 29, at 6pm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border-2 opacity-75" style={{ borderColor: '#0e1f3e' }}>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-white p-2 rounded" style={{ backgroundColor: '#ca3433' }} size={40} />
                  <h3 className="text-2xl font-bold" style={{ color: '#ca3433' }}>ADDITIONAL & OPTIONAL</h3>
                </div>
                <div className="flex items-start gap-6 ml-14">
                  <div className="flex-shrink-0">
                    <img
                      src="/hostage-book-cover.png"
                      alt="Hostage by Eli Sharabi book cover"
                      className="w-24 h-32 object-cover rounded shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setModalImageSrc('/hostage-book-cover.png');
                        setIsImageModalOpen(true);
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold mb-2" style={{ color: '#0e1f3e' }}>
                      "Hostage"
                    </p>
                    <p className="text-lg mb-3" style={{ color: '#0e1f3e' }}>
                      by Eli Sharabi
                    </p>
                    <div className="flex items-center gap-2 text-lg" style={{ color: '#0e1f3e' }}>
                      <span className="font-medium">Status:</span>
                      <span className="italic">Additional and optional reading</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center p-6 rounded-lg" style={{ backgroundColor: '#f7e0e0' }}>
                <p className="text-lg italic mb-4" style={{ color: '#0e1f3e' }}>
                  Share your takeaways, learn from others' insights, and ignite your brilliance through shared literary journeys.
                </p>
                <a
                  href="https://adults-book-club-landing-page.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#ca3433' }}
                >
                  Join Adults Book Club
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-2" style={{ borderColor: '#0e1f3e' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#f7e0e0' }}>
                <Users size={40} style={{ color: '#ca3433' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#0e1f3e' }}>Parents Programs</h2>
            </div>
            <div className="ml-16">
              <p className="text-lg" style={{ color: '#0e1f3e' }}>
                Empowering parents with tools, strategies, and community support for raising thriving children.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-2xl max-h-full">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={modalImageSrc}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="py-6 mt-12" style={{ backgroundColor: '#0e1f3e' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-sm">
            Lifelong learning and personal growth for adults
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AdultsPage;
