import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function HeaderTabs() {
    return (
        <SafeAreaView>
            <HeaderButton />
            <HeaderButton />
        </SafeAreaView>
    )
}

const HeaderButton = () => <Text>Delivery</Text>