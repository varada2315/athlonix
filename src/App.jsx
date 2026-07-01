import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  Star, 
  User, 
  Check, 
  Activity,
  Award,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Mail,
  Phone,
  Target,
  Compass,
  Flame,
  Heart,
  Sparkles,
  Users,
  Smartphone
} from 'lucide-react';

import heroBgVideo from './assets/hero_bg.mp4';

const InstagramIcon = ({ size = 24, style = {}, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={style}
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Custom Count Up Component for Stats
const CountUp = ({ to, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / 50); // Increment step
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Extracted 14 slide pairs for the 3D Transformations Carousel
const slidesData = [
  {
    id: 1,
    before: "https://framerusercontent.com/images/BMreqSJ9JHHir7fD02dDXt96IXE.jpg",
    after: "https://framerusercontent.com/images/RuCOY9Rbluxh8NAp5zuSi29BrnU.jpg"
  },
  {
    id: 2,
    before: "https://framerusercontent.com/images/vp11i8SzKisvagw3dv6noPYgVEg.jpg",
    after: "https://framerusercontent.com/images/qVPaehR7DNOPaCG4DnJCJz6787A.jpg"
  },
  {
    id: 3,
    before: "https://framerusercontent.com/images/XrjIOS1KYxTRYxmbOA5PwNiAQ.jpg",
    after: "https://framerusercontent.com/images/YfFxrr7aINPPozjSO7w9AWSyqY.jpg"
  },
  {
    id: 4,
    before: "https://framerusercontent.com/images/Swsb6nyDPnJj3LqvGmpMbVNqS8.jpg",
    after: "https://framerusercontent.com/images/GXM4Xu2O8OZIq3yjFh8DUXMNQE.jpg"
  },
  {
    id: 5,
    before: "https://framerusercontent.com/images/GMyPVcc8hqoMucVhUqm9zZwPB7g.jpg",
    after: "https://framerusercontent.com/images/lKzHIf5Y2viEXwEFVPLYarc4.jpg"
  },
  {
    id: 6,
    before: "https://framerusercontent.com/images/dvSoTC67t7AxmYHcj3DgM5nPE.jpg",
    after: "https://framerusercontent.com/images/hQR6bstHtKP6FkeJ6hXyC2ZWJ10.jpg"
  },
  {
    id: 7,
    before: "https://framerusercontent.com/images/DVpJXUyayIaSqYvnsaPKAEY27Oc.jpg",
    after: "https://framerusercontent.com/images/1Z0E9HM8uMBceOD3euOrZYlgoQY.jpg"
  },
  {
    id: 8,
    before: "https://framerusercontent.com/images/eYYsgs8SivyYRfCWuPJqybnZRgI.jpg",
    after: "https://framerusercontent.com/images/aRICRKjkxGZdCiJYOchl3gBgW4.jpg"
  },
  {
    id: 9,
    before: "https://framerusercontent.com/images/rEZndtYVHk2oksRCCL8gI0xgiTQ.jpg",
    after: "https://framerusercontent.com/images/1iUo4Ja7VNyYVcIFX11YOrPdSQ.jpg"
  },
  {
    id: 10,
    before: "https://framerusercontent.com/images/DzmSgTMpADw0fhHfoTz7oPws.jpg",
    after: "https://framerusercontent.com/images/qgbE21OPFqkBBHkzziemSBWOf2I.jpg"
  },
  {
    id: 11,
    before: "https://framerusercontent.com/images/EkPwpAMOkIKjSlpTcf8Y35hlFgo.jpg",
    after: "https://framerusercontent.com/images/9UtOwzjZ64tngt1jhiwp0AKwmc.jpg"
  },
  {
    id: 12,
    before: "https://framerusercontent.com/images/jylHzej5HHM9MycAteyqT3yl3E.jpg",
    after: "https://framerusercontent.com/images/cE1NKAJgjvNIJBmhX8NxV3HQRY.jpg"
  },
  {
    id: 13,
    before: "https://framerusercontent.com/images/JecgN9INqcDSGdEkv9TjteGco.jpg",
    after: "https://framerusercontent.com/images/wv9o8m6rmPuJqvMnEkFg9Nxy5nY.jpg"
  },
  {
    id: 14,
    before: "https://framerusercontent.com/images/qi60XxMlJoWbhJeR0u2yzFnjswg.jpg",
    after: "https://framerusercontent.com/images/OTxzVqgOecJZVtvbkUG4fyM8fMY.jpg"
  }
];

// Spring Animation Presets to match Framer scroll reveals
const springHeavy = {
  type: "spring",
  stiffness: 800,
  damping: 60,
  mass: 1
};

const springScroll = {
  type: "spring",
  stiffness: 500,
  damping: 60,
  mass: 1
};

const FadeUpReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ ...springScroll, delay }}
  >
    {children}
  </motion.div>
);


