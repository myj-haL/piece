import { useEffect, useState } from 'react';

import { Position } from './../../../node_modules/next/node_modules/postcss/lib/node.d';
import { display } from './../../hook/useScreenSize';
import { mode } from '@chakra-ui/theme-tools';
import useScreenSize from '@/hook/useScreenSize';

const styles = {
    global: (props: any) => ({
        body: {
            fontFamily: 'Pretendard ,sans-serif',
            // fontFamily: 'Noto Sans KR, sans-serif',
            color: mode('#434242', '#FFFFFF')(props),
            bg: mode('#FFFFFF', '#363636')(props),
            overflowX: 'hidden',
            // innerHeight: '100%',
            height: '100%',
        },
        input: {
            fontSize: ['16px', '14px', '15px'],
        },
        '#__next': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            // minHeight: '100vh',
        },
        '.css-0': {
            height: '100%',
        },
        'ul, ol': {
            listStyle: 'none',
            padding: '0',
            margin: '0',
        },
        '.partner-slide .swiper-pagination': {
            position: 'relative',
            marginTop: '32px',
        },
        '.partner-slide .swiper-pagination-bullet': {
            width: '8px',
            height: '8px',
            margin: '0 8px !important',
            background: '#fff',
            opacity: '0.2',
        },
        '.partner-slide .swiper-pagination-bullet-active': {
            background: '#fff',
            opacity: '1',
        },
        '.partner-slide .swiper-scrollbar': {
            display: 'none',
        },
        '.main-first-slide .swiper-pagination': {
            backgroundColor: '#fff',
            width: 'fit-content',
            borderRadius: '16px 16px 0 0 ',
            padding: '4px 10px',
            left: '50%',
            bottom: '-1px',
            transform: 'translateX(-50%)',
        },
        '.main-first-slide .swiper-pagination-bullet': {
            margin: '0 8px !important',
            background: '#292A2E',
            opacity: '0.2',
        },
        '.main-first-slide .swiper-pagination-bullet-active': {
            opacity: '1',
        },
        '.main-first-slide .swiper-pagination:before, .main-first-slide .swiper-pagination:after': {
            content: '""',
            display: 'block',
            width: '16px',
            height: '16px',
            position: 'absolute',
            bottom: '0',
            left: '-16px',
            background: `url('images/main/outline-border-left.svg') no-repeat`,
            backgroundSize: 'cover',
        },
        '.main-first-slide .swiper-pagination:after': {
            left: 'auto',
            right: '-16px',
            background: `url('images/main/outline-border-right.svg')`,
        },
        '@media screen and (min-width:768px)': {
            '.main-first-slide .swiper-pagination': {
                top: '-1px',
                right: '0',
                bottom: 'auto',
                left: 'initial',
                transform: 'rotate(180deg)',
                borderRadius: '0 24px 0 0px',
                padding: '11px 14px',
            },
            '.main-first-slide .swiper-pagination:before, .main-first-slide .swiper-pagination:after': {
                width: '24px',
                height: '24px',
            },
            '.main-first-slide .swiper-pagination:after': {
                right: '-24px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            },
            '.main-first-slide .swiper-pagination:before': {
                top: '-24px',
                transform: 'rotate(90deg)',
                left: '0',
            },
            '.main-first-slide .swiper-pagination-bullet': {
                width: '10px',
                height: '10px',
                margin: '0 10px !important',
            },
        },
        '.swiper-free-mode > .swiper-wrapper': {
            transitionTimingFunction: 'linear',
        },
        '.swiper-free-mode .swiper-slide': {
            width: 'auto',
        },
        '.main-first-slide .swiper-pagination': {
            backgroundColor: '#fff',
            width: 'fit-content',
            borderRadius: '16px 16px 0 0 ',
            padding: '4px 10px',
            left: '50%',
            bottom: '-1px',
            transform: 'translateX(-50%)',
        },
        '.main-first-slide .swiper-pagination-bullet': {
            margin: '0 8px !important',
            background: '#292A2E',
            opacity: '0.2',
        },
        '.main-first-slide .swiper-pagination-bullet-active': {
            opacity: '1',
        },
        '.main-first-slide .swiper-pagination:before, .main-first-slide .swiper-pagination:after': {
            content: '""',
            display: 'block',
            width: '16px',
            height: '16px',
            position: 'absolute',
            bottom: '0',
            left: '-16px',
            background: `url('images/main/outline-border-left.svg') no-repeat`,
            backgroundSize: 'cover',
        },
        '.main-first-slide .swiper-pagination:after': {
            left: 'auto',
            right: '-16px',
            background: `url('images/main/outline-border-right.svg')`,
        },
        '@media screen and (min-width:768px)': {
            '.main-first-slide .swiper-pagination': {
                top: '-1px',
                right: '0',
                bottom: 'auto',
                left: 'initial',
                transform: 'rotate(180deg)',
                borderRadius: '0 24px 0 0px',
                padding: '11px 14px',
            },
            '.main-first-slide .swiper-pagination:before, .main-first-slide .swiper-pagination:after': {
                width: '24px',
                height: '24px',
            },
            '.main-first-slide .swiper-pagination:after': {
                right: '-24px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            },
            '.main-first-slide .swiper-pagination:before': {
                top: '-24px',
                transform: 'rotate(90deg)',
                left: '0',
            },
            '.main-first-slide .swiper-pagination-bullet': {
                width: '10px',
                height: '10px',
                margin: '0 10px !important',
            },
        },
        '.product-top-slide .swiper-pagination' : {
            position : 'relative',
            margin:'32px 0',
            bottom:'0'
        },
        '.product-top-slide .swiper-pagination-bullet' : {
            margin:'0 8px !important'
        }
    }),
};

export default styles;
