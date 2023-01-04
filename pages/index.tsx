import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { EnterNameStep } from './../components/steps/EnterNameStep';
import { TwitterStep } from './../components/steps/TwitterStep';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
};

export default function Home() {
  const [step, setStep] = React.useState<number>(1);
  const Step = stepsComponents[step];

  return (
    <div>
      <Link href="https://www.youtube.com/watch?v=sqAkJf40Afo&list=PL0FGkDGJQjJEwzHLU7-sFyS46VVwlqK-0">
        <h2>Lesson YouTube</h2>
      </Link>
      <Step />
      <style jsx>{`
        h2 {
          background: #d99554;
        }
      `}</style>
    </div>
  );
}
