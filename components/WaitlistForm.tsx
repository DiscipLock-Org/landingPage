'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { RadioGroup } from './ui/RadioGroup';
import { Button } from './ui/Button';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  deviceType: z.enum(['ios', 'android'], {
    required_error: 'Please select your device type',
  }),
  primaryGoal: z.string().optional(),
  primaryGoalOther: z.string().optional(),
  accountabilityInterest: z.string().optional(),
  referralSource: z.string().optional(),
});

type FormData = Omit<z.infer<typeof formSchema>, 'deviceType'> & {
  deviceType: 'ios' | 'android' | undefined;
};

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    deviceType: undefined as 'ios' | 'android' | undefined,
    primaryGoal: '',
    primaryGoalOther: '',
    accountabilityInterest: '',
    referralSource: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage('');
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Validate form data
      const validatedData = formSchema.parse({
        ...formData,
        primaryGoal: formData.primaryGoal === 'other' ? undefined : formData.primaryGoal,
      });

      // Prepare submission data
      // Use formData.primaryGoal (not validatedData.primaryGoal) because validation transforms 'other' to undefined
      const submissionData = {
        name: validatedData.name,
        email: validatedData.email,
        device_type: validatedData.deviceType,
        primary_goal: formData.primaryGoal === 'other' 
          ? `custom:${validatedData.primaryGoalOther || ''}` 
          : validatedData.primaryGoal || null,
        accountability_interest: validatedData.accountabilityInterest || null,
        referral_source: validatedData.referralSource || null,
      };

      // Submit to API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        deviceType: undefined,
        primaryGoal: '',
        primaryGoalOther: '',
        accountabilityInterest: '',
        referralSource: '',
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const goalOptions = [
    { value: 'faith', label: 'Get closer to God / deepen faith' },
    { value: 'doom-scroll', label: 'Stop doom-scrolling / reduce social media' },
    { value: 'discipline', label: 'Become more disciplined / productive' },
    { value: 'other', label: 'Other' },
  ];

  const accountabilityOptions = [
    { value: 'yes', label: 'Yes, I\'m interested' },
    { value: 'no', label: 'No, not interested' },
  ];

  const referralOptions = [
    { value: 'social-media', label: 'Social media' },
    { value: 'friend', label: 'Friend referral' },
    { value: 'search', label: 'Search engine' },
    { value: 'other', label: 'Other' },
  ];

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center border border-gray-700"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mb-6"
        >
          <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-100 mb-4">
          You're on the list! 🎉
        </h3>
        <p className="text-lg text-gray-300 mb-6">
          Thank you for joining the Disciplock waitlist. We've sent a confirmation email to your inbox.
        </p>
        <p className="text-sm text-gray-400">
          We'll notify you as soon as the app is available for {formData.deviceType === 'ios' ? 'iOS' : 'Android'}.
        </p>
        <Button
          onClick={() => setSubmitStatus('idle')}
          variant="outline"
          className="mt-6"
        >
          Submit Another
        </Button>
      </motion.div>
    );
  }

  return (
    <section id="waitlist-form" className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Be Among the First to Transform Your Focus
          </h2>
          <p className="text-xl text-gray-300">
            Join the waitlist and get early access when we launch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700"
        >
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500 rounded-lg flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={errors.name}
              required
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
              required
              placeholder="john@example.com"
            />

            <RadioGroup
              label="Device Type"
              name="deviceType"
              options={[
                { value: 'ios', label: 'iOS (iPhone/iPad)' },
                { value: 'android', label: 'Android' },
              ]}
              value={formData.deviceType}
              onChange={(value) => setFormData({ ...formData, deviceType: value as 'ios' | 'android' })}
              error={errors.deviceType}
              required
            />

            <Select
              label="Primary Goal (Optional)"
              options={[
                { value: '', label: 'Select an option...' },
                ...goalOptions,
              ]}
              value={formData.primaryGoal}
              onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value, primaryGoalOther: '' })}
              error={errors.primaryGoal}
              helperText="What's your main reason for wanting to use Disciplock?"
            />

            {formData.primaryGoal === 'other' && (
              <Input
                label="Please describe your goal"
                type="text"
                value={formData.primaryGoalOther}
                onChange={(e) => setFormData({ ...formData, primaryGoalOther: e.target.value })}
                error={errors.primaryGoalOther}
                placeholder="I want to..."
              />
            )}

            <RadioGroup
              label="Accountability Partner Interest (Optional)"
              name="accountabilityInterest"
              options={accountabilityOptions}
              value={formData.accountabilityInterest}
              onChange={(value) => setFormData({ ...formData, accountabilityInterest: value })}
              helperText="Would you be interested in having an accountability partner who can approve early breaks?"
            />

            <Select
              label="How did you hear about us? (Optional)"
              options={[
                { value: '', label: 'Select an option...' },
                ...referralOptions,
              ]}
              value={formData.referralSource}
              onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
            />

            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                isLoading={isSubmitting}
                className="w-full"
              >
                Join the Waitlist
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              By submitting this form, you agree to receive updates about Disciplock.
              We respect your privacy and will never share your information.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
