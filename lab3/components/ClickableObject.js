import {View, Image, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {
    GestureDetector,
    Gesture,
    Directions,
} from 'react-native-gesture-handler';


const ClickableObject = ({onScore}) => {
    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);

    const hasSwipedLeft = useSharedValue(false);
    const hasSwipedRight = useSharedValue(false);

    // Tap
    const tap = Gesture.Tap().runOnJS(true)
        .numberOfTaps(1)
        .onEnd(() => onScore(1, 'tap'));

    // Double tap
    const doubleTap = Gesture.Tap().runOnJS(true)
        .numberOfTaps(2)
        .onEnd(() => onScore(2, 'doubleTap'));

    // Long press
    const longPress = Gesture.LongPress().runOnJS(true)
        .minDuration(3000)
        .onStart(() => onScore(3, 'longPress'));

    // Pan
    const start = useSharedValue({ x: 0, y: 0 });
    const offset = useSharedValue({ x: 0, y: 0 });
    const pan = Gesture.Pan().runOnJS(true)
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            };
        })
        .onEnd(() => {
            start.value = {
                x: offset.value.x,
                y: offset.value.y,
            };
            onScore(0, 'pan');
        })

    // Fling
    const flingRight = Gesture.Fling().runOnJS(true)
        .direction(Directions.RIGHT)
        .onStart(() => {
            onScore(Math.floor(Math.random() * 10) + 1, 'swipeRight');
        });

    const flingLeft = Gesture.Fling().runOnJS(true)
        .direction(Directions.LEFT)
        .onStart(() => {
            onScore(Math.floor(Math.random() * 10) + 1, 'swipeLeft');
        });


    // Pinch
    const pinch = Gesture.Pinch().runOnJS(true)
        .onUpdate(e => {
            scale.value = savedScale.value * e.scale;
        })
        .onEnd(() => {
            savedScale.value = scale.value;
            onScore(14, 'pinch');
        });

    const gestures = Gesture.Simultaneous(
        pinch,
        pan,
        flingRight,
        flingLeft,
        Gesture.Exclusive(doubleTap, tap, longPress)
    );


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
                { scale: withSpring(scale.value) },
            ],
        };
    });


    return (
        <GestureDetector gesture={gestures}>
            <Animated.View style={[styles.box, animatedStyle]}/>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 120,
        height: 120,
        backgroundColor: '#f49cff',
        borderRadius: 16,
    },
});

export default ClickableObject;
