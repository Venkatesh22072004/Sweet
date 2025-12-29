import { Link } from "react-router-dom";
import { ChevronRight, Clock, Award, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/mockData";
import { useState } from "react";

export default function Home() {
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const featuredProducts = PRODUCTS.slice(0, 6);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Food Blogger",
      comment:
        "The most authentic Indian bakery experience! Every item is made with love.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Rajesh Kumar",
      role: "Regular Customer",
      comment:
        "Best gulab jamun donuts I've ever tasted. A perfect blend of tradition and taste.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Anjali Patel",
      role: "Event Organizer",
      comment: "Sweet Crumbs catered our wedding. All guests were amazed!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Sweet Crumbs: Where Tradition Meets Taste
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Authentic Indian-style bakery items crafted with love,
                tradition, and the finest ingredients. From gulab jamun donuts
                to saffron cheesecakes, experience the perfect blend of flavors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="btn-primary inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100"
                >
                  Shop Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="#about"
                  className="btn-outline border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop"
                alt="Sweet Crumbs Bakery"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-muted-foreground">
                All our items are freshly baked daily using traditional recipes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                Premium ingredients sourced from trusted suppliers across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-muted-foreground">
                Every creation is crafted with passion and attention to detail
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Bestsellers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved creations that keep our customers coming
              back
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard {...product} onAddToCart={handleAddToCart} />
                {addedToCart === product.id && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Added to Cart! ✓
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of happy customers who love Sweet Crumbs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop"
                alt="About Sweet Crumbs"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About Sweet Crumbs</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2019, Sweet Crumbs is a passion project celebrating
                Indian bakery traditions with a modern twist. We believe every
                bite should tell a story of tradition, quality, and love.
              </p>
              <p className="text-lg text-muted-foreground">
                Our master bakers have generations of experience crafting
                traditional Indian sweets and pastries. We use only the finest
                ingredients—from real saffron to quality butter—ensuring every
                product is authentic and delicious.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    100+ Traditional Recipes
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">Fresh Delivery Daily</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-foreground">
                    100% Natural Ingredients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-wide text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the authentic flavors of Indian baking. Order now and get
            fresh delivery to your doorstep.
          </p>
          <Link
            to="/products"
            className="btn-primary inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100"
          >
            Order Now
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
