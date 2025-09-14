import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { X, Mail, User, MapPin, MessageCircle, Send, Building2, Globe, Phone } from 'lucide-react';
import useSendEnquryMutation from '../contact/http/useSendEnquryMutation';


const ContactPopup = ({ isOpen, onClose, productName }) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
        setValue
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            number: '',
            city: '',
            country: '',
            message: productName ? `I'm interested in ${productName}. Please provide pricing and availability details.` : ''
        }
    });

    const [value, setValuee] = React.useState("");

    const handleChange = (val) => {
        if (!val) {
            setValuee(val);
            return;
        }
        const digitsOnly = val.replace(/\D/g, "");
     
        if (digitsOnly.length <= 11) {
            setValuee(val);
        }

      


    };


    useEffect(()=>{
         setValue('number', value);
    },[value])

    const [submitStatus, setSubmitStatus] = useState(null);
    const { mutate, isPending } = useSendEnquryMutation();

 
    React.useEffect(() => {
        if (productName) {
            setValue('message', `I'm interested in ${productName}. Please provide pricing and availability details.`);
        }
    }, [productName, setValue]);




    const onSubmit = async (data) => {
        try {
            setSubmitStatus('submitting');
          
            mutate(data);
            setSubmitStatus('success');
            reset();

            setTimeout(() => {
                setSubmitStatus(null);
                onClose();
            }, 3000);

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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-black/60  [&::-webkit-scrollbar]:hidden backdrop-blur-lg flex items-center justify-center z-50 p-4  hide-scrollbar"  >

            <div className="bg-slate-700 rounded-3xl [&::-webkit-scrollbar]:hidden shadow-2xl border border-slate-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-600">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-400 rounded-lg">
                            <Building2 className="h-5 w-5 text-white" />
                        </div>
                        <h2 className="text-xl font-semibold text-white">Request Quote</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-400 transition-colors p-2 hover:bg-slate-600 rounded-lg"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Product Info */}
                    {productName && (
                        <div className="mb-6 bg-slate-600 rounded-xl p-4 border border-slate-500">
                            <p className="text-gray-300">
                                Get a personalized quote for{' '}
                                <span className="font-semibold text-red-400">{productName}</span>
                            </p>
                        </div>
                    )}

                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                        <div className="mb-6 bg-green-600/20 border border-green-500/50 rounded-xl p-4 text-green-100 text-center">
                            ✅ Thank you for your inquiry! We will contact you within 24 hours.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-6 bg-red-400/20 border border-red-400/50 rounded-xl p-4 text-red-100 text-center">
                            ❌ Something went wrong. Please try again later.
                        </div>
                    )}

                    {/* Form */}
                    <div className="space-y-4">
                        {/* Name Field */}
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name *
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400 z-10" />
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
                                    className="w-full pl-10 pr-3 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
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
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400 z-10" />
                                <input
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Please enter a valid email address'
                                        }
                                    })}
                                    className="w-full pl-10 pr-3 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                                    <span>⚠️</span> {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div className="group">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Phone Number *
                            </label>
                            <Controller
                                name="number"
                                control={control}
                                // rules={{
                                //     required: 'Phone number is required'
                                // }}
                                render={({ field: { onChange, value } }) => (
                                    <div className="phone-input-wrapper">
                                        <PhoneInput
                                            international
                                            defaultCountry="US"
                                            value={value}
                                            onChange={handleChange}
                                            className="phone-input-popup-theme"
                                            inputProps={{
                                                className:
                                                    "w-full pl-14 pr-3 py-[10%] bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring- focus:border-transparent transition-all duration-300",
                                                placeholder: "Enter your phone number",
                                            }}
                                        />
                                    </div>
                                )}
                            />
                            {/* {errors.number && (
                                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                                    <span>⚠️</span> {errors.number.message}
                                </p>
                            )} */}
                        </div>

                        {/* City and Country Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* City Field */}
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    City *
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400 z-10" />
                                    <input
                                        type="text"
                                        {...register('city', {
                                            required: 'City is required',
                                            minLength: {
                                                value: 2,
                                                message: 'City must be at least 2 characters'
                                            }
                                        })}
                                        className="w-full pl-10 pr-3 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your city"
                                    />
                                </div>
                                {errors.city && (
                                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
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
                                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-400 z-10" />
                                    <select
                                        {...register('country', {
                                            required: 'Country is required'
                                        })}
                                        className="w-full pl-10 pr-3 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-slate-600 text-white">Select country</option>
                                        {countries.map((country) => (
                                            <option key={country.value} value={country.value} className="bg-slate-600 text-white">
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.country && (
                                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
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
                                <MessageCircle className="absolute left-3 top-4 h-4 w-4 text-red-400 z-10" />
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
                                    rows={4}
                                    className="w-full pl-10 pr-3 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>
                            {errors.message && (
                                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                                    <span>⚠️</span> {errors.message.message}
                                </p>
                            )}
                            <p className="mt-1 text-xs text-gray-400">
                                {watch('message')?.length || 0}/1000 characters
                            </p>
                        </div>

                        {/* Export Services Info */}
                        <div className="bg-slate-600 p-4 rounded-lg border border-slate-500">
                            <h4 className="font-medium text-white mb-2 flex items-center gap-2">
                                <Globe className="h-4 w-4 text-red-400" />
                                Our Export Services Include:
                            </h4>
                            <ul className="text-sm text-gray-300 space-y-1">
                                <li>• Quality assurance and inspection</li>
                                <li>• International shipping and logistics</li>
                                <li>• Documentation and customs clearance</li>
                                <li>• Competitive pricing for bulk orders</li>
                            </ul>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting || submitStatus === 'submitting'}
                            className="w-full bg-gradient-to-r from-red-400 to-red-400 cursor-pointer hover:from-red-400 hover:to-red-800 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg flex items-center justify-center gap-3 group"
                        >
                            {isPending ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Sending Inquiry...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 cursor-pointer" />
                                    Send Inquiry
                                </>
                            )}
                        </button>

                        {/* Contact Information */}
                        <div className="pt-4 border-t border-slate-600">

                            <div className="flex items-center justify-center space-x-6 text-sm">
                                <div className="flex items-center text-gray-300">
                                    <Phone className="h-4 w-4 mr-2 text-red-400" />
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Mail className="h-4 w-4 mr-2 text-red-400" />
                                    <span>djfabricsfood@gmail.com</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 text-center mt-3">
                                🔒 We respect your privacy and will never share your information.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .phone-input-popup-theme .PhoneInputCountrySelect {
          background-color: rgb(71 85 105);
          border: 1px solid rgb(100 116 139);
          border-radius: 0.5rem 0 0 0.5rem;
          color: white;
          padding: 0.75rem;
        }
        
        .phone-input-popup-theme .PhoneInputCountrySelect:focus {
          outline: none;
          border-color: rgb(220 38 38);
          box-shadow: 0 0 0 2px rgb(220 38 38);
        }
        
        .phone-input-popup-theme .PhoneInputCountrySelectArrow {
          color: rgb(220 38 38);
        }
        
        .phone-input-popup-theme .PhoneInputInput {
          background-color: rgb(71 85 105);
          border: 1px solid rgb(100 116 139);
          border-radius: 0.5rem;
          color: white;
        }
        
        .phone-input-popup-theme .PhoneInputInput:focus {
          outline: none;
          border-color: rgb(220 38 38);
          box-shadow: 0 0 0 2px rgb(220 38 38);
        }
        
        .phone-input-popup-theme .PhoneInputInput::placeholder {
          color: rgb(156 163 175);
        }
      `}</style>
        </div>
    );
};

export default ContactPopup;