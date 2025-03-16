import {View} from "react-native";
import styled from "styled-components/native";
import TabSwitch from "../components/TabSwitch";
import MenuItems from "../components/MenuItems";
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";


const menuItems = [
    {id: 1, title: "Remove Authenticator", onPress: () => console.log("Remove Authenticator clicked")},
    {id: 2, title: "My Recovery Code", onPress: () => console.log("My Recovery Code clicked")},
    {id: 3, title: "Help", onPress: () => console.log("Help clicked")}
];

const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.background};
`;

const Title = styled.Text`
    font-size: 54px;
    font-weight: bold;
    text-align: center;
    color: ${({theme}) => theme.text};
    margin-top: 4px;
`;

const Subtitle = styled.Text`
    text-align: center;
    color: ${({theme}) => theme.textSecondary};
    font-size: 14px;
    margin-top: 26px;
`;

const ProgressBar = styled.View`
    width: 157px;
    height: 7px;
    background-color: ${({theme}) => theme.background};
    border-radius: 3.5px;
    margin-top: 11px;
    overflow: hidden;
`;

const Progress = styled.View`
    width: 70%;
    height: 100%;
    background-color: ${({theme}) => theme.primary};
`;

const Description = styled.Text`
    color: ${({theme}) => theme.text};
    font-size: 14px;
    margin: 46px 20px 0;
`;

const Tip = styled.Text`
    color: ${({theme}) => theme.textHighlight};
    font-size: 14px;
    margin: 14px 20px 24px;

`;

const GradientBackground = styled(LinearGradient).attrs(({theme}) => ({
    colors: ["transparent", theme.secondary],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
}))`
    margin-top: 19px;
    height: 167px;
    width: 100%;

`;


const CodeContainer = styled.View`
    flex-direction: column;
    align-items: center;
`;


export default function SafetyScreen() {
    return (
        <Container>
            <Header title="Safety" showSearch={false}/>
            <TabSwitch/>
            <GradientBackground>
                <CodeContainer>
                    <Subtitle>Logged in as player</Subtitle>
                    <Title>N5KCV</Title>

                    <ProgressBar>
                        <Progress/>
                    </ProgressBar>
                </CodeContainer>
            </GradientBackground>
            <Description>
                You'll enter your code each time you enter your password to sign in to your Steam account.
            </Description>

            <Tip>
                Tip: If you don’t share your PC, you can select "Remember my password" when you sign in to the PC
                client
                to enter your password and authenticator code less often.
            </Tip>

            <MenuItems menuItems={menuItems}/>

        </Container>
    );
}
