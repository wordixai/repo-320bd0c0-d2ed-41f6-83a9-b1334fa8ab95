import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Check, X, Star, Zap, Crown, Music, Users, Calendar, BarChart3, MessageCircle, Phone } from 'lucide-react';

interface PricingPageProps {
  onSelectPlan?: (planId: string) => void;
}

export function PricingPage({ onSelectPlan }: PricingPageProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for emerging artists',
      icon: Music,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      borderColor: 'border-blue-200 dark:border-blue-800',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { name: 'Up to 100 fans', included: true },
        { name: '2 events per month', included: true },
        { name: 'Basic analytics', included: true },
        { name: '5 music tracks', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced fan segmentation', included: false },
        { name: 'Unlimited events', included: false },
        { name: 'Revenue tracking', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Priority support', included: false },
        { name: 'Custom branding', included: false },
        { name: 'API access', included: false }
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'For serious musicians & bands',
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950',
      borderColor: 'border-purple-200 dark:border-purple-800',
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        { name: 'Up to 5,000 fans', included: true },
        { name: 'Unlimited events', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Unlimited music tracks', included: true },
        { name: 'Revenue tracking', included: true },
        { name: 'Advanced fan segmentation', included: true },
        { name: 'Team collaboration (5 members)', included: true },
        { name: 'Email & chat support', included: true },
        { name: 'Custom branding', included: false },
        { name: 'Priority support', included: false },
        { name: 'API access', included: false },
        { name: 'White-label solution', included: false }
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For record labels & agencies',
      icon: Crown,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-950',
      borderColor: 'border-amber-200 dark:border-amber-800',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        { name: 'Unlimited fans', included: true },
        { name: 'Unlimited events', included: true },
        { name: 'Advanced analytics & reporting', included: true },
        { name: 'Unlimited music tracks', included: true },
        { name: 'Advanced revenue tracking', included: true },
        { name: 'Advanced fan segmentation', included: true },
        { name: 'Unlimited team collaboration', included: true },
        { name: 'Priority support & phone', included: true },
        { name: 'Custom branding', included: true },
        { name: 'API access', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Dedicated account manager', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time. Your data will remain accessible until the end of your billing period.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes! Students and emerging artists can get 50% off Professional plans with valid verification.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Your data security is our top priority. We use enterprise-grade encryption and comply with GDPR and other privacy regulations.'
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Fan Management',
      description: 'Advanced fan segmentation, interaction tracking, and engagement analytics'
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Complete event management from planning to post-event analytics'
    },
    {
      icon: BarChart3,
      title: 'Revenue Analytics',
      description: 'Track streaming, merchandise, and live performance revenue in real-time'
    },
    {
      icon: MessageCircle,
      title: 'Team Collaboration',
      description: 'Coordinate with band members, managers, and industry professionals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="text-yellow-300">Perfect Plan</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            From emerging artists to major labels, we have the right tools to help you manage and grow your music career.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-yellow-400"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-white/60'}`}>
              Annual
            </span>
            <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
              Save 20%
            </Badge>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/5 animate-pulse"></div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = isAnnual ? plan.monthlyPrice : null;
            
            return (
              <Card 
                key={plan.id} 
                className={`relative music-card hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'scale-105 border-primary shadow-xl' : ''
                } ${plan.borderColor}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-primary text-white px-4 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 rounded-2xl ${plan.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${plan.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="mt-6">
                    {price === 0 ? (
                      <div className="text-4xl font-bold">Free</div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-4xl font-bold">${price}</span>
                        <div className="text-left">
                          <div className="text-muted-foreground">/month</div>
                          {isAnnual && originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">
                              ${originalPrice}/mo
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full h-12 text-lg font-semibold ${
                      plan.popular 
                        ? 'gradient-primary text-white' 
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => onSelectPlan?.(plan.id)}
                  >
                    {plan.cta}
                  </Button>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      What's included:
                    </h4>
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive tools to manage every aspect of your music career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="music-card text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-20">
          <Card className="music-card bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <CardContent className="text-center p-12">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Perfect for record labels, management companies, and large music organizations requiring tailored features and dedicated support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Demo
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="music-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}