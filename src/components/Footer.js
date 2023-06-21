import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white fixed bottom-0 left-0 w-full">
      <div className="container mx-auto py-4">
        <div className="flex justify-center">
          <div className="mr-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.48 2 12c0 4.42 2.98 8.14 7.07 9.26V15.39H5.81v-3.4h3.26V9.88c0-3.2 1.92-4.96 4.82-4.96 1.39 0 2.72.25 2.72.25v2.99h-1.53c-1.51 0-1.98.93-1.98 1.89v2.28h3.38l-.54 3.4h-2.84v8.23C19.02 20.14 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
          <div className="mr-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.48 2 12c0 4.42 2.98 8.14 7.07 9.26V15.39H5.81v-3.4h3.26V9.88c0-3.2 1.92-4.96 4.82-4.96 1.39 0 2.72.25 2.72.25v2.99h-1.53c-1.51 0-1.98.93-1.98 1.89v2.28h3.38l-.54 3.4h-2.84v8.23C19.02 20.14 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm">© 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
