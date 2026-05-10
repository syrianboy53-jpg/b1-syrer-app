import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const ChildRemovalScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'child-removal')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
