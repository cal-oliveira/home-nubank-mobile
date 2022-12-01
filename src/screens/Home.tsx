import { HStack, VStack, Box, Text } from 'native-base'
import { FlatList, TouchableOpacity } from 'react-native'

import Logo from '../assets/logo.svg'
import Settings from '../assets/settings.svg'

import Pix from '../assets/pix.svg'
import Barcode from '../assets/barcode.svg'
import Cifrao from '../assets/cifrao.svg'
import Pencil from '../assets/pencil.svg'

import { Card } from '../components/Card'
import { Option } from '../components/Option'
import { Wallet } from '../components/Wallet'

export function Home(){

    const options = [
        {
            title: 'Fazer um Pix',
            icon: <Pix />
        },
        {
            title: 'Pagar um boleto',
            icon: <Barcode />
        },
        {
            title: 'Fazer um depósito',
            icon: <Cifrao />
        },
        {
            title: 'Ajustar limite',
            icon: <Pencil />
        },
    ]

    return(
        <VStack flex={1} background='#820AD1' >
            <VStack px={9}>
                <HStack alignItems='center' justifyContent='space-between' mt='57'>
                    <Logo />
                    <Box mr={4}>
                        <TouchableOpacity >
                            <Settings />
                        </TouchableOpacity>
                    </Box>
                </HStack>
                <VStack>
                    <Card />
                    <Wallet />
                    <Text mt={8} ml={5} color='white' fontSize='sm' >
                        Do que precisa?
                    </Text>
                </VStack>
            </VStack>
            <VStack mt={9}>
                <FlatList
                    horizontal
                    contentContainerStyle={{ paddingLeft: 36, paddingRight: 36 }}
                    showsHorizontalScrollIndicator={false}
                    data={options}
                    renderItem={({ item }) => (
                        <Option 
                            title={item.title}
                            icon={item.icon}
                        />
                    )}
                />
            </VStack>
        </VStack>
    )
}