import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const JugendamtScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const article = legalArticles.find(a => a.id === 'jugendamt')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
