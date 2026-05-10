import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const PoliceScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const article = legalArticles.find(a => a.id === 'police')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
