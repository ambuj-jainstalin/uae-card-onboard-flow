
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { CreditCard, ArrowRight, Check } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 mb-16 gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Credit Card in Minutes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Apply online for a new credit card that matches your lifestyle. Get instant approval with our streamlined application process.
            </p>
            <Button 
              asChild
              className="text-lg px-8 py-6 bg-bank-red hover:bg-bank-red/90 flex items-center"
            >
              <Link to="/apply">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://imageio.forbes.com/specials-images/imageserve/6188c63a10f2afc7ad19ae64/1333x1000-pixel-credit-card-mockup-/960x0.jpg?format=jpg&width=960" 
              alt="Credit Cards" 
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
        
        {/* Features */}
        <div className="py-12 mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Credit Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quick Application',
                description: 'Complete your application in just minutes with our user-friendly online process'
              },
              {
                title: 'Instant Decision',
                description: 'Get an instant decision on your application and know your credit limit right away'
              },
              {
                title: 'Secure Process',
                description: 'Your data is protected with bank-grade security throughout the application process'
              },
              {
                title: 'Tailored Offers',
                description: 'Receive personalized card offers based on your financial profile'
              },
              {
                title: 'Flexible Rewards',
                description: 'Choose from travel miles, cashback, or points-based reward systems'
              },
              {
                title: 'Premium Benefits',
                description: 'Enjoy exclusive benefits like airport lounge access, concierge services, and more'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-bank-lightBlue flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-bank-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Card Types */}
        <div className="py-12 mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Card Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Travel Cards',
                description: 'Perfect for frequent travelers. Earn miles, get lounge access, and enjoy travel insurance.',
                image: 'https://cdn.pixabay.com/photo/2015/07/29/00/10/man-865035_1280.jpg'
              },
              {
                title: 'Rewards Cards',
                description: 'Earn points on every purchase and redeem them for merchandise, gift cards, or travel.',
                image: 'https://cdn.pixabay.com/photo/2016/06/15/17/12/woman-1459220_1280.jpg'
              },
              {
                title: 'Cashback Cards',
                description: 'Get cash back on everyday purchases like groceries, fuel, and online shopping.',
                image: 'https://cdn.pixabay.com/photo/2017/09/07/08/53/money-2724235_1280.jpg'
              },
              {
                title: 'Business Cards',
                description: 'Designed for business expenses with expense tracking and employee cards.',
                image: 'https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg'
              },
              {
                title: 'Premium Cards',
                description: 'Exclusive benefits like concierge services, higher limits, and premium insurance.',
                image: 'https://cdn.pixabay.com/photo/2020/07/27/22/11/diamond-5443077_1280.jpg'
              },
              {
                title: 'Student Cards',
                description: 'Build credit history with special features for students and young professionals.',
                image: 'https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg'
              }
            ].map((card, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-white/80 mb-4">{card.description}</p>
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-white/20 text-white hover:bg-white hover:text-gray-800 backdrop-blur-sm"
                  >
                    <Link to="/apply">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="py-12 mb-8">
          <div className="bg-gradient-to-r from-bank-blue to-bank-darkBlue rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to apply for your new card?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get started now with our simple application process and find the perfect credit card for your needs.
            </p>
            <Button 
              asChild
              className="text-lg px-8 py-6 bg-white text-bank-darkBlue hover:bg-white/90 flex items-center mx-auto"
            >
              <Link to="/apply">
                Apply Now <CreditCard className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
