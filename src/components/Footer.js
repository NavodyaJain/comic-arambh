// components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="comic-border bg-black mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-primary">
              COMIC ARAMBH
            </h3>
            <p className="text-text-secondary">
              Bringing laughter and poetry to stages across India
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Performances', 'Gallery', 'Book Me'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-display text-xl font-bold text-accent">Connect</h4>
            <div className="flex gap-4">
              {['Instagram', 'YouTube', 'Email'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-transform"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-text-secondary/20 mt-8 pt-8 text-center text-text-secondary">
          <p>Copyright {currentYear} Comic Arambh. All rights reserved.</p>
          <p className="mt-2">Designed with laughter</p>
        </div>
      </div>
    </footer>
  );
}