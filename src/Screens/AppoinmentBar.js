import * as React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress-step-bar';
import AnimatedDotsCarousel from 'react-native-progress-step-bar';

export default function AppoinmentBar() {
  const [currentStep, setCurrentStep] = useState(0);
  const handlePrevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  const handleNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}
    >
      <View style={{ marginBottom: 50 }}>
         <ProgressBar
          steps={4}
          dotDiameter={10}
          width={325}
          height={3}
         
          currentStep={currentStep}
          stepToStepAnimationDuration={1000}
          withDots
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: 400,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          onPress={handlePrevStep}
          style={{ backgroundColor: 'blue', marginRight: 30 }}
        >
          <Text>PrevStep</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNextStep}
          style={{ backgroundColor: 'green' }}
        >
          <Text>NextStep</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}