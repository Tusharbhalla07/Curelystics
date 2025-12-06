import { BarChart3, Brain, LineChart, Cog, FileText, Database, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Solutions() {
  const solutions = [
    {
      icon: BarChart3,
      title: 'Hospital Analytics Dashboard',
      description: 'Real-time operational and clinical insights at your fingertips. Monitor key metrics, track performance, and make data-driven decisions with our comprehensive analytics platform.',
      features: [
        'Live operational metrics',
        'Clinical performance tracking',
        'Customizable KPI dashboards',
        'Multi-department views'
      ],
      color: 'from-blue-600 to-blue-400',
      status: 'Active Development'
    },
    {
      icon: Brain,
      title: 'AI-powered Decision Support Tool',
      description: 'Leverage artificial intelligence to assist doctors and administrators with data-backed decisions. Our AI analyzes patterns and provides actionable recommendations.',
      features: [
        'Intelligent recommendations',
        'Pattern recognition',
        'Risk assessment',
        'Clinical decision support'
      ],
      color: 'from-purple-600 to-purple-400',
      status: 'Prototype Phase'
    },
    {
      icon: LineChart,
      title: 'Predictive Patient Analytics',
      description: 'Forecast admissions, identify patient risks, and optimize workload distribution. Stay ahead of demand with our predictive modeling capabilities.',
      features: [
        'Admission forecasting',
        'Risk stratification',
        'Capacity planning',
        'Resource optimization'
      ],
      color: 'from-teal-600 to-teal-400',
      status: 'Prototype Phase'
    },
    {
      icon: Cog,
      title: 'Healthcare Automation Systems',
      description: 'Automate repetitive administrative and reporting tasks to free up staff time and reduce human error. Streamline workflows across your organization.',
      features: [
        'Automated reporting',
        'Workflow automation',
        'Task scheduling',
        'Alert systems'
      ],
      color: 'from-orange-600 to-orange-400',
      status: 'Active Development'
    },
    {
      icon: FileText,
      title: 'Digital Reporting & Monitoring Tools',
      description: 'Centralized dashboards for tracking KPIs, compliance metrics, and operational performance. Generate reports automatically and stay audit-ready.',
      features: [
        'Compliance tracking',
        'Automated reports',
        'Custom metrics',
        'Export capabilities'
      ],
      color: 'from-pink-600 to-pink-400',
      status: 'Active Development'
    },
    {
      icon: Database,
      title: 'Custom Data Integration Services',
      description: 'Seamlessly integrate with your existing hospital systems, EMR, LIS, and other healthcare IT infrastructure. We connect your data ecosystem.',
      features: [
        'EMR integration',
        'LIS connectivity',
        'Custom API development',
        'Data migration support'
      ],
      color: 'from-indigo-600 to-indigo-400',
      status: 'Available for Pilots'
    },
    {
      icon: Users,
      title: 'Queue Management System for Offline Hospitals',
      description: 'Smart OPD and in-hospital queue management to reduce waiting time, improve patient flow, and streamline front-desk operations. Works for both digital and offline environments.',
      features: [
        'Token-based queuing',
        'Digital flow management',
        'Wait time reduction',
        'Peak hour optimization',
        'Staff efficiency tools',
        'Patient satisfaction tracking'
      ],
      color: 'from-green-600 to-green-400',
      status: 'Prototype Phase'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-space-grotesk text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Comprehensive AI-powered tools designed to transform healthcare operations. All solutions are in active development and available for pilot partnerships.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    {solution.status}
                  </span>
                </div>

                <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                    Features in active development. Looking for pilot users and feedback.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
            Ready to Join Our Pilot Program?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be among the first to experience these innovative solutions and help shape their development
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all"
          >
            <span>Contact Us for Pilot Access</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
