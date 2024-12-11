import { Box, Link, Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import style from './index.module.css';
import { TCommCode, useTermCommCodesQuery } from '@/generated/graphql';
import { agreement, companyInfo, customer, snsList } from './companyInfo';

import FootSlide from './FootSlide';
import Image from 'next/image';
import NextLink from 'next/link';
import Popup from '@/components/Popup';
import { menuList } from '../menuList';

const Footer = () => {
    const { data } = useTermCommCodesQuery();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <div className={style.container}>
                <div className={style.inner}>
                    <div className={style.top}>
                        <div className={style.left}>
                            <h2 className={style.big_title}>(주)바이셀스탠다드</h2>
                            <ul className={style.company_info}>
                                {companyInfo.map(item => (
                                    <li className={style.info_item} key={item.id}>
                                        {item.title && <span className={style.title}>{item.title}</span>}
                                        <span className={style.content}>{item.content}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={style.right}>
                            <ul className={style.menu}>
                                {menuList.map(item => (
                                    <li className={style.menu_list} key={item.id}>
                                        <h2 className={style.one_depth}>{item.oneDepth}</h2>
                                        <ul className={style.depth_menu}>
                                            {item.twoDepth.map(subItem => (
                                                <li className={style.depth_menu_list} key={subItem.id}>
                                                    <NextLink className={style.menu_link} href={subItem.link}>
                                                        {subItem.content}
                                                    </NextLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={style.middle}>
                        <h2 className={style.big_title} style={{ marginBottom: '16px' }}>
                            고객센터
                        </h2>
                        <ul className={style.customer_list}>
                            {customer.map(item => (
                                <li className={style.customer_item} key={item.id}>
                                    {item.id === 2 ? (
                                        <>
                                            <span className={style.call}>
                                                <p className={style.left}>{item.left}</p>
                                                <p className={style.right}>{item.right}</p>
                                            </span>
                                            <span className={style.call}>
                                                <p className={style.left}>{item.faxTitle}</p>
                                                <p className={style.right}>{item.faxInfo}</p>
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className={style.left}>{item.left}</span>
                                            <span className={style.right}>{item.right}</span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={style.foot}>
                        <ul className={style.agreement}>
                            <li className={style.agreement_item}>
                                <Link
                                    className={style.agreement_link}
                                    onClick={() => window.open('https://buysellstandards.com/', '_blank')}
                                >
                                    회사소개
                                </Link>
                            </li>
                            {data?.termCommCodes?.tempCommCodeArray?.map((item: TCommCode) => (
                                <li
                                    className={style.agreement_item}
                                    key={item?.code_id}
                                    style={item?.code_id === 'CON1601' ? { fontWeight: 600 } : {}}
                                >
                                    <NextLink
                                        className={style.agreement_link}
                                        href={`${process.env.NEXT_PUBLIC_HOME_URL}/terms?tab=${item?.code_id || '-'}`}
                                        target="_blank"
                                    >
                                        {item.code_name}
                                    </NextLink>
                                </li>
                            ))}
                            {/* {agreement.map(item => (
                            <li className={style.agreement_item} key={item.id}>
                                <NextLink className={style.agreement_link} href={item.link}>
                                    {item.name}
                                </NextLink>
                            </li>
                        ))} */}
                        </ul>

                        <div className={style.sns_box}>
                            <p className={style.copyright}>ⓒ Buysell Standards. All rights reserved.</p>

                            <ul className={style.sns_list}>
                                {snsList.map(item => (
                                    <li key={item.id}>
                                        {item?.alt === 'instagram' ? (
                                            <a
                                                className={style.sns_link}
                                                onClick={() => {
                                                    onOpen();
                                                }}
                                            >
                                                <Image src={item.img} alt={item.alt} />
                                            </a>
                                        ) : (
                                            <NextLink className={style.sns_link} href={item.link}>
                                                <Image src={item.img} alt={item.alt} />
                                            </NextLink>
                                        )}
                                        {/* <NextLink className={style.sns_link} href={item.link}>
                                        <Image src={item.img} alt={item.alt} />
                                    </NextLink> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <FootSlide />
                </div>
            </div>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Popup />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Footer;
