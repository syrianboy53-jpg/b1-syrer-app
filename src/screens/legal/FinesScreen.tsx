import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const FinesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const article = legalArticles.find(a => a.id === 'fines')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
