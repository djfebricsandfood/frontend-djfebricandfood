import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Mail, User, MapPin, MessageCircle, Send, Building2, Globe, Phone } from 'lucide-react';
import useSendEnquryMutation from './http/useSendEnquryMutation';

const ContactFrom = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      number: '',
      city: '',
      country: '',
      message: ''
    }
  });

  const [submitStatus, setSubmitStatus] = React.useState(null);

  const { mutate } = useSendEnquryMutation()

  const onSubmit = async (data) => {
    try {
      setSubmitStatus('submitting');
     
      
      // Simulate API call
      mutate(data);
      
      setSubmitStatus('success');
      reset();
      
      // Reset status after showing success message
      setTimeout(() => setSubmitStatus(null), 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const countries = [
    { value: 'AF', label: '🇦🇫 Afghanistan' },
    { value: 'AU', label: '🇦🇺 Australia' },
    { value: 'BD', label: '🇧🇩 Bangladesh' },
    { value: 'BR', label: '🇧🇷 Brazil' },
    { value: 'CA', label: '🇨🇦 Canada' },
    { value: 'CN', label: '🇨🇳 China' },
    { value: 'DE', label: '🇩🇪 Germany' },
    { value: 'EG', label: '🇪🇬 Egypt' },
    { value: 'ES', label: '🇪🇸 Spain' },
    { value: 'FR', label: '🇫🇷 France' },
    { value: 'GB', label: '🇬🇧 United Kingdom' },
    { value: 'IN', label: '🇮🇳 India' },
    { value: 'ID', label: '🇮🇩 Indonesia' },
    { value: 'IT', label: '🇮🇹 Italy' },
    { value: 'JP', label: '🇯🇵 Japan' },
    { value: 'KR', label: '🇰🇷 South Korea' },
    { value: 'MX', label: '🇲🇽 Mexico' },
    { value: 'MY', label: '🇲🇾 Malaysia' },
    { value: 'NG', label: '🇳🇬 Nigeria' },
    { value: 'PK', label: '🇵🇰 Pakistan' },
    { value: 'RU', label: '🇷🇺 Russia' },
    { value: 'SA', label: '🇸🇦 Saudi Arabia' },
    { value: 'SG', label: '🇸🇬 Singapore' },
    { value: 'TH', label: '🇹🇭 Thailand' },
    { value: 'TR', label: '🇹🇷 Turkey' },
    { value: 'AE', label: '🇦🇪 United Arab Emirates' },
    { value: 'US', label: '🇺🇸 United States' },
    { value: 'VN', label: '🇻🇳 Vietnam' },
    { value: 'ZA', label: '🇿🇦 South Africa' },
  ];

  return (
    <div className="min-h-screen bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-red-600 rounded-xl shadow-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">DJ Fabrics Food</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with our import/export specialists. Let's expand your business globally together.
          </p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-600/20 border border-green-500/50 rounded-xl p-4 text-green-100 text-center">
            ✅ Thank you for your inquiry! We will contact you within 24 hours.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-600/20 border border-red-500/50 rounded-xl p-4 text-red-100 text-center">
            ❌ Something went wrong. Please try again later.
          </div>
        )}

        {/* Form Container */}
        <div className="bg-slate-700 rounded-3xl shadow-2xl border border-slate-600 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                <input
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: 'Name can only contain letters and spaces'
                    }
                  })}
                  className="w-full pl-12 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <span>⚠️</span> {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full pl-12 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <span>⚠️</span> {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field with International Support */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <Controller
                name="number"
                control={control}
                rules={{
                  required: 'Phone number is required'
                }}
                render={({ field: { onChange, value } }) => (
                  <div className="phone-input-wrapper">
                    <PhoneInput
                      international
                      defaultCountry="US"
                      value={value}
                      onChange={onChange}
                      className="phone-input-dj-theme"
                      inputProps={{
                        className: 'w-full pl-16 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300',
                        placeholder: 'Enter your phone number'
                      }}
                    />
                  </div>
                )}
              />
              {errors.number && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <span>⚠️</span> {errors.number.message}
                </p>
              )}
            </div>

            {/* City and Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* City Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  City *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                  <input
                    type="text"
                    {...register('city', {
                      required: 'City is required',
                      minLength: {
                        value: 2,
                        message: 'City must be at least 2 characters'
                      }
                    })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your city"
                  />
                </div>
                {errors.city && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.city.message}
                  </p>
                )}
              </div>

              {/* Country Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Country *
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                  <select
                    {...register('country', {
                      required: 'Country is required'
                    })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-slate-600 text-white">Select your country</option>
                    {countries.map((country) => (
                      <option key={country.value} value={country.value} className="bg-slate-600 text-white">
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.country && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <span>⚠️</span> {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-6 h-5 w-5 text-red-500 z-10" />
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    },
                    maxLength: {
                      value: 1000,
                      message: 'Message cannot exceed 1000 characters'
                    }
                  })}
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 bg-slate-600 border border-slate-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your import/export requirements, products of interest, or any questions you may have..."
                />
              </div>
              {errors.message && (
                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                  <span>⚠️</span> {errors.message.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                {watch('message')?.length || 0}/1000 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg flex items-center justify-center gap-3 group"
              >
                {isSubmitting || submitStatus === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 cursor-pointer" />
                    Send Inquiry
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              🔒 We respect your privacy and will never share your information. 
              Our team typically responds within 24 hours.
            </p>
          </div>
        </div>

      

        {/* Contact Information */}
        <div className="mt-12 bg-slate-700 rounded-xl p-8 border border-slate-600">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Address</p>
                <p className="text-white font-medium">djfabricsfood@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-600 rounded-full p-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-white font-medium">123 Main Street Springfield, IL 62701 USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-input-dj-theme .PhoneInputCountrySelect {
          background-color: rgb(71 85 105);
          border: 1px solid rgb(100 116 139);
          border-radius: 0.75rem 0 0 0.75rem;
          color: white;
        }
        
        .phone-input-dj-theme .PhoneInputCountrySelect:focus {
          outline: none;
          border-color: rgb(220 38 38);
          box-shadow: 0 0 0 2px rgb(220 38 38);
        }
        
        .phone-input-dj-theme .PhoneInputCountrySelectArrow {
          color: rgb(220 38 38);
        }
        
        .phone-input-dj-theme .PhoneInputInput {
          background-color: rgb(71 85 105);
          border: 1px solid rgb(100 116 139);
          border-radius: 0.75rem;
          color: white;
        }
        
        .phone-input-dj-theme .PhoneInputInput:focus {
          outline: none;
          border-color: rgb(220 38 38);
          box-shadow: 0 0 0 2px rgb(220 38 38);
        }
        
        .phone-input-dj-theme .PhoneInputInput::placeholder {
          color: rgb(156 163 175);
        }
      `}</style>
    </div>
  );
};

export default ContactFrom;