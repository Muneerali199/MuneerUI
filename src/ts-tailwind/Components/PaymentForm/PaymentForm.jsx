import { useState } from 'react';

/**
 * PaymentForm - Premium Payment Form Component
 * Modern payment form with 3D card preview and dark theme
 */
const PaymentForm = ({
  onSubmit,
  className = ""
}) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });
  
  const [focused, setFocused] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(' ') : value;
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    let formattedValue = value;
    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/[^0-9]/gi, '').substring(0, 3);
    }
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : formattedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const getCardType = (number) => {
    const firstDigit = number.charAt(0);
    if (firstDigit === '4') return 'visa';
    if (firstDigit === '5') return 'mastercard';
    if (firstDigit === '3') return 'amex';
    return 'default';
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card Preview */}
        <div className="order-1 md:order-2">
          <div className="sticky top-8">
            <div className="perspective-1000">
              <div
                className={`relative w-full aspect-[1.586/1] transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Card Front */}
                <div className={`absolute inset-0 backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6 shadow-2xl overflow-hidden">
                    {/* Card Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                    </div>

                    {/* Chip */}
                    <div className="relative w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md mb-8">
                      <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm" />
                    </div>

                    {/* Card Number */}
                    <div className="relative mb-6">
                      <div className="text-white text-xl md:text-2xl font-mono tracking-wider">
                        {formData.cardNumber || '•••• •••• •••• ••••'}
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="relative flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-xs mb-1">Card Holder</div>
                        <div className="text-white font-semibold uppercase">
                          {formData.cardName || 'YOUR NAME'}
                        </div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">Expires</div>
                        <div className="text-white font-semibold">
                          {formData.expiryDate || 'MM/YY'}
                        </div>
                      </div>
                    </div>

                    {/* Card Logo */}
                    <div className="absolute top-6 right-6 text-white text-2xl font-bold">
                      {getCardType(formData.cardNumber).toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div className={`absolute inset-0 backface-hidden rotate-y-180 ${isFlipped ? 'visible' : 'invisible'}`}>
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-zinc-900 to-black shadow-2xl overflow-hidden">
                    {/* Magnetic Strip */}
                    <div className="w-full h-12 bg-black mt-6" />
                    
                    {/* CVV */}
                    <div className="px-6 mt-6">
                      <div className="bg-white h-10 rounded flex items-center justify-end px-4">
                        <span className="text-black font-mono">
                          {formData.cvv || '•••'}
                        </span>
                      </div>
                    </div>

                    {/* Pattern */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                      <div className="w-full h-full bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="order-2 md:order-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 mb-2">Payment Details</h2>
              <p className="text-gray-400 text-sm">Complete your purchase securely</p>
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('cardNumber')}
                  onBlur={() => setFocused('')}
                  maxLength="19"
                  placeholder="1234 5678 9012 3456"
                  className={`
                    w-full px-4 py-3 rounded-xl bg-black/50 border-2 text-white
                    placeholder-gray-500 transition-all duration-300 font-semibold
                    ${focused === 'cardNumber' 
                      ? 'border-orange-500 ring-4 ring-orange-500/20 bg-black/70' 
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                onFocus={() => setFocused('cardName')}
                onBlur={() => setFocused('')}
                placeholder="John Doe"
                className={`
                  w-full px-4 py-3 rounded-xl bg-black/50 border-2 text-white
                  placeholder-gray-500 transition-all duration-300 font-semibold
                  ${focused === 'cardName' 
                    ? 'border-orange-500 ring-4 ring-orange-500/20 bg-black/70' 
                    : 'border-white/10 hover:border-white/20'
                  }
                `}
              />
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  onFocus={() => setFocused('expiryDate')}
                  onBlur={() => setFocused('')}
                  maxLength="5"
                  placeholder="MM/YY"
                  className={`
                    w-full px-4 py-3 rounded-xl bg-black/50 border-2 text-white
                    placeholder-gray-500 transition-all duration-300 font-semibold
                    ${focused === 'expiryDate' 
                      ? 'border-orange-500 ring-4 ring-orange-500/20 bg-black/70' 
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  onFocus={() => {
                    setFocused('cvv');
                    setIsFlipped(true);
                  }}
                  onBlur={() => {
                    setFocused('');
                    setIsFlipped(false);
                  }}
                  maxLength="3"
                  placeholder="123"
                  className={`
                    w-full px-4 py-3 rounded-xl bg-black/50 border-2 text-white
                    placeholder-gray-500 transition-all duration-300 font-semibold
                    ${focused === 'cvv' 
                      ? 'border-orange-500 ring-4 ring-orange-500/20 bg-black/70' 
                      : 'border-white/10 hover:border-white/20'
                    }
                  `}
                />
              </div>
            </div>

            {/* Save Card Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="saveCard"
                id="saveCard"
                checked={formData.saveCard}
                onChange={handleInputChange}
                className="w-5 h-5 rounded border-white/10 bg-black/50 text-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
              />
              <label htmlFor="saveCard" className="ml-3 text-gray-300">
                Save card for future purchases
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-black text-lg relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="absolute inset-0 rounded-xl" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}} />
              <span className="relative z-10">Complete Payment</span>
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secured by 256-bit SSL encryption</span>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default PaymentForm;
