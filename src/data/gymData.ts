import { TrainingProgram, FacilityZone, GoogleReview, FAQItem } from '../types';

// Bespoke generated image assets
import heroBgImage from '../assets/images/hero_gym_bg_1785130696058.jpg';
import strengthImage from '../assets/images/strength_program_1785130709050.jpg';
import facilityZoneImage from '../assets/images/facilities_zone_1785130722278.jpg';

export const GYM_DETAILS = {
  name: "PhysioActive Pro Fitness Gym",
  shortName: "PHYSIOACTIVE PRO",
  locationName: "Grant Road West, Tardeo",
  city: "Mumbai, Maharashtra",
  pincode: "400007",
  fullAddress: "Tukaram Javaji Marg, beside Wallace Apartment, opposite Aikya Signature, Grant Road West, Chikalwadi, Tardeo, Mumbai, Maharashtra 400007",
  landmark: "Beside Wallace Apartment, opposite Aikya Signature",
  phone: "70459 21010",
  rawPhone: "917045921010",
  telLink: "tel:7045921010",
  googleRating: "4.0",
  googleReviewsCount: 113,
  googleMapsUrl: "https://maps.app.goo.gl/UuSDevxAf8BqsJsh8?g_st=aw",
  heroBg: heroBgImage,
};

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${GYM_DETAILS.rawPhone}?text=${encodeURIComponent("Hi PhysioActive Pro Fitness Gym, I'd like to know more about your membership plans and training programs. Please share the details.")}`,
  personalTraining: `https://wa.me/${GYM_DETAILS.rawPhone}?text=${encodeURIComponent("Hi PhysioActive Pro Fitness Gym, I am interested in personal training and would like to know more about the available options.")}`,
  membership: `https://wa.me/${GYM_DETAILS.rawPhone}?text=${encodeURIComponent("Hi PhysioActive Pro Fitness Gym, I want to enquire about joining the gym and active membership plans.")}`,
  buildAppointmentUrl: (data: { fullName: string; phone: string; preferredDay: string; preferredTime: string; interest: string }) => {
    const msg = `Hi PhysioActive Pro Fitness Gym,\n\nI would like to enquire about an appointment.\n\nName: ${data.fullName}\nPhone: ${data.phone}\nPreferred Day: ${data.preferredDay}\nPreferred Time: ${data.preferredTime}\nInterest: ${data.interest}\n\nPlease let me know the available options.`;
    return `https://wa.me/${GYM_DETAILS.rawPhone}?text=${encodeURIComponent(msg)}`;
  }
};

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'strength',
    name: 'Strength Training',
    subtitle: 'Foundation & Progressive Overload',
    description: 'Build core power, lean muscle tissue, and joint stability with structured compound lifting and free weight progressions.',
    highlights: ['Barbell & Dumbbell Racks', 'Compound Lift Form Guidance', 'Progressive Strength Protocols'],
    image: strengthImage,
    whatsappMessage: "Hi PhysioActive Pro Fitness Gym, I'd like to enquire about your Strength Training program."
  },
  {
    id: 'personal',
    name: 'Personal Training',
    subtitle: '1-on-1 Tailored Coaching',
    description: 'Direct 1-on-1 guidance tailored to your specific physique goals, movement biomechanics, and lifestyle rhythm.',
    highlights: ['Custom Workout Plans', 'Form & Technique Correction', 'Goal Accountability'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    whatsappMessage: "Hi PhysioActive Pro Fitness Gym, I am interested in Personal Training coaching."
  },
  {
    id: 'weight',
    name: 'Weight Training',
    subtitle: 'Hypertrophy & Resistance Work',
    description: 'Targeted resistance training with free weights and mechanical strength equipment to sculpt and tone.',
    highlights: ['Isolation & Compound Equipment', 'Muscle Mass Development', 'Strength Endurances'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    whatsappMessage: "Hi PhysioActive Pro Fitness Gym, I'd like to know more about Weight Training at the gym."
  },
  {
    id: 'cardio',
    name: 'Cardio Training',
    subtitle: 'Endurance & Fat Loss',
    description: 'High-energy cardiovascular workouts designed to elevate metabolic rate, increase stamina, and optimize heart health.',
    highlights: ['Treadmills & Endurance Machines', 'Stamina & Interval Conditioning', 'Heart Rate Management'],
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
    whatsappMessage: "Hi PhysioActive Pro Fitness Gym, I want to enquire about Cardio Training facilities."
  }
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'zone-1',
    category: 'strength',
    title: 'Strength Training Zone',
    description: 'Spacious heavy dumbbell station, power racks, adjustable benches, and olympic barbells for compound movements.',
    image: facilityZoneImage,
    features: ['Heavy Dumbbell Racks', 'Olympic Barbells', 'Squat & Press Stations']
  },
  {
    id: 'zone-2',
    category: 'weights',
    title: 'Free Weight & Plate Arena',
    description: 'Dedicated floor space with high-density rubber mats for clean lifts, deadlifts, and resistance exercises.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    features: ['Impact-Absorbing Flooring', 'Adjustable Weight Plates', 'Ergonomic Benches']
  },
  {
    id: 'zone-3',
    category: 'cardio',
    title: 'Cardio & Conditioning Floor',
    description: 'High-performance endurance equipment to boost stamina and calorie burn in an air-conditioned setting.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    features: ['Motorized Treadmills', 'Stationary Bikes', 'Stamina Stations']
  },
  {
    id: 'zone-4',
    category: 'functional',
    title: 'Functional Movement Space',
    description: 'Versatile area for agility, stretching, mobility work, core conditioning, and bodyweight exercises.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: ['Kettlebells & Resistance Bands', 'Mobility & Foam Rollers', 'Bodyweight Rig Area']
  },
  {
    id: 'zone-5',
    category: 'environment',
    title: 'Focused Athletic Environment',
    description: 'Clean, well-ventilated, high-energy environment with dedicated lighting and ambient motivating sound.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    features: ['Fully Air-Conditioned', 'Clean & Hygienic Space', 'Focused Training Vibe']
  }
];

