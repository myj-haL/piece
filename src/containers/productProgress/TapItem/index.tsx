import { Button } from '@chakra-ui/react';

const TabItem = ({
  tab, onClickTab, active,
}) => {
  return (
    <Button
      variant="ghost"
      position={'relative'}
      color={active ? "#292A2E" : "#B8BCC8"}
      height={'100%'}
      fontSize={18}
      fontWeight={600}
      whiteSpace={'nowrap'}
      padding={'16px 0'}
      borderRadius={0}
      _after={active ? {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '2px',
        backgroundColor: '#292A2E',
      } : ''}
      _active={{
        color: '#292A2E',
        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '2px',
          backgroundColor: '#292A2E',
        },
      }}
      _hover={{ color: '#292A2E' }}
      onClick={() => { onClickTab(tab) }}
    >
      {tab.title}
    </Button>
  );
};

export default TabItem;
