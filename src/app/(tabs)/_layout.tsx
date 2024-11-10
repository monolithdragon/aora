import TabIcon from '@/components/tab-icon';
import { Tabs, Redirect } from 'expo-router';
import { home, bookmark, plus, profile } from '@/constants/icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={home}
              name='Home'
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='bookmark'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={bookmark}
              name='Bookmark'
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={plus}
              name='Create'
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={profile}
              name='Profile'
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
