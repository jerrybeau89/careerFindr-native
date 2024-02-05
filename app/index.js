import { View, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import NearbyJobs from "../components/home/nearby/NearbyJobs";
import PopularJobs from "../components/home/popular/PopularJobs";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";

export default function Home () {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeView}>
           <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisiable: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={ images.profile} dimension="100%"/>
                    ),
                    headerRight: () => (
                    <ScreenHeaderBtn iconUrl={ icons.menu} dimension="60%"/>
                ),
                headerTitle: ""
            }}
            />
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.view}>
                    <Welcome />
                    <PopularJobs/>
                    <NearbyJobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    view: {
        flex: 1,
        padding: SIZES.medium,
    },
    header: {
        backgroundColor: COLORS.lightWhite,
    }
})