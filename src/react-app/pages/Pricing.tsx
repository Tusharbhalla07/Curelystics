import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      subtitle: 'For Small Clinics',
      badge: 'Pilot / Early Access Pricing',
      price: 'Contact Us',
      description: 'Perfect for small clinics and healthcare facilities starting their digital transformation journey',
      features: [
        'Hospital Analytics Dashboard',
        'Digital Reporting Tools',
        'Basic Queue Management',
        'Up to 50 patients/day capacity',
        'Email support',
        'Monthly reporting',
        'Basic data integration',
        'Mobile access'
      ],
      color: 'from-blue-600 to-blue-400',
      highlight: false
    },
    {
      name: 'Professional',
      subtitle: 'For Mid-size Hospitals',
      badge: 'Beta / Pilot Programs',
      price: 'Contact Us',
      description: 'Comprehensive solution for growing hospitals with advanced analytics and automation needs',
      features: [
        'All Basic features',
        'AI-powered Decision Support',
        'Predictive Patient Analytics',
        'Advanced Queue Management',
        'Up to 200 patients/day capacity',
        'Healthcare Automation Systems',
        'Priority support',
        'Custom integrations (EMR, LIS)',
        'Advanced reporting & analytics',
        'Staff training included'
      ],
      color: 'from-teal-600 to-teal-400',
      highlight: true
    },
    {
      name: 'Enterprise',
      subtitle: 'For Large Healthcare Networks',
      badge: 'Custom Pilot / Collaboration',
      price: 'Custom',
      description: 'Tailored solutions for large healthcare networks with complex requirements',
      features: [
        'All Professional features',
        'Unlimited capacity',
        'Multi-location support',
        'Custom AI model training',
        'Dedicated account manager',
        'On-premise deployment option',
        '24/7 priority support',
        'Custom feature development',
        'Advanced security & compliance',
        'White-label options',
        'API access for custom integrations'
      ],
      color: 'from-purple-600 to-purple-400',
      highlight: false
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Core Features',
      items: [
        { name: 'Analytics Dashboard', basic: true, pro: true, enterprise: true },
        { name: 'Digital Reporting', basic: true, pro: true, enterprise: true },
        { name: 'Queue Management', basic: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
        { name: 'AI Decision Support', basic: false, pro: true, enterprise: true },
        { name: 'Predictive Analytics', basic: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Capacity & Scale',
      items: [
        { name: 'Daily Patient Capacity', basic: '50', pro: '200', enterprise: 'Unlimited' },
        { name: 'Multi-location Support', basic: false, pro: false, enterprise: true },
        { name: 'Data Storage', basic: '1GB', pro: '10GB', enterprise: 'Unlimited' }
      ]
    },
    {
      category: 'Integration & Automation',
      items: [
        { name: 'Basic Data Integration', basic: true, pro: true, enterprise: true },
        { name: 'EMR/LIS Integration', basic: false, pro: true, enterprise: true },
        { name: 'Custom API Access', basic: false, pro: false, enterprise: true },
        { name: 'Automation Systems', basic: false, pro: true, enterprise: true }
      ]
    },
    {
      category: 'Support & Training',
      items: [
        { name: 'Email Support', basic: true, pro: true, enterprise: true },
        { name: 'Priority Support', basic: false, pro: true, enterprise: true },
        { name: '24/7 Support', basic: false, pro: false, enterprise: true },
        { name: 'Staff Training', basic: false, pro: true, enterprise: true },
        { name: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-space-grotesk text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Flexible Pricing for Every Stage
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your healthcare facility's needs. Special pricing available for early pilot partners.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Flexible pricing for early pilot partners · Contact us for custom quotes</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 p-8 rounded-2xl border-2 ${
                  plan.highlight
                    ? 'border-blue-500 shadow-2xl scale-105'
                    : 'border-slate-200 dark:border-slate-700'
                } transition-all hover:shadow-xl`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {plan.subtitle}
                  </p>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-2`}>
                    {plan.price}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className={`mt-1 w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:shadow-xl'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  Contact for Pilot Pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-space-grotesk text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Detailed Feature Comparison
          </h2>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left p-4 font-space-grotesk font-semibold text-slate-900 dark:text-white">
                      Features
                    </th>
                    <th className="text-center p-4 font-space-grotesk font-semibold text-slate-900 dark:text-white">
                      Basic
                    </th>
                    <th className="text-center p-4 font-space-grotesk font-semibold text-blue-600 dark:text-blue-400">
                      Professional
                    </th>
                    <th className="text-center p-4 font-space-grotesk font-semibold text-slate-900 dark:text-white">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIdx) => (
                    <>
                      <tr key={catIdx} className="bg-slate-50 dark:bg-slate-800">
                        <td colSpan={4} className="p-4 font-semibold text-sm text-slate-700 dark:text-slate-300">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="border-b border-slate-100 dark:border-slate-800">
                          <td className="p-4 text-sm text-slate-700 dark:text-slate-300">
                            {item.name}
                          </td>
                          <td className="p-4 text-center text-sm">
                            {typeof item.basic === 'boolean' ? (
                              item.basic ? (
                                <Check className="w-5 h-5 text-blue-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400">—</span>
                              )
                            ) : (
                              <span className="text-slate-700 dark:text-slate-300">{item.basic}</span>
                            )}
                          </td>
                          <td className="p-4 text-center text-sm bg-blue-50/50 dark:bg-blue-900/10">
                            {typeof item.pro === 'boolean' ? (
                              item.pro ? (
                                <Check className="w-5 h-5 text-blue-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400">—</span>
                              )
                            ) : (
                              <span className="text-slate-700 dark:text-slate-300 font-medium">{item.pro}</span>
                            )}
                          </td>
                          <td className="p-4 text-center text-sm">
                            {typeof item.enterprise === 'boolean' ? (
                              item.enterprise ? (
                                <Check className="w-5 h-5 text-blue-600 mx-auto" />
                              ) : (
                                <span className="text-slate-400">—</span>
                              )
                            ) : (
                              <span className="text-slate-700 dark:text-slate-300">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-teal-500 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We offer flexible pricing for pilot partners and can customize any plan to fit your specific needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-2xl transition-all"
          >
            <span>Contact Us for Pilot Pricing</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
