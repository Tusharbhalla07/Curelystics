import { Link } from 'react-router';
import { ArrowRight, Brain, TrendingUp, Zap, Shield, Users, ChartBar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-white dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span>Early-stage startup · Prototype in progress · Looking for pilot hospitals/clinics</span>
            </div>

            <h1 className="font-space-grotesk text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                CURELYSTICS Technologies
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">Smart Healthcare.</span>
              <br />
              <span className="text-slate-900 dark:text-white">Powered by Data.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10">
              AI-driven insights, analytics dashboards, automation, queue management, and digital healthcare solutions — currently in prototype stage and open for pilot partnerships.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
              >
                <span>Request Demo / Prototype Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold hover:border-blue-600 dark:hover:border-blue-500 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Intelligent Healthcare Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Transforming healthcare operations with cutting-edge AI and analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI-Powered Analytics',
                description: 'Advanced machine learning algorithms providing actionable insights from healthcare data',
                color: 'from-blue-600 to-blue-400'
              },
              {
                icon: ChartBar,
                title: 'Real-Time Dashboards',
                description: 'Live operational and clinical metrics at your fingertips for data-driven decisions',
                color: 'from-teal-600 to-teal-400'
              },
              {
                icon: Zap,
                title: 'Healthcare Automation',
                description: 'Streamline repetitive tasks and administrative workflows to save time and reduce errors',
                color: 'from-purple-600 to-purple-400'
              },
              {
                icon: Users,
                title: 'Queue Management',
                description: 'Smart OPD and in-hospital queue systems to reduce wait times and improve patient flow',
                color: 'from-orange-600 to-orange-400'
              },
              {
                icon: TrendingUp,
                title: 'Predictive Modeling',
                description: 'Forecast patient admissions, identify risks, and optimize resource allocation',
                color: 'from-pink-600 to-pink-400'
              },
              {
                icon: Shield,
                title: 'Secure & Compliant',
                description: 'Enterprise-grade security with full healthcare compliance and data privacy',
                color: 'from-indigo-600 to-indigo-400'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our pilot program and be among the first to experience the future of healthcare analytics
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
