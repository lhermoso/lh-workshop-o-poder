// Type definitions for Google Analytics gtag
interface Window {
    gtag?: (
        command: 'event' | 'config' | 'set' | 'consent' | 'get',
        target: string,
        params?: {
            [key: string]: unknown;
        }
    ) => void;
}

declare const gtag: {
    (
        command: 'event' | 'config' | 'set' | 'consent' | 'get',
        target: string,
        params?: {
            [key: string]: unknown;
        }
    ): void;
}; 