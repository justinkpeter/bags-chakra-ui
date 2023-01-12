import {Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Box, useMediaQuery} from '@chakra-ui/react'
import { Insights } from "./Insights";
import { CardTag } from "./CardTag";
import {useEffect, useState} from "react";

/**
 * props: {
 *     company: {
 *         name: String
 *         location: String
 *     }
 *     daysTillFunding : Number
 *     loanAmount:{
 *         max: Number
 *         min: Number
 *     }
 * }
 */

export function Overview(props) {

    const [smallScreen] = useMediaQuery("(max-width: 600px)");
    const [mediumScreen] = useMediaQuery("(max-width: 900px)");
    const [largeScreen] = useMediaQuery("(min-width: 900px)");

    const [titleFontSize, setTitleFontSize] = useState('1.5rem');

    useEffect(() => {
        if(smallScreen){
            setTitleFontSize('1rem');
        }
        else if(mediumScreen){
            setTitleFontSize('1.25rem');
        }
        else{
            setTitleFontSize('1.5rem');
        }
    }, [smallScreen, mediumScreen, largeScreen]);

    return (
        <Card
            pos={'relative'}
            top={'-13.438rem'}
            bg={'white'}
            w={'27rem'}
            variant={'outline'}
            borderWidth={'0.141rem'}
            borderColor={'#868686'}
            boxShadow='lg'
            borderRadius={'0.75rem'}
            zIndex={'10'}
            p={0}
        >
            <Box pl={'25px'}>
                <CardTag tag={props.tag} />
                <CardHeader top={0} p={0} pt={'18px'} >
                    <Heading fontSize={titleFontSize}  size='md'> Revenue Based Financing </Heading>
                </CardHeader>
                <CardBody p={0} pt={'0.5rem'} pb={'1.430rem'}>
                    <Insights company={props.companyName} location={props.location} daysTillFunding={props.daysTillFunding} />
                </CardBody>
            </Box>


            <Divider borderWidth={'1px'} />
            <Box pl={'25px'}>
                <CardFooter px={0} py={'0.937rem'}>
                    <Text as={'b'} color={'#7B5BE4'} fontSize={'1.375rem'}>
                        ${props.minLoanAmount.toLocaleString()} - ${props.maxLoanAmount.toLocaleString()}
                    </Text>
                </CardFooter>
            </Box>

        </Card>
    );
}