export const GOOGLE_REVIEWS_SUMMARY: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Rajesh Sharma',
    rating: 5,
    timeAgo: 'Local Guide in Grant Road',
    comment: 'Great fitness atmosphere and well-maintained equipment in Grant Road West. Friendly environment to work out consistently.',
    initial: 'R'
  },
  {
    id: 'rev-2',
    author: 'Aniket Kulkarni',
    rating: 4,
    timeAgo: 'Tardeo Resident',
    comment: 'Good spacious location opposite Aikya Signature. Helpful guidance and solid strength training setup.',
    initial: 'A'
  },
  {
    id: 'rev-3',
    author: 'Pooja Mehta',
    rating: 5,
    timeAgo: 'Regular Member',
    comment: 'Clean environment and convenient timing. PhysioActive Pro has been my go-to gym in Tardeo.',
    initial: 'P'
  },
  {
    id: 'rev-4',
    author: 'Siddharth V.',
    rating: 4,
    timeAgo: 'Member',
    comment: 'Great energy and approachable coaches. Perfect for anyone looking for focused strength and conditioning in South Mumbai.',
    initial: 'S'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is PhysioActive Pro Fitness Gym located in Mumbai?',
    answer: 'We are conveniently located at Tukaram Javaji Marg, beside Wallace Apartment, opposite Aikya Signature, Grant Road West, Chikalwadi, Tardeo, Mumbai, Maharashtra 400007.'
  },
  {
    id: 'faq-2',
    question: 'How can I enquire about membership plans and fees?',
    answer: 'You can enquire directly via WhatsApp at 70459 21010 or click any "Join The Gym" or "Enquire Now" button on this website. Our team will share current membership packages immediately.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer Personal Training services?',
    answer: 'Yes! We offer tailored 1-on-1 personal training guidance focused on strength, weight loss, muscle gain, and custom fitness objectives. You can enquire about personal coaching sessions via WhatsApp.'
  },
  {
    id: 'faq-4',
    question: 'What training programs and equipment are available?',
    answer: 'Our facility includes Strength Training, Weight Training, Cardio Conditioning, and Functional Fitness zones equipped with barbells, dumbbells, resistance machines, treadmills, and floor space.'
  },
  {
    id: 'faq-5',
    question: 'Can I request a trial session or visit the facility before joining?',
    answer: 'Absolutely! You can submit the Appointment Request form on our website or text us on WhatsApp to schedule a walk-through of the gym floor.'
  },
  {
    id: 'faq-6',
    question: 'What are the gym contact details and phone number?',
    answer: 'You can call us directly at 70459 21010 or message us on WhatsApp for fast responses to all membership and timing enquiries.'
  }
];
