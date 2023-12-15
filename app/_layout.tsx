import React from 'react';

import { Slot } from 'expo-router';
import { Text } from 'react-native';

export default function MainLayout() {

	return (
		<>
			<Text>This is the layout</Text>
			<Slot></Slot>
		</>
	);
}


