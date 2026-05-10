import React from 'react';
import { legalArticles } from '../../data/legalContent';
import { LegalDetailScreen } from './LegalDetailScreen';

export const PoliceMailScreen = ({ navigation }: any) => {
  const article = legalArticles.find((a) => a.id === 'police-mail')!;
  return <LegalDetailScreen article={article} navigation={navigation} />;
};
