import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const AfterDivorceScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'after-divorce')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
