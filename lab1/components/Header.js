import {View, StyleSheet, Image} from "react-native";

const Header = () => (
    <View style={styles.header}>
        <Image source={require('../assets/university-colored.png')} style={styles.image}/>
    </View>
);

const styles = StyleSheet.create({
    header: { height: 60, paddingLeft: 10},
    image: { height: 60, width: 130, resizeMode: 'contain'},
});

export default Header;