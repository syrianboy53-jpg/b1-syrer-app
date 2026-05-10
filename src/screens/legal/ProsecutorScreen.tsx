import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const ProsecutorScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const article = legalArticles.find(a => a.id === 'prosecutor')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
