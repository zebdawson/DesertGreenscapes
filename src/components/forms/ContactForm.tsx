'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  zipCode: string;
  message: string;
  preferredContact: 'phone' | 'email';
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with actual form submission endpoint
      console.log('Form submitted:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-accent font-semibold text-charcoal mb-2">
          Full Name *
        </label>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-sunset-orange">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-accent font-semibold text-charcoal mb-2">
            Email Address *
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-sunset-orange">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-accent font-semibold text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[\d\s\-\(\)\.]+$/,
                message: 'Invalid phone number'
              }
            })}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors"
            placeholder="(702) 529-0377"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-sunset-orange">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service & Zip Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-sm font-accent font-semibold text-charcoal mb-2">
            Service Interested In *
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            id="service"
            className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors bg-white"
          >
            <option value="">Select a service...</option>
            <option value="artificial-turf">Artificial Turf Installation</option>
            <option value="pavers">Paver Installation</option>
            <option value="waterfalls">Custom Waterfalls</option>
            <option value="landscape-design">Complete Landscape Design</option>
            <option value="putting-greens">Putting Greens</option>
            <option value="lighting">Landscape Lighting</option>
            <option value="outdoor-kitchens">Outdoor Kitchens</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-sunset-orange">{errors.service.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-accent font-semibold text-charcoal mb-2">
            Zip Code *
          </label>
          <input
            {...register('zipCode', {
              required: 'Zip code is required',
              pattern: {
                value: /^\d{5}$/,
                message: 'Invalid zip code'
              }
            })}
            type="text"
            id="zipCode"
            className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors"
            placeholder="89108"
            maxLength={5}
          />
          {errors.zipCode && (
            <p className="mt-1 text-sm text-sunset-orange">{errors.zipCode.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-accent font-semibold text-charcoal mb-2">
          Project Details *
        </label>
        <textarea
          {...register('message', { required: 'Please provide project details' })}
          id="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border-2 border-cloud focus:border-forest-green focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project, including approximate square footage if known..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-sunset-orange">{errors.message.message}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-accent font-semibold text-charcoal mb-2">
          Preferred Contact Method *
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register('preferredContact', { required: true })}
              type="radio"
              value="phone"
              className="w-4 h-4 text-forest-green focus:ring-forest-green"
            />
            <span className="text-slate">Phone</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              {...register('preferredContact', { required: true })}
              type="radio"
              value="email"
              className="w-4 h-4 text-forest-green focus:ring-forest-green"
            />
            <span className="text-slate">Email</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="cta"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          {!isSubmitting && (
            <>
              <Send className="w-5 h-5" />
              Request Free Estimate
            </>
          )}
        </Button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! We've received your request and will contact you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Sorry, there was an error submitting your request. Please call us at (702) 529-0377.
          </p>
        </div>
      )}
    </form>
  );
}
