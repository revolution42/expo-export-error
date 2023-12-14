import React from 'react';
import { Text, Button } from 'react-native';

export default function Page() {

	const [count, setCount] = React.useState(0);
	
	const increment = () => {
		setCount(count + 1);
	}

	return (
	<>
		
		<Text>This is the index - Current Count: {count}</Text>
		<Button onPress={increment}>Button</Button>


	</>
	);
}