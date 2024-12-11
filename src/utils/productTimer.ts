import { Dispatch, SetStateAction } from 'react';

import moment from 'moment-timezone';

export const productTimer = ({
    recruitmentBeginDate,
    recruitmentEndDate,
    setCountdown,
}: {
    recruitmentBeginDate: string;
    recruitmentEndDate: string;
    setCountdown: Dispatch<
        SetStateAction<{
            countdownString: string;
            countdownType: 'PREOPEN' | 'OPEN' | 'END' | '';
        }>
    >;
}) => {
    const recruitmentBeginDateTargetDate = moment.tz(recruitmentBeginDate, 'YYYY-MM-DD HH:mm', 'Asia/Seoul');
    const recruitmentEndDateTargetDate = moment.tz(recruitmentEndDate, 'YYYY-MM-DD HH:mm', 'Asia/Seoul');
    const interval = setInterval(() => {
        console.log('실행중');

        const now = moment();
        const recruitmentBeginDateDiff = recruitmentBeginDateTargetDate.valueOf() - now.valueOf();
        if (recruitmentBeginDateDiff <= 0) {
            const recruitmentEndDateDiff = recruitmentEndDateTargetDate.valueOf() - now.valueOf();
            if (recruitmentEndDateDiff <= 0) {
                clearInterval(interval);
                setCountdown({
                    countdownString: `모집 마감되었어요`,
                    countdownType: 'END',
                });
            } else {
                const duration = moment.duration(recruitmentEndDateDiff);
                const days = Math.floor(duration.asDays()).toString().padStart(2, '0');
                const hours = duration.hours().toString().padStart(2, '0');
                const minutes = duration.minutes().toString().padStart(2, '0');
                const seconds = duration.seconds().toString().padStart(2, '0');

                if (days !== '00') {
                    setCountdown({
                        countdownString: `${days}일 ${hours}시간`,
                        countdownType: 'OPEN',
                    });
                } else {
                    if (hours !== '00') {
                        setCountdown({
                            countdownString: `${hours}시간 ${minutes}분`,
                            countdownType: 'OPEN',
                        });
                    } else {
                        if (minutes !== '00') {
                            setCountdown({
                                countdownString: `${minutes}분 ${seconds}초`,
                                countdownType: 'OPEN',
                            });
                        } else {
                            setCountdown({
                                countdownString: `${seconds}초`,
                                countdownType: 'OPEN',
                            });
                        }
                    }
                }
            }
        } else {
            const duration = moment.duration(recruitmentBeginDateDiff);

            const days = Math.floor(duration.asDays()).toString().padStart(2, '0');
            console.log(days);
            const hours = duration.hours().toString().padStart(2, '0');
            const minutes = duration.minutes().toString().padStart(2, '0');
            const seconds = duration.seconds().toString().padStart(2, '0');

            if (days !== '00') {
                setCountdown({
                    countdownString: `${days}일 ${hours}시간`,
                    countdownType: 'PREOPEN',
                });
            } else {
                if (hours !== '00') {
                    setCountdown({
                        countdownString: `${hours}시간 ${minutes}분`,
                        countdownType: 'PREOPEN',
                    });
                } else {
                    if (minutes !== '00') {
                        setCountdown({
                            countdownString: `${minutes}분 ${seconds}초`,
                            countdownType: 'PREOPEN',
                        });
                    } else {
                        setCountdown({
                            countdownString: `${seconds}초`,
                            countdownType: 'PREOPEN',
                        });
                    }
                }
            }
        }
    }, 1000);

    return () => {
        clearInterval(interval);
    };
};
