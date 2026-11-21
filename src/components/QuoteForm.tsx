import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'Business Departemant',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your project requirements';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        department: 'Business Departemant',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f4c03b] bg-[#243344] px-3 py-1 rounded inline-block mb-3">
                INTERESTED IN CONSTRUCTION?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#243344] tracking-tight font-['Poppins']">
                Request a free and fair quote
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed font-['Roboto']">
              Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored. Send us your inquiry and our engineering team will provide an itemized quote within 24 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#f4c03b]/20 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-[#243344]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243344]">Phone Support</h4>
                  <p className="text-xs text-gray-500">+91 1234567890 / +91 1234567890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#f4c03b]/20 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-[#243344]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243344]">Email Address</h4>
                  <p className="text-xs text-gray-500">info@construction-xtra.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#f4c03b]/20 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#243344]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#243344]">Headquarters</h4>
                  <p className="text-xs text-gray-500">742 Evergreen Terrace, Springfield, OR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-[#f8f9fa] p-8 sm:p-10 rounded-sm shadow-lg border border-gray-100">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#f4c03b] text-[#243344] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#243344] font-['Poppins']">
                  Thank You!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  Your quote request has been received. Our project consultant will get back to you shortly with an estimation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#243344] mb-1.5">
                      Your Name <span className="text-[#f4c03b]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-white border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } rounded px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#243344] mb-1.5">
                      Your Email <span className="text-[#f4c03b]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } rounded px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#243344] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#243344] mb-1.5">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]"
                    >
                      <option value="Business Departemant">Business Departemant</option>
                      <option value="Personal Departemant">Personal Departemant</option>
                      <option value="Support Departemant">Support Departemant</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#243344] mb-1.5">
                    Your Message <span className="text-[#f4c03b]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your construction or renovation project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } rounded px-4 py-3 text-sm text-[#243344] focus:outline-none focus:border-[#f4c03b]`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f4c03b] hover:bg-[#e0ac28] text-[#243344] font-bold text-xs uppercase tracking-wider py-4 rounded shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message / Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
