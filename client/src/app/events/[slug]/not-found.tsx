import Link from 'next/link';

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center mt-20">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#264065] mb-4 font-['Poppins']">404</h1>
          <h2 className="text-2xl font-bold text-[#264065] mb-4 font-['Poppins']">
            Event Not Found
          </h2>
          <p className="text-gray-600 mb-8 font-['Poppins']">
            Sorry, we couldn't find the event you're looking for. It may have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/events"
            className="inline-block bg-[#C88652] hover:bg-[#264065] text-white px-6 py-3 rounded-lg font-bold font-['Poppins'] transition-colors duration-300"
          >
            Browse All Events
          </Link>
          
          <div>
            <Link
              href="/"
              className="text-[#264065] hover:text-[#C88652] font-['Poppins'] underline transition-colors duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 