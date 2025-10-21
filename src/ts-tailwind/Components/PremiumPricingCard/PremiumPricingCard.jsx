import { useState } from 'react';

/**
 * PremiumPricingCard - Ultra-Premium Pricing Card
 * Modern, clean design inspired by Stripe, Vercel, and top SaaS platforms
 */
const PremiumPricingCard = ({
  plan = "Professional",
  price = "49",
  period = "month",
  description = "Perfect for growing teams",
  features = [
    { name: "Unlimited projects", included: true },
    { name: "Advanced analytics", included: true },
    { name: "Priority support", included: true },
    { name: "Custom integrations", included: true },
    { name: "Dedicated account manager", included: false }
  ],
  highlighted = false,
  badge = null,
  onSelect,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group w-full flex-1 min-w-[320px] max-w-[400px]
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-20' : 'scale-100 z-10'}
        ${highlighted ? 'md:scale-105' : ''}
        ${className}
      `}
    >
      {/* Premium Glow Effect */}
      {highlighted && (
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[32px] opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-700 animate-pulse" />
      )}
      
      {/* Card Container */}
      <div className={`
        relative rounded-3xl overflow-hidden h-full
        ${highlighted 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-2 border-purple-500/50 shadow-2xl shadow-purple-500/25' 
          : 'bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-xl hover:shadow-2xl'
        }
        transition-all duration-500
      `}>
        {/* Gradient Accent Bar */}
        <div className={`h-2 ${
          highlighted 
            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
            : 'bg-gradient-to-r from-gray-200 to-gray-300'
        }`} />

        {/* Badge */}
        {badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <div className={`px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-2xl backdrop-blur-sm ${
              highlighted
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white border border-white/20'
                : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
            }`}>
              {badge}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 lg:p-10">
          {/* Plan Name */}
          <div className="text-center mb-3 mt-2">
            <h3 className={`text-3xl lg:text-4xl font-black tracking-tight ${
              highlighted 
                ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' 
                : 'text-gray-900'
            }`}>
              {plan}
            </h3>
          </div>

          {/* Description */}
          <p className={`text-center text-sm mb-8 font-medium ${
            highlighted ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {description}
          </p>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-3">
              <span className={`text-3xl font-bold ${highlighted ? 'text-gray-300' : 'text-gray-500'}`}>$</span>
              <span className={`text-7xl font-black tracking-tighter ${
                highlighted
                  ? 'bg-gradient-to-br from-white via-purple-100 to-pink-200 bg-clip-text text-transparent'
                  : 'text-gray-900'
              }`}>
                {price}
              </span>
              <span className={`text-2xl font-bold ${highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                /{period}
              </span>
            </div>
            <p className={`text-sm font-medium ${highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
              Billed annually • ${Math.round(price * 1.2)}/mo monthly
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onSelect}
            className={`
              w-full py-4 px-8 rounded-2xl font-bold text-base
              relative overflow-hidden group/btn
              transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]
              mb-8 shadow-xl hover:shadow-2xl
              ${highlighted 
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-purple-500/50' 
                : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
              }
            `}
          >
            {/* Animated Shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
              {highlighted ? 'Get Started Now' : 'Start Free Trial'}
              <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t-2 ${highlighted ? 'border-gray-700/50' : 'border-gray-200'}`} />
            </div>
            <div className="relative flex justify-center">
              <span className={`px-4 py-1 text-xs font-black tracking-widest ${
                highlighted ? 'bg-slate-900 text-gray-400' : 'bg-white text-gray-500'
              }`}>
                FEATURES
              </span>
            </div>
          </div>

          {/* Features List */}
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li 
                key={index}
                className={`flex items-center gap-4 transition-all duration-300 ${
                  feature.included 
                    ? 'opacity-100' 
                    : 'opacity-40'
                }`}
              >
                <div className={`flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center ${
                  feature.included
                    ? highlighted 
                      ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50' 
                      : 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-md shadow-green-500/30'
                    : highlighted
                      ? 'bg-gray-800/50 border border-gray-700'
                      : 'bg-gray-100 border border-gray-300'
                }`}>
                  {feature.included ? (
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className={`w-4 h-4 ${highlighted ? 'text-gray-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <span className={`text-base font-semibold ${
                  feature.included 
                    ? highlighted ? 'text-gray-100' : 'text-gray-800'
                    : highlighted ? 'text-gray-600 line-through' : 'text-gray-400 line-through'
                }`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Gradient Line */}
        {highlighted && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        )}
        
        {/* Mesh Gradient Overlay */}
        <div 
          className={`absolute inset-0 pointer-events-none ${highlighted ? 'opacity-10' : 'opacity-5'}`}
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3), transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3), transparent 50%)`
          }}
        />
      </div>
    </div>
  );
};

export default PremiumPricingCard;
