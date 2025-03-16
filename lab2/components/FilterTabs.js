import {useState} from "react";
import styled from "styled-components/native";
import {View, FlatList} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Container = styled.View`
    flex-direction: row;
    margin-left: 20px;
`;

const Tab = styled.TouchableOpacity`
    background-color: ${({active, theme}) => (active ? theme.primary : theme.secondary)};
    padding: 8px 15px;
    border-radius: 8px;
    margin-right: 8px;
`;

const TabText = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 14px;
`;

export default function FilterTabs({tabs, onTabChange, showSearch}) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        if (onTabChange) onTabChange(tab);
    };

    return (
        <Container>
            {showSearch && <SearchIcon name="search-outline"/>}
            <FlatList
                data={tabs}
                horizontal
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <Tab key={item} active={activeTab === item} onPress={() => handleTabPress(item)}>
                        <TabText>{item}</TabText>
                    </Tab>
                )}
            />
        </Container>
    );

}
