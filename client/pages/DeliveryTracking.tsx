import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Clock, ChevronLeft, Bike } from "lucide-react";
import { SAMPLE_ORDER } from "@/lib/mockData";
import { useState, useEffect } from "react";

export default function DeliveryTracking() {
  const { orderId } = useParams();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate status progression
  const statusStages = [
    { key: "pending", label: "Order Pending", completed: true },
    { key: "confirmed", label: "Confirmed", completed: true },
    { key: "preparing", label: "Preparing", completed: true },
    { key: "baking", label: "Baking", completed: true },
    { key: "out_for_delivery", label: "Out for Delivery", completed: true },
    { key: "delivered", label: "Delivered", completed: false },
  ];

  const completedStages = statusStages.filter((s) => s.completed).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
          <h1 className="text-4xl font-bold">Order Tracking</h1>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Tracking Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Order Info Card */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Order Number
                    </p>
                    <p className="text-xl font-bold text-primary font-mono">
                      {SAMPLE_ORDER.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Current Status
                    </p>
                    <p className="text-xl font-bold text-foreground capitalize">
                      {SAMPLE_ORDER.status.replace("_", " ")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Estimated Time
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {SAMPLE_ORDER.estimatedTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="bg-white rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-bold mb-8">Order Status Timeline</h2>

                <div className="space-y-6">
                  {statusStages.map((stage, index) => (
                    <div key={stage.key} className="flex gap-6">
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                            stage.completed
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground border-2 border-border"
                          }`}
                        >
                          {stage.completed ? "✓" : index + 1}
                        </div>
                        {index < statusStages.length - 1 && (
                          <div
                            className={`w-1 h-12 my-2 ${
                              stage.completed
                                ? "bg-primary"
                                : "bg-muted"
                            }`}
                          />
                        )}
                      </div>

                      {/* Status Info */}
                      <div className="pb-4 flex-grow">
                        <p
                          className={`text-lg font-semibold ${
                            stage.completed
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }`}
                        >
                          {stage.label}
                        </p>

                        {/* Show update details for completed stages */}
                        {stage.completed &&
                          index < SAMPLE_ORDER.trackingUpdates.length && (
                            <>
                              <p className="text-sm text-muted-foreground mt-1">
                                {SAMPLE_ORDER.trackingUpdates[index].time}
                              </p>
                              <p className="text-sm text-foreground mt-2">
                                {SAMPLE_ORDER.trackingUpdates[index].message}
                              </p>
                            </>
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold">Progress</p>
                    <p className="text-sm font-semibold text-primary">
                      {completedStages} of {statusStages.length} completed
                    </p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(completedStages / statusStages.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Current Location */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bike className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2">
                      Current Location
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {SAMPLE_ORDER.currentLocation}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Your order is out for delivery. Our delivery partner is
                      heading your way!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Delivery Partner Card */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
                <h3 className="text-lg font-bold mb-4">Delivery Partner</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white text-lg font-bold">RK</span>
                    </div>
                    <div>
                      <p className="font-semibold">Rajesh Kumar</p>
                      <p className="text-sm text-muted-foreground">
                        ⭐ 4.9 (125 reviews)
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-primary/20 space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <a
                        href="tel:+919876543210"
                        className="text-primary hover:text-primary/80 font-semibold"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-semibold">
                        10:32 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold mb-4">Delivery Address</h3>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">
                      123 Main Street
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bandra West
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mumbai, Maharashtra 400050
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg p-6 border border-border">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Mango Cake x1
                    </span>
                    <span className="font-semibold">₹450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Jaggery Brownie x2
                    </span>
                    <span className="font-semibold">₹400</span>
                  </div>

                  <div className="pt-3 border-t border-border space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹850</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (5%)</span>
                      <span className="font-semibold">₹43</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span className="font-semibold">Delivery</span>
                      <span className="font-semibold">FREE</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">₹893</span>
                  </div>
                </div>
              </div>

              {/* Help */}
              <button className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors">
                Need Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
