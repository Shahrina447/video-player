import "./global.css";
export const metadata = {
    title: "Video Player App",
    
    description: " video player using Next.js ",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  