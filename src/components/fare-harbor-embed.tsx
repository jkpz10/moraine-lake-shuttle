'use client';

import { useEffect } from 'react';

interface FareHarborEmbedProps {
  type: 'items' | 'calendar';
  flowId?: string; // Only needed for items
}

const FareHarborEmbed: React.FC<FareHarborEmbedProps> = ({ type, flowId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://fareharbor.com/embeds/script/${type}/morainelakelouise/?full-items=yes&fallback=simple${
      type === 'items' && flowId ? `&flow=${flowId}` : ''
    }`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to avoid duplicate scripts
    };
  }, [type, flowId]);

  return <div id="fareharbor-embed"></div>;
};

export default FareHarborEmbed;
