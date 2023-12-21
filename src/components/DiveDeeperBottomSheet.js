import {
    StyleSheet,
    View,
    Image,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable
} from 'react-native';

import React, {  useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import Fonts from '../constants/Fonts'
import Colors from '../constants/Colors'

import steps from '../data/steps';

const DiveDeeperBottomSheet = (props) => { 
   
    const [currentStep, setCurrentStep] = useState(0);

    return (
            <View
                style={styles.bottomSheetContainer}
            > 
                <Text style={[Fonts.title2, styles.bottomSheetTitle]}>Invite friends</Text>
                <Text style={[Fonts.body1Med, { color: '#D3DEEE' }]}>Step {currentStep + 1} : {steps[currentStep].title}</Text>
                <View style={styles.stepsDescContainer}>
                    <Text style={[Fonts.body2Med, {color: '#D3DEEE', textAlign: 'center'}]}>{steps[currentStep].desc}</Text>
                </View>

                <LinearGradient
                    colors={[ '#C800CC', '#A060FA']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={styles.gradientButton}     
                >
                    <Pressable onPress={currentStep == 2 ? props.onClose : () => setCurrentStep(currentStep + 1)} style={styles.gradientButtonAligner}>
                        <Text style={Fonts.body2Semi}>{currentStep !== 2 ? 'Next' : 'Finish it'}</Text>
                    </Pressable>
                </LinearGradient>
                {
                currentStep !== 2 && 
                    <Pressable onPress={props.onClose}>
                        <Text style={Fonts.body2Med}>Skip it</Text>
                    </Pressable>
                }
            </View>
    )
}


const styles = StyleSheet.create({
    bottomSheetContainer: {
        width: '100%',
        paddingVertical: 20,
        paddingBottom: 42,
        alignItems: 'center',
    },
    bottomSheetTitle: {
        textAlign: 'center',
        color: Colors.orange,
        marginBottom: 30
    },
    stepsDescContainer: {
        width: '90%',
        alignSelf:'center',
        marginVertical: 20
    },
    gradientButton: {
        width: '90%',
        height: 47,
        alignSelf: 'center',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:16
    },
    gradientButtonAligner: {
        width: '100%',
        alignItems: 'center'
    }
});


export default DiveDeeperBottomSheet;