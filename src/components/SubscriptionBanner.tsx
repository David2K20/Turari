'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs: FAQItem[] = [
    {
      question: 'How should I store my fragrances?',
      answer: 'Store your fragrances in a cool, dry place away from direct sunlight and heat. Keep bottles upright and avoid temperature fluctuations to preserve the scent integrity and longevity.'
    },
    {
      question: 'What makes Turari fragrances unique?',
      answer: 'Each Turari fragrance is carefully crafted with premium ingredients and designed to tell a story. We focus on creating distinctive scent profiles that reflect sophistication and individual character.'
    },
    {
      question: 'How long do your fragrances typically last?',
      answer: 'Our fragrances are designed for lasting wear. Most of our scents provide 6-8 hours of projection, with some of our intense formulations lasting up to 12 hours depending on skin type and application.'
    },
    {
      question: 'Do you offer fragrance samples?',
      answer: 'Currently, we focus on our curated full-size collection. However, we provide detailed scent descriptions and notes to help you make the perfect choice for your personal style.'
    },
    {
      question: 'What is the best way to apply fragrance?',
      answer: 'Apply fragrance to pulse points such as wrists, behind ears, and at the base of your throat. Spray from 6 inches away and avoid rubbing the fragrance into your skin to preserve the scent composition.'
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-luxury text-3xl md:text-4xl font-medium text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-base text-secondary">
            Common questions about our fragrances, shipping, and policies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index)
            return (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-inter font-medium text-primary pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-secondary transform transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="font-inter text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
