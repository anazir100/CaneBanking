import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { enableScreens } from 'react-native-screens';
import { ApplicationStack, DepositCheckStack,TransferStack, loginStackNavigator} from "./MainStackNavigator.component";
import LoginComponent from "../user/login.component";
import Logout from "../user/logout.component";

enableScreens();

const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={loginStackNavigator} />
      <Drawer.Screen name="Add Account" component={ApplicationStack}/>
      <Drawer.Screen name="Check Deposit" component={DepositCheckStack}/>
      <Drawer.Screen name="Transfer" component={TransferStack}/>
      <Drawer.Screen name="Logout" component={Logout}/>
      <Drawer.Screen name="---" component={LoginComponent}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigatorComponent;