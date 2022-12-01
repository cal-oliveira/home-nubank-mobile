import { Heading, HStack, Text, VStack } from "native-base"

import WalletIcon from '../assets/wallet.svg'

export function Wallet(){
    return(
        <VStack 
            h={32}
            w={80}
            background='#9500F6'
            borderRadius='21'
            shadow='4'
            mt={5}
        >
            <VStack px={5}>
                <HStack alignItems='center' justifyContent='space-between'  mt={5}>
                    <Text color='white' fontFamily='body' fontWeight='semibold'>
                        Saldo disponível
                    </Text>
                    <WalletIcon />
                </HStack>

                <Heading color='white' fontWeight='semibold' fontSize='3xl' mt={5}>
                    R$145,76
                </Heading>
            </VStack>
        </VStack>
    )
}