import { VStack, Box } from "@chakra-ui/react";
import { About } from './About/About';
import { Overview } from './Overview/Overview';
export function Lender({data}) {
    return (
        <Box pos={'relative'} p={0}>
            <VStack spacing={0}>
                <Overview
                    tag={'Good Fit'}
                    companyName={data.companyName}
                    location={data.location}
                    daysTillFunding={data.daysTillFunding}
                    minLoanAmount={data.loan.minAmount}
                    maxLoanAmount={data.loan.maxAmount}
                />
                <About description={data.description} benefits={data.benefits}/>
            </VStack>
        </Box>
    );
}