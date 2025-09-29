@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 210 29% 24%;
    --card: 0 0% 100%;
    --card-foreground: 210 29% 24%;
    --popover: 0 0% 100%;
    --popover-foreground: 210 29% 24%;
    --primary: 207 90% 54%;
    --primary-foreground: 0 0% 98%;
    --secondary: 88 50% 53%;
    --secondary-foreground: 0 0% 98%;
    --muted: 210 16% 93%;
    --muted-foreground: 210 29% 24%;
    --accent: 199 98% 48%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 210 16% 93%;
    --input: 210 16% 93%;
    --ring: 207 90% 54%;
    --radius: 0.75rem;
    
    /* Couleurs MANévok */
    --manevok-green: 88 50% 53%;
    --manevok-blue-dark: 207 90% 54%;
    --manevok-blue-light: 199 98% 48%;
    --manevok-orange: 36 100% 50%;
    --manevok-orange-dark: 14 100% 57%;
    --manevok-gray-dark: 210 29% 24%;
    --manevok-gray-light: 210 16% 93%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-[#1976D2] to-[#2196F3] hover:from-[#1565C0] hover:to-[#1976D2] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden;
  }
  
  .btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  .btn-primary:hover::before {
    left: 100%;
  }
  
  .btn-secondary {
    @apply bg-white hover:bg-gradient-to-r hover:from-[#1976D2] hover:to-[#2196F3] text-[#1976D2] hover:text-white border-2 border-[#1976D2] font-semibold py-4 px-8 rounded-xl transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105;
  }
  
  .btn-accent {
    @apply bg-gradient-to-r from-[#8BC34A] to-[#9CCC65] hover:from-[#7CB342] hover:to-[#8BC34A] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105;
  }

  .section-title {
    @apply text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1976D2] to-[#8BC34A] bg-clip-text text-transparent mb-6 relative;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #1976D2, #8BC34A);
    border-radius: 2px;
  }

  .section-subtitle {
    @apply text-xl text-[#37474F] opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed;
  }

  .card-hover {
    @apply transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 relative overflow-hidden;
  }
  
  .card-hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1976D2, #8BC34A, #4FC3F7);
    transform: scaleX(0);
    transition: transform 0.5s ease;
  }
  
  .card-hover:hover::before {
    transform: scaleX(1);
  }
  
  .floating-card {
    @apply bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 relative overflow-hidden;
  }
  
  .floating-card::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(25,118,210,0.1) 0%, transparent 70%);
    transform: scale(0);
    transition: transform 0.6s ease;
  }
  
  .floating-card:hover::after {
    transform: scale(1);
  }
  
  .glass-effect {
    @apply bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl;
  }
  
  .gradient-border {
    position: relative;
    background: linear-gradient(45deg, #1976D2, #8BC34A, #4FC3F7, #FFC107);
    padding: 2px;
    border-radius: 16px;
  }
  
  .gradient-border-inner {
    @apply bg-white rounded-2xl w-full h-full;
  }

  .fade-in {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up {
    animation: slideUpBounce 1s ease-out forwards;
    opacity: 0;
    transform: translateY(50px);
  }
  
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
  .stagger-6 { animation-delay: 0.6s; }
  
  .pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite alternate;
  }
  
  .rotate-slow {
    animation: rotateSlow 20s linear infinite;
  }
  
  .bounce-subtle {
    animation: bounceSubtle 3s ease-in-out infinite;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUpBounce {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  60% {
    opacity: 1;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 20px rgba(25, 118, 210, 0.3);
  }
  100% {
    box-shadow: 0 0 40px rgba(25, 118, 210, 0.6), 0 0 60px rgba(139, 195, 74, 0.3);
  }
}

@keyframes rotateSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounceSubtle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.gradient-bg {
  background: linear-gradient(135deg, #1976D2 0%, #4FC3F7 30%, #8BC34A 70%, #FFC107 100%);
  position: relative;
  overflow: hidden;
}

.gradient-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.text-gradient {
  background: linear-gradient(135deg, #1976D2, #8BC34A, #4FC3F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Scroll animations */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s ease-out;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Professional hover effects */
.professional-card {
  @apply bg-white rounded-2xl shadow-lg transition-all duration-500 relative overflow-hidden;
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
}

.professional-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(145deg, rgba(25,118,210,0.05) 0%, rgba(139,195,74,0.05) 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.professional-card:hover::before {
  opacity: 1;
}

.professional-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px rgba(25,118,210,0.15);
}