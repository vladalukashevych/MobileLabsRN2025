import {useState} from "react";
import styled from "styled-components/native";

const TabContainer = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.secondary};
    padding: 2px;
    border-radius: 8px;
    margin: 0 20px;
`;

const TabButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    padding: 4px 0;
    border-radius: 7px;
    background-color: ${({isActive, theme}) => (isActive ? theme.background : "transparent")};
`;

const TabText = styled.Text`
    color: ${({isActive, theme}) => (isActive ? theme.text : theme.textSecondary)};
    font-size: 14px;
`;

export default function TabSwitch() {
    const [activeTab, setActiveTab] = useState("Guard");

    return (
        <TabContainer>
            <TabButton isActive={activeTab === "Guard"} onPress={() => setActiveTab("Guard")}>
                <TabText isActive={activeTab === "Guard"}>Guard</TabText>
            </TabButton>
            <TabButton isActive={activeTab === "Confirmations"} onPress={() => setActiveTab("Confirmations")}>
                <TabText isActive={activeTab === "Confirmations"}>Confirmations</TabText>
            </TabButton>
        </TabContainer>
    );
}
