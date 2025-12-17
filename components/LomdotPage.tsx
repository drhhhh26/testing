import React, { useState } from 'react';

interface LomdotPageProps {
  onBack: () => void;
}

export const LomdotPage: React.FC<LomdotPageProps> = ({ onBack }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    { title: "פגיעות מיוחדות", url: "https://drive.google.com/file/d/1yLGOU1LFyShByrNNbbMQJ8G55mPkbjZa/preview" },
    { title: "דגשי רפואת חילוץ", url: "https://drive.google.com/file/d/1yg_pA3WnHACZZE3nTOSdxkvNFZuWOq1I/preview" },
    { title: "דגשי טיפול במתאר הרס", url: "https://drive.google.com/file/d/1noXe0cw6T80lGDaTU8m0AHJtJmSMPdkw/preview" },
    { title: "גופים חבירים", url: "https://drive.google.com/file/d/1vHb1bfS8CgdxcJfPasuObeXAhaWP_XVk/preview" },
    { title: "אוכלוסיות מיוחדות", url: "https://drive.google.com/file/d/1nut_0PUdBGMNY5Ywp_df-ZE7dlorUdv1/preview" },
    { title: "טיפול באב״כ", url: "https://drive.google.com/file/d/1tT66e-AOJBrFTVgOUJg-jmzoQMVD_09h/preview" }
  ];

  const closeModal = () => setSelectedVideo(null);

  return (
    <div className="min-h-screen bg-luxury text-charcoal w-full">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-luxury/80 backdrop-blur-md border-b border-sage/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-bronze">
                  <i className="fa-solid fa-laptop-medical"></i>
              </div>
              <h1 className="text-2xl font-bold tracking-tight">מאגר לומדות</h1>
          </div>
          <button 
            onClick={onBack} 
            className="group flex items-center gap-2 text-sm font-medium text-charcoal hover:text-bronze transition-colors"
          >
              <span>חזרה לבית</span>
              <div className="w-8 h-8 rounded-full bg-sage/30 flex items-center justify-center group-hover:bg-bronze group-hover:text-white transition-all">
                  <i className="fa-solid fa-arrow-left"></i>
              </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group bg-sage rounded-2xl p-4 shadow-sm border border-transparent hover:border-bronze hover:shadow-[0_8px_30px_rgba(220,148,80,0.20)] hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Thumbnail Wrapper */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-inner bg-gray-200 mb-5 relative group-hover:shadow-md transition-shadow">
                {/* 
                   Video iframe acting as thumbnail. 
                   pointer-events-none ensures clicks pass through to the overlay div 
                */}
                <iframe 
                    src={video.url} 
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                    title={video.title}
                    tabIndex={-1}
                ></iframe>

                {/* Click Overlay - Triggers Modal */}
                <div 
                  onClick={() => setSelectedVideo(video.url)}
                  className="absolute inset-0 bg-black/10 hover:bg-black/20 z-10 cursor-pointer flex items-center justify-center transition-colors duration-300"
                >
                   <div className="w-16 h-16 rounded-full bg-bronze/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <i className="fa-solid fa-play text-2xl ml-1"></i>
                   </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="mt-auto text-center">
                <h3 className="text-lg font-bold text-charcoal group-hover:text-bronze transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </main>

      {/* Fullscreen Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Modal Content Container */}
          <div 
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Close Button */}
             <button 
                onClick={closeModal}
                className="absolute -top-12 left-0 text-white/70 hover:text-bronze transition-colors text-4xl p-2"
             >
               <i className="fa-solid fa-xmark"></i>
             </button>

             {/* Video Wrapper: Height-based sizing with 9:16 aspect ratio */}
             <div className="h-[80vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
               <iframe 
                  src={selectedVideo} 
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  title="Fullscreen Video Player"
               ></iframe>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};