import React from 'react'
import Multiselect from "multiselect-react-dropdown";
import {Button, makeStyles} from  '@material-ui/core';
const useStyle=makeStyles({
  loginbtn: {
    textTransform: 'none',
    background: 'red ',
    color: '#fff',
    height: 48,
    borderRadius: 2
},


})

const Patient = () => {
    let textInput = React.createRef();
    const classes=useStyle();
  let onOnclickHandler = (e) => {
    console.log(textInput.current.value);
  };

    return (
      <div className="Col-md-9 col-lg-6 col-xl-5">
      <h1> Check Your Disease </h1>
      <Multiselect
     
        
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={[
          "Itching",
          "SkinRash",
          "NodalSkinEruptions",
          "ContinuousSneezing",
          "Shivering",
          "Chills",
          "JointPain",
          "StomachPain",
          "Acidity",
          "UlcersOnTongue",
          "MuscleWasting  ",
          "Vomiting ",
          "BurningMicturition ",
          "SpottingUrination  ",
          "Fatigue  ",
          "WeightGain ",
          "Anxiety  ",
          "ColdHands_And_Feets  ",
          "MoodSwings ",
          "WeightLoss ",
          "Restlessness ",
          "Lethargy ",
          "PatchesInThroat  ",
          "IrregularSugarLevel  ",
          "Cough  ",
          "HighFever  ",
          "SunkenEyes ",
          "Breathlessness ",
          "Sweating ",
          "Dehydration  ",
          "Indigestion  ",
          "Headache ",
          "YellowishSkin  ",
          "DarkUrine  ",
          "Nausea ",
          "LossOfAppetite ",
          "PainBehindTheEyes  ",
          "Back_Pain  ",
          "Constipation ",
          "Abdominal_Pain ",
          "Diarrhoea  ",
          "Mild_Fever ",
          "Yellow_Urine ",
          "Yellowing_Of_Eyes  ",
          "Acute_Liver_Failure  ",
          "Fluid_Overload ",
          "Swelling_Of_Stomach  ",
          "Swelled_Lymph_Nodes  ",
          "Malaise  ",
          "Blurred_And_Distorted_Vision ",
          "Phlegm ",
          "Throat_Irritation  ",
          "Redness_Of_Eyes  ",
          "Sinus_Pressure ",
          "Runny_Nose ",
          "Congestion ",
          "Chest_Pain ",
          "Weakness_In_Limbs  ",
          "Fast_Heart_Rate  ",
          "Pain_During_Bowel_Movements  ",
          "Pain_In_Anal_Region  ",
          "Bloody_Stool ",
          "Irritation_In_Anus ",
          "Neck_Pain  ",
          "Dizziness  ",
          "Cramps ",
          "Bruising ",
          "Obesity  ",
          "Swollen_Legs ",
          "Swollen_Blood_Vessels  ",
          "Puffy_Face_And_Eyes  ",
          "Enlarged_Thyroid ",
          "Brittle_Nails  ",
          "Swollen_Extremeties  ",
          "Excessive_Hunger ",
          "Extra_Marital_Contacts ",
          "Drying_And_Tingling_Lips ",
          "Slurred_Speech ",
          "Knee_Pain  ",
          "Hip_Joint_Pain ",
          "Muscle_Weakness  ",
          "Stiff_Neck ",
          "Swelling_Joints  ",
          "Movement_Stiffness ",
          "Spinning_Movements ",
          "Loss_Of_Balance  ",
          "Unsteadiness ",
          "Weakness_Of_One_Body_Side  ",
          "Loss_Of_Smell  ",
          "Bladder_Discomfort ",
          "Foul_Smell_Of Urine  ",
          "Continuous_Feel_Of_Urine ",
          "Passage_Of_Gases ",
          "Internal_Itching ",
          "Toxic_Look_(Typhos)  ",
          "Depression ",
          "Irritability ",
          "Muscle_Pain  ",
          "Altered_Sensorium  ",
          "Red_Spots_Over_Body  ",
          "Belly_Pain ",
          "Abnormal_Menstruation",
          "Dischromic _Patches",
          "Watering_From_Eyes",
          "Increased_Appetite",
          "Polyuria",
          "Family_History",
          "Mucoid_Sputum",
          "Rusty_Sputum",
          "Lack_Of_Concentration  ",
          "Visual_Disturbances",
          "Receiving_Blood_Transfusion",
          "Receiving_Unsterile_Injections",
          "Coma",
          "Stomach_Bleeding",
          "Distention_Of_Abdomen",
          "History_Of_Alcohol_Consumption",
          "Fluid_Overload",
          "Blood_In_Sputum",
          "Prominent_Veins_On_Calf",
          "Palpitations",
          "Painful_Walking",
          "Pus_Filled_Pimples",
          "Blackheads",
          "Scurring",
          "Skin_Peeling",
          "Silver_Like_Dusting",
          "Small_Dents_In_Nails",
          "Inflammatory_Nails",
          "Blister",
          "Red_Sore_Around_Nose",
          "Yellow_Crust_ooze",
        ]}
        ref={textInput}
      />
    <br/>
      <Button className ={classes.loginbtn} onClick={onOnclickHandler} variant="contained">Predict</Button>
     
    </div>
        
    )
}

export default Patient;
