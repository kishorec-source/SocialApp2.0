import { Tabs } from 'expo-router';
/* @tutinfo Import <CODEIonicons</CODE> icon set.*/
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {
    return (
        <Tabs
            /* @tutinfo There are many <CODE>screenOptions</CODE> we can use to customize the tab bar. We're changing the active tab color here to custom value which we will also use later in our app. */
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        /* @tutinfo The <CODE>focused</CODE> param allows us to change a tab's icon and label behavior when it is active and inactive.*/
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color, focused }) => (
                        /* @tutinfo */
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                        // <FontAwesome name="wechat" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="buddy"
                options={{
                    title: 'Buddy',
                    tabBarIcon: ({ color, focused }) => (
                        /* @tutinfo The <CODE>focused</CODE> param allows us to change a tab's icon and label behavior when it is active and inactive.*/
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                        // <FontAwesome name="users" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, focused }) => (
                        /* @tutinfo */
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                        // <Ionicons name="settings" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        /* @tutinfo */
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                        // <FontAwesome name="user-circle" size={24} color="black" />
                    ),
                }}
            />
        </Tabs>
    );
}
