import {Box, Text, VStack} from "@chakra-ui/react";

const LenderBenefit = ({benefit}) => {
    return(
        <Box
            bg={'#ECEAF2'}
            borderRadius={'xl'}
            h={27}
            w={311}
            display={'flex'}
            alignItems={'center'}
            pl={17}
        >
            <Text fontSize={'1rem'} color={'#7B5BE4'} fontWeight={'bold'}> {benefit}</Text>
        </Box>
    )
}
export const Benefits = ({benefits}) => {
    return(
        <VStack
            fontSize={'14px'}
            fontWeight={'medium'}
            lineHeight={'21.79px'}
            align={'left'}
            pb={'0.375rem'}
            mt={'26px'}
            spacing={'1.25rem'}
        >
            { benefits.map((lenderBenefit, index) => {
                return( <LenderBenefit key={index} benefit={ lenderBenefit } /> )
            })}
        </VStack>
    )
}