// Canvas-based Premium Particle Background component
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const colors = ['rgba(255, 255, 255, 0.08)', 'rgba(200, 200, 200, 0.08)', 'rgba(150, 150, 150, 0.05)'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

// 3D Carousel Cylinder Wheel rendering 7 slide pairs
const Carousel3D = ({ isGrayscale = false }) => {
  const containerAngles = [90, 120, 150, 180, 0, 30, 60];
  
  return (
    <div className={`carousel-3d-wheel ${isGrayscale ? 'grayscale' : ''}`}>
      {containerAngles.map((angle, idx) => {
        // Front slide is idx + 1 (1 to 7)
        // Back slide is idx + 8 (8 to 14)
        const frontSlide = slidesData[idx];
        const backSlide = slidesData[idx + 7];
        
        return (
          <div 
            key={idx}
            className="carousel-3d-container"
            style={{ transform: `rotateY(${angle}deg)` }}
          >
            {/* Back Card (Before side) - placed on the left side of width */}
            <div 
              className="carousel-card card-back"
              style={{ transform: `rotateY(90deg)` }}
            >
              <img src={isGrayscale ? backSlide.before : backSlide.after} alt="Before Transformation" />
            </div>
            
            {/* Front Card (After side) - placed on the right side of width */}
            <div 
              className="carousel-card card-front"
              style={{ transform: `rotateY(-90deg)` }}
            >
              <img src={isGrayscale ? frontSlide.before : frontSlide.after} alt="After Transformation" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Infinite Scrolling Marquee/Ticker Ribbon component
const Marquee = ({ text }) => {
  const items = Array(8).fill(text);
  
  return (
    <div className="instagram-ticker">
      <div className="ticker-track">
        <div className="ticker-half">
          {items.map((item, idx) => (
            <span key={idx} className="ticker-item">
              {item} <span className="ticker-dot">&bull;</span>
            </span>
          ))}
        </div>
        <div className="ticker-half">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="ticker-item">
              {item} <span className="ticker-dot">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const getBenefitIcon = (index) => {
  switch (index) {
    case 0: return <Flame size={24} />;
    case 1: return <Award size={24} />;
    case 2: return <Heart size={24} />;
    case 3: return <Sparkles size={24} />;
    case 4: return <Users size={24} />;
    case 5: return <Smartphone size={24} />;
    default: return <Award size={24} />;
  }
};


function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const servicesRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // BMI Calculator States
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiAge, setBmiAge] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiName, setBmiName] = useState('');
  const [bmiPhone, setBmiPhone] = useState('');

  const calculateBmi = () => {
    const h = parseFloat(bmiHeight);
    const w = parseFloat(bmiWeight);
    const age = parseInt(bmiAge);

    if (!h || h < 80 || h > 250) {
      alert('Please enter valid height in cm (80-250).');
      return;
    }
    if (!w || w < 20 || w > 300) {
      alert('Please enter valid weight in kg (20-300).');
      return;
    }
    if (!age || age < 10 || age > 100) {
      alert('Please enter valid age (10-100).');
      return;
    }

    const bmi = w / Math.pow(h / 100, 2);
    let category = { text: 'Normal', color: '#22c55e' };
    if (bmi < 18.5) category = { text: 'Underweight', color: '#f59e0b' };
    else if (bmi < 25) category = { text: 'Normal', color: '#22c55e' };
    else if (bmi < 30) category = { text: 'Overweight', color: '#f97316' };
    else category = { text: 'Obese', color: '#ef4444' };

    setBmiResult({
      score: Math.round(bmi),
      current: bmi.toFixed(1),
      category: category
    });
  };

  const handleWhatsappConsult = (e) => {
    e.preventDefault();
    if (!bmiResult) return;

    const name = bmiName.trim();
    const phone = bmiPhone.replace(/\D/g, '');

    if (name.length < 2) {
      alert('Please enter your full name.');
      return;
    }
    if (phone.length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    const message = [
      'Hi, I want a free consultation.',
      'Name: ' + name,
      'Phone: ' + phone,
      'BMI: ' + bmiResult.current + ' (' + bmiResult.category.text + ')',
      'Height: ' + bmiHeight + ' cm',
      'Weight: ' + bmiWeight + ' kg',
      'Age: ' + bmiAge
    ].join('\n');

    const yourWhatsappNumber = '918073707231';
    const url = 'https://wa.me/' + yourWhatsappNumber + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const calculateRange = () => {
      if (cardsContainerRef.current) {
        const containerWidth = cardsContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(Math.max(0, containerWidth - viewportWidth));
      }
    };

    calculateRange();
    
    window.addEventListener('load', calculateRange);
    window.addEventListener('resize', calculateRange);
    
    const timer = setTimeout(calculateRange, 500);

    return () => {
      window.removeEventListener('load', calculateRange);
      window.removeEventListener('resize', calculateRange);
      clearTimeout(timer);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -scrollRange]);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const trainerRef = useRef(null);
  const { scrollYProgress: trainerScrollY } = useScroll({
    target: trainerRef,
    offset: ["start end", "end start"]
  });
  const trainerImageY = useTransform(trainerScrollY, [0, 1], [-60, 60]);
  const trainerSlideX = useTransform(trainerScrollY, [0.05, 0.35], [-100, 0]);
  const trainerOpacity = useTransform(trainerScrollY, [0.05, 0.35], [0, 1]);
  const trainerFadeY = useTransform(trainerScrollY, [0.1, 0.4], [50, 0]);
  const trainerFadeOpacity = useTransform(trainerScrollY, [0.1, 0.4], [0, 1]);
  const trainerStatsY = useTransform(trainerScrollY, [0.15, 0.45], [40, 0]);
  const trainerStatsOpacity = useTransform(trainerScrollY, [0.15, 0.45], [0, 1]);

  // FAQ Data
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open Monday to Saturday from 5:30 AM to 10 PM, and on Sunday from 8:00 AM to 8 PM."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes. Memberships can be frozen at a charge of ₹500 per month. The minimum freeze duration is one month and the maximum is twelve months. Access to the gym is not permitted during the freeze period."
    },
    {
      question: "Will my membership be extended if I freeze it?",
      answer: "Yes, your membership validity will be extended equivalent to the duration of the freeze."
    },
    {
      question: "Is installment payment available for memberships?",
      answer: "No. Full payment is required to activate any membership."
    },
    {
      question: "Are memberships or personal training sessions refundable?",
      answer: "All memberships and personal training sessions are strictly non-refundable and non-transferable."
    },
    {
      question: "Can I bring my own personal trainer?",
      answer: "No. Only trainers employed by the gym are authorized to conduct training sessions within the facility."
    },
    {
      question: "Is filming or photography allowed?",
      answer: "Yes, we strongly support filming and photography within the facility. We encourage members to capture their fitness journey and it is highly recommended to tag us."
    },
    {
      question: "What are the general gym guidelines?",
      answer: "General gym guidelines include: Carry and use a separate pair of indoor gym shoes, wear appropriate athletic attire, maintain personal hygiene, no smoking, alcohol, or chewing tobacco, no foul or abusive language. The possession, use, or sale of illegal substances will result in immediate termination of membership."
    }
  ];

  // Services Data
  const services = [
    {
      title: "Transformation Programs",
      desc: "Elevate your fitness with our diverse and engaging training options.",
      level: "All Levels",
      duration: "90 Days+",
      tags: ["90-Day Transformation", "Fat Loss Accelerator", "Strength & Muscle Building"],
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
    },
    {
      title: "Advanced Physiotherapy",
      desc: "Posture correction, pain management, and medical recovery support.",
      level: "All Levels",
      duration: "Custom",
      tags: ["Injury Assessment", "Post-Injury Rehab", "Post-Surgery Rehab", "Posture Correction"],
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    },
    {
      title: "Sports Rehabilitation",
      desc: "Elite athletic performance rebuild protocols and return-to-sport programs.",
      level: "Intermediate – Elite",
      duration: "Custom",
      tags: ["ACL Return-to-Play", "Athletic Rebuild", "Running Injury Recovery", "Overhead Athlete Rehab"],
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "HYROX Performance",
      desc: "Official conditioning programs focused on foundation and pro performance metrics.",
      level: "Intermediate – Advanced",
      duration: "120 Days",
      tags: ["HYROX Foundation", "HYROX Pro 120-Day Performance"],
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }
  ];

  // Process Steps Data
  const steps = [
    {
      step: "STEP 1.",
      title: "Assessment & Baseline",
      desc: "Review your training history, calculate your BMI, and identify body composition goals.",
      img: "https://framerusercontent.com/images/mF7PvV97cfQPmFRSSHB3V45mzEM.jpg"
    },
    {
      step: "STEP 2.",
      title: "Program Selection",
      desc: "Pick from Transformation, Advanced Physiotherapy, Sports Rehab, or HYROX tracks.",
      img: "https://framerusercontent.com/images/ePDhTaHkj2vANjIxabafTqp1g.jpg"
    },
    {
      step: "STEP 3.",
      title: "Execution & Coaching",
      desc: "Train in our dedicated zones under the guidance of certified Athlonixx fitness coaches.",
      img: "https://framerusercontent.com/images/JaGn0oJEal1ZFJMbLX7xhOMeH8.jpg"
    },
    {
      step: "STEP 4.",
      title: "Progress & Nutrition",
      desc: "Track assessments, refine technique, and receive expert dietary plans for lasting results.",
      img: "https://framerusercontent.com/images/pEC2cQrniQQtPK602fqg81CBrg.jpg"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Sullivan Mitchell",
      role: "Marketing Director",
      rating: 5,
      avatar: "https://framerusercontent.com/images/Ah6vtDjqQV4pmxuHjEOGW2rX0.jpg?width=458&height=458",
      text: "Engaging with this team was effortless from start to end. Their proficiency and meticulous approach greatly enhanced our project. I couldn’t be happier with the final product!"
    },
    {
      name: "James Carter",
      role: "Chief Technical Officer",
      rating: 5,
      avatar: "https://framerusercontent.com/images/xD7WNakfWri7uxndqa2vRJfgiLA.jpg?width=400&height=400",
      text: "Working with this team was smooth and efficient at every stage. Their skills and commitment to quality had a major impact on our project. I am thrilled with the final results!"
    },
    {
      name: "Laura Evans",
      role: "Head of Operations",
      rating: 5,
      avatar: "https://framerusercontent.com/images/oGgAZMF0jq3eb456pPCbrdFzqM.jpg?width=400&height=400",
      text: "Partnering with this team was a breeze from beginning to end. Their knowledge and focus on detail significantly benefited our project. I am extremely happy with the outcome!"
    },
    {
      name: "Jody Roberts",
      role: "Chief Financial Officer",
      rating: 5,
      avatar: "https://framerusercontent.com/images/5njyZNvahmgwvoTsaHLfZ4B8qd8.jpg?width=400&height=400",
      text: "From the first meeting, it was clear we were in good hands. They took our vision and turned it into something even better than we had imagined. Highly recommend!"
    },
    {
      name: "Emil Foster",
      role: "Creative Director",
      rating: 5,
      avatar: "https://framerusercontent.com/images/kWNeVz0ozutdRM74uJ35ZzLFLo.jpg?width=400&height=400",
      text: "Exceptional service and great communication throughout the entire process. They went above and beyond to ensure our project was a complete success."
    },
    {
      name: "Daniella Clarke",
      role: "Senior Manager",
      rating: 5,
      avatar: "https://framerusercontent.com/images/846OQMwPtH71wBgvMsKFYGU69WU.jpg?width=400&height=400",
      text: "This team truly understands the meaning of partnership. They brought fresh ideas to the table and delivered a final product that exceeded expectations."
    }
  ];

  // Membership Benefits Data
  const benefits = [
    {
      emoji: "🔓",
      title: "Access to All Workout Zones",
      desc: "Monday to Saturday: 5:30 AM – 10:00 PM | Sunday: 8:00 AM – 8:00 PM"
    },
    {
      emoji: "🧖‍♀️",
      title: "Sport-Level Performance Assessment",
      desc: "Complimentary sessions with certified trainers to kickstart your journey."
    },
    {
      emoji: "👥",
      title: "Dietary Guidance & Nutrition",
      desc: "Expert dietary guidance to complement your fitness routine."
    },
    {
      emoji: "🧖‍♀️",
      title: "Access to Basic Recovery Equipment",
      desc: "Access to sauna, steam room, and massage therapy services."
    },
    {
      emoji: "👨‍💼",
      title: "Dedicated General Trainer Support",
      desc: "Complimentary support from floor coaches to ensure proper exercise form."
    },
    {
      emoji: "📱",
      title: "Member Access to Athlonixx Mobile App",
      desc: "Track workouts, book classes, and monitor progress on the go."
    }
  ];

  // Event Calendar Data
  const events = [
    {
      date: "1",
      title: "New Year's Day WOD",
      desc: "Closed Afternoon",
      time: "9:00 AM"
    },
    {
      date: "17",
      title: "Hyrox Ski Seminar",
      desc: "Ski Erg mechanics and profiling",
      time: "9:45 AM"
    },
    {
      date: "24",
      title: "Hyrox Pro Half SIM",
      desc: "Simulated performance run",
      time: "8:30 AM"
    },
    {
      date: "31",
      title: "Free Community WOD",
      desc: "Open house workout for all",
      time: "8:30 AM"
    }
  ];

  // Training Areas Data
  const trainingAreas = [
    {
      title: "Cardio & Powerlifting Zone",
      desc: "Treadmills, spin bikes, Olympic platforms",
      img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba"
    },
    {
      title: "Skydeck Training",
      desc: "Open-air workouts with city views",
      img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
    },
    {
      title: "Group Classes Studio",
      desc: "Yoga, dance, Zumba & HIIT",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
      title: "Physiotherapy & Rehab Zone",
      desc: "Expert-led recovery support",
      img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e"
    },
    {
      title: "Functional Training Zone",
      desc: "Kettlebells, battle ropes & agility drills",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
    },
    {
      title: "CrossFit Arena",
      desc: "High-intensity strength & conditioning",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
    },
    {
      title: "Personal Training Zone",
      desc: "1-on-1 expert coaching sessions",
      img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2"
    }
  ];

  // Team Spotlight Data
  const teamSpotlight = [
    {
      name: "Tony Fred",
      role: "Chief Executive Officer",
      img: "https://framerusercontent.com/images/TpZ2CrtmA37AVPZojolRnAczbQ8.jpg"
    },
    {
      name: "Mich Stark",
      role: "Chief Technical Manager",
      img: "https://framerusercontent.com/images/GIMRdH8dZSD3uPWu3xwSWnyRJY.jpg"
    },
    {
      name: "Aline Turner",
      role: "Chief Financial Officer",
      img: "https://framerusercontent.com/images/MlufJeWUmaLTDOPjyglgkEbHdQ.jpg"
    },
    {
      name: "Iris Joe",
      role: "Chief Operational Officer",
      img: "https://framerusercontent.com/images/PQ0CdHcvW9qzllrrn2lyBWphgQ.jpg"
    }
  ];

  // Instagram Images
  const instagramPhotos = [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    "https://images.unsplash.com/photo-1549060279-7e168fcee0c2"
  ];

  // ESC key listener to close video lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Scroll Spy / Active link updater
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = ['home', 'about', 'services', 'bmi', 'benefits', 'areas', 'testimonials', 'events', 'faq', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Navbar Header */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Athlonixx Fit Club" style={{ height: '64px', width: 'auto', display: 'block' }} />
          </a>

          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Programs</a></li>
            <li><a href="#bmi" onClick={(e) => { e.preventDefault(); scrollTo('bmi'); }} className={`nav-link ${activeSection === 'bmi' ? 'active' : ''}`}>BMI Calculator</a></li>
            <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollTo('benefits'); }} className={`nav-link ${activeSection === 'benefits' ? 'active' : ''}`}>Benefits</a></li>
            <li><a href="#areas" onClick={(e) => { e.preventDefault(); scrollTo('areas'); }} className={`nav-link ${activeSection === 'areas' ? 'active' : ''}`}>Training Zones</a></li>
            <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollTo('events'); }} className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}>Events</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQ</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-btn-wrap">
            <a href="https://wa.me/918073707231" target="_blank" rel="noopener noreferrer" className="nav-btn" style={{ display: 'inline-block', textAlign: 'center', lineHeight: 'normal' }}>
              Start Now
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="menu-toggle">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav"
            >
              <ul className="mobile-nav-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="mobile-nav-link">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="mobile-nav-link">About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="mobile-nav-link">Programs</a></li>
                <li><a href="#bmi" onClick={(e) => { e.preventDefault(); scrollTo('bmi'); }} className="mobile-nav-link">BMI Calculator</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollTo('benefits'); }} className="mobile-nav-link">Benefits</a></li>
                <li><a href="#areas" onClick={(e) => { e.preventDefault(); scrollTo('areas'); }} className="mobile-nav-link">Training Zones</a></li>
                <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollTo('events'); }} className="mobile-nav-link">Events</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="mobile-nav-link">FAQ</a></li>
              </ul>
              <a href="https://wa.me/918073707231" target="_blank" rel="noopener noreferrer" className="nav-btn" style={{ width: '100%', marginTop: '20px', display: 'block', textAlign: 'center' }}>
                Start Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <motion.section id="home" className="hero" style={{ y: heroY }}>
        {/* Relatable background video loop */}
        <motion.div 
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-bg-video-wrap"
        >
          <video
            src={heroBgVideo}
            poster="https://framerusercontent.com/images/tUzXrkM4QWv004jXnKFLmrrShg.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="hero-bg-video"
          />
        </motion.div>
        <div className="hero-gradient-overlay"></div>
        <div className="hero-grid"></div>
        <div className="hero-gradient-line"></div>
        <motion.div className="container" style={{ opacity: heroOpacity }}>
          <div className="hero-inner-layout">
            {/* Left Column: Text Content */}
            <div className="hero-left-col">
              {/* Social Proof (moved to the top) */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springHeavy, delay: 0.1 }}
                className="hero-social-proof-top"
              >
                <div className="avatar-stack">
                  <img src="https://framerusercontent.com/images/TpZ2CrtmA37AVPZojolRnAczbQ8.jpg" alt="Client 1" />
                  <img src="https://framerusercontent.com/images/GIMRdH8dZSD3uPWu3xwSWnyRJY.jpg" alt="Client 2" />
                  <img src="https://framerusercontent.com/images/MlufJeWUmaLTDOPjyglgkEbHdQ.jpg" alt="Client 3" />
                  <img src="https://framerusercontent.com/images/PQ0CdHcvW9qzllrrn2lyBWphgQ.jpg" alt="Client 4" />
                </div>
                <div className="social-proof-text-top">
                  <div className="stars-row">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <span className="rating-num">4.9 / 5</span>
                  </div>
                  <span className="clients-count">1500+ Happy Members</span>
                </div>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springHeavy, delay: 0.2 }}
              >
                Unleash the <br />
                <span className="accent-text">Athlete</span> <span className="hollow-text">In You</span>
              </motion.h1>
              
              {/* Sub-headline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springHeavy, delay: 0.3 }}
                className="hero-desc"
              >
                The biggest hybrid gym in Sarjapura.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springHeavy, delay: 0.4 }}
                className="hero-ctas"
              >
                <a href="https://wa.me/918073707231" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Start Now
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Us Section */}
      <section id="about" className="section section-white" ref={trainerRef}>
        <div className="container">
          <div className="trainer-grid">
            <div className="trainer-bio">
              <motion.span className="section-label" style={{ x: trainerSlideX, opacity: trainerOpacity, display: 'block' }}>
                (About us!)
              </motion.span>
              
              <motion.h2 className="trainer-title" style={{ x: trainerSlideX, opacity: trainerOpacity }}>
                ATHLONIXX <br />
                <span className="hollow-text">FIT CLUB</span>
              </motion.h2>
              
              <motion.p className="about-intro-lead" style={{ y: trainerFadeY, opacity: trainerFadeOpacity }}>
                ATHLONIXX Fitclub Sarjapur is where elite fitness meets proven performance. We provide modern infrastructure, certified trainers, and goal-driven programs built to transform your strength and stamina.
              </motion.p>

              <motion.div 
                className="about-mv-grid" 
                style={{ y: trainerFadeY, opacity: trainerFadeOpacity }}
              >
                <div className="about-mv-card">
                  <h4>
                    <Target size={16} style={{ color: 'var(--color-electric-blue)' }} />
                    Our Mission
                  </h4>
                  <p>
                    To empower individuals to reach peak physical and mental performance through holistic fitness, expert care, and a supportive community.
                  </p>
                </div>
                
                <div className="about-mv-card">
                  <h4>
                    <Compass size={16} style={{ color: 'var(--color-electric-blue)' }} />
                    Our Vision
                  </h4>
                  <p>
                    Empowering a community of fearless individuals to push boundaries, break limits, and unleash limitless potential.
                  </p>
                </div>
              </motion.div>

              <motion.div style={{ y: trainerFadeY, opacity: trainerFadeOpacity, marginTop: '8px' }}>
                <a href="https://wa.me/918073707231" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                  Start Now
                </a>
              </motion.div>
            </div>

            {/* Right Column: Creative scattered collage & Stats beneath it */}
            <div className="trainer-media-col">
              <motion.div 
                className="about-collage-container"
                style={{ y: trainerImageY, opacity: trainerFadeOpacity }}
              >
                <div className="about-collage-card card-img-1">
                  <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80" alt="Athlonixx Training 1" />
                </div>
                <div className="about-collage-card card-img-2">
                  <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" alt="Athlonixx Training 2" />
                </div>
                <div className="about-collage-card card-img-3">
                  <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80" alt="Athlonixx Training 3" />
                </div>
              </motion.div>
              
              <motion.div className="trainer-stats-row" style={{ y: trainerStatsY, opacity: trainerStatsOpacity }}>
                <div className="trainer-stat-item">
                  <div className="trainer-stat-num">
                    <CountUp to="10" suffix="+" />
                  </div>
                  <div className="trainer-stat-label">Fitness Programs</div>
                </div>
                
                <div className="trainer-stat-item">
                  <div className="trainer-stat-num">
                    <CountUp to="1500" suffix="+" />
                  </div>
                  <div className="trainer-stat-label">Happy Members</div>
                </div>
                
                <div className="trainer-stat-item">
                  <div className="trainer-stat-num">
                    <CountUp to="5" suffix="+" />
                  </div>
                  <div className="trainer-stat-label">Class Instructors</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="services" className="services-scroll-container" ref={servicesRef}>
        <div className="services-sticky-wrap">
          <div className="container services-title-container">
            <FadeUpReveal>
              <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <span className="section-label-new">(Our Programs)</span>
                <h2 className="section-title-new">Transformation <span className="accent-text-blue">Programs</span></h2>
              </div>
            </FadeUpReveal>
          </div>

          <div className="services-viewport">
            <motion.div 
              style={{ x }} 
              ref={cardsContainerRef}
              className="services-track"
            >
              <div className="services-left-space" />
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={isMobile ? { opacity: 0, y: 35 } : {}}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                  className="service-card-new"
                >
                  {/* Left Column: Text and Details (Blue Background) */}
                  <div className="service-card-left">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.desc}</p>
                    
                    <div className="service-card-meta">
                      <div className="meta-row">
                        <span className="meta-label">Level :</span>
                        <span className="meta-val">{service.level}</span>
                      </div>
                      <div className="meta-row">
                        <span className="meta-label">Duration :</span>
                        <span className="meta-val">{service.duration}</span>
                      </div>
                    </div>

                    <div className="service-card-tags">
                      {service.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="service-card-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Clickable Image (Links to Contact) */}
                  <a 
                    href="#contact" 
                    onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} 
                    className="service-card-right"
                  >
                    <img src={service.img} alt={service.title} />
                  </a>
                </motion.div>
              ))}
              <div className="services-right-space" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section id="bmi" className="rbmi-wrap">
        <div className="container">
          <div className="rbmi-head-icon" aria-hidden="true">
            <span>🧮</span>
          </div>

          <h2 className="rbmi-title">Athlonixx <span>BMI</span> Calculator</h2>
          <p className="rbmi-sub">Discover your fitness baseline and start your transformation journey</p>

          <div className="rbmi-card">
            <div className="rbmi-grid">
              <div className="rbmi-left">
                <div className="rbmi-row2">
                  <div className="rbmi-field">
                    <label htmlFor="rbmi-height">Height (cm)</label>
                    <input 
                      id="rbmi-height" 
                      type="number" 
                      min="80" 
                      max="250" 
                      placeholder="170"
                      value={bmiHeight}
                      onChange={(e) => setBmiHeight(e.target.value)}
                      className="form-control"
                      style={{ background: 'rgba(7, 7, 8, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '56px', borderRadius: '12px', padding: '0 18px', color: 'white', width: '100%', fontSize: '18px' }}
                    />
                  </div>
                  <div className="rbmi-field">
                    <label htmlFor="rbmi-weight">Weight (kg)</label>
                    <input 
                      id="rbmi-weight" 
                      type="number" 
                      min="20" 
                      max="300" 
                      placeholder="70"
                      value={bmiWeight}
                      onChange={(e) => setBmiWeight(e.target.value)}
                      className="form-control"
                      style={{ background: 'rgba(7, 7, 8, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '56px', borderRadius: '12px', padding: '0 18px', color: 'white', width: '100%', fontSize: '18px' }}
                    />
                  </div>
                </div>

                <div className="rbmi-field">
                  <label htmlFor="rbmi-age">Age</label>
                  <input 
                    id="rbmi-age" 
                    type="number" 
                    min="10" 
                    max="100" 
                    placeholder="25"
                    value={bmiAge}
                    onChange={(e) => setBmiAge(e.target.value)}
                    className="form-control"
                    style={{ background: 'rgba(7, 7, 8, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '56px', borderRadius: '12px', padding: '0 18px', color: 'white', width: '100%', fontSize: '18px' }}
                  />
                </div>

                <button 
                  id="rbmi-calc-btn" 
                  className="rbmi-btn rbmi-btn-primary" 
                  type="button"
                  onClick={calculateBmi}
                >
                  Calculate BMI
                </button>
              </div>

              <div className="rbmi-right">
                {!bmiResult ? (
                  <div className="rbmi-empty">
                    <div className="rbmi-empty-icon">🧮</div>
                    <p style={{ color: 'var(--color-medium-gray)' }}>Enter your details to calculate BMI</p>
                  </div>
                ) : (
                  <div className="rbmi-result">
                    <div className="rbmi-score" style={{ color: bmiResult.category.color }}>{bmiResult.score}</div>
                    <div className="rbmi-badge" style={{ backgroundColor: bmiResult.category.color }}>{bmiResult.category.text}</div>

                    <div className="rbmi-stats">
                      <div className="rbmi-stat">
                        <small>Current</small>
                        <strong>{bmiResult.current}</strong>
                      </div>
                      <div className="rbmi-stat">
                        <small>Ideal</small>
                        <strong>18.5-25</strong>
                      </div>
                      <div className="rbmi-stat">
                        <small>Goal</small>
                        <strong>22.0</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {bmiResult && (
              <div className="rbmi-consult show">
                <h3>Ready to Start Your RESET Journey?</h3>
                <p style={{ color: 'var(--color-light-gray)' }}>Get personalized guidance from our expert trainers</p>

                <div className="rbmi-row2">
                  <div className="rbmi-field">
                    <label htmlFor="rbmi-name">Full Name</label>
                    <input 
                      id="rbmi-name" 
                      type="text" 
                      placeholder="Enter your name"
                      value={bmiName}
                      onChange={(e) => setBmiName(e.target.value)}
                      className="form-control"
                      style={{ background: 'rgba(7, 7, 8, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '56px', borderRadius: '12px', padding: '0 18px', color: 'white', width: '100%', fontSize: '18px' }}
                    />
                  </div>
                  <div className="rbmi-field">
                    <label htmlFor="rbmi-phone">Phone Number</label>
                    <input 
                      id="rbmi-phone" 
                      type="tel" 
                      placeholder="6360090000"
                      value={bmiPhone}
                      onChange={(e) => setBmiPhone(e.target.value)}
                      className="form-control"
                      style={{ background: 'rgba(7, 7, 8, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '56px', borderRadius: '12px', padding: '0 18px', color: 'white', width: '100%', fontSize: '18px' }}
                    />
                  </div>
                </div>

                <button 
                  id="rbmi-wa-btn" 
                  className={`rbmi-btn rbmi-btn-success ${bmiName.trim().length >= 2 && bmiPhone.replace(/\D/g, '').length >= 10 ? 'enabled' : ''}`}
                  type="button"
                  disabled={!(bmiName.trim().length >= 2 && bmiPhone.replace(/\D/g, '').length >= 10)}
                  onClick={handleWhatsappConsult}
                >
                  Get Free Consultation
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section id="benefits" className="section section-white">
        <div className="container">
          <FadeUpReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="section-label-new">(Membership Benefits)</span>
              <h2 className="section-title-new">Unlock exclusive <span className="accent-text-blue">perks</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>
                Unlock exclusive perks and premium features with your RESET membership
              </p>
            </div>
          </FadeUpReveal>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ...springScroll, delay: index * 0.05 }}
                className="benefit-card"
              >
                <div className="benefit-card-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="benefit-icon-badge">
                  {getBenefitIcon(index)}
                </div>

                <h3 className="benefit-card-title">
                  {benefit.title}
                </h3>
                <p className="benefit-card-desc">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Zones Section */}
      <section id="areas" className="section training-areas-sticky-section">
        <div className="container">
          <div className="training-areas-grid">
            {/* Left Column: Sticky Header */}
            <div className="training-areas-left-col">
              <span className="section-label-new">(Training Zones)</span>
              <h2 className="section-title-new" style={{ fontSize: '64px', lineHeight: '1.0', marginBottom: '24px', textAlign: 'left' }}>
                Training <br /><span className="accent-text-blue">Areas</span>
              </h2>
              <p className="section-desc" style={{ color: 'var(--color-light-gray)', maxWidth: '100%', fontSize: '16px', lineHeight: '1.6' }}>
                Explore our specialized zones designed for every aspect of your fitness journey. With premium equipment and dedicated coaching, each area helps you unlock peak performance.
              </p>
            </div>

            {/* Right Column: Sticky Scroll Cards */}
            <div className="training-areas-right-col">
              {trainingAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  initial={isMobile ? { opacity: 0, y: 35 } : {}}
                  whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="training-areas-card"
                  style={{ zIndex: index + 1 }}
                >
                  {/* Card Background Image */}
                  <div className="training-card-bg">
                    <img src={area.img} alt={area.title} loading="lazy" />
                    <div className="training-card-overlay"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="training-card-content">
                    <span className="training-card-num">ZONE {String(index + 1).padStart(2, '0')}</span>
                    <div className="training-card-text">
                      <h3 className="training-card-title">{area.title}</h3>
                      <p className="training-card-desc">{area.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations" className="section transformations-section section-white">
        <div className="container">
          <FadeUpReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="section-label">(Real Transformations)</span>
              <h2 className="section-title">From Start to <span className="accent-text">Strong</span></h2>
            </div>
          </FadeUpReveal>
        </div>

        {/* 3D Comparison Carousel Container */}
        <div className="transformations-carousel-viewport">
          <ParticleBackground />
          
          {/* Left mask wrapper (Grayscale / Before) */}
          <div className="carousel-mask left-mask">
            <Carousel3D isGrayscale={true} />
          </div>
          
          {/* Right mask wrapper (Color / After) */}
          <div className="carousel-mask right-mask">
            <Carousel3D isGrayscale={false} />
          </div>

          {/* Ambient Glow Backdrops */}
          <div className="carousel-glow-container">
            <div className="carousel-glow-circle circle-white"></div>
            <div className="carousel-glow-circle circle-color-mid"></div>
            <div className="carousel-glow-circle circle-color-end1"></div>
            <div className="carousel-glow-circle circle-color-end2"></div>
            <div className="carousel-glow-circle circle-color-end3"></div>
            <div className="carousel-glow-circle circle-color-ambient"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <FadeUpReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="section-label">(What Clients Say)</span>
              <h2 className="section-title">Real Results. <span className="accent-text">Real Feedback.</span></h2>
            </div>
          </FadeUpReveal>

          <div className="testimonials-masonry">
            {testimonials.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springScroll, delay: index * 0.05 }}
                className="testimonial-card"
              >
                <div className="testimonial-header">
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                  <div className="testimonial-client-info">
                    <span className="client-name">{item.name}</span>
                    <span className="client-role">{item.role}</span>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-body">"{item.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section id="events" className="reset-events-section">
        <div className="reset-event-container">
          <div className="reset-event-header">
            <div className="reset-logo-circle">T</div>
            <h2>YEAR 2026</h2>
            <h3>EVENT CALENDAR</h3>
          </div>

          <div className="reset-event-list">
            {events.map((event, idx) => (
              <div className="reset-event-card" key={idx}>
                <div className="reset-event-date">{event.date}</div>
                <div className="reset-event-info">
                  <h4>{event.title}</h4>
                  {event.desc && <p style={{ color: 'var(--color-medium-gray)' }}>{event.desc}</p>}
                </div>
                <div className="reset-event-time">{event.time}</div>
              </div>
            ))}
          </div>

          <div className="reset-event-footer">
            <h4>Share Your Upcoming Events!</h4>
            <p>athlonixxfitclub@gmail.com | +91 8073 707 231</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section section-white">
        <div className="container">
          <FadeUpReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="section-label">(FAQ)</span>
              <h2 className="section-title">Frequently Asked <span className="accent-text">Questions</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>
                Find clear answers to the most common queries about RESET memberships and facilities.
              </p>
            </div>
          </FadeUpReveal>

          <FadeUpReveal delay={0.2}>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <div className="faq-header" onClick={() => setActiveFaq(isOpen ? null : index)}>
                      <span className="faq-question">{faq.question}</span>
                      <span className="faq-icon">
                        <X size={18} style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.2s ease' }} />
                      </span>
                    </div>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="faq-content"
                        >
                          <div className="faq-answer">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeUpReveal>
        </div>
      </section>

      {/* Book Consultation Contact Form Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="consultation-wrap">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springScroll }}
              className="consultation-info"
            >
              <span className="section-label">(Get in Touch)</span>
              <h2 className="section-title" style={{ fontSize: '56px' }}>ATHLONIXX <span className="accent-text">FIT CLUB</span></h2>
              <p className="section-desc" style={{ marginBottom: '24px' }}>
                With premium equipment and a motivating environment, you are bound to achieve your fitness goals with an unmatched experience.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '32px' }} className="contact-details-list">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} style={{ color: 'var(--color-electric-blue)' }} />
                  <a href="tel:+918073707231" style={{ fontSize: '15px' }}>+91 8073 707 231</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} style={{ color: 'var(--color-electric-blue)' }} />
                  <a href="mailto:athlonixxfitclub@gmail.com" style={{ fontSize: '15px' }}>athlonixxfitclub@gmail.com</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} style={{ color: 'var(--color-electric-blue)', marginTop: '4px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--color-light-gray)' }}>
                    Athlonixx Fit Club, Second Floor, Above Trends,<br/>
                    Khata No 1293, Gram Panchayat, SY No 502-1,<br/>
                    1 & 1293-2, Sarjapura, Sompura, Karnataka 562125
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springScroll }}
              className="consultation-form"
            >
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: 'center', padding: '40px 0' }}
                  >
                    <Check size={48} style={{ color: 'var(--color-electric-blue)', marginBottom: '16px' }} />
                    <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '28px', marginBottom: '12px' }}>Request Received</h3>
                    <p style={{ color: 'var(--color-light-gray)' }}>
                      Thank you for reaching out! We will review your request and get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" required placeholder="John Doe" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" required placeholder="john@example.com" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number</label>
                      <input type="tel" id="phone" required placeholder="+91 80737 07231" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Interest</label>
                      <select id="service" className="form-control">
                        <option value="transformation">Transformation Programs</option>
                        <option value="physiotherapy">Advanced Physiotherapy</option>
                        <option value="sports-rehab">Sports Rehabilitation</option>
                        <option value="hyrox">HYROX Performance</option>
                        <option value="general-membership">General Gym Membership</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="goal">Primary Goal</label>
                      <select id="goal" className="form-control">
                        <option value="fitness">General Fitness</option>
                        <option value="physio">Physiotherapy / Rehab</option>
                        <option value="muscle">Muscle Gain</option>
                        <option value="fatloss">Fat Loss</option>
                        <option value="hyrox-train">HYROX Training</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea id="message" placeholder="Tell us a bit about your fitness goals..." className="form-control"></textarea>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="section section-white" style={{ padding: '80px 0 120px 0' }}>
        <Marquee text="ATHLONIXX FIT CLUB • UNLEASH THE ATHLETE IN YOU •" />
        <div className="container" style={{ marginTop: '56px' }}>
          <FadeUpReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'var(--font-anton)', fontSize: '28px', textTransform: 'uppercase' }}>
                Follow us on instagram
              </h3>
              <a 
                href="https://www.instagram.com/athlonixxfitclub?igsh=aGViYmJtMDk4aW96" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-center instagram-handle-link" 
                style={{ gap: '8px', fontSize: '14px', fontWeight: '500' }}
              >
                <InstagramIcon size={18} />
                @athlonixxfitclub
              </a>
            </div>
          </FadeUpReveal>

          <div className="insta-grid">
            {instagramPhotos.map((photo, index) => (
              <motion.div 
                key={index} 
                className="insta-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...springScroll, delay: index * 0.05 }}
              >
                <img src={photo} alt={`Instagram fitness photo ${index + 1}`} />
                <div className="insta-overlay flex-center">
                  <InstagramIcon size={28} style={{ color: 'var(--color-white)' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="logo" style={{ display: 'inline-block', marginBottom: '16px' }}>
                <img src="/logo.png" alt="Athlonixx Fit Club" style={{ height: '96px', width: 'auto', display: 'block' }} />
              </a>
              <p className="footer-brand-desc">
                ATHLONIXX Fitclub Sarjapur is where elite fitness meets proven performance. With modern infrastructure, certified trainers, and goal-driven programs designed to build strength and stamina.
              </p>
            </div>

            <div className="footer-col">
              <h4>Programs</h4>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="footer-link">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="footer-link">About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }} className="footer-link">Programs</a></li>
                <li><a href="#bmi" onClick={(e) => { e.preventDefault(); scrollTo('bmi'); }} className="footer-link">BMI Calculator</a></li>
                <li><a href="#benefits" onClick={(e) => { e.preventDefault(); scrollTo('benefits'); }} className="footer-link">Benefits</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#areas" onClick={(e) => { e.preventDefault(); scrollTo('areas'); }} className="footer-link">Training Zones</a></li>
                <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollTo('events'); }} className="footer-link">Events</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }} className="footer-link">Testimonials</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }} className="footer-link">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <Phone size={16} style={{ color: 'var(--color-electric-blue)' }} />
                  <a href="tel:+918073707231">+91 8073 707 231</a>
                </div>
                <div className="footer-contact-item">
                  <Mail size={16} style={{ color: 'var(--color-electric-blue)' }} />
                  <a href="mailto:athlonixxfitclub@gmail.com">athlonixxfitclub@gmail.com</a>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={16} style={{ color: 'var(--color-electric-blue)' }} />
                  <span>Sarjapura, Sompura, Bangalore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved by Athlonixx Fit Club.
            </p>
            <p className="footer-credits">
              Created by Athlonixx Fit Club
            </p>
          </div>
        </div>
      </footer>
      {/* Hero Video Lightbox popup */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="video-lightbox-overlay"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="video-lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-lightbox-close"
                onClick={() => setIsLightboxOpen(false)}
              >
                <X size={24} />
              </button>
              <video 
                src="https://framerusercontent.com/assets/KtybQrIxM8KXwOcvzbAyDnH8o.mp4"
                poster="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="lightbox-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
