import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1A133A] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Real Test Series</h3>
            <p className="text-white dark:text-gray-400">
              Right Evaluation and Assessment for Learning - Your path to success in competitive exams.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/info" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Real Test Info
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/syllabus" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Syllabus
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/faq" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              {/* YouTube */}
              <a href="https://www.youtube.com/@PWTestSeries" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 00.502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 002.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 002.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/testseries_pw/" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/testseriesbypw" className="text-white dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.036 16.918l-.398 3.934c.57 0 .816-.244 1.113-.54l2.664-2.537 5.522 4.03c1.012.558 1.73.264 1.98-.937l3.594-16.84c.328-1.522-.553-2.12-1.538-1.76L2.36 9.47c-1.49.58-1.472 1.41-.254 1.788l4.6 1.438 10.68-6.73c.5-.32.96-.143.58.205"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-white dark:text-gray-400">
            © {new Date().getFullYear()} Real Test Series. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 