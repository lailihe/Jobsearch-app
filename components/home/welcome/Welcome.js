import { useState } from "react";
import {
    View,
    Text,
    TextInput,//사용자 입력 받기 위해 사용
    TouchableOpacity,//터치이벤트 위해 사용
    Image,
    FlatList,//반복적 실행해서 보여주기 위해 사용
} from "react-native"
import {useRouter} from "expo-router"

import styles from "./welcome.style"
import {icons, SIZES} from "../../../constants"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick})=>{
    const router = useRouter();
    const [activeJobType, setActiveJobType]=useState("Full-time")

    return(
        <View>
            <View style = {styles.container}>
                <Text style = {styles.userName}>Hello Lai</Text>
                <Text style = {styles.welcomeMessage}>너에게 맞는 직업 검색</Text>
            </View>
                
                <View style = {styles.searchContainer}>
                    <View style = {styles.searchWrapper}>
                        <TextInput
                            style = {styles.searchInput}
                            value = {searchTerm}
                            onChangeText={(text)=>setSearchTerm(text)}
                            placeholder='입력하세요:'
                        />
                    </View>

                    <TouchableOpacity style = {styles.searchBtn} onPress={handleClick}>
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style = {styles.searchBtnImage}
                        />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.tabsContainer}>
                    <FlatList
                        data={jobTypes}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.tab(activeJobType, item)}
                                onPress={()=>{
                                    setActiveJobType(item);
                                    router.push('/search/${item}');
                                }}
                            >
                                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item)=>item}
                        contentContainerStyle={{columnGap: SIZES.small}}
                        horizontal
                    />
                </View>
        </View>
    );
};

export default Welcome