export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        {/* AI Node Network Symbol forming 'A' */}
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connected nodes forming upward growth pattern */}
          <circle cx="16" cy="6" r="2.5" fill="#2563EB" />
          <circle cx="9" cy="16" r="2.5" fill="#2563EB" />
          <circle cx="23" cy="16" r="2.5" fill="#2563EB" />
          <circle cx="16" cy="26" r="2.5" fill="#10B981" />
          
          {/* Connection lines */}
          <line x1="16" y1="6" x2="9" y2="16" stroke="#2563EB" strokeWidth="1.5" />
          <line x1="16" y1="6" x2="23" y2="16" stroke="#2563EB" strokeWidth="1.5" />
          <line x1="9" y1="16" x2="16" y2="26" stroke="url(#gradient1)" strokeWidth="1.5" />
          <line x1="23" y1="16" x2="16" y2="26" stroke="url(#gradient1)" strokeWidth="1.5" />
          <line x1="9" y1="16" x2="23" y2="16" stroke="#2563EB" strokeWidth="1.5" />
          
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xl tracking-tight" style={{ 
        fontWeight: 600, 
        color: '#081120',
        letterSpacing: '-0.02em'
      }}>
        AlmoraX
      </span>
    </div>
  );
}
