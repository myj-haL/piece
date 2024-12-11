// lib/gtag.js

export const GA_TRACKING_ID = 'xxxxxxxx';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, windowParam: Window) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label }: { action: string; category: string; label: string }) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
        });
    }
};
