import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";

export default function IntroSCR({route, navigation}) {
    const [data, setdata] = useState([]);
    if (data.length <= 0) {
        fetch("http://localhost:3000/sendreq")
            .then(response => response.json())
            .then(json => {
                setdata(json)
                console.log(data);
            })
    }

    const [textloading, settextloading] = useState("Loading All Wallpapers .")
    setTimeout(
        () => {
            if (textloading == "Loading All Wallpapers . . . .") {
                settextloading("Loading All Wallpapers .")
            } else {
                settextloading(textloading + " .")
            }
        },
        300
    )

    setTimeout(
        () => {
            navigation.navigate('Home', {data: data})
        },
        3600
    )
    return (<View style={styles.container}>
            <Text style={{color: "#ffffff", fontSize: "30px"}}>{textloading}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
    },
})