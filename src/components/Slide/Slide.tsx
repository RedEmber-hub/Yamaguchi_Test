import React from 'react';
import './Slide.scss';
import { SlideProps } from './Slide.type';

export default function Slide({ children }: SlideProps) {
  return <div className="slide">{children}</div>;
}
