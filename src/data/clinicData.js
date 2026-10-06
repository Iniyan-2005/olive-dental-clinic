export const clinicData = {
  name: "OLIVE DENTAL CARE",
  shortName: "Olive Dental Care",
  tagline: "Your Smile, Our Passion",
  description: "Best Dental Clinic in Pudupet, Chennai — Invisalign · Braces · Implants · RCT & Complete Dental Care",
  googleProfile: "https://share.google/uu2iPPeb4r9mLLB2Q",

  contact: {
    phone1: "9363000262",
    phone2: "9600004820",
    displayPhone1: "+91 93630 00262",
    displayPhone2: "+91 96000 04820",
    whatsappNumber: "919363000262",
    address: "36/58, Eagappan St, Pudupet, Komaleeswaranpet, Egmore, Chennai, Tamil Nadu 600002",
    shortAddress: "Pudupet, Egmore, Chennai - 600002",
    landmark: "Near Komaleeswaranpet, Egmore",
    googleMapsUrl: "https://www.google.com/maps/search/OLIVE+DENTAL+CARE,+36%2F58,+Eagappan+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002",
    googleMapsEmbed: "https://www.google.com/maps?q=OLIVE+DENTAL+CARE,+36%2F58,+Eagappan+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002&output=embed",
  },

  timings: {
    morning: "10:00 AM – 01:00 PM",
    evening: "05:30 PM – 09:00 PM",
    schedule: [
      { days: "Monday – Saturday", morning: "10:00 AM – 01:00 PM", evening: "05:30 PM – 09:00 PM", status: "Open" },
      { days: "Sunday", morning: "By Appointment", evening: "By Appointment", status: "Appointment Only" }
    ],
    mondayOffer: "50% OFF on Dental Checkup every Monday!"
  },

  ratings: {
    score: 4.8,
    totalReviews: 120,
    stars: 5,
    platform: "Google Verified Reviews",
  },

  offers: [
    { label: "Dental Checkup", discount: "50% OFF", note: "Every Monday", icon: "tag" },
    { label: "Teeth Cleaning & Whitening", discount: "Starting ₹700/-", note: "Professional grade", icon: "sparkles" },
    { label: "Braces & Aligners", discount: "₹2,000/month", note: "EMI Available", icon: "smile" },
  ],

  services: [
    {
      id: "orthodontics",
      title: "Orthodontics & Invisalign",
      titleTamil: "பல் சீரமைத்தல்",
      badge: "Most Popular",
      badgeColor: "bg-olive-600 text-white",
      duration: "12–18 Months Treatment",
      highlight: "Invisible braces from ₹2,000/month",
      description: "Straighten misaligned teeth with clear Invisalign aligners or traditional metal braces. Our orthodontic experts design a customized treatment plan for your perfect smile.",
      icon: "smile",
      benefits: [
        "Virtually invisible Invisalign aligners",
        "Traditional & ceramic braces",
        "Affordable EMI from ₹2,000/month",
        "Short treatment time with modern techniques"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants",
      titleTamil: "செயற்கை பல் மருத்துவம்",
      badge: "Permanent Solution",
      badgeColor: "bg-blue-600 text-white",
      duration: "Single / Multiple Teeth",
      highlight: "Looks, feels & functions like natural teeth",
      description: "Premium titanium implants that permanently replace missing teeth. Our implantologist ensures seamless integration with your jawbone for lifelong stability.",
      icon: "shield",
      benefits: [
        "Permanent lifetime tooth replacement",
        "100% natural look and feel",
        "Prevents bone loss & facial sagging",
        "No dietary restrictions post-healing"
      ]
    },
    {
      id: "rct",
      title: "Root Canal Therapy (RCT)",
      titleTamil: "வேர் கால் சிகிச்சை",
      badge: "Pain-Free",
      badgeColor: "bg-emerald-600 text-white",
      duration: "Single or Multi-Visit",
      highlight: "Save your natural tooth — painlessly",
      description: "Modern single-visit root canal treatment using rotary endodontics technology. We eliminate infection and preserve your natural tooth with zero pain protocols.",
      icon: "zap",
      benefits: [
        "Completely painless modern techniques",
        "Saves your natural tooth from extraction",
        "Immediate relief from severe toothache",
        "Finished with zirconia / ceramic crown"
      ]
    },
    {
      id: "periodontics",
      title: "Periodontics & Gum Care",
      titleTamil: "ஈறு நோய்களுக்கான பிரிவு",
      badge: "Preventive",
      badgeColor: "bg-teal-600 text-white",
      duration: "20–40 Minutes",
      highlight: "Healthy gums = Healthy smile foundation",
      description: "Comprehensive gum disease diagnosis and treatment including scaling, root planing, and gum surgeries. We protect the foundation of your beautiful smile.",
      icon: "activity",
      benefits: [
        "Deep cleaning & scaling",
        "Gum disease reversal treatment",
        "Advanced laser gum therapy",
        "Bleeding & swelling relief"
      ]
    },
    {
      id: "pedodontics",
      title: "Pediatric Dentistry",
      titleTamil: "குழந்தைகளுக்கான பல் மருத்துவம்",
      badge: "Child Friendly",
      badgeColor: "bg-pink-500 text-white",
      duration: "20–30 Minutes",
      highlight: "Fear-free, gentle dental care for kids",
      description: "Fun and painless dental care for children of all ages. Our kid-friendly team makes every visit enjoyable with preventive treatments and gentle cleanings.",
      icon: "heart",
      benefits: [
        "Zero-fear friendly environment",
        "Fluoride & sealant treatments",
        "Habit counseling (thumb, brushing)",
        "Milk tooth extractions & fillings"
      ]
    },
    {
      id: "prosthodontics",
      title: "Crowns, Bridges & Dentures",
      titleTamil: "செயற்கை பல் மருத்துவம்",
      badge: "Restorative",
      badgeColor: "bg-purple-600 text-white",
      duration: "Custom Crafted",
      highlight: "Restore your complete smile & function",
      description: "High-quality ceramic crowns, fixed dental bridges, and comfortable dentures custom-crafted to match your natural tooth shade and restore full chewing function.",
      icon: "layers",
      benefits: [
        "Natural-looking ceramic crowns",
        "Fixed bridges for missing teeth",
        "Complete & partial dentures",
        "Same-day temporary restorations"
      ]
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry & Whitening",
      titleTamil: "அழகு மருத்துவம்",
      badge: "Smile Makeover",
      badgeColor: "bg-yellow-500 text-slate-800",
      duration: "45–60 Minutes",
      highlight: "Up to 8 shades brighter — from just ₹700",
      description: "Professional teeth whitening, dental veneers, bonding, and complete smile makeovers. Start with a professional cleaning & whitening session from just ₹700.",
      icon: "sparkles",
      benefits: [
        "Up to 8 shades brighter teeth",
        "Removes tea, coffee & tobacco stains",
        "Starting from just ₹700/-",
        "Ceramic veneers for a perfect smile"
      ]
    },
    {
      id: "laser",
      title: "Laser Dentistry",
      titleTamil: "லேசர் பல் மருத்துவம்",
      badge: "Advanced Tech",
      badgeColor: "bg-cyan-600 text-white",
      duration: "30–45 Minutes",
      highlight: "Bloodless, faster-healing procedures",
      description: "Advanced laser-assisted dental treatments for gum reshaping, cavity removal, and tissue surgeries. Faster healing, minimal bleeding, and maximum precision.",
      icon: "zap",
      benefits: [
        "Virtually bloodless procedures",
        "Faster recovery time",
        "Precise tissue management",
        "Reduced post-op discomfort"
      ]
    },
    {
      id: "maxillofacial",
      title: "Oral & Maxillofacial Surgery",
      titleTamil: "முகம் மற்றும் தாடை அறுவை",
      badge: "Specialized",
      badgeColor: "bg-orange-600 text-white",
      duration: "30–60 Minutes",
      highlight: "Wisdom teeth & surgical extractions",
      description: "Safe removal of impacted wisdom teeth, complex surgical extractions, and jaw-related surgical procedures under advanced local anesthesia protocols.",
      icon: "scissors",
      benefits: [
        "Impacted wisdom tooth removal",
        "Minimally invasive techniques",
        "Quick post-surgical recovery",
        "Clear aftercare instructions"
      ]
    }
  ],

  reviews: [
    {
      name: "Ramesh K.",
      rating: 5,
      date: "1 week ago",
      verified: true,
      text: "Got my Invisalign treatment done here. The doctor is very experienced and the staff are friendly. The clinic is very clean and modern. Highly recommend!",
      highlight: true
    },
    {
      name: "Priya S.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      text: "Excellent root canal treatment — completely painless! I was very nervous but the doctor made me feel comfortable throughout. Best dental clinic in Egmore!",
      highlight: false
    },
    {
      name: "Karthik M.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      text: "Got dental implants done. The result is absolutely natural. You can't tell the difference from real teeth. Very transparent pricing, no hidden charges.",
      highlight: false
    },
    {
      name: "Lakshmi V.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      text: "Brought my 6-year-old for a check-up. The doctor was so gentle and patient. My daughter didn't cry at all! Amazing kid-friendly environment.",
      highlight: false
    },
    {
      name: "Santhosh R.",
      rating: 5,
      date: "2 months ago",
      verified: true,
      text: "Teeth whitening done here for just ₹700 and the results are fantastic! The Monday 50% off checkup offer is a great deal. Will definitely come back!",
      highlight: false
    },
    {
      name: "Anitha D.",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      text: "Braces treatment going on for 6 months now. Very satisfied with the progress. The EMI option makes it very affordable. Great doctor, great clinic!",
      highlight: false
    }
  ],

  faqs: [
    {
      q: "What are the clinic timings?",
      a: "We are open Monday to Saturday: 10:00 AM – 1:00 PM (morning) and 5:30 PM – 9:00 PM (evening). Sunday timings are by appointment only. Emergency cases are attended with immediate priority."
    },
    {
      q: "Is Root Canal Treatment (RCT) painful?",
      a: "No! With modern rotary endodontics and advanced local anesthesia, RCT at Olive Dental Care is completely painless — no more uncomfortable than a routine filling. Most patients are surprised by how easy it is."
    },
    {
      q: "How much does Invisalign or braces cost?",
      a: "We offer braces and Invisalign aligners starting from just ₹2,000 per month on EMI. The exact cost depends on the complexity of your case. Contact us for a free initial consultation and treatment plan."
    },
    {
      q: "Is there any special offer available?",
      a: "Yes! Every Monday we offer 50% OFF on dental check-ups. Professional teeth cleaning & whitening starts from just ₹700. Contact us on WhatsApp or call to book your slot."
    },
    {
      q: "How long does a dental implant procedure take?",
      a: "The implant placement itself takes 45–60 minutes. The full process (healing + crown placement) typically takes 3–6 months. We use premium titanium implants for maximum durability and natural appearance."
    },
    {
      q: "Do you treat children?",
      a: "Absolutely! We specialize in pediatric dentistry with a completely child-friendly, fear-free environment. Our doctors are trained to handle children with patience and gentle techniques."
    },
    {
      q: "How do I book an appointment?",
      a: "You can book via the appointment form on this website, call us at +91 93630 00262 or +91 96000 04820, or tap the WhatsApp button for instant slot confirmation."
    }
  ],

  features: [
    { title: "Sterile & Hygienic", description: "Hospital-grade autoclaving and strict infection control for every patient.", icon: "shield-check" },
    { title: "Painless Treatments", description: "Advanced anesthesia and gentle techniques ensure a comfortable experience.", icon: "heart" },
    { title: "Modern Equipment", description: "Digital X-rays, rotary endodontics, and laser-assisted precision treatments.", icon: "cpu" },
    { title: "Transparent Pricing", description: "Clear estimates upfront. No hidden charges or unnecessary procedures.", icon: "badge-check" },
  ],

  stats: [
    { value: "5000+", label: "Happy Patients" },
    { value: "10+", label: "Years of Excellence" },
    { value: "9", label: "Specializations" },
    { value: "4.8★", label: "Google Rating" },
  ]
};
