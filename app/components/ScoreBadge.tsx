interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const getBadgeStyles = (score: number) => {
    if (score > 70) {
      return {
        bgClass: 'bg-green-100',
        textClass: 'text-green-600',
        label: 'Strong'
      };
    } else if (score > 49) {
      return {
        bgClass: 'bg-yellow-100',
        textClass: 'text-yellow-600',
        label: 'Good Start'
      };
    } else {
      return {
        bgClass: 'bg-red-100',
        textClass: 'text-red-600',
        label: 'Needs Work'
      };
    }
  };

  const { bgClass, textClass, label } = getBadgeStyles(score);

  return (
    <div className={`${bgClass} rounded-full px-3 py-1 inline-block`}>
      <p className={`${textClass} text-sm font-semibold`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
