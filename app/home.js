import {SafeAreaView, ScrollView, View} from "react-native"
import {Stack} from "expo-router";
import {COLORS, icons, images, SIZES} from "../constants";
import {ScreenHeaderBtn, Welcome, Popularjobs, Nearbyjobs} from "../components";

const Home = () =>{
    return(
        <SafeAreaView style = {{flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension={'60%'}/>
                    ),//왼쪽에 메뉴 버튼 3줄스타일
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.google} dimension={'100%'}/>
                    ),//오른쪽 버튼은 구글 이미지스타일
                    headerTitle: "Header",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style = {{
                        flex:1,
                        padding:SIZES.medium,
                    }}
                >
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home