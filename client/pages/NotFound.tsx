import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="text-center max-w-md px-4">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Link
            to="/"
            className="btn-primary w-full inline-flex items-center justify-center gap-2"
          >
            Return to Home
            <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/products"
            className="btn-outline w-full inline-flex items-center justify-center gap-2 border-primary text-primary"
          >
            Shop Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
