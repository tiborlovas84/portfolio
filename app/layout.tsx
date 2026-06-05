import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicPath(path: string) {
  return `${basePath}${path}`;
}

export const metadata: Metadata = {
  title: "Tibor Lovas - Product Designer",
  description:
    "Tibor is a remote native Senior Product Designer who joins teams to build boring innovative products and experiences.",
  openGraph: {
    title: "Tibor Lovas - Product Designer",
    description:
      "Tibor is a remote native Senior Product Designer who joins teams to build boring innovative products and experiences.",
    images: [
      "https://uploads-ssl.webflow.com/544ad10eda22980168d6ddfd/5f7878710d3885fcb4fa402a_OG%20Image.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tibor Lovas - Product Designer",
    description:
      "Tibor is a remote native Senior Product Designer who joins teams to build boring innovative products and experiences.",
    images: [
      "https://uploads-ssl.webflow.com/544ad10eda22980168d6ddfd/5f7878710d3885fcb4fa402a_OG%20Image.png",
    ],
  },
  icons: {
    icon: publicPath("/webflow/images/favicon.png"),
    apple: publicPath("/webflow/images/webclip.png"),
  },
};

const webfontLoader = `
  WebFont.load({
    google: {
      families: [
        "Oswald:200,300,400,500,600,700",
        "Inter:300,400,500,600,700",
        "Poppins:300,400,500,600,700"
      ]
    }
  });
`;

const webflowClasses = `
  !function(o,c){
    var n=c.documentElement,t=" w-mod-";
    n.className+=t+"js";
    ("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")
  }(window,document);
`;

const googleAnalytics = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("set", "developer_id.dZGVlNj", true);
  gtag("js", new Date());
  gtag("config", "G-LGCNWB3M73");
`;

const googleTagManager = `
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});
    var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!="dataLayer"?"&l="+l:"";
    j.async=true;
    j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,"script","dataLayer","GTM-WGCXGMK6");
`;

const webflowRevealGuard = `
  window.setTimeout(function () {
    var body = document.body;
    if (window.getComputedStyle(body).opacity !== "0") return;
    body.style.transition = "filter 1000ms ease-out, opacity 1000ms ease-out";
    body.style.filter = "saturate(100%)";
    body.style.opacity = "1";
  }, 1400);
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-wf-page="65dce2997d439c1b47f84653"
      data-wf-site="6570531d0c28a8d6017f05a0"
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href={publicPath("/webflow/css/normalize.css")} />
        <link rel="stylesheet" href={publicPath("/webflow/css/webflow.css")} />
        <link rel="stylesheet" href={publicPath("/webflow/css/tiborlovas.webflow.css")} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          strategy="beforeInteractive"
        />
        <Script
          id="webfont-loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: webfontLoader }}
        />
        <Script
          id="webflow-classes"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: webflowClasses }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LGCNWB3M73"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleAnalytics }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: googleTagManager }}
        />
      </head>
      <body
        data-w-id="6570531d0c28a8d6017f05ac"
        style={{ filter: "saturate(0%)", opacity: 0 }}
        suppressHydrationWarning
      >
        {children}
        <script dangerouslySetInnerHTML={{ __html: webflowRevealGuard }} />
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6570531d0c28a8d6017f05a0"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        />
        <script src={publicPath("/webflow/js/webflow.js")} />
      </body>
    </html>
  );
}
