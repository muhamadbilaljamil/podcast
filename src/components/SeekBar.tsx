import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Slider } from '@rneui/themed';

function pad(
    n: number | string,
    width: number,
    z: string | number = 0,
): string {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position: number): [string, string] => [
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
];

interface SeekBarProps {
    trackLength: number;
    currentPosition: number;
    onSeek: (value: number) => void;
    onSlidingStart: () => void;
}

const SeekBar: React.FC<SeekBarProps> = ({
    trackLength = 0,
    currentPosition = 4,
    onSeek = () => { },
    onSlidingStart = () => { },
}) => {
    const remaining = minutesAndSeconds(trackLength - currentPosition);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { width: '100%', color: '#000' }]}>
                    {trackLength > 1 && '-' + remaining[0] + ':' + remaining[1]}
                </Text>
            </View>
            <Slider
                maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSeek}
                value={currentPosition}
                minimumTrackTintColor={'#000'}
                maximumTrackTintColor={'#D9D9D9'}
                thumbStyle={styles.thumb}
                trackStyle={styles.track}
            />
        </View>
    );
};

export default SeekBar;

const styles = StyleSheet.create({
    slider: {
        marginTop: -12,
    },
    container: {
        paddingTop: 16,
    },
    track: {
        height: 2,
        borderRadius: 1,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        textAlign: 'center',
    },
});
