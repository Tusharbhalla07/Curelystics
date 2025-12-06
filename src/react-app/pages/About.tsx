import { Target, Eye, Lightbulb, Shield, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-space-grotesk text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About CURELYSTICS Technologies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We're an early-stage health-tech AI startup focused on building intelligent tools for healthcare data and operations
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Company Overview
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              CURELYSTICS Technologies is at the forefront of healthcare innovation, combining artificial intelligence, advanced analytics, and automation to revolutionize how hospitals, clinics, and healthcare providers operate. We're currently in the prototype and MVP development stage, working closely with early adopters to build solutions that truly address real-world healthcare challenges.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our platform provides hospitals and clinics with powerful tools for data-driven decision-making, operational efficiency, and improved patient care. From intelligent dashboards to predictive analytics and queue management systems, we're building the future of healthcare technology—one pilot partnership at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Revolutionizing healthcare through intelligent data systems and automation, starting with real-world pilots and prototypes. We're committed to making advanced healthcare analytics accessible to hospitals of all sizes, enabling them to deliver better patient care through data-driven insights.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A future where every healthcare decision is data-driven and every hospital workflow is smart and efficient. We envision a healthcare ecosystem where technology seamlessly integrates with clinical operations, empowering providers to focus on what matters most—patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Stage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Current Stage</span>
          </div>
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Prototype & MVP Development
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            We are currently in the prototype and MVP development stage, actively building and testing our solutions with early adopters. Our approach is collaborative—we work closely with hospitals, clinics, and healthcare providers to ensure our products meet real-world needs. If you're interested in being part of our pilot program and shaping the future of healthcare technology, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge AI and analytics solutions',
                color: 'from-yellow-600 to-yellow-400'
              },
              {
                icon: Target,
                title: 'Accuracy',
                description: 'Delivering precise, reliable data for critical healthcare decisions',
                color: 'from-blue-600 to-blue-400'
              },
              {
                icon: Shield,
                title: 'Privacy',
                description: 'Protecting patient data with enterprise-grade security',
                color: 'from-green-600 to-green-400'
              },
              {
                icon: TrendingUp,
                title: 'Impact',
                description: 'Creating meaningful improvements in healthcare delivery',
                color: 'from-purple-600 to-purple-400'
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working together with partners to build better solutions',
                color: 'from-teal-600 to-teal-400'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Open communication and honest feedback in all partnerships',
                color: 'from-pink-600 to-pink-400'
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Our Team
          </h2>

          {/* ⭐ Updated Team: Only 2 Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Member 1 */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600">
                <img src="./team/member1.jpg" alt="Tushar Bhalla" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                Tushar Bhalla
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Co-Founder & CEO
              </p>
            </div>

            {/* Member 2 */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-teal-600">
                <img src="./team/member2.jpg" alt="Himanshu Singh" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                Himanshu Singh
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Co-Founder & COO
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
