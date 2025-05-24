import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';

export default function LandingPage() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Features></Features>
    <CTA></CTA>
    </>
  );
}
