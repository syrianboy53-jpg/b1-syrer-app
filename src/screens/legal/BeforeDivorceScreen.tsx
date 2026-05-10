import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const BeforeDivorceScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'before-divorce')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
