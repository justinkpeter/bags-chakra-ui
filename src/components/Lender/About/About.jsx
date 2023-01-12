import {
    Card,
    CardHeader,
    CardBody,
    Text,
    Heading,
    Box
} from '@chakra-ui/react'

import { LearnMoreBtn } from "./LearnMoreBtn";
import { Benefits } from "./Benefits";

export function About(props) {
    return (
        <Card
            pos='absolute'
            top={0}
            p={0}
            bg={'white'}
            w={'27rem'}
            pt={'63px'}
            variant={'outline'}
            borderWidth={'2.25px'}
            borderRadius={'0.75rem'}
            borderColor={'#868686'}
            zIndex={'base'}
        >
            <Box pl={'25px'}>
                <CardHeader display="flex" columnGap={12} p={0} pb={'1.063rem'}   alignItems={'baseline'}>
                    <Heading h={'30px'} size='md'> About the Lender </Heading>
                    <LearnMoreBtn />
                </CardHeader>
                <CardBody p={0} pb={'2.75rem'} pr={'34px'} >
                    <Text  textAlign={'left'}>
                        {props.description}
                    </Text>
                    <Benefits benefits={props.benefits} />
                </CardBody>
            </Box>
        </Card>
    );
}