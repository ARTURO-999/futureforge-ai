import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl mx-auto"
      >
        <div className="text-[120px] font-bold text-primary/10 leading-none mb-4">404</div>
        <h1 className="text-3xl font-bold text-dark dark:text-white mb-4">Page Not Found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Explore our careers or head back home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center gap-2">
            <Home size={18} /> Back Home
          </Link>
          <Link to="/careers" className="btn-secondary flex items-center gap-2">
            <ArrowLeft size={18} /> Explore Careers
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
