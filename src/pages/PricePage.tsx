import { PricingPage } from '@/components/PricingPage';
import { useNavigate } from 'react-router-dom';

const PricePage = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planId: string) => {
    console.log('Selected plan:', planId);
    // Here you would typically integrate with a payment processor
    // For now, we'll redirect to the main dashboard
    navigate('/', { replace: true });
  };

  const handleBackToDashboard = () => {
    navigate('/', { replace: true });
  };

  return (
    <PricingPage 
      onSelectPlan={handleSelectPlan}
      onBack={handleBackToDashboard}
      isStandalone={true}
    />
  );
};

export default PricePage;