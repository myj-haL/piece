import { NextPageContext } from 'next';

const redirectIEtoEdge = () => {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        window.location.href = 'microsoft-edge:' + window.location.href;
        setTimeout(() => {
            window.location.href = 'https://go.microsoft.com/fwlink/?linkid=2135547';
        }, 1000); // 1초 후에 리디렉션
    }
};

const MyMiddleware = () => null;

MyMiddleware.getInitialProps = async ({ res, req }: NextPageContext) => {
    if (req && req.headers && req.headers['user-agent']) {
        const userAgent = req.headers['user-agent'];
        if (/MSIE \d|Trident.*rv:/.test(userAgent)) {
            if (res) {
                res.writeHead(302, {
                    Location: 'microsoft-edge:' + req.url,
                });
                res.end();
            } else {
                redirectIEtoEdge();
            }
        }
    }
    return {};
};

export default MyMiddleware;
