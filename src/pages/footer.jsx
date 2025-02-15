




function Footer () {
    return (
        <div>
                    {/* Footer */}
        <footer className="max-w-7xl mx-auto px-2 py-2 text-center text-gray-500">
          <div className="mb-2">
            Project by{" "}
            <a
              href="https://github.com/shantanugote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              Shantanu Gote
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/shantanugote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              {/* GitHub Icon */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.29-.012-1.24-.017-2.244-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.605-.015 2.896-.015 3.286 0 .324.217.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shantanugote"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              {/* LinkedIn Icon */}
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn icon</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.038-1.85-3.038-1.851 0-2.135 1.445-2.135 2.939v5.668H9.354V9h3.415v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.068-.925-2.068-2.067 0-1.144.924-2.068 2.068-2.068 1.144 0 2.068.924 2.068 2.068 0 1.142-.924 2.067-2.068 2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.723v20.554C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.277V1.723C24 .774 23.208 0 22.225 0z" />
              </svg>
            </a>
          </div>
          <div className="mt-2">
            © {new Date().getFullYear()} react-dashboard-kit. All rights reserved.
          </div>
        </footer>
        </div>
    )
}


export default Footer;