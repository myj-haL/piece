import { useQuery } from 'react-query';

export const changeTabtoCode = (tab: string) => {
    switch (tab) {
        case 'file':
            return 'BRT0103';
        case 'media':
            return 'BRT0102';
        case 'member':
            return 'BRT0301';
        case 'buy':
            return 'BRT0302';
        case 'division':
            return 'BRT0303';
        case 'etc':
            return 'BRT0304';
        default:
            return '';
    }
};
