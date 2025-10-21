import { useState } from 'react';

/**
 * CheckoutFlow - Premium Multi-Step Checkout Component
 * Modern checkout flow with dark theme and smooth transitions
 */
const CheckoutFlow = ({
  onComplete,
  className = ""
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Shipping
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const steps = [
    { id: 0, name: 'Shipping', icon: '📦' },
    { id: 1, name: 'Payment', icon: '💳' },
    { id: 2, name: 'Review', icon: '✓' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete?.(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2 -z-10">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`
                  w-16 h-16 rounded-full flex items-center justify-center text-2xl
                  transition-all duration-500 relative
                  ${index <= currentStep
                    ? 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 scale-110 shadow-lg shadow-orange-500/50'
                    : 'bg-zinc-900 border-2 border-white/10'
                  }
                `}
              >
                {index < currentStep ? (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{step.icon}</span>
                )}
                
                {/* Pulse Effect */}
                {index === currentStep && (
                  <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75" />
                )}
              </div>
              
              <span className={`
                mt-3 text-sm font-semibold transition-colors duration-300
                ${index <= currentStep ? 'text-white' : 'text-gray-500'}
              `}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
        {/* Step 0: Shipping */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 mb-6">Shipping Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                placeholder="123 Main St"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="New York"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="10001"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="USA"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Payment */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 mb-6">Payment Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border-2 border-slate-700 text-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Review */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 mb-6">Review Your Order</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Shipping Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-gray-500">Name:</span> {formData.fullName}</p>
                  <p><span className="text-gray-500">Email:</span> {formData.email}</p>
                  <p><span className="text-gray-500">Address:</span> {formData.address}, {formData.city}, {formData.zipCode}, {formData.country}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Payment Method</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-mono">•••• •••• •••• {formData.cardNumber.slice(-4)}</p>
                    <p className="text-sm text-gray-500">{formData.cardName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`
              px-8 py-3 rounded-xl font-semibold transition-all duration-300
              ${currentStep === 0
                ? 'bg-zinc-900 text-gray-600 cursor-not-allowed border border-white/5'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-105 border border-white/10'
              }
            `}
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-black hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 rounded-xl" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}} />
            <span className="relative z-10">
              {currentStep === steps.length - 1 ? 'Complete Order' : 'Continue'}
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CheckoutFlow;
