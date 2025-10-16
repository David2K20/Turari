const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://x.com/daveofspaceship',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://x.com/daveofspaceship',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.083 5.45.202 4.896.38a6.626 6.626 0 0 0-2.397 1.55A6.626 6.626 0 0 0 .948 4.327C.77 4.881.65 5.525.616 6.472.581 7.42.568 7.827.568 11.448c0 3.621.013 4.028.048 4.976.035.947.154 1.591.332 2.145a6.626 6.626 0 0 0 1.551 2.397 6.626 6.626 0 0 0 2.397 1.55c.554.178 1.198.298 2.145.333.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.035 1.591-.155 2.145-.333a6.626 6.626 0 0 0 2.397-1.55 6.626 6.626 0 0 0 1.551-2.397c.178-.554.298-1.198.333-2.145.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.035-.947-.155-1.591-.333-2.145a6.626 6.626 0 0 0-1.55-2.397A6.626 6.626 0 0 0 19.096.38C18.542.202 17.898.083 16.951.048 16.003.013 15.596 0 11.975 0h.042ZM11.975 5.838a5.61 5.61 0 1 0 0 11.22 5.61 5.61 0 0 0 0-11.22Zm0 9.25a3.64 3.64 0 1 1 0-7.28 3.64 3.64 0 0 1 0 7.28ZM19.8 5.592a1.31 1.31 0 1 1-2.62 0 1.31 1.31 0 0 1 2.62 0Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/daveofspaceship',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <h2 className="font-inter text-xl font-semibold text-primary">
              Turari
            </h2>
          </div>
          
          {/* Contact */}
          <div className="text-center">
            <a 
              href="mailto:oreoluwadavid08@gmail.com" 
              className="font-inter text-sm text-secondary hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              oreoluwadavid08@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div>
            <p className="font-inter text-sm text-secondary">
              © {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer