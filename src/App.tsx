import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  TestTube, 
  Users, 
  Network, 
  Search, 
  Settings, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Linkedin
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    locations: '',
    setup: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation - Updated to match requested structure */}
      <nav className="border-b border-border sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-page h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="https://placehold.co/200x50/FF6B00/FFFFFF?text=CONNECTA" 
              alt="CONNECTA Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: 'Markets', active: true },
              { label: 'Solutions' },
              { label: 'Success Stories' },
              { label: 'Partners', hasDropdown: true }
            ].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className={`text-sm font-bold transition-colors flex items-center gap-1.5 ${item.active ? 'text-accent' : 'text-secondary hover:text-primary'}`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#form" 
              className="hidden sm:flex px-6 py-2.5 border-2 border-orange-500 text-orange-600 rounded-lg text-sm font-bold hover:bg-orange-500 hover:text-white transition-all"
            >
              Contact
            </a>
            <a 
              href="#form" 
              className="px-6 py-2.5 bg-linear-to-r from-[#FF6B00] to-[#FF9E00] text-white rounded-lg text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all active:scale-95"
            >
              Shop now
            </a>
          </div>
        </div>
      </nav>

      {/* SECTION 1: HERO (Split Layout) */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-section-bg border border-border text-[10px] uppercase tracking-wider font-bold text-secondary mb-8">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Enterprise Grade Connectivity • 99.99% Uptime
              </div>
              
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-8 text-primary leading-[1.05]">
                Your backup internet exists. <br />
                <span className="text-accent">Now make sure it actually works.</span>
              </h1>
              
              <p className="text-xl text-secondary max-w-xl mb-10 leading-relaxed">
                We help businesses ensure their backup connection takes over instantly during outages. No manual intervention, no revenue loss.
              </p>
              
              <div className="flex flex-col items-start gap-4 w-full sm:w-auto">
                <a href="#form" className="btn-primary group gap-3 py-5 px-10 rounded-full shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30">
                  <div className="flex -space-x-2 mr-2">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-gray-200 overflow-hidden">
                      <img src="https://picsum.photos/seed/user1/32/32" alt="User" referrerPolicy="no-referrer" />
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-orange-500 bg-gray-300 overflow-hidden">
                      <img src="https://picsum.photos/seed/user2/32/32" alt="User" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  Get Your Free Connectivity Readiness Review
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Stylized Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-video lg:aspect-square"
            >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
              alt="Professional Executive with Tablet" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Real-time Field Support Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM BOXES */}
      <section className="py-10 bg-section-bg">
        <div className="max-w-page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why most backup internet setups fail in real outages</h2>
            <p className="text-secondary text-lg">The issue is not the backup. It is how it is configured and tested.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                title: "Delayed Failover", 
                desc: "Default settings delay switchover by minutes instead of seconds",
                img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                title: "No Real Testing", 
                desc: "Backup is never tested under actual outage conditions",
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                title: "Manual Dependency", 
                desc: "Teams must step in during outages to switch connections",
                img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
              },
              { 
                title: "Shared Risks", 
                desc: "Primary and backup fail due to same upstream dependency",
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" 
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-black/60"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <h3 className="text-white font-bold text-xl leading-tight drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-primary font-bold text-lg md:text-xl italic">
              "A backup connection that does not activate on time does not protect your business."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMPACT */}
      <section className="py-10">
        <div className="max-w-page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What downtime actually costs your business</h2>
            <p className="text-secondary text-lg">Even a few minutes of delay can trigger hours of disruption</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Immediate System Downtime",
                points: [
                  "Within seconds of failure, critical systems disconnect",
                  "ERP, procurement, monitoring dashboards stop updating",
                  "100% visibility loss across affected teams"
                ]
              },
              {
                title: "Transaction & Revenue Loss",
                points: [
                  "Every minute of delay impacts active operations",
                  "Orders fail or remain unconfirmed",
                  "Missed transaction windows with suppliers or customers",
                  "Revenue leakage starts within the first few minutes"
                ]
              },
              {
                title: "Operational Breakdown Across Teams",
                points: [
                  "A single outage impacts multiple functions at once",
                  "Production teams lose real-time data",
                  "Operations teams shift to manual tracking",
                  "IT teams move into reactive firefighting mode"
                ]
              },
              {
                title: "Extended Recovery Time",
                points: [
                  "The real cost starts after connectivity returns",
                  "30–60 minutes of outage can lead to 3–5 hours of recovery",
                  "Data needs reconciliation",
                  "Teams spend time validating and correcting errors"
                ]
              }
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-accent pl-8 py-2">
                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-secondary">
                      <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-10 rounded-xl text-center">
            <p className="text-xl md:text-2xl font-medium">
              Downtime is not just lost internet. It is lost productivity, lost transactions, and delayed operations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOLUTION */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2070&auto=format&fit=crop" 
            alt="Telecom Tower" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-page relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-[#FF6B00] to-[#FF9E00] p-10 md:p-16 rounded-xl max-w-3xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              We make your backup work when it is needed
            </h2>
            <p className="text-white/80 text-xl mb-8">
              No new hardware. We optimize what you already have.
            </p>
            
            <div className="w-full h-px bg-white/30 mb-8"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {[
                { icon: <Search className="w-5 h-5" />, title: "Audit", desc: "Review your current setup and dependencies" },
                { icon: <Settings className="w-5 h-5" />, title: "Fix Configuration", desc: "Optimize failover thresholds and logic" },
                { icon: <TestTube className="w-5 h-5" />, title: "Test Real Scenarios", desc: "Simulate outages safely to measure response" },
                { icon: <Zap className="w-5 h-5" />, title: "Optimize Performance", desc: "Ensure fast and seamless switchover" }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
              {[
                "Failover in seconds",
                "Reduced downtime risk",
                "Stable operations during outages"
              ].map((outcome, i) => (
                <div key={i} className="flex items-center gap-2 font-bold text-white text-sm">
                  <Check className="w-4 h-4 text-white" />
                  {outcome}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: VALUE (Comparison Table) */}
      <section className="section-padding">
        <div className="max-w-page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before vs After optimization</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden border border-border rounded-2xl shadow-sm bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-6 bg-section-bg/50 text-left text-[10px] font-bold text-secondary uppercase tracking-widest w-1/3">Feature</th>
                    <th className="p-6 bg-section-bg/50 text-left text-[10px] font-bold text-secondary uppercase tracking-widest w-1/3">Before</th>
                    <th className="p-6 bg-accent/5 text-left text-[10px] font-bold text-accent uppercase tracking-widest w-1/3 border-l border-accent/10">After</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { feature: "Testing Strategy", before: "Backup exists but untested", after: "Backup tested under real conditions" },
                    { feature: "Failover Speed", before: "Failover delays (minutes)", after: "Instant switchover (seconds)" },
                    { feature: "Operational Mode", before: "Manual intervention required", after: "Fully automated failover" },
                    { feature: "Performance", before: "Uncertain performance", after: "Predictable reliability" }
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-section-bg/30 transition-colors">
                      <td className="p-6 font-semibold text-primary text-sm">
                        {row.feature}
                      </td>
                      <td className="p-6 text-secondary text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                            <X className="w-3 h-3 text-red-500" />
                          </div>
                          {row.before}
                        </div>
                      </td>
                      <td className="p-6 text-primary text-sm font-medium bg-accent/[0.02] border-l border-accent/10">
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          {row.after}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                Same hardware. <span className="text-accent">Completely different outcome.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FREE OFFER + FORM */}
      <section id="form" className="section-padding bg-section-bg">
        <div className="max-w-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Free Connectivity Readiness Review</h2>
              <p className="text-lg text-secondary mb-8">
                We offer a no-cost review to help you understand whether your backup internet is truly ready.
              </p>
              
              <div className="space-y-6 mb-10">
                <h3 className="font-bold text-sm uppercase tracking-widest text-secondary">What’s Included</h3>
                <ul className="space-y-4">
                  {[
                    "Review of your current setup",
                    "Failover readiness assessment",
                    "Identification of gaps and risks",
                    "Actionable recommendations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-accent font-bold text-xl italic">
                No cost. No obligation. Just a clear view of your readiness.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Work Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Company Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Number of Locations</label>
                    <input 
                      required
                      type="number" 
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="1-10"
                      value={formData.locations}
                      onChange={e => setFormData({...formData, locations: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Current Backup Setup (optional)</label>
                  <textarea 
                    className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent h-24"
                    placeholder="Tell us a bit about your current setup..."
                    value={formData.setup}
                    onChange={e => setFormData({...formData, setup: e.target.value})}
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Get Your Free Connectivity Readiness Review
                </button>
                
                <p className="text-center text-xs text-secondary mt-4">
                  Built for businesses where downtime directly impacts operations.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated to match requested image */}
      <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
        <div className="max-w-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Left Column: Brand & Contact */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex items-center gap-2 group cursor-pointer">
                <img 
                  src="https://placehold.co/200x50/FF6B00/FFFFFF?text=CONNECTA" 
                  alt="CONNECTA Logo" 
                  className="h-12 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-4 text-sm font-medium text-gray-400">
                <a href="tel:1-866-703-8056" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                  1-866-703-8056
                </a>
                <a href="mailto:connect@connectasat.com" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <Mail className="w-4 h-4 text-orange-500" />
                  connect@connectasat.com
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span>4802 Lena Rd, Unit 103, Bradenton FL 34211</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-800 rounded flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Subscribe to stay informed</p>
                <div className="flex max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-l-lg py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <button className="bg-linear-to-r from-[#FF6B00] to-[#FF9E00] text-white px-6 py-3 rounded-r-lg text-sm font-bold hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Connecta</h4>
                <ul className="flex flex-col gap-4 text-sm font-medium">
                  {['Home', 'Markets', 'Solutions', 'Technology', 'Success Stories', 'Insights', 'Company'].map(link => (
                    <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <ul className="flex flex-col gap-4 text-sm font-medium">
                  {['Terms of service', 'Privacy policy', 'Site map'].map(link => (
                    <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Markets</h4>
              <ul className="grid grid-cols-1 gap-4 text-sm font-medium">
                {[
                  'Urban outreach', 'Open water', 'Land mobility', 'Extreme latitude', 
                  'Emergency responsiveness', 'Underground operations', 'Vast territory support', 
                  'Rural activities', 'Highest elevations', 'Essential reliance', 
                  'Isolated workstations', 'Worldwide broadcasting'
                ].map(link => (
                  <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Solutions</h4>
              <ul className="flex flex-col gap-4 text-sm font-medium">
                {[
                  'Business Continuity', 'Mobile connectivity', 'Maritime connectivity', 
                  'Tracking & monitoring', 'Mobility equipment', '5G Satellite Solutions', 
                  'Satellite Live Streaming', 'IoT M2M & telemetry', 'Managed networks & NaaS', 
                  'Land connectivity', 'Telemedicine', 'Managed services & NOC', 
                  'Satellite Deployment & Integration'
                ].map(link => (
                  <li key={link}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            <p>© 2026 CONNECTA Satellite Solutions. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
