import Image from "next/image";
import "styles/globals.scss";
import styles from "./layout.module.scss";

import backgroundTV from "assets/tv.svg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.container}>
          <Image
            src={backgroundTV}
            alt=""
            width={1920}
            height={1080}
            className={styles.bgImage}
          />
          <div className={styles.header}>
            <p>toshi00.dev</p>
          </div>
          <div className={styles.main}>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
