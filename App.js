import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IntroSCR from "./Scr/IntroSCR";
import Home from "./Scr/Home";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
    var a = window.scrollY;
    return (
        <NavigationContainer>{
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={IntroSCR} options={{
                    title: 'AsiaViewHD',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerShown: false
                }}/>
                <Stack.Screen name="Home" component={Home} options={{
                    title: 'Home - Wallpapers',
                    headerStyle: {
                        backgroundColor: '#212121',
                    },
                    headerTintColor: '#fff',
                    headerLeft: false
                }}/>
            </Stack.Navigator>
        }</NavigationContainer>
    );

}
