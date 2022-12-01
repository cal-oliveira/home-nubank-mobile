import { Box, Text, Pressable } from "native-base"
import { ReactElement } from "react"

type Props = {
    title: string,
    icon: ReactElement
}

export function Option({ title, icon }:Props){
    return(
        <Pressable
            h={32}
            w='100'
            background='#9500F6'
            borderRadius='21'
            shadow='5'
            justifyContent='space-around'
            px={4}
            mr={2}
            mb={3}
            _pressed={{
                opacity: 50
            }}            
        >
            {icon}
            <Text color='white' fontSize='xs'>
                {title}
            </Text>
        </Pressable>
    )
}