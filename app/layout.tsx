
'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import './styles/scss/globals.scss';


export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body >
        <ChakraProvider>
        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
