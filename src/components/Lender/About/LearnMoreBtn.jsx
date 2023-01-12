import { Button} from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import {useEffect, useState} from "react";


export const LearnMoreBtn = () => {

    const bagsNormal = 'black'
    const bagsDesktop = 'blue'

    const [isLargerThan1350] = useMediaQuery('(min-width: 1350px)')
    const [buttonVariant, setButtonVariant] = useState(bagsNormal)


    useEffect(() => {
        if(isLargerThan1350){
            setButtonVariant(bagsDesktop)
        }
        else{
            setButtonVariant(bagsNormal)
        }
    }, [isLargerThan1350])

    return (
        <>
            <Button
                position='absolute'
                left={'17.938rem'}
                h={'2rem'}
                p={'10px 12px'}
                bg={buttonVariant}
                color={'white'}
                _hover={{ bg: '#7B5BE4' }}
            >
                Learn More
            </Button>

        </>
    );
}