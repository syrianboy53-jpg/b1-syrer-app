import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const FalseAccusationsScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'false-accusations')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
