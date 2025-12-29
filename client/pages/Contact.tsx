import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with Sweet Crumbs
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide text-center">
          <div className="bg-muted/30 rounded-lg p-12 border-2 border-dashed border-primary/30">
            <h2 className="text-3xl font-bold mb-4">Page Under Construction</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              The Contact page is coming soon! Tell me what you'd like to
              include (contact form, map, social links, etc.) and I'll build it.
            </p>
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              Continue Shopping
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
