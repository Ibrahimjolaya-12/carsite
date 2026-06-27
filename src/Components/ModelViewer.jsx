import React from 'react';
import ModelViewer from './ModelViewer'; // اگر اصل فائل اسی فولڈر میں ہے

// ایک نیا فنکشن بنائیں
const InteractiveCar = () => {
  return (
    <ModelViewer
      url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
      width={400}
      height={400}
      modelXOffset={0.5}
      modelYOffset={0}
      enableMouseParallax={true}
      enableHoverRotation={true}
      environmentPreset="forest"
      fadeIn={false}
      autoRotate={false}
      autoRotateSpeed={0.35}
      showScreenshotButton={true}
    />
  );
};

// اب اس نئے فنکشن کو ایکسپورٹ کریں
export default InteractiveCar;