import { Icon, Text, VStack, Box } from "@chakra-ui/react";
import { MapPinIcon } from "@heroicons/react/24/outline";

export const Insights = ({company, location, daysTillFunding}) => {
    return(
        <Box pt={'0.563rem'}>
            <VStack
                fontSize={'0.875rem'}
                fontWeight={'medium'}
                lineHeight={'21.79px'}
                align={'left'}
                spacing={'0.425rem'}
            >
                <Text h={'1.5rem'}> By {company} </Text>
                <Text h={'1.5rem'} display={'flex'} alignItems={'center'} rowGap={4}>
                    <Icon as={ MapPinIcon } boxSize={4} mr={'4px'}/>
                    {location}
                </Text>
                <Text h={'1.5rem'}> Get Funded in
                    <Text as={'b'}> {daysTillFunding} days </Text>
                </Text>
            </VStack>
        </Box>
    )
}