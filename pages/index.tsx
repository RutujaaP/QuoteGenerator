import Head from "next/head";
import React, {useState} from 'react';
import Image from "next/image";
//import { Inter } from "next/font/google";
//import styles from "@/styles/Home.module.css";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";
import {BackgroundImage1,QuoteGeneratorCon,QuoteGeneratorInnerCon} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import {BackgroundImage2, FooterCon,FooterLink,RedSpan,QuoteGeneratorTitle,QuoteGeneratorSubTitle,GenerateQuoteButton,GenerateQuoteButtonText,QuoteGeneratorModalCon,QuoteGeneratorModalInnerCon} from "@/components/QuoteGenerator/QuoteGeneratorElements";
//const inter = Inter({ subsets: ["latin"] });

//import QuoteGeneratorModal from '@/components/QuoteGenerator/QuoteGeneratorElements'

//Assets ka import yaha hai
import Clouds1 from '@/assets/Clouds1.png'
import Clouds2 from '@/assets/Clouds2.png'
export default function Home() {
  
  const[numberOfQuotes,setNumberOfQuotes]=useState<Number|null>(0);  //Every time the page loads this value of 0 is set by default
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A Fun Project that generates quotes" /> //when u share link, u see this description and image
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/*  This is the Back ground of our Project */}

      {
        <GradientBackgroundCon>
          {/* Quote Generator Modal Pop-Up */}
        {/* <QuoteGeneratorModal
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuote}
          setProcessingQuote={setProcessingQuote}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
        />  */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

          
          <BackgroundImage1 src={Clouds1}
          height="300"
          alt="cloudybackground1"
          />

<BackgroundImage2 src={Clouds2}
          height="300"
          alt="cloudybackground2"
          />

<FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/RutujaaP" target="_blank" rel="noopener noreferrer">Rutuja </FooterLink>
          </>
        </FooterCon>

        </GradientBackgroundCon>
      }
    </>
  );
}
