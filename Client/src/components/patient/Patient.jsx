import React,{useState,useEffect,useContext} from 'react'
import Multiselect from "multiselect-react-dropdown";
import {detectdisease } from '../../service/api.js';
import {Button, makeStyles} from  '@material-ui/core';
import {LoginContext} from '../../context/ContextProvider.jsx';

import { useHistory } from "react-router-dom";
const useStyle=makeStyles({
    component:{
      maxHeight: "300px",
      width: "100%",
      fontSize:"80px",
      marginTop:"60px",
      marginBottom:"30px"
    },
  loginbtn: {
    marginTop:"30px",
    marginBottom:"40px",
    textTransform: "none",
    background: "red ",
    color: "#fff",
    height: 50,
    borderRadius: 2,
    fontSize: 20,
    width: 150,
    margin:'15px 0',
     padding :'20px 0'
},
})


const Patient = () => {
  const [selected ,setSelected]=useState([]);
  let textInput = React.createRef();
  const [ error, showError] = useState(false);
   const {pred,setPred,sym,setSymptoms}=useContext(LoginContext);
   const history=useHistory();
const onOnclickHandler =  async () => {
    
    let response=await detectdisease(selected);
   setPred(response.data);
   setSymptoms(selected);
   history.push("/Display");
    
  };

  
const classes=useStyle();
    return (
        <><center>
      <div className="Col-md-9 col-lg-6 col-xl-5">
          
      <h1 style={{ marginTop: "100px",marginBottom:'30px', color: "red" ,fontFamily:'Roboto',fontSize:50}}> Check Your Disease </h1>
      <Multiselect

sx={{width:"100%",fontFamily:'Roboto' }}
       
       className={classes.component}
     isObject={false}
     onRemove={(event) => {
      setSelected(event);
    }}
    onSelect={(event) => {
      setSelected(event);
    }}

      options={[
        "itching",
        "skin_rash",
        "nodal_skin_eruptions",
        "continuous_sneezing",
        "shivering",
        "chills",
        "joint_pain",
        "stomach_pain",
        "acidity",
        "ulcers_on_tongue",
        "muscle_wasting",
        "vomiting",
        "burning_micturition",
        "spotting_ urination",
        "fatigue",
        "weight_gain",
        "anxiety",
        "cold_hands_and_feets",
        "mood_swings",
        "weight_loss",
        "restlessness",
        "lethargy",
        "patches_in_throat",
        "irregular_sugar_level",
        "cough",
        "high_fever",
        "sunken_eyes",
        "breathlessness",
        "sweating",
        "dehydration",
        "indigestion",
        "headache",
        "yellowish_skin",
        "dark_urine",
        "nausea",
        "loss_of_appetite",
        "pain_behind_the_eyes",
        "back_pain",
        "constipation",
        "abdominal_pain",
        "diarrhoea",
        "mild_fever",
        "yellow_urine",
        "yellowing_of_eyes",
        "acute_liver_failure",
        "fluid_overload",
        "swelling_of_stomach",
        "swelled_lymph_nodes",
        "malaise",
        "blurred_and_distorted_vision",
        "phlegm",
        "throat_irritation",
        "redness_of_eyes",
        "sinus_pressure",
        "runny_nose",
        "congestion",
        "chest_pain",
        "weakness_in_limbs",
        "fast_heart_rate",
        "pain_during_bowel_movements",
        "pain_in_anal_region",
        "bloody_stool",
        "irritation_in_anus",
        "neck_pain",
        "dizziness",
        "cramps",
        "bruising",
        "obesity",
        "swollen_legs",
        "swollen_blood_vessels",
        "puffy_face_and_eyes",
        "enlarged_thyroid ",
        "brittle_nails",
        "swollen_extremeties",
        "excessive_hunger",
        "extra_marital_contacts",
        "drying_and_tingling_lips",
        "slurred_speech",
        "knee_pain",
        "hip_joint_pain",
        "muscle_weakness",
        "stiff_neck",
        "swelling_joints",
        "movement_stiffness",
        "spinning_movements",
        "loss_of_balance",
        "unsteadiness",
        "weakness_of_one_body_side",
        "loss_of_smell",
        "bladder_discomfort",
        "foul_smell_of urine	",
        "continuous_feel_of_urine",
        "passage_of_gases	",
        "internal_itching",
        "toxic_look_(typhos)	",
        "depression",
        "irritability",
        "muscle_pain",
        "altered_sensorium",
        "red_spots_over_body",
        "belly_pain",
        "abnormal_menstruation",
        "dischromic _patches",
        "watering_from_eyes",
        "increased_appetite",
        "polyuria",
        "family_history",
        "mucoid_sputum",
        "rusty_sputum",
        "lack_of_concentration",
        "visual_disturbances",
        "receiving_blood_transfusion",
        "receiving_unsterile_injections",
        "coma",
        "stomach_bleeding",
        "distention_of_abdomen",
        "history_of_alcohol_consumption",
        "fluid_overload",
        "blood_in_sputum",
        "prominent_veins_on_calf",
        "palpitations",
        "painful_walking",
        "pus_filled_pimples",
        "blackheads",
        "scurring",
        "skin_peeling",
        "silver_like_dusting",
        "small_dents_in_nails",
        "inflammatory_nails",
        "blister",
        "red_sore_around_nose",
        "yellow_crust_ooze",
        ]}
        ref={textInput}
     
      />
    <br/>
      <Button className={classes.loginbtn} onClick={onOnclickHandler} variant="contained">Predict</Button>
    </div  > </center>
    </>
        
    )
}

export default Patient;
