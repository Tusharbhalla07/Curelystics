import { Activity, BarChart3, FlaskConical, Package, TrendingUp, Heart, Clock, Users } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Activity,
      title: 'Patient Monitoring',
      description: 'Real-time tracking of patient vitals, treatment progress, and clinical outcomes. Enable proactive care with intelligent alerts and automated reporting for better patient safety and recovery tracking.',
      benefits: [
        'Continuous vital monitoring',
        'Automated alert systems',
        'Treatment progress tracking',
        'Early warning detection'
      ],
      color: 'from-red-600 to-red-400'
    },
    {
      icon: BarChart3,
      title: 'Clinic Performance Dashboards',
      description: 'Comprehensive analytics for clinic operations including appointment volumes, revenue tracking, staff productivity, and patient satisfaction metrics all in one centralized dashboard.',
      benefits: [
        'Revenue analytics',
        'Staff performance metrics',
        'Patient flow analysis',
        'Resource utilization tracking'
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: FlaskConical,
      title: 'Lab Analytics',
      description: 'Optimize laboratory operations with intelligent test result tracking, turnaround time monitoring, and quality control analytics. Integrate seamlessly with LIS systems for complete visibility.',
      benefits: [
        'Test turnaround tracking',
        'Quality control monitoring',
        'Sample management',
        'Automated reporting'
      ],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: Package,
      title: 'Medical Inventory Tracking',
      description: 'Smart inventory management for medical supplies, pharmaceuticals, and equipment. Prevent stockouts and optimize ordering with predictive analytics and automated alerts.',
      benefits: [
        'Stock level monitoring',
        'Expiry tracking',
        'Automated reordering',
        'Usage pattern analysis'
      ],
      color: 'from-green-600 to-green-400'
    },
    {
      icon: TrendingUp,
      title: 'Healthcare Predictive Modeling',
      description: 'Leverage AI to forecast patient admissions, disease outbreaks, resource requirements, and operational bottlenecks. Make proactive decisions based on data-driven predictions.',
      benefits: [
        'Admission forecasting',
        'Demand prediction',
        'Risk stratification',
        'Capacity planning'
      ],
      color: 'from-orange-600 to-orange-400'
    },
    {
      icon: Heart,
      title: 'Patient Satisfaction Analysis',
      description: 'Collect, analyze, and act on patient feedback across all touchpoints. Identify areas for improvement and track satisfaction trends over time to enhance care quality.',
      benefits: [
        'Feedback collection',
        'Sentiment analysis',
        'Trend identification',
        'Service improvement insights'
      ],
      color: 'from-pink-600 to-pink-400'
    },
    {
      icon: Clock,
      title: 'Appointment & Workflow Optimization',
      description: 'Streamline scheduling, reduce no-shows, and optimize staff allocation with intelligent appointment management and workflow automation tools.',
      benefits: [
        'Smart scheduling',
        'No-show reduction',
        'Staff optimization',
        'Automated reminders'
      ],
      color: 'from-teal-600 to-teal-400'
    },
    {
      icon: Users,
      title: 'Offline Queue Management in Hospitals & Clinics',
      description: 'Transform patient flow in hospitals and clinics with our smart queue management system. Reduce crowding, minimize wait times, and improve staff efficiency even in offline environments.',
      benefits: [
        'Managing OPD queues efficiently',
        'Token-based or digital queue flow',
        'Reducing crowding and wait times',
        'Helping staff manage peak hours',
        'Real-time queue status updates',
        'Patient satisfaction improvement'
      ],
      color: 'from-indigo-600 to-indigo-400'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-space-grotesk text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Healthcare Use Cases
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real-world applications of our AI-powered healthcare solutions. These are targeted use cases for pilots and early deployments.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mt-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Ready for pilot programs and early deployments</span>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Key Benefits:
                  </p>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className={`mt-1.5 w-1.5 h-1.5 bg-gradient-to-r ${useCase.color} rounded-full flex-shrink-0`}></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Implement These Use Cases?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            All use cases are designed for real-world deployment and are currently available for pilot programs. We work closely with early adopters to customize solutions for their specific needs and ensure successful implementation.
          </p>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 inline-block">
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              💡 These solutions can be combined and customized to fit your organization's unique requirements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
