import { Box, Heading } from "native-base"

import Master from '../assets/master.svg'

export function Card(){
    return(
        <Box
            h={48}
            w={80}
            background='#9500F6'
            borderRadius='21'
            shadow='5'
        >
            <Box mt={5} ml='233'>
                <Master />
            </Box>

            <Box ml={5} mt={20}>
                <Heading color='white' fontWeight='semibold'>
                    Calebe
                </Heading>
            </Box>
        </Box>
    )
}