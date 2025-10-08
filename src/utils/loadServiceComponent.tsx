
import React from 'react';

const loadServiceComponent = (serviceName: string) => {
  switch (serviceName) {
    case 'etude-et-conseils':
      return React.lazy(() => import('src/components/landingpage/features/services/EtudeEtConseils'));
    case 'transformation-digital':
      return React.lazy(() => import('src/components/landingpage/features/services/TransformationDigital'));
    case 'digital-factory':
      return React.lazy(() => import('src/components/landingpage/features//services/DigitalFactory'));
    case 'cybersecurite':
      return React.lazy(() => import('src/components/landingpage/features/services/Cybersecurite'));
    case 'developpement-informatique':
      return React.lazy(() => import('src/components/landingpage/features//services/DeveloppementInformatique'));
    default:
      return null;
  }
};

export default loadServiceComponent;
