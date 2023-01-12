import {Tag} from "@chakra-ui/react";

export const CardTag = ({tag}) => {
    return(
        <Tag
            pos={'absolute'}
            top={'-12px'}
            left={'17.938rem'}
            h={'1.5rem'}
            w={'7.5rem'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            bg={'#7B5BE4'}
            color={'white'}
            fontWeight={'semibold'}
            fontSize={'14px'}
            lineHeight={'20px'}
        >
            {tag}
        </Tag>
    )
}