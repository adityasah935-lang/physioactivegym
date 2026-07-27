export interface TrainingProgram {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  whatsappMessage: string;
}

export interface FacilityZone {
  id: string;
  category: 'strength' | 'weights' | 'cardio' | 'functional' | 'environment';
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  initial: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDay: string;
  preferredTime: string;
  interest: 'Membership' | 'Personal Training' | 'Strength Training' | 'General Enquiry';
}
