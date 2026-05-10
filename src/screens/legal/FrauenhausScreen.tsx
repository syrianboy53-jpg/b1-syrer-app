import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const FrauenhausScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'frauenhaus')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
