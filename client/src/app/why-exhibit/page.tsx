import React from 'react';
import PageHeading from '@/components/PageHeading';
import RegistrationButton from '@/components/RegistrationButton';

export default function WhyExhibitPage() {
  const marketExpansionDetails = [
    {
      id: 'high-growth-buyer-base',
      title: "Tap into a high-growth buyer base in emerging cities of Tier 2 & Tier 3",
      description: "Access untapped markets with high growth potential",
      iconUrl: "/assets/graph-up.png",
      bgColor: "bg-white",
      detailedContent: {
        overview: "Emerging cities like Indore, Nagpur, Surat, Nashik, and Coimbatore are witnessing a surge in disposable income, digital adoption, and aspiration-driven consumption. These Tier 2 & Tier 3 markets are increasingly becoming hotspots for brands looking to expand beyond saturated metros.",
        keyPoints: [
          "Unlock your brand's potential beyond the metros.",
          "Access to rapidly growing middle-class population",
          "Higher conversion rates due to less market saturation",
          "Growing digital connectivity and online purchasing power",
          "Increasing willingness to spend on premium travel experiences"
        ],
        statistics: [
          "40% growth in disposable income in Tier 2/3 cities over the last 5 years",
          "60% of India's internet users now come from smaller cities",
          "Travel spending in Tier 2/3 cities expected to grow by 25% annually"
        ]
      }
    },
    {
      id: 'exclusive-meetings',
      title: "Pre-scheduled Exclusive meetings with Top B2C Producers",
      description: "Connect directly with industry leaders",
      iconUrl: "/assets/globe-people.png",
      bgColor: "bg-[rgba(38,64,101,0.18)]",
      detailedContent: {
        overview: "Benefit from pre-scheduled, exclusive meetings with top B2C producers who matter to your growth. These focused interactions save time and drive meaningful outcomes. Skip the guesswork — connect with the right people, right away.",
        keyPoints: [
          "Strategic Meetings: Pre-Scheduled for Impact.",
          "One-on-one meetings with verified decision makers",
          "Customized appointment scheduling based on your business needs",
          "Direct access to key industry influencers and buyers",
          "Structured meeting formats to maximize productivity",
          "Follow-up support to ensure continued relationship building"
        ],
        statistics: [
          "85% of exhibitors secure new partnerships through pre-scheduled meetings",
          "Average of 12-15 qualified meetings per exhibitor",
          "90% meeting attendance rate due to pre-qualification process"
        ]
      }
    },
    {
      id: 'verified-decision-makers',
      title: "Engage with 300+ verified decision-makers",
      description: "Network with qualified industry professionals",
      iconUrl: "/assets/user-tick.png",
      bgColor: "bg-white",
      detailedContent: {
        overview: "Engage directly with 300+ verified decision-makers actively seeking new partnerships and solutions. Build valuable connections that translate into real business opportunities. Skip the noise and focus on high-impact conversations.",
        keyPoints: [
          "Real People. Real Power. Real Business.",
          "Verified credentials and business authority",
          "Active buyers with immediate purchasing intent",
          "Representatives from diverse travel industry segments",
          "Geographic diversity covering multiple regional markets",
          "Quality over quantity approach to attendee selection"
        ],
        statistics: [
          "300+ pre-verified decision makers attending",
          "Average budget authority of ₹50 lakhs+ per attendee",
          "Representatives from 15+ states across India"
        ]
      }
    },
    {
      id: 'less-saturated-market',
      title: "Position your brand in a less-saturated, yet high-potential market",
      description: "Stand out in emerging travel markets",
      iconUrl: "/assets/hand-speaker.png",
      bgColor: "bg-[rgba(153,195,190,0.33)]",
      detailedContent: {
        overview: "While metros are overcrowded with competition, Tier 2 & Tier 3 cities offer a blue ocean of opportunities. Position your brand as a pioneer in these high-growth markets and enjoy first-mover advantages with better brand recall and customer loyalty.",
        keyPoints: [
          "First-mover advantage in emerging markets",
          "Reduced competition compared to metro markets",
          "Higher brand visibility and recall",
          "Better cost-to-acquisition ratios",
          "Opportunity to establish market leadership early",
          "Less price-sensitive customer segments"
        ],
        statistics: [
          "60% less competition in Tier 2/3 cities compared to metros",
          "3x higher brand recall in less saturated markets",
          "40% better customer acquisition costs"
        ]
      }
    },
    {
      id: 'curated-professional-event',
      title: "Be part of a curated, professional event",
      description: "Join an exclusive industry gathering",
      iconUrl: "/assets/group.png",
      bgColor: "bg-white",
      detailedContent: {
        overview: "Join a carefully curated, professional event designed for serious business networking. Every attendee is vetted, every interaction is meaningful, and every moment is optimized for business growth. Experience the difference of quality over quantity.",
        keyPoints: [
          "Carefully vetted attendee list",
          "Professional event management and coordination",
          "Industry-specific focus and expertise",
          "Structured networking opportunities",
          "Quality infrastructure and facilities",
          "Dedicated support staff throughout the event"
        ],
        statistics: [
          "98% attendee satisfaction rate",
          "100% business-focused attendee base",
          "Zero walk-in registrations - all pre-qualified"
        ]
      }
    },
    {
      id: 'post-exhibition-support',
      title: "Post Exhibition Support, Less said than done",
      description: "Comprehensive follow-up assistance",
      iconUrl: "/assets/hand-bond.png",
      bgColor: "bg-[rgba(38,64,101,0.23)]",
      detailedContent: {
        overview: "Our commitment doesn't end when the exhibition closes. We provide comprehensive post-event support to help you convert connections into contracts. From follow-up coordination to ongoing relationship management, we ensure your exhibition investment continues to deliver returns.",
        keyPoints: [
          "Dedicated post-event relationship management",
          "Follow-up coordination with potential partners",
          "Lead nurturing and conversion support",
          "Continued networking facilitation",
          "Performance analytics and ROI reporting",
          "Ongoing business development assistance"
        ],
        statistics: [
          "75% of connections result in follow-up meetings",
          "50% conversion rate from leads to partnerships",
          "6-month post-event support included"
        ]
      }
    },
    {
      id: 'social-media-campaigns',
      title: "Extensive Social Media Campaigns with your Branding in the key regions",
      description: "Amplify your reach through targeted marketing",
      iconUrl: "/assets/social.png",
      bgColor: "bg-white",
      detailedContent: {
        overview: "Leverage our extensive social media campaigns featuring your branding across key regional markets. Our targeted digital marketing approach ensures maximum visibility and engagement with your ideal audience, extending your reach far beyond the exhibition hall.",
        keyPoints: [
          "Multi-platform social media promotion",
          "Targeted campaigns in specific regional markets",
          "Co-branded content featuring your business",
          "Pre, during, and post-event digital marketing",
          "Influencer partnerships in travel industry",
          "Performance tracking and analytics"
        ],
        statistics: [
          "500K+ social media impressions per campaign",
          "15+ regional markets covered",
          "60% increase in brand awareness post-campaign"
        ]
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeading 
        heading="Why Exhibit at TREx?"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {marketExpansionDetails.map((section, index) => (
          <section 
            key={section.id}
            id={section.id}
            className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 lg:py-16 scroll-mt-20"
          >
            <div className={`${section.bgColor} rounded-3xl shadow-lg w-full max-w-6xl border border-gray-200`}>
              <div className="p-6 sm:p-8 lg:p-12 xl:p-16">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8 lg:mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C88652] p-3 sm:p-4 flex items-center justify-center">
                      <div 
                        className="w-full h-full bg-contain bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${section.iconUrl})`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#264065] leading-tight mb-3 sm:mb-4">
                      {section.title}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                      {section.detailedContent.overview}
                    </p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
                  {/* Key Points */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-4 lg:mb-6">Key Benefits</h3>
                    <ul className="space-y-3 lg:space-y-4">
                      {section.detailedContent.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#C88652] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Statistics */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#264065] mb-4 lg:mb-6">Key Statistics</h3>
                    <div className="space-y-4 lg:space-y-6">
                      {section.detailedContent.statistics.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gradient-to-r from-[#264065] to-[#1a2d47] rounded-xl p-4 sm:p-6 text-white">
                          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                            {stat}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        {/* <section className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 lg:py-16">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-6xl border border-gray-200">
            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#264065] mb-4 sm:mb-6">
                Ready to Expand Your Reach?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Join TREx and unlock the potential of India's fastest-growing travel markets. 
                Connect with qualified buyers, build strategic partnerships, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <RegistrationButton className="w-full sm:w-auto bg-gradient-to-r from-[#264065] to-[#1a2d47] hover:from-[#C88652] hover:to-[#b8763f] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Register as Exhibitor
                </RegistrationButton>
                <button className="w-full sm:w-auto border-2 border-[#264065] text-[#264065] hover:bg-[#264065] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
} 