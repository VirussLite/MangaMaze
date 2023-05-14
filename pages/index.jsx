import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import nav1 from "../pics/nav1.jpg";
import nav2 from "../pics/nav2.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const nav_link = ["Guideline", "faq", "contact us", "twitter", "discord"];

  return (
    <>
      <header className="header">
        <nav>
          <ol>
            {nav_link.map((ele, i) => {
              return (
                <Link key={i} className="h" href="/">
                  {ele}
                </Link>
              );
            })}
          </ol>
        </nav>
          <Image
            alt="kk"
            src={nav1}
            style={{
              position: "absolute",
              top: "12%",
              right: "2.8%",
            }}
            id="nav1"
          />
          <Image
            alt="kk"
            src={nav2}
            style={{
              position: "absolute",
              bottom: "4%",
              left: "2.8%",
            }}
            id="nav2"
          />
      </header>
    </>
  );
}
