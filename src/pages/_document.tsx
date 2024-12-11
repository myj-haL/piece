/* eslint-disable no-useless-escape */

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const SITE_NAME = 'PIECE';
const SITE_TITLE = '국내 최초의 현물자산 조각투자 플랫폼 PIECE';
const SITE_DESCRIPTION = '국내 최초의 현물자산 조각투자 플랫폼 PIECE';
const SITE_IMAGE = '/og.png';

const GOOGLE_ANALYTICS_ID = 'G-입력해주세요';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    //_middleware.ts 파일로 처리
    // redirectIEtoEdge() {
    //     return `
    //   if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    //     window.location = 'microsoft-edge:' + window.location;
    //     setTimeout(function() {
    //       window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
    //     }, 1000); // 1초 후에 리디렉션
    //   }
    // `;
    // }

    render() {
        return (
            <Html>
                <Head>
                    {/* <script dangerouslySetInnerHTML={{ __html: this.redirectIEtoEdge() }} /> */}

                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                        rel="stylesheet preload"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Cantarell:wght@400;700&display=swap"
                        rel="stylesheet preload"
                    />
                    <link
                        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
                        rel="stylesheet preload"
                        type="text/css"
                    />

                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    {/* <link rel="manifest" href="/site.webmanifest" /> */}
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff"></meta>
                    <meta name="naver-site-verification" content="99b81d850b8225bb68703a7be56fe4feafe11698" />
                    <meta name="google-site-verification" content="f7xaBHdq9VZdEfsJ3-3zv-WhHDWS6WlnVDUego2__LA" />
                    <meta name="description" content={SITE_DESCRIPTION} />
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content={SITE_NAME} />
                    <meta property="og:title" content={SITE_TITLE} />
                    <meta property="og:description" content={SITE_DESCRIPTION} />
                    <meta property="og:image" content={SITE_IMAGE} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content={SITE_NAME} />
                    <meta name="twitter:title" content={SITE_TITLE} />
                    <meta name="twitter:description" content={SITE_DESCRIPTION} />
                    <meta name="twitter:image" content={SITE_IMAGE} />
                    <meta name="format-detection" content="telephone=no, address=no, email=no" />
                    {/* 페이스북 픽셀코드  */}
                    <meta name="facebook-domain-verification" content="63m4kh5jlzplu52x81ur6x4ea3jm00" />

                    <link rel="shortcut icon" href="/favicon.ico" />

                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                    ></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
                `,
                        }}
                    />

                    {/* <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script> */}
                    {/* <link rel="preload" href="//wcs.naver.net/wcslog.js" as="script"></link> */}
                    <link rel="preload" href="//wcs.naver.net/wcslog.js" as="script" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "9e26f43479cf90";
            if(window.wcs) {
            wcs_do();
            };
                `,
                        }}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '378790997702587');
              fbq('track', 'PageView');
                `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
