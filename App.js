import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Amigas</Text>
<Button title="Geovanna" onPress={() => navigation.navigate('Geovanna')} />
<Button title="Isadora" onPress={() => navigation.navigate('Isadora')} />
</View>
 );
}


function Geovanna({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Opções</Text>
<Button title="Voltar" onPress={() => navigation.goBack()} />
<text>Temos algumas coisas em comum.</text>
<text>É uma garota apaixonada por literatura, e escreve com palavras bonitas dando um sentido mais suave em sua escrita.</text>
<text>quero que ela imite a Maria Joaquina</text>
</View>
);
}

function Isadora({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Opções</Text>
<Button title="Voltar" onPress={() => navigation.goBack()} />
<text>Gostamos de livros e filmes</text>
<text>É uma garota que se mostra tranquila com a vida e super alegre.</text>
<text>Quero que ela imite o Cirilo</text>
</View>
);
}






const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="F.R.I.E.N.D.S" component={HomeScreen} />
<Stack.Screen name="Geovanna" component={Geovanna} />
<Stack.Screen name="Isadora" component={Isadora} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;


