import { ApolloWrapper } from './ApolloWrapper';
import Navbar from './Navbar';
import StoreProvider from "./StoreProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
<StoreProvider>
    <html lang="en">
      <body>
          <Navbar />
        <ApolloWrapper>
          <div className='pt-20 flex justify-center'>
          {children}
          </div>
          </ApolloWrapper>
      </body>
    </html>
</StoreProvider>
  );
}    
