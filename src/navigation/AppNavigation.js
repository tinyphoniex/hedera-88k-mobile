import React from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { COLOR } from "../constants/Color";

import Welcome from "../screens/Welcome";
import SignIn from "../screens/Auth/Signin";
import SignUp from "../screens/Auth/Signup";

import Home from "../screens/Home";

import Marketplace from "../screens/Marketplace";
import Voices from "../screens/Marketplace/Voices";
import Beats from "../screens/Marketplace/Beats";
import Songs from "../screens/Marketplace/Songs";
import Contracts from "../screens/Marketplace/Contracts";

import Explore from "../screens/Explore";
import SearchExplore from "../screens/Explore/SearchExplore";
import PlayExplore from "../screens/Explore/PlayExplore";
import Play from "../screens/Explore/Play";

import Publish from "../screens/Publish";
import Progression from "../screens/Publish/Progression";

import Library from "../screens/Library";
import LibraryExplore from "../screens/Library/LibraryExplore";
import LibrarySettings from "../screens/Library/LibrarySettings";

import CreatorProfile from "../screens/Profile/Creator";
import FanProfile from "../screens/Profile/Fan";
import Payout from "../screens/Profile/Creator/Payout";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: COLOR.primary
        },
      }}
      initialRouteName="WelcomeScreen"
    >
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />

      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="PublishScreen" component={Publish} />
      <Stack.Screen name="LibraryScreen" component={Library} />

      <Stack.Screen name="MarketplaceScreen" component={Marketplace} />
      <Stack.Screen name="ExploreScreen" component={Explore} />
      <Stack.Screen name="VoicesScreen" component={Voices} />
      <Stack.Screen name="BeatsScreen" component={Beats} />
      <Stack.Screen name="SongsScreen" component={Songs} />
      <Stack.Screen name="ContractsScreen" component={Contracts} />
      <Stack.Screen name="SearchExploreScreen" component={SearchExplore} />
      <Stack.Screen name="PlayExploreScreen" component={PlayExplore} />
      <Stack.Screen name="PlayScreen" component={Play} />
      <Stack.Screen name="LibraryExploreScreen" component={LibraryExplore} />
      <Stack.Screen name="LibrarySettingsScreen" component={LibrarySettings} />

      <Stack.Screen name="ProgressionScreen" component={Progression} />

      <Stack.Screen name="CreatorProfileScreen" component={CreatorProfile} />
      <Stack.Screen name="FanProfileScreen" component={FanProfile} />
      <Stack.Screen name="PayoutScreen" component={Payout} />
    </Stack.Navigator>
  );
};

export default AppNavigation;