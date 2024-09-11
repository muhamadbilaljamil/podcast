import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

const AppNavigation = () => {
    const {isLoading, token} = useContext(AuthContext)

    if(isLoading){
        return <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }
    return (
        <NavigationContainer>
            {
                token !== null ?  <AppStack /> : <AuthStack />
            }
      </NavigationContainer>
    )
}

export default AppNavigation;