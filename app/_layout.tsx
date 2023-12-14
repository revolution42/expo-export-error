import React from 'react';
import { Box } from "@gluestack-ui/themed"
import { MotiView } from 'moti';
import { Slot } from 'expo-router';
import { Text } from 'react-native';

export default function MainLayout() {

	return (
		<Box>
			<Text>This is the layout</Text>
			<Slot></Slot>
		</Box>
	);
}


