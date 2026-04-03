import React from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-lg bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-white/5 shadow-2xl">
        <div className="flex justify-center text-primary mb-4">
          <AlertTriangle size={80} className="opacity-80" />
        </div>
        
        <div>
          <h1 className="text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/50">
            404
          </h1>
          <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! It seems you've ventured into the unknown. The page you are looking for has been moved or doesn't exist.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            to="/" 
            className="cosmic-button inline-flex items-center gap-2 px-8 py-3"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
