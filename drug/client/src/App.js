import React,{ useState,Component  } from 'react'
import axios from 'axios';
import {Card, Col, Button, Row} from 'react-bootstrap';  
import images from '../src/images.jpg'
import "./App.css";
import UserForm from '../src/UserForm';


const App = () => {
  const [symptom1, setSymptom1] = useState('');
  const [symptom2, setSymptom2] = useState('');
  const [symptom3, setSymptom3] = useState('');
  const [predictedDisease, setPredictedDisease] = useState('');
  const [predictedDrug, setPredictedDrug] = useState('');

const symptomsList = ["abdominal cramp",
"abdominal distention",
"abnormal behavior",
"abnormal bleeding",
"abnormal sensation",
"abnormally frequent",
"abscess",
"aching",
"acne",
"acquiring drinking alcohol taking lot time",
"affected part turning white",
"anemia",
"anxiety",
"arm",
"attack pain",
"back",
"bacterial infection",
"bad breath",
"bad smelling thin vaginal discharge",
"bad smelling vaginal discharge",
"barky cough",
"belching",
"better sitting worse lying",
"birth baby younger week gestational age",
"bleeding gum",
"bleeding skin",
"blindness",
"blindness one eye",
"blister sunlight",
"bloating",
"blood stool",
"blood urine",
"bloody diarrhea",
"blue",
"bluish skin coloration",
"blurred vision",
"blurry vision",
"body tremor",
"bone pain",
"bowed leg",
"breakdown skeletal muscle",
"breathing problem",
"bruising",
"burning",
"burning redness eye",
"burning stabbing pain",
"burning urination",
"certain thought repeatedly",
"change bowel movement",
"change breast shape",
"change color",
"change hair",
"change reflex",
"change skin color red black",
"change sleeping eating pattern",
"change taste",
"change voice",
"characteristic facial feature",
"characteristic rash",
"chest discomfort",
"chest pain",
"chest tightness",
"chill",
"chronic cough",
"chronic pain bladder",
"clenched fist overlapping finger",
"close object appear blurry",
"clumsy",
"cm lump skin",
"cold sweat",
"coma",
"confused thinking",
"confusion",
"constipation",
"coolness",
"coordination",
"cough bloody mucus",
"cough sputum production",
"coughing",
"coughing blood",
"coughing including coughing blood",
"coughing mucus",
"crawl",
"cry episode",
"dark urine",
"darker",
"daytime sleepiness",
"death child le one year age",
"decreased ability feel pain",
"decreased ability see",
"decreased ability think",
"decreased ability think remember",
"decreased ability turn",
"decreased appetite",
"decreased motivation",
"decreased range motion",
"decreased taste",
"decreased vision",
"dehydration",
"delayed physical growth",
"delirium",
"delusion",
"dementia",
"depending subtype abdominal pain",
"depends organ involved",
"depressed mood",
"depression",
"dermatitis herpetiformis",
"developmental disability",
"diarrhea",
"diarrhea may bloody",
"diarrhea mixed blood",
"diarrhoea",
"difficulty breathing",
"difficulty cutting",
"difficulty eating",
"difficulty getting pregnant",
"difficulty remembering recent event",
"difficulty swallowing",
"difficulty walking",
"dimpling skin",
"discharge penis",
"disorientation",
"distant object appear blurry",
"distorted blurred vision distance",
"dizziness",
"double vision",
"drinking large amount alcohol long period",
"drooping eyelid",
"dry cough",
"dry damp skin",
"dry eye",
"dry mouth",
"ear pain",
"easy prolonged bleeding",
"emotional problem",
"enlarged lymph node neck",
"enlarged spleen",
"enlarged thyroid",
"enlargement thyroid",
"enlargement tonsil",
"episode severe",
"erythema marginatum",
"excess hair",
"excessive amount uterine bleeding",
"excessive daytime sleepiness",
"excessive salivation",
"expanding area redness site tick bite",
"extreme sadness",
"extremity weakness",
"eye pain",
"eye strain",
"eyestrain",
"fast heart rate",
"fast heartbeat",
"fatigue",
"fear water",
"feel need check thing repeatedly",
"feeling cold",
"feeling faint upon standing",
"feeling generally unwell",
"feeling like passing",
"feeling need urinate right away",
"feeling tired",
"feeling tired time",
"fever",
"firm",
"flat discolored spot bump may blister",
"flu like illness",
"flu like symptom",
"fluid filled blister scab",
"fluid nipple",
"frequent infection",
"frequent urination",
"fullness",
"gas",
"gradual loss coordination",
"growth delay",
"gum disease",
"hair loss",
"half ring finger",
"hallucination",
"hallucination usually hearing voice",
"hard swelling skin",
"hard time reading small print",
"headache",
"hearing loss",
"hearing sound external sound present",
"heartburn",
"heat intolerance",
"heavy period",
"high blood pressure",
"high body temperature",
"hoarse voice",
"hold reading material farther away",
"impaired communication",
"inability child",
"inability move facial muscle one side",
"inability move feel one side body",
"increased breath rate",
"increased breathing rate",
"increased fat",
"increased heart rate",
"increased hunger",
"increased risk broken bone",
"increased risk infection",
"increased thirst",
"increasing weakening",
"index",
"infertility",
"inflamed eye",
"insomnia",
"intellectual disability",
"involuntary muscle movement",
"involuntary sleep episode",
"irregular edge",
"irregular menstrual period",
"irregular menstruation",
"irritability",
"irritation",
"itchiness",
"itching",
"itching genital area",
"itching result trouble sleeping",
"itchy",
"itchy blister",
"itchy bump",
"itchy ear",
"jaundice",
"jaw",
"jerky body movement",
"joint bone pain",
"joint swelling",
"large amount watery diarrhea",
"large forehead",
"large lymph node",
"large lymph node around neck",
"leg swelling",
"light sensitivity",
"little pain",
"localized breast pain redness",
"long term fatigue",
"loose frequent bowel movement",
"loose teeth",
"loss appetite",
"loss consciousness may sweating",
"loss hair part head body",
"loss lot blood childbirth",
"loss smell",
"loss vision one side",
"low blood pressure",
"low energy",
"low red blood cell",
"lower abdominal pain",
"lump breast",
"lump bump neck",
"maculopapular rash",
"malabsorption",
"may symptom",
"memory problem",
"mental ability",
"mental change",
"mid dilated pupil",
"middle finger",
"mild moderate intellectual disability",
"minimal",
"missed period",
"mole increasing size",
"mood change",
"mood swing",
"mouth sore",
"mouth ulcer",
"multiple painful joint",
"muscle ache difficulty breathing",
"muscle cramp",
"muscle joint pain",
"muscle spasm",
"muscle weakness",
"muscle weakness beginning foot hand",
"muscle weakness resulting inability move",
"muscular pain",
"myalgia",
"nausea",
"nausea vomiting",
"nausea vomiting weight loss dehydration occur",
"nearly undetectable spell",
"nearsightedness",
"neck",
"neck stiffness",
"needing urinate often",
"newly inverted nipple",
"non itchy skin ulcer",
"non painful cyst middle eyelid",
"nonaligned eye",
"none non specific",
"numbness",
"object different size eye",
"one eye myopia eye hyperopia",
"opening upper lip may extend nose palate",
"others",
"overlying redness",
"pain along inside edge shinbone",
"pain area",
"pain around ear",
"pain doesnt go shingle",
"pain going leg lower back",
"pain sex",
"pain specific bone",
"painful",
"painful blister lower leg",
"painful heavy period",
"painful joint base big toe",
"painful rash occurring stripe",
"painful skin",
"painful swelling parotid gland",
"painful swollen joint",
"painful tender outer part elbow",
"painless",
"painless lump",
"pale color",
"pale skin",
"pallor",
"paralysis",
"patch thick",
"patch white skin",
"perform certain routine repeatedly",
"period vigorous shaking",
"persistent rough white red patch mouth lasting longer week",
"photophobia",
"physical disability",
"pimple like rash",
"pinkish",
"playing video game extremely long period time",
"poor ability tolerate cold",
"poor appetite",
"poor coordination",
"poor tolerance heat",
"post nasal drip",
"problem language",
"problem mood",
"problem understanding speaking",
"problem vision",
"profuse sweating",
"progressive muscle weakness",
"prolonged",
"prolonged cough",
"prominent",
"protein urine",
"psychosis",
"pulsing pain",
"purple colored skin affected area",
"purple colored skin lesion",
"raised",
"raised red blue lesion",
"random outburst laughter",
"rapid breathing",
"recurring episode wheezing",
"red",
"red eye",
"red purple darker skin",
"red rash",
"red scaly patch skin breast",
"red skin",
"red spot white eye",
"red without blister",
"reddish eye",
"redness",
"redness eye",
"repetitive behavior",
"restricted interest",
"right lower abdominal pain",
"rigidity",
"ringing ear heartbeat",
"rough skin growth",
"runny nose",
"scaly patch skin",
"scratchiness",
"seizure",
"sensitivity smell",
"sensitivity sound",
"severe intellectual disability",
"severe pain",
"severe pain lower back abdomen",
"shakiness",
"shaking",
"sharp chest pain",
"shivering",
"shock like pain one side face last second minute",
"short height",
"short stature",
"shortness breath",
"sit",
"skin blister",
"skin breakdown",
"skin lesion generally pink color project outward",
"skin peeling",
"sleep problem",
"sleeping problem",
"slowness movement",
"small",
"small blister break open form painful ulcer",
"small blister surrounding swelling",
"small face",
"small head",
"small jaw",
"sneezing",
"social withdrawal",
"sometimes symptom",
"sore arm leg",
"sore throat",
"sore wrist",
"stiff muscle",
"stiff neck",
"stiffness",
"stomach pain",
"stroke",
"stuffy itchy nose",
"stunted growth",
"sudden",
"sudden loss muscle strength",
"sweat",
"swell pain near tumor",
"swelling",
"swelling abdomen",
"swelling around eye",
"swelling hand foot",
"swollen",
"swollen hand foot",
"swollen lymph node",
"taste acid",
"temporary fleeting vision one eye",
"tender breast",
"testicular pain",
"tingling",
"tingling hand foot",
"tingling thumb",
"tiredness",
"tooth loss",
"tremor",
"triangular tissue growth cornea",
"trouble breathing nose",
"trouble coordination",
"trouble opening mouth",
"trouble seeing",
"trouble sensation",
"trouble sleeping",
"trouble social interaction",
"trouble speaking",
"trouble swallowing",
"trouble talking",
"trouble walking",
"typically none",
"ulcer",
"ulcer around genitals",
"ulceration",
"unable move",
"unexplained weight loss",
"unintended weight loss",
"unpleasant smell present breath",
"upper abdominal pain",
"usage resulting problem",
"vaginal bleeding",
"vaginal bleeding without pain",
"vaginal discharge",
"variable",
"vary depending part brain involved",
"varying degree muscle weakness",
"velvety skin",
"vision loss",
"vomiting",
"warm",
"wart",
"watery eye",
"weak grip",
"weak muscle",
"weakness limb",
"weakness numbness affected leg",
"webbed neck",
"weight gain",
"wet",
"wheezing",
"white patch vaginal discharge",
"widespread pain",
"withdrawal occurring stopping",
"worrying",
"yellow skin",
"yellowish coloration skin white eye",
"yellowish skin",
"yellowish skin crust",
];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const symptomValues = symptomsList.map((symptom) => {
        return symptom1.includes(symptom) || symptom2.includes(symptom) || symptom3.includes(symptom) ? 1 : 0;
      });
      const symptomsArray = [symptomValues]; 
      const response = await axios.post('http://localhost:5000/predict',symptomsArray)
      const disease = response.data.prediction.disease;
      const drug = response.data.prediction.drug
      setPredictedDisease(response.data.prediction.disease);
      setPredictedDrug(response.data.prediction.drug);
      localStorage.setItem('disease',disease)
      localStorage.setItem('drug',drug)
      setSymptom1([])
      setSymptom2([])
      setSymptom3([])
      console.log(response.data);
      // localStorage.setItem('disease',response.data.prediction.disease)
      // localStorage.setItem('drug',response.data.prediction.drug)// or do something else with the response
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <h1 className="title">Disease Prediction System</h1>
     <Card>
      <Row>
      <br></br>
      <br></br>
      </Row>
      <Row>
      <Col>
      <UserForm/>
      </Col>

      </Row>
    <div className="content">
    <h3>Enter your Symptoms:</h3>
    <form onSubmit={handleSubmit}>
    <label style={{margin: "1rem" , color: '#000000'}} htmlFor="symptom1">Select symptom 1:</label>
    <select style={{ border: '2px solid red',backgroundColor: 'transparent' }}  id="symptom1" value={symptom1} onChange={(e) => setSymptom1(e.target.value)}>
      <option value="">-- Please select a symptom --</option>
      <option value="abdominal cramp">abdominal cramp</option>
      <option value="abdominal distention">abdominal distention</option>
      <option value="abnormal behavior">abnormal behavior</option>
      <option value="abnormal bleeding">abnormal bleeding</option>
      <option value="abnormal sensation">abnormal sensation</option>
      <option value="abnormally frequent">abnormally frequent</option>
      <option value="abscess">abscess</option>
      <option value="aching">aching</option>
      <option value="acne">acne</option>
      <option value="acquiring drinking alcohol taking lot time">acquiring drinking alcohol taking lot time</option>
      <option value="affected part turning white">affected part turning white</option>
      <option value="anemia">anemia</option>
      <option value="anxiety">anxiety</option>
      <option value="arm">arm</option>
      <option value="attack pain">attack pain</option>
      <option value="back">back</option>
      <option value="bacterial infection">bacterial infection</option>
      <option value="bad breath">bad breath</option>
      <option value="bad smelling thin vaginal discharge">bad smelling thin vaginal discharge</option>
      <option value="bad smelling vaginal discharge">bad smelling vaginal discharge</option>
      <option value="barky cough">barky cough</option>
      <option value="belching">belching</option>
      <option value="better sitting worse lying">better sitting worse lying</option>
      <option value="birth baby younger week gestational age">birth baby younger week gestational age</option>
      <option value="bleeding gum">bleeding gum</option>
      <option value="bleeding skin">bleeding skin</option>
      <option value="blindness">blindness</option>
      <option value="blindness one eye">blindness one eye</option>
      <option value="blister sunlight">blister sunlight</option>
      <option value="bloating">bloating</option>
      <option value="blood stool">blood stool</option>
      <option value="blood urine">blood urine</option>
      <option value="bloody diarrhea">bloody diarrhea</option>
      <option value="blue">blue</option>
      <option value="bluish skin coloration">bluish skin coloration</option>
      <option value="blurred vision">blurred vision</option>
      <option value="blurry vision">blurry vision</option>
      <option value="body tremor">body tremor</option>
      <option value="bone pain">bone pain</option>
      <option value="bowed leg">bowed leg</option>
      <option value="breakdown skeletal muscle">breakdown skeletal muscle</option>
      <option value="breathing problem">breathing problem</option>
      <option value="bruising">bruising</option>
      <option value="burning">burning</option>
      <option value="burning redness eye">burning redness eye</option>
      <option value="burning stabbing pain">burning stabbing pain</option>
      <option value="burning urination">burning urination</option>
      <option value="certain thought repeatedly">certain thought repeatedly</option>
      <option value="change bowel movement">change bowel movement</option>
      <option value="change breast shape">change breast shape</option>
      <option value="change color">change color</option>
      <option value="change hair">change hair</option>
      <option value="change reflex">change reflex</option>
      <option value="change skin color red black">change skin color red black</option>
      <option value="change sleeping eating pattern">change sleeping eating pattern</option>
      <option value="change taste">change taste</option>
      <option value="change voice">change voice</option>
      <option value="characteristic facial feature">characteristic facial feature</option>
      <option value="characteristic rash">characteristic rash</option>
      <option value="chest discomfort">chest discomfort</option>
      <option value="chest pain">chest pain</option>
      <option value="chest tightness">chest tightness</option>
      <option value="chill">chill</option>
      <option value="chronic cough">chronic cough</option>
      <option value="chronic pain bladder">chronic pain bladder</option>
      <option value="clenched fist overlapping finger">clenched fist overlapping finger</option>
      <option value="close object appear blurry">close object appear blurry</option>
      <option value="clumsy">clumsy</option>
      <option value="cm lump skin">cm lump skin</option>
      <option value="cold sweat">cold sweat</option>
      <option value="coma">coma</option>
      <option value="confused thinking">confused thinking</option>
      <option value="confusion">confusion</option>
      <option value="constipation">constipation</option>
      <option value="coolness">coolness</option>
      <option value="coordination">coordination</option>
      <option value="cough bloody mucus">cough bloody mucus</option>
      <option value="cough sputum production">cough sputum production</option>
      <option value="coughing">coughing</option>
      <option value="coughing blood">coughing blood</option>
      <option value="coughing including coughing blood">coughing including coughing blood</option>
      <option value="coughing mucus">coughing mucus</option>
      <option value="crawl">crawl</option>
      <option value="cry episode">cry episode</option>
      <option value="dark urine">dark urine</option>
      <option value="darker">darker</option>
      <option value="daytime sleepiness">daytime sleepiness</option>
      <option value="death child le one year age">death child le one year age</option>
      <option value="decreased ability feel pain">decreased ability feel pain</option>
      <option value="decreased ability see">decreased ability see</option>
      <option value="decreased ability think">decreased ability think</option>
      <option value="decreased ability think remember">decreased ability think remember</option>
      <option value="decreased ability turn">decreased ability turn</option>
      <option value="decreased appetite">decreased appetite</option>
      <option value="decreased motivation">decreased motivation</option>
      <option value="decreased range motion">decreased range motion</option>
      <option value="decreased taste">decreased taste</option>
      <option value="decreased vision">decreased vision</option>
      <option value="dehydration">dehydration</option>
      <option value="delayed physical growth">delayed physical growth</option>
      <option value="delirium">delirium</option>
      <option value="delusion">delusion</option>
      <option value="dementia">dementia</option>
      <option value="depending subtype abdominal pain">depending subtype abdominal pain</option>
      <option value="depends organ involved">depends organ involved</option>
      <option value="depressed mood">depressed mood</option>
      <option value="depression">depression</option>
      <option value="dermatitis herpetiformis">dermatitis herpetiformis</option>
      <option value="developmental disability">developmental disability</option>
      <option value="diarrhea">diarrhea</option>
      <option value="diarrhea may bloody">diarrhea may bloody</option>
      <option value="diarrhea mixed blood">diarrhea mixed blood</option>
      <option value="diarrhoea">diarrhoea</option>
      <option value="difficulty breathing">difficulty breathing</option>
      <option value="difficulty cutting">difficulty cutting</option>
      <option value="difficulty eating">difficulty eating</option>
      <option value="difficulty getting pregnant">difficulty getting pregnant</option>
      <option value="difficulty remembering recent event">difficulty remembering recent event</option>
      <option value="difficulty swallowing">difficulty swallowing</option>
      <option value="difficulty walking">difficulty walking</option>
      <option value="dimpling skin">dimpling skin</option>
      <option value="discharge penis">discharge penis</option>
      <option value="disorientation">disorientation</option>
      <option value="distant object appear blurry">distant object appear blurry</option>
      <option value="distorted blurred vision distance">distorted blurred vision distance</option>
      <option value="dizziness">dizziness</option>
      <option value="double vision">double vision</option>
      <option value="drinking large amount alcohol long period">drinking large amount alcohol long period</option>
      <option value="drooping eyelid">drooping eyelid</option>
      <option value="dry cough">dry cough</option>
      <option value="dry damp skin">dry damp skin</option>
      <option value="dry eye">dry eye</option>
      <option value="dry mouth">dry mouth</option>
      <option value="ear pain">ear pain</option>
      <option value="easy prolonged bleeding">easy prolonged bleeding</option>
      <option value="emotional problem">emotional problem</option>
      <option value="enlarged lymph node neck">enlarged lymph node neck</option>
      <option value="enlarged spleen">enlarged spleen</option>
      <option value="enlarged thyroid">enlarged thyroid</option>
      <option value="enlargement thyroid">enlargement thyroid</option>
      <option value="enlargement tonsil">enlargement tonsil</option>
      <option value="episode severe">episode severe</option>
      <option value="erythema marginatum">erythema marginatum</option>
      <option value="excess hair">excess hair</option>
      <option value="excessive amount uterine bleeding">excessive amount uterine bleeding</option>
      <option value="excessive daytime sleepiness">excessive daytime sleepiness</option>
      <option value="excessive salivation">excessive salivation</option>
      <option value="expanding area redness site tick bite">expanding area redness site tick bite</option>
      <option value="extreme sadness">extreme sadness</option>
      <option value="extremity weakness">extremity weakness</option>
      <option value="eye pain">eye pain</option>
      <option value="eye strain">eye strain</option>
      <option value="eyestrain">eyestrain</option>
      <option value="fast heart rate">fast heart rate</option>
      <option value="fast heartbeat">fast heartbeat</option>
      <option value="fatigue">fatigue</option>
      <option value="fear water">fear water</option>
      <option value="feel need check thing repeatedly">feel need check thing repeatedly</option>
      <option value="feeling cold">feeling cold</option>
      <option value="feeling faint upon standing">feeling faint upon standing</option>
      <option value="feeling generally unwell">feeling generally unwell</option>
      <option value="feeling like passing">feeling like passing</option>
      <option value="feeling need urinate right away">feeling need urinate right away</option>
      <option value="feeling tired">feeling tired</option>
      <option value="feeling tired time">feeling tired time</option>
      <option value="fever">fever</option>
      <option value="firm">firm</option>
      <option value="flat discolored spot bump may blister">flat discolored spot bump may blister</option>
      <option value="flu like illness">flu like illness</option>
      <option value="flu like symptom">flu like symptom</option>
      <option value="fluid filled blister scab">fluid filled blister scab</option>
      <option value="fluid nipple">fluid nipple</option>
      <option value="frequent infection">frequent infection</option>
      <option value="frequent urination">frequent urination</option>
      <option value="fullness">fullness</option>
      <option value="gas">gas</option>
      <option value="gradual loss coordination">gradual loss coordination</option>
      <option value="growth delay">growth delay</option>
      <option value="gum disease">gum disease</option>
      <option value="hair loss">hair loss</option>
      <option value="half ring finger">half ring finger</option>
      <option value="hallucination">hallucination</option>
      <option value="hallucination usually hearing voice">hallucination usually hearing voice</option>
      <option value="hard swelling skin">hard swelling skin</option>
      <option value="hard time reading small print">hard time reading small print</option>
      <option value="headache">headache</option>
      <option value="hearing loss">hearing loss</option>
      <option value="hearing sound external sound present">hearing sound external sound present</option>
      <option value="heartburn">heartburn</option>
      <option value="heat intolerance">heat intolerance</option>
      <option value="heavy period">heavy period</option>
      <option value="high blood pressure">high blood pressure</option>
      <option value="high body temperature">high body temperature</option>
      <option value="hoarse voice">hoarse voice</option>
      <option value="hold reading material farther away">hold reading material farther away</option>
      <option value="impaired communication">impaired communication</option>
      <option value="inability child">inability child</option>
      <option value="inability move facial muscle one side">inability move facial muscle one side</option>
      <option value="inability move feel one side body">inability move feel one side body</option>
      <option value="increased breath rate">increased breath rate</option>
      <option value="increased breathing rate">increased breathing rate</option>
      <option value="increased fat">increased fat</option>
      <option value="increased heart rate">increased heart rate</option>
      <option value="increased hunger">increased hunger</option>
      <option value="increased risk broken bone">increased risk broken bone</option>
      <option value="increased risk infection">increased risk infection</option>
      <option value="increased thirst">increased thirst</option>
      <option value="increasing weakening">increasing weakening</option>
      <option value="index">index</option>
      <option value="infertility">infertility</option>
      <option value="inflamed eye">inflamed eye</option>
      <option value="insomnia">insomnia</option>
      <option value="intellectual disability">intellectual disability</option>
      <option value="involuntary muscle movement">involuntary muscle movement</option>
      <option value="involuntary sleep episode">involuntary sleep episode</option>
      <option value="irregular edge">irregular edge</option>
      <option value="irregular menstrual period">irregular menstrual period</option>
      <option value="irregular menstruation">irregular menstruation</option>
      <option value="irritability">irritability</option>
      <option value="irritation">irritation</option>
      <option value="itchiness">itchiness</option>
      <option value="itching">itching</option>
      <option value="itching genital area">itching genital area</option>
      <option value="itching result trouble sleeping">itching result trouble sleeping</option>
      <option value="itchy">itchy</option>
      <option value="itchy blister">itchy blister</option>
      <option value="itchy bump">itchy bump</option>
      <option value="itchy ear">itchy ear</option>
      <option value="jaundice">jaundice</option>
      <option value="jaw">jaw</option>
      <option value="jerky body movement">jerky body movement</option>
      <option value="joint bone pain">joint bone pain</option>
      <option value="joint swelling">joint swelling</option>
      <option value="large amount watery diarrhea">large amount watery diarrhea</option>
      <option value="large forehead">large forehead</option>
      <option value="large lymph node">large lymph node</option>
      <option value="large lymph node around neck">large lymph node around neck</option>
      <option value="leg swelling">leg swelling</option>
      <option value="light sensitivity">light sensitivity</option>
      <option value="little pain">little pain</option>
      <option value="localized breast pain redness">localized breast pain redness</option>
      <option value="long term fatigue">long term fatigue</option>
      <option value="loose frequent bowel movement">loose frequent bowel movement</option>
      <option value="loose teeth">loose teeth</option>
      <option value="loss appetite">loss appetite</option>
      <option value="loss consciousness may sweating">loss consciousness may sweating</option>
      <option value="loss hair part head body">loss hair part head body</option>
      <option value="loss lot blood childbirth">loss lot blood childbirth</option>
      <option value="loss smell">loss smell</option>
      <option value="loss vision one side">loss vision one side</option>
      <option value="low blood pressure">low blood pressure</option>
      <option value="low energy">low energy</option>
      <option value="low red blood cell">low red blood cell</option>
      <option value="lower abdominal pain">lower abdominal pain</option>
      <option value="lump breast">lump breast</option>
      <option value="lump bump neck">lump bump neck</option>
      <option value="maculopapular rash">maculopapular rash</option>
      <option value="malabsorption">malabsorption</option>
      <option value="may symptom">may symptom</option>
      <option value="memory problem">memory problem</option>
      <option value="mental ability">mental ability</option>
      <option value="mental change">mental change</option>
      <option value="mid dilated pupil">mid dilated pupil</option>
      <option value="middle finger">middle finger</option>
      <option value="mild moderate intellectual disability">mild moderate intellectual disability</option>
      <option value="minimal">minimal</option>
      <option value="missed period">missed period</option>
      <option value="mole increasing size">mole increasing size</option>
      <option value="mood change">mood change</option>
      <option value="mood swing">mood swing</option>
      <option value="mouth sore">mouth sore</option>
      <option value="mouth ulcer">mouth ulcer</option>
      <option value="multiple painful joint">multiple painful joint</option>
      <option value="muscle ache difficulty breathing">muscle ache difficulty breathing</option>
      <option value="muscle cramp">muscle cramp</option>
      <option value="muscle joint pain">muscle joint pain</option>
      <option value="muscle spasm">muscle spasm</option>
      <option value="muscle weakness">muscle weakness</option>
      <option value="muscle weakness beginning foot hand">muscle weakness beginning foot hand</option>
      <option value="muscle weakness resulting inability move">muscle weakness resulting inability move</option>
      <option value="muscular pain">muscular pain</option>
      <option value="myalgia">myalgia</option>
      <option value="nausea">nausea</option>
      <option value="nausea vomiting">nausea vomiting</option>
      <option value="nausea vomiting weight loss dehydration occur">nausea vomiting weight loss dehydration occur</option>
      <option value="nearly undetectable spell">nearly undetectable spell</option>
      <option value="nearsightedness">nearsightedness</option>
      <option value="neck">neck</option>
      <option value="neck stiffness">neck stiffness</option>
      <option value="needing urinate often">needing urinate often</option>
      <option value="newly inverted nipple">newly inverted nipple</option>
      <option value="non itchy skin ulcer">non itchy skin ulcer</option>
      <option value="non painful cyst middle eyelid">non painful cyst middle eyelid</option>
      <option value="nonaligned eye">nonaligned eye</option>
      <option value="none non specific">none non specific</option>
      <option value="numbness">numbness</option>
      <option value="object different size eye">object different size eye</option>
      <option value="one eye myopia eye hyperopia">one eye myopia eye hyperopia</option>
      <option value="opening upper lip may extend nose palate">opening upper lip may extend nose palate</option>
      <option value="others">others</option>
      <option value="overlying redness">overlying redness</option>
      <option value="pain along inside edge shinbone">pain along inside edge shinbone</option>
      <option value="pain area">pain area</option>
      <option value="pain around ear">pain around ear</option>
      <option value="pain doesnt go shingle">pain doesnt go shingle</option>
      <option value="pain going leg lower back">pain going leg lower back</option>
      <option value="pain sex">pain sex</option>
      <option value="pain specific bone">pain specific bone</option>
      <option value="painful">painful</option>
      <option value="painful blister lower leg">painful blister lower leg</option>
      <option value="painful heavy period">painful heavy period</option>
      <option value="painful joint base big toe">painful joint base big toe</option>
      <option value="painful rash occurring stripe">painful rash occurring stripe</option>
      <option value="painful skin">painful skin</option>
      <option value="painful swelling parotid gland">painful swelling parotid gland</option>
      <option value="painful swollen joint">painful swollen joint</option>
      <option value="painful tender outer part elbow">painful tender outer part elbow</option>
      <option value="painless">painless</option>
      <option value="painless lump">painless lump</option>
      <option value="pale color">pale color</option>
      <option value="pale skin">pale skin</option>
      <option value="pallor">pallor</option>
      <option value="paralysis">paralysis</option>
      <option value="patch thick">patch thick</option>
      <option value="patch white skin">patch white skin</option>
      <option value="perform certain routine repeatedly">perform certain routine repeatedly</option>
      <option value="period vigorous shaking">period vigorous shaking</option>
      <option value="persistent rough white red patch mouth lasting longer week">persistent rough white red patch mouth lasting longer week</option>
      <option value="photophobia">photophobia</option>
      <option value="physical disability">physical disability</option>
      <option value="pimple like rash">pimple like rash</option>
      <option value="pinkish">pinkish</option>
      <option value="playing video game extremely long period time">playing video game extremely long period time</option>
      <option value="poor ability tolerate cold">poor ability tolerate cold</option>
      <option value="poor appetite">poor appetite</option>
      <option value="poor coordination">poor coordination</option>
      <option value="poor tolerance heat">poor tolerance heat</option>
      <option value="post nasal drip">post nasal drip</option>
      <option value="problem language">problem language</option>
      <option value="problem mood">problem mood</option>
      <option value="problem understanding speaking">problem understanding speaking</option>
      <option value="problem vision">problem vision</option>
      <option value="profuse sweating">profuse sweating</option>
      <option value="progressive muscle weakness">progressive muscle weakness</option>
      <option value="prolonged">prolonged</option>
      <option value="prolonged cough">prolonged cough</option>
      <option value="prominent">prominent</option>
      <option value="protein urine">protein urine</option>
      <option value="psychosis">psychosis</option>
      <option value="pulsing pain">pulsing pain</option>
      <option value="purple colored skin affected area">purple colored skin affected area</option>
      <option value="purple colored skin lesion">purple colored skin lesion</option>
      <option value="raised">raised</option>
      <option value="raised red blue lesion">raised red blue lesion</option>
      <option value="random outburst laughter">random outburst laughter</option>
      <option value="rapid breathing">rapid breathing</option>
      <option value="recurring episode wheezing">recurring episode wheezing</option>
      <option value="red">red</option>
      <option value="red eye">red eye</option>
      <option value="red purple darker skin">red purple darker skin</option>
      <option value="red rash">red rash</option>
      <option value="red scaly patch skin breast">red scaly patch skin breast</option>
      <option value="red skin">red skin</option>
      <option value="red spot white eye">red spot white eye</option>
      <option value="red without blister">red without blister</option>
      <option value="reddish eye">reddish eye</option>
      <option value="redness">redness</option>
      <option value="redness eye">redness eye</option>
      <option value="repetitive behavior">repetitive behavior</option>
      <option value="restricted interest">restricted interest</option>
      <option value="right lower abdominal pain">right lower abdominal pain</option>
      <option value="rigidity">rigidity</option>
      <option value="ringing ear heartbeat">ringing ear heartbeat</option>
      <option value="rough skin growth">rough skin growth</option>
      <option value="runny nose">runny nose</option>
      <option value="scaly patch skin">scaly patch skin</option>
      <option value="scratchiness">scratchiness</option>
      <option value="seizure">seizure</option>
      <option value="sensitivity smell">sensitivity smell</option>
      <option value="sensitivity sound">sensitivity sound</option>
      <option value="severe intellectual disability">severe intellectual disability</option>
      <option value="severe pain">severe pain</option>
      <option value="severe pain lower back abdomen">severe pain lower back abdomen</option>
      <option value="shakiness">shakiness</option>
      <option value="shaking">shaking</option>
      <option value="sharp chest pain">sharp chest pain</option>
      <option value="shivering">shivering</option>
      <option value="shock like pain one side face last second minute">shock like pain one side face last second minute</option>
      <option value="short height">short height</option>
      <option value="short stature">short stature</option>
      <option value="shortness breath">shortness breath</option>
      <option value="sit">sit</option>
      <option value="skin blister">skin blister</option>
      <option value="skin breakdown">skin breakdown</option>
      <option value="skin lesion generally pink color project outward">skin lesion generally pink color project outward</option>
      <option value="skin peeling">skin peeling</option>
      <option value="sleep problem">sleep problem</option>
      <option value="sleeping problem">sleeping problem</option>
      <option value="slowness movement">slowness movement</option>
      <option value="small">small</option>
      <option value="small blister break open form painful ulcer">small blister break open form painful ulcer</option>
      <option value="small blister surrounding swelling">small blister surrounding swelling</option>
      <option value="small face">small face</option>
      <option value="small head">small head</option>
      <option value="small jaw">small jaw</option>
      <option value="sneezing">sneezing</option>
      <option value="social withdrawal">social withdrawal</option>
      <option value="sometimes symptom">sometimes symptom</option>
      <option value="sore arm leg">sore arm leg</option>
      <option value="sore throat">sore throat</option>
      <option value="sore wrist">sore wrist</option>
      <option value="stiff muscle">stiff muscle</option>
      <option value="stiff neck">stiff neck</option>
      <option value="stiffness">stiffness</option>
      <option value="stomach pain">stomach pain</option>
      <option value="stroke">stroke</option>
      <option value="stuffy itchy nose">stuffy itchy nose</option>
      <option value="stunted growth">stunted growth</option>
      <option value="sudden">sudden</option>
      <option value="sudden loss muscle strength">sudden loss muscle strength</option>
      <option value="sweat">sweat</option>
      <option value="swell pain near tumor">swell pain near tumor</option>
      <option value="swelling">swelling</option>
      <option value="swelling abdomen">swelling abdomen</option>
      <option value="swelling around eye">swelling around eye</option>
      <option value="swelling hand foot">swelling hand foot</option>
      <option value="swollen">swollen</option>
      <option value="swollen hand foot">swollen hand foot</option>
      <option value="swollen lymph node">swollen lymph node</option>
      <option value="taste acid">taste acid</option>
      <option value="temporary fleeting vision one eye">temporary fleeting vision one eye</option>
      <option value="tender breast">tender breast</option>
      <option value="testicular pain">testicular pain</option>
      <option value="tingling">tingling</option>
      <option value="tingling hand foot">tingling hand foot</option>
      <option value="tingling thumb">tingling thumb</option>
      <option value="tiredness">tiredness</option>
      <option value="tooth loss">tooth loss</option>
      <option value="tremor">tremor</option>
      <option value="triangular tissue growth cornea">triangular tissue growth cornea</option>
      <option value="trouble breathing nose">trouble breathing nose</option>
      <option value="trouble coordination">trouble coordination</option>
      <option value="trouble opening mouth">trouble opening mouth</option>
      <option value="trouble seeing">trouble seeing</option>
      <option value="trouble sensation">trouble sensation</option>
      <option value="trouble sleeping">trouble sleeping</option>
      <option value="trouble social interaction">trouble social interaction</option>
      <option value="trouble speaking">trouble speaking</option>
      <option value="trouble swallowing">trouble swallowing</option>
      <option value="trouble talking">trouble talking</option>
      <option value="trouble walking">trouble walking</option>
      <option value="typically none">typically none</option>
      <option value="ulcer">ulcer</option>
      <option value="ulcer around genitals">ulcer around genitals</option>
      <option value="ulceration">ulceration</option>
      <option value="unable move">unable move</option>
      <option value="unexplained weight loss">unexplained weight loss</option>
      <option value="unintended weight loss">unintended weight loss</option>
      <option value="unpleasant smell present breath">unpleasant smell present breath</option>
      <option value="upper abdominal pain">upper abdominal pain</option>
      <option value="usage resulting problem">usage resulting problem</option>
      <option value="vaginal bleeding">vaginal bleeding</option>
      <option value="vaginal bleeding without pain">vaginal bleeding without pain</option>
      <option value="vaginal discharge">vaginal discharge</option>
      <option value="variable">variable</option>
      <option value="vary depending part brain involved">vary depending part brain involved</option>
      <option value="varying degree muscle weakness">varying degree muscle weakness</option>
      <option value="velvety skin">velvety skin</option>
      <option value="vision loss">vision loss</option>
      <option value="vomiting">vomiting</option>
      <option value="warm">warm</option>
      <option value="wart">wart</option>
      <option value="watery eye">watery eye</option>
      <option value="weak grip">weak grip</option>
      <option value="weak muscle">weak muscle</option>
      <option value="weakness limb">weakness limb</option>
      <option value="weakness numbness affected leg">weakness numbness affected leg</option>
      <option value="webbed neck">webbed neck</option>
      <option value="weight gain">weight gain</option>
      <option value="wet">wet</option>
      <option value="wheezing">wheezing</option>
      <option value="white patch vaginal discharge">white patch vaginal discharge</option>
      <option value="widespread pain">widespread pain</option>
      <option value="withdrawal occurring stopping">withdrawal occurring stopping</option>
      <option value="worrying">worrying</option>
      <option value="yellow skin">yellow skin</option>
      <option value="yellowish coloration skin white eye">yellowish coloration skin white eye</option>
      <option value="yellowish skin">yellowish skin</option>
      <option value="yellowish skin crust">yellowish skin crust</option>
      {/* add more options as needed */}
    </select>
    <br></br>
    <br></br>
    <br></br>

    <label style={{margin: "1rem"}} htmlFor="symptom2">Select symptom 2:</label>
    <select style={{ border: '2px solid red',backgroundColor: 'transparent' }} id="symptom2" value={symptom2} onChange={(e) => setSymptom2(e.target.value)}>
    <option value="">-- Please select a symptom --</option>
      <option value="abdominal cramp">abdominal cramp</option>
      <option value="abdominal distention">abdominal distention</option>
      <option value="abnormal behavior">abnormal behavior</option>
      <option value="abnormal bleeding">abnormal bleeding</option>
      <option value="abnormal sensation">abnormal sensation</option>
      <option value="abnormally frequent">abnormally frequent</option>
      <option value="abscess">abscess</option>
      <option value="aching">aching</option>
      <option value="acne">acne</option>
      <option value="acquiring drinking alcohol taking lot time">acquiring drinking alcohol taking lot time</option>
      <option value="affected part turning white">affected part turning white</option>
      <option value="anemia">anemia</option>
      <option value="anxiety">anxiety</option>
      <option value="arm">arm</option>
      <option value="attack pain">attack pain</option>
      <option value="back">back</option>
      <option value="bacterial infection">bacterial infection</option>
      <option value="bad breath">bad breath</option>
      <option value="bad smelling thin vaginal discharge">bad smelling thin vaginal discharge</option>
      <option value="bad smelling vaginal discharge">bad smelling vaginal discharge</option>
      <option value="barky cough">barky cough</option>
      <option value="belching">belching</option>
      <option value="better sitting worse lying">better sitting worse lying</option>
      <option value="birth baby younger week gestational age">birth baby younger week gestational age</option>
      <option value="bleeding gum">bleeding gum</option>
      <option value="bleeding skin">bleeding skin</option>
      <option value="blindness">blindness</option>
      <option value="blindness one eye">blindness one eye</option>
      <option value="blister sunlight">blister sunlight</option>
      <option value="bloating">bloating</option>
      <option value="blood stool">blood stool</option>
      <option value="blood urine">blood urine</option>
      <option value="bloody diarrhea">bloody diarrhea</option>
      <option value="blue">blue</option>
      <option value="bluish skin coloration">bluish skin coloration</option>
      <option value="blurred vision">blurred vision</option>
      <option value="blurry vision">blurry vision</option>
      <option value="body tremor">body tremor</option>
      <option value="bone pain">bone pain</option>
      <option value="bowed leg">bowed leg</option>
      <option value="breakdown skeletal muscle">breakdown skeletal muscle</option>
      <option value="breathing problem">breathing problem</option>
      <option value="bruising">bruising</option>
      <option value="burning">burning</option>
      <option value="burning redness eye">burning redness eye</option>
      <option value="burning stabbing pain">burning stabbing pain</option>
      <option value="burning urination">burning urination</option>
      <option value="certain thought repeatedly">certain thought repeatedly</option>
      <option value="change bowel movement">change bowel movement</option>
      <option value="change breast shape">change breast shape</option>
      <option value="change color">change color</option>
      <option value="change hair">change hair</option>
      <option value="change reflex">change reflex</option>
      <option value="change skin color red black">change skin color red black</option>
      <option value="change sleeping eating pattern">change sleeping eating pattern</option>
      <option value="change taste">change taste</option>
      <option value="change voice">change voice</option>
      <option value="characteristic facial feature">characteristic facial feature</option>
      <option value="characteristic rash">characteristic rash</option>
      <option value="chest discomfort">chest discomfort</option>
      <option value="chest pain">chest pain</option>
      <option value="chest tightness">chest tightness</option>
      <option value="chill">chill</option>
      <option value="chronic cough">chronic cough</option>
      <option value="chronic pain bladder">chronic pain bladder</option>
      <option value="clenched fist overlapping finger">clenched fist overlapping finger</option>
      <option value="close object appear blurry">close object appear blurry</option>
      <option value="clumsy">clumsy</option>
      <option value="cm lump skin">cm lump skin</option>
      <option value="cold sweat">cold sweat</option>
      <option value="coma">coma</option>
      <option value="confused thinking">confused thinking</option>
      <option value="confusion">confusion</option>
      <option value="constipation">constipation</option>
      <option value="coolness">coolness</option>
      <option value="coordination">coordination</option>
      <option value="cough bloody mucus">cough bloody mucus</option>
      <option value="cough sputum production">cough sputum production</option>
      <option value="coughing">coughing</option>
      <option value="coughing blood">coughing blood</option>
      <option value="coughing including coughing blood">coughing including coughing blood</option>
      <option value="coughing mucus">coughing mucus</option>
      <option value="crawl">crawl</option>
      <option value="cry episode">cry episode</option>
      <option value="dark urine">dark urine</option>
      <option value="darker">darker</option>
      <option value="daytime sleepiness">daytime sleepiness</option>
      <option value="death child le one year age">death child le one year age</option>
      <option value="decreased ability feel pain">decreased ability feel pain</option>
      <option value="decreased ability see">decreased ability see</option>
      <option value="decreased ability think">decreased ability think</option>
      <option value="decreased ability think remember">decreased ability think remember</option>
      <option value="decreased ability turn">decreased ability turn</option>
      <option value="decreased appetite">decreased appetite</option>
      <option value="decreased motivation">decreased motivation</option>
      <option value="decreased range motion">decreased range motion</option>
      <option value="decreased taste">decreased taste</option>
      <option value="decreased vision">decreased vision</option>
      <option value="dehydration">dehydration</option>
      <option value="delayed physical growth">delayed physical growth</option>
      <option value="delirium">delirium</option>
      <option value="delusion">delusion</option>
      <option value="dementia">dementia</option>
      <option value="depending subtype abdominal pain">depending subtype abdominal pain</option>
      <option value="depends organ involved">depends organ involved</option>
      <option value="depressed mood">depressed mood</option>
      <option value="depression">depression</option>
      <option value="dermatitis herpetiformis">dermatitis herpetiformis</option>
      <option value="developmental disability">developmental disability</option>
      <option value="diarrhea">diarrhea</option>
      <option value="diarrhea may bloody">diarrhea may bloody</option>
      <option value="diarrhea mixed blood">diarrhea mixed blood</option>
      <option value="diarrhoea">diarrhoea</option>
      <option value="difficulty breathing">difficulty breathing</option>
      <option value="difficulty cutting">difficulty cutting</option>
      <option value="difficulty eating">difficulty eating</option>
      <option value="difficulty getting pregnant">difficulty getting pregnant</option>
      <option value="difficulty remembering recent event">difficulty remembering recent event</option>
      <option value="difficulty swallowing">difficulty swallowing</option>
      <option value="difficulty walking">difficulty walking</option>
      <option value="dimpling skin">dimpling skin</option>
      <option value="discharge penis">discharge penis</option>
      <option value="disorientation">disorientation</option>
      <option value="distant object appear blurry">distant object appear blurry</option>
      <option value="distorted blurred vision distance">distorted blurred vision distance</option>
      <option value="dizziness">dizziness</option>
      <option value="double vision">double vision</option>
      <option value="drinking large amount alcohol long period">drinking large amount alcohol long period</option>
      <option value="drooping eyelid">drooping eyelid</option>
      <option value="dry cough">dry cough</option>
      <option value="dry damp skin">dry damp skin</option>
      <option value="dry eye">dry eye</option>
      <option value="dry mouth">dry mouth</option>
      <option value="ear pain">ear pain</option>
      <option value="easy prolonged bleeding">easy prolonged bleeding</option>
      <option value="emotional problem">emotional problem</option>
      <option value="enlarged lymph node neck">enlarged lymph node neck</option>
      <option value="enlarged spleen">enlarged spleen</option>
      <option value="enlarged thyroid">enlarged thyroid</option>
      <option value="enlargement thyroid">enlargement thyroid</option>
      <option value="enlargement tonsil">enlargement tonsil</option>
      <option value="episode severe">episode severe</option>
      <option value="erythema marginatum">erythema marginatum</option>
      <option value="excess hair">excess hair</option>
      <option value="excessive amount uterine bleeding">excessive amount uterine bleeding</option>
      <option value="excessive daytime sleepiness">excessive daytime sleepiness</option>
      <option value="excessive salivation">excessive salivation</option>
      <option value="expanding area redness site tick bite">expanding area redness site tick bite</option>
      <option value="extreme sadness">extreme sadness</option>
      <option value="extremity weakness">extremity weakness</option>
      <option value="eye pain">eye pain</option>
      <option value="eye strain">eye strain</option>
      <option value="eyestrain">eyestrain</option>
      <option value="fast heart rate">fast heart rate</option>
      <option value="fast heartbeat">fast heartbeat</option>
      <option value="fatigue">fatigue</option>
      <option value="fear water">fear water</option>
      <option value="feel need check thing repeatedly">feel need check thing repeatedly</option>
      <option value="feeling cold">feeling cold</option>
      <option value="feeling faint upon standing">feeling faint upon standing</option>
      <option value="feeling generally unwell">feeling generally unwell</option>
      <option value="feeling like passing">feeling like passing</option>
      <option value="feeling need urinate right away">feeling need urinate right away</option>
      <option value="feeling tired">feeling tired</option>
      <option value="feeling tired time">feeling tired time</option>
      <option value="fever">fever</option>
      <option value="firm">firm</option>
      <option value="flat discolored spot bump may blister">flat discolored spot bump may blister</option>
      <option value="flu like illness">flu like illness</option>
      <option value="flu like symptom">flu like symptom</option>
      <option value="fluid filled blister scab">fluid filled blister scab</option>
      <option value="fluid nipple">fluid nipple</option>
      <option value="frequent infection">frequent infection</option>
      <option value="frequent urination">frequent urination</option>
      <option value="fullness">fullness</option>
      <option value="gas">gas</option>
      <option value="gradual loss coordination">gradual loss coordination</option>
      <option value="growth delay">growth delay</option>
      <option value="gum disease">gum disease</option>
      <option value="hair loss">hair loss</option>
      <option value="half ring finger">half ring finger</option>
      <option value="hallucination">hallucination</option>
      <option value="hallucination usually hearing voice">hallucination usually hearing voice</option>
      <option value="hard swelling skin">hard swelling skin</option>
      <option value="hard time reading small print">hard time reading small print</option>
      <option value="headache">headache</option>
      <option value="hearing loss">hearing loss</option>
      <option value="hearing sound external sound present">hearing sound external sound present</option>
      <option value="heartburn">heartburn</option>
      <option value="heat intolerance">heat intolerance</option>
      <option value="heavy period">heavy period</option>
      <option value="high blood pressure">high blood pressure</option>
      <option value="high body temperature">high body temperature</option>
      <option value="hoarse voice">hoarse voice</option>
      <option value="hold reading material farther away">hold reading material farther away</option>
      <option value="impaired communication">impaired communication</option>
      <option value="inability child">inability child</option>
      <option value="inability move facial muscle one side">inability move facial muscle one side</option>
      <option value="inability move feel one side body">inability move feel one side body</option>
      <option value="increased breath rate">increased breath rate</option>
      <option value="increased breathing rate">increased breathing rate</option>
      <option value="increased fat">increased fat</option>
      <option value="increased heart rate">increased heart rate</option>
      <option value="increased hunger">increased hunger</option>
      <option value="increased risk broken bone">increased risk broken bone</option>
      <option value="increased risk infection">increased risk infection</option>
      <option value="increased thirst">increased thirst</option>
      <option value="increasing weakening">increasing weakening</option>
      <option value="index">index</option>
      <option value="infertility">infertility</option>
      <option value="inflamed eye">inflamed eye</option>
      <option value="insomnia">insomnia</option>
      <option value="intellectual disability">intellectual disability</option>
      <option value="involuntary muscle movement">involuntary muscle movement</option>
      <option value="involuntary sleep episode">involuntary sleep episode</option>
      <option value="irregular edge">irregular edge</option>
      <option value="irregular menstrual period">irregular menstrual period</option>
      <option value="irregular menstruation">irregular menstruation</option>
      <option value="irritability">irritability</option>
      <option value="irritation">irritation</option>
      <option value="itchiness">itchiness</option>
      <option value="itching">itching</option>
      <option value="itching genital area">itching genital area</option>
      <option value="itching result trouble sleeping">itching result trouble sleeping</option>
      <option value="itchy">itchy</option>
      <option value="itchy blister">itchy blister</option>
      <option value="itchy bump">itchy bump</option>
      <option value="itchy ear">itchy ear</option>
      <option value="jaundice">jaundice</option>
      <option value="jaw">jaw</option>
      <option value="jerky body movement">jerky body movement</option>
      <option value="joint bone pain">joint bone pain</option>
      <option value="joint swelling">joint swelling</option>
      <option value="large amount watery diarrhea">large amount watery diarrhea</option>
      <option value="large forehead">large forehead</option>
      <option value="large lymph node">large lymph node</option>
      <option value="large lymph node around neck">large lymph node around neck</option>
      <option value="leg swelling">leg swelling</option>
      <option value="light sensitivity">light sensitivity</option>
      <option value="little pain">little pain</option>
      <option value="localized breast pain redness">localized breast pain redness</option>
      <option value="long term fatigue">long term fatigue</option>
      <option value="loose frequent bowel movement">loose frequent bowel movement</option>
      <option value="loose teeth">loose teeth</option>
      <option value="loss appetite">loss appetite</option>
      <option value="loss consciousness may sweating">loss consciousness may sweating</option>
      <option value="loss hair part head body">loss hair part head body</option>
      <option value="loss lot blood childbirth">loss lot blood childbirth</option>
      <option value="loss smell">loss smell</option>
      <option value="loss vision one side">loss vision one side</option>
      <option value="low blood pressure">low blood pressure</option>
      <option value="low energy">low energy</option>
      <option value="low red blood cell">low red blood cell</option>
      <option value="lower abdominal pain">lower abdominal pain</option>
      <option value="lump breast">lump breast</option>
      <option value="lump bump neck">lump bump neck</option>
      <option value="maculopapular rash">maculopapular rash</option>
      <option value="malabsorption">malabsorption</option>
      <option value="may symptom">may symptom</option>
      <option value="memory problem">memory problem</option>
      <option value="mental ability">mental ability</option>
      <option value="mental change">mental change</option>
      <option value="mid dilated pupil">mid dilated pupil</option>
      <option value="middle finger">middle finger</option>
      <option value="mild moderate intellectual disability">mild moderate intellectual disability</option>
      <option value="minimal">minimal</option>
      <option value="missed period">missed period</option>
      <option value="mole increasing size">mole increasing size</option>
      <option value="mood change">mood change</option>
      <option value="mood swing">mood swing</option>
      <option value="mouth sore">mouth sore</option>
      <option value="mouth ulcer">mouth ulcer</option>
      <option value="multiple painful joint">multiple painful joint</option>
      <option value="muscle ache difficulty breathing">muscle ache difficulty breathing</option>
      <option value="muscle cramp">muscle cramp</option>
      <option value="muscle joint pain">muscle joint pain</option>
      <option value="muscle spasm">muscle spasm</option>
      <option value="muscle weakness">muscle weakness</option>
      <option value="muscle weakness beginning foot hand">muscle weakness beginning foot hand</option>
      <option value="muscle weakness resulting inability move">muscle weakness resulting inability move</option>
      <option value="muscular pain">muscular pain</option>
      <option value="myalgia">myalgia</option>
      <option value="nausea">nausea</option>
      <option value="nausea vomiting">nausea vomiting</option>
      <option value="nausea vomiting weight loss dehydration occur">nausea vomiting weight loss dehydration occur</option>
      <option value="nearly undetectable spell">nearly undetectable spell</option>
      <option value="nearsightedness">nearsightedness</option>
      <option value="neck">neck</option>
      <option value="neck stiffness">neck stiffness</option>
      <option value="needing urinate often">needing urinate often</option>
      <option value="newly inverted nipple">newly inverted nipple</option>
      <option value="non itchy skin ulcer">non itchy skin ulcer</option>
      <option value="non painful cyst middle eyelid">non painful cyst middle eyelid</option>
      <option value="nonaligned eye">nonaligned eye</option>
      <option value="none non specific">none non specific</option>
      <option value="numbness">numbness</option>
      <option value="object different size eye">object different size eye</option>
      <option value="one eye myopia eye hyperopia">one eye myopia eye hyperopia</option>
      <option value="opening upper lip may extend nose palate">opening upper lip may extend nose palate</option>
      <option value="others">others</option>
      <option value="overlying redness">overlying redness</option>
      <option value="pain along inside edge shinbone">pain along inside edge shinbone</option>
      <option value="pain area">pain area</option>
      <option value="pain around ear">pain around ear</option>
      <option value="pain doesnt go shingle">pain doesnt go shingle</option>
      <option value="pain going leg lower back">pain going leg lower back</option>
      <option value="pain sex">pain sex</option>
      <option value="pain specific bone">pain specific bone</option>
      <option value="painful">painful</option>
      <option value="painful blister lower leg">painful blister lower leg</option>
      <option value="painful heavy period">painful heavy period</option>
      <option value="painful joint base big toe">painful joint base big toe</option>
      <option value="painful rash occurring stripe">painful rash occurring stripe</option>
      <option value="painful skin">painful skin</option>
      <option value="painful swelling parotid gland">painful swelling parotid gland</option>
      <option value="painful swollen joint">painful swollen joint</option>
      <option value="painful tender outer part elbow">painful tender outer part elbow</option>
      <option value="painless">painless</option>
      <option value="painless lump">painless lump</option>
      <option value="pale color">pale color</option>
      <option value="pale skin">pale skin</option>
      <option value="pallor">pallor</option>
      <option value="paralysis">paralysis</option>
      <option value="patch thick">patch thick</option>
      <option value="patch white skin">patch white skin</option>
      <option value="perform certain routine repeatedly">perform certain routine repeatedly</option>
      <option value="period vigorous shaking">period vigorous shaking</option>
      <option value="persistent rough white red patch mouth lasting longer week">persistent rough white red patch mouth lasting longer week</option>
      <option value="photophobia">photophobia</option>
      <option value="physical disability">physical disability</option>
      <option value="pimple like rash">pimple like rash</option>
      <option value="pinkish">pinkish</option>
      <option value="playing video game extremely long period time">playing video game extremely long period time</option>
      <option value="poor ability tolerate cold">poor ability tolerate cold</option>
      <option value="poor appetite">poor appetite</option>
      <option value="poor coordination">poor coordination</option>
      <option value="poor tolerance heat">poor tolerance heat</option>
      <option value="post nasal drip">post nasal drip</option>
      <option value="problem language">problem language</option>
      <option value="problem mood">problem mood</option>
      <option value="problem understanding speaking">problem understanding speaking</option>
      <option value="problem vision">problem vision</option>
      <option value="profuse sweating">profuse sweating</option>
      <option value="progressive muscle weakness">progressive muscle weakness</option>
      <option value="prolonged">prolonged</option>
      <option value="prolonged cough">prolonged cough</option>
      <option value="prominent">prominent</option>
      <option value="protein urine">protein urine</option>
      <option value="psychosis">psychosis</option>
      <option value="pulsing pain">pulsing pain</option>
      <option value="purple colored skin affected area">purple colored skin affected area</option>
      <option value="purple colored skin lesion">purple colored skin lesion</option>
      <option value="raised">raised</option>
      <option value="raised red blue lesion">raised red blue lesion</option>
      <option value="random outburst laughter">random outburst laughter</option>
      <option value="rapid breathing">rapid breathing</option>
      <option value="recurring episode wheezing">recurring episode wheezing</option>
      <option value="red">red</option>
      <option value="red eye">red eye</option>
      <option value="red purple darker skin">red purple darker skin</option>
      <option value="red rash">red rash</option>
      <option value="red scaly patch skin breast">red scaly patch skin breast</option>
      <option value="red skin">red skin</option>
      <option value="red spot white eye">red spot white eye</option>
      <option value="red without blister">red without blister</option>
      <option value="reddish eye">reddish eye</option>
      <option value="redness">redness</option>
      <option value="redness eye">redness eye</option>
      <option value="repetitive behavior">repetitive behavior</option>
      <option value="restricted interest">restricted interest</option>
      <option value="right lower abdominal pain">right lower abdominal pain</option>
      <option value="rigidity">rigidity</option>
      <option value="ringing ear heartbeat">ringing ear heartbeat</option>
      <option value="rough skin growth">rough skin growth</option>
      <option value="runny nose">runny nose</option>
      <option value="scaly patch skin">scaly patch skin</option>
      <option value="scratchiness">scratchiness</option>
      <option value="seizure">seizure</option>
      <option value="sensitivity smell">sensitivity smell</option>
      <option value="sensitivity sound">sensitivity sound</option>
      <option value="severe intellectual disability">severe intellectual disability</option>
      <option value="severe pain">severe pain</option>
      <option value="severe pain lower back abdomen">severe pain lower back abdomen</option>
      <option value="shakiness">shakiness</option>
      <option value="shaking">shaking</option>
      <option value="sharp chest pain">sharp chest pain</option>
      <option value="shivering">shivering</option>
      <option value="shock like pain one side face last second minute">shock like pain one side face last second minute</option>
      <option value="short height">short height</option>
      <option value="short stature">short stature</option>
      <option value="shortness breath">shortness breath</option>
      <option value="sit">sit</option>
      <option value="skin blister">skin blister</option>
      <option value="skin breakdown">skin breakdown</option>
      <option value="skin lesion generally pink color project outward">skin lesion generally pink color project outward</option>
      <option value="skin peeling">skin peeling</option>
      <option value="sleep problem">sleep problem</option>
      <option value="sleeping problem">sleeping problem</option>
      <option value="slowness movement">slowness movement</option>
      <option value="small">small</option>
      <option value="small blister break open form painful ulcer">small blister break open form painful ulcer</option>
      <option value="small blister surrounding swelling">small blister surrounding swelling</option>
      <option value="small face">small face</option>
      <option value="small head">small head</option>
      <option value="small jaw">small jaw</option>
      <option value="sneezing">sneezing</option>
      <option value="social withdrawal">social withdrawal</option>
      <option value="sometimes symptom">sometimes symptom</option>
      <option value="sore arm leg">sore arm leg</option>
      <option value="sore throat">sore throat</option>
      <option value="sore wrist">sore wrist</option>
      <option value="stiff muscle">stiff muscle</option>
      <option value="stiff neck">stiff neck</option>
      <option value="stiffness">stiffness</option>
      <option value="stomach pain">stomach pain</option>
      <option value="stroke">stroke</option>
      <option value="stuffy itchy nose">stuffy itchy nose</option>
      <option value="stunted growth">stunted growth</option>
      <option value="sudden">sudden</option>
      <option value="sudden loss muscle strength">sudden loss muscle strength</option>
      <option value="sweat">sweat</option>
      <option value="swell pain near tumor">swell pain near tumor</option>
      <option value="swelling">swelling</option>
      <option value="swelling abdomen">swelling abdomen</option>
      <option value="swelling around eye">swelling around eye</option>
      <option value="swelling hand foot">swelling hand foot</option>
      <option value="swollen">swollen</option>
      <option value="swollen hand foot">swollen hand foot</option>
      <option value="swollen lymph node">swollen lymph node</option>
      <option value="taste acid">taste acid</option>
      <option value="temporary fleeting vision one eye">temporary fleeting vision one eye</option>
      <option value="tender breast">tender breast</option>
      <option value="testicular pain">testicular pain</option>
      <option value="tingling">tingling</option>
      <option value="tingling hand foot">tingling hand foot</option>
      <option value="tingling thumb">tingling thumb</option>
      <option value="tiredness">tiredness</option>
      <option value="tooth loss">tooth loss</option>
      <option value="tremor">tremor</option>
      <option value="triangular tissue growth cornea">triangular tissue growth cornea</option>
      <option value="trouble breathing nose">trouble breathing nose</option>
      <option value="trouble coordination">trouble coordination</option>
      <option value="trouble opening mouth">trouble opening mouth</option>
      <option value="trouble seeing">trouble seeing</option>
      <option value="trouble sensation">trouble sensation</option>
      <option value="trouble sleeping">trouble sleeping</option>
      <option value="trouble social interaction">trouble social interaction</option>
      <option value="trouble speaking">trouble speaking</option>
      <option value="trouble swallowing">trouble swallowing</option>
      <option value="trouble talking">trouble talking</option>
      <option value="trouble walking">trouble walking</option>
      <option value="typically none">typically none</option>
      <option value="ulcer">ulcer</option>
      <option value="ulcer around genitals">ulcer around genitals</option>
      <option value="ulceration">ulceration</option>
      <option value="unable move">unable move</option>
      <option value="unexplained weight loss">unexplained weight loss</option>
      <option value="unintended weight loss">unintended weight loss</option>
      <option value="unpleasant smell present breath">unpleasant smell present breath</option>
      <option value="upper abdominal pain">upper abdominal pain</option>
      <option value="usage resulting problem">usage resulting problem</option>
      <option value="vaginal bleeding">vaginal bleeding</option>
      <option value="vaginal bleeding without pain">vaginal bleeding without pain</option>
      <option value="vaginal discharge">vaginal discharge</option>
      <option value="variable">variable</option>
      <option value="vary depending part brain involved">vary depending part brain involved</option>
      <option value="varying degree muscle weakness">varying degree muscle weakness</option>
      <option value="velvety skin">velvety skin</option>
      <option value="vision loss">vision loss</option>
      <option value="vomiting">vomiting</option>
      <option value="warm">warm</option>
      <option value="wart">wart</option>
      <option value="watery eye">watery eye</option>
      <option value="weak grip">weak grip</option>
      <option value="weak muscle">weak muscle</option>
      <option value="weakness limb">weakness limb</option>
      <option value="weakness numbness affected leg">weakness numbness affected leg</option>
      <option value="webbed neck">webbed neck</option>
      <option value="weight gain">weight gain</option>
      <option value="wet">wet</option>
      <option value="wheezing">wheezing</option>
      <option value="white patch vaginal discharge">white patch vaginal discharge</option>
      <option value="widespread pain">widespread pain</option>
      <option value="withdrawal occurring stopping">withdrawal occurring stopping</option>
      <option value="worrying">worrying</option>
      <option value="yellow skin">yellow skin</option>
      <option value="yellowish coloration skin white eye">yellowish coloration skin white eye</option>
      <option value="yellowish skin">yellowish skin</option>
      <option value="yellowish skin crust">yellowish skin crust</option>
      {/* add more options as needed */}
    </select>
    <br></br>
    <br></br>
    <br></br>
    <label style={{margin: "1rem"}} htmlFor="symptom3">Select symptom 3:</label>
    <select style={{ border: '2px solid red',backgroundColor: 'transparent' }}  id="symptom3" value={symptom3} onChange={(e) => setSymptom3(e.target.value)}>
    <option value="">-- Please select a symptom --</option>
      <option value="abdominal cramp">abdominal cramp</option>
      <option value="abdominal distention">abdominal distention</option>
      <option value="abnormal behavior">abnormal behavior</option>
      <option value="abnormal bleeding">abnormal bleeding</option>
      <option value="abnormal sensation">abnormal sensation</option>
      <option value="abnormally frequent">abnormally frequent</option>
      <option value="abscess">abscess</option>
      <option value="aching">aching</option>
      <option value="acne">acne</option>
      <option value="acquiring drinking alcohol taking lot time">acquiring drinking alcohol taking lot time</option>
      <option value="affected part turning white">affected part turning white</option>
      <option value="anemia">anemia</option>
      <option value="anxiety">anxiety</option>
      <option value="arm">arm</option>
      <option value="attack pain">attack pain</option>
      <option value="back">back</option>
      <option value="bacterial infection">bacterial infection</option>
      <option value="bad breath">bad breath</option>
      <option value="bad smelling thin vaginal discharge">bad smelling thin vaginal discharge</option>
      <option value="bad smelling vaginal discharge">bad smelling vaginal discharge</option>
      <option value="barky cough">barky cough</option>
      <option value="belching">belching</option>
      <option value="better sitting worse lying">better sitting worse lying</option>
      <option value="birth baby younger week gestational age">birth baby younger week gestational age</option>
      <option value="bleeding gum">bleeding gum</option>
      <option value="bleeding skin">bleeding skin</option>
      <option value="blindness">blindness</option>
      <option value="blindness one eye">blindness one eye</option>
      <option value="blister sunlight">blister sunlight</option>
      <option value="bloating">bloating</option>
      <option value="blood stool">blood stool</option>
      <option value="blood urine">blood urine</option>
      <option value="bloody diarrhea">bloody diarrhea</option>
      <option value="blue">blue</option>
      <option value="bluish skin coloration">bluish skin coloration</option>
      <option value="blurred vision">blurred vision</option>
      <option value="blurry vision">blurry vision</option>
      <option value="body tremor">body tremor</option>
      <option value="bone pain">bone pain</option>
      <option value="bowed leg">bowed leg</option>
      <option value="breakdown skeletal muscle">breakdown skeletal muscle</option>
      <option value="breathing problem">breathing problem</option>
      <option value="bruising">bruising</option>
      <option value="burning">burning</option>
      <option value="burning redness eye">burning redness eye</option>
      <option value="burning stabbing pain">burning stabbing pain</option>
      <option value="burning urination">burning urination</option>
      <option value="certain thought repeatedly">certain thought repeatedly</option>
      <option value="change bowel movement">change bowel movement</option>
      <option value="change breast shape">change breast shape</option>
      <option value="change color">change color</option>
      <option value="change hair">change hair</option>
      <option value="change reflex">change reflex</option>
      <option value="change skin color red black">change skin color red black</option>
      <option value="change sleeping eating pattern">change sleeping eating pattern</option>
      <option value="change taste">change taste</option>
      <option value="change voice">change voice</option>
      <option value="characteristic facial feature">characteristic facial feature</option>
      <option value="characteristic rash">characteristic rash</option>
      <option value="chest discomfort">chest discomfort</option>
      <option value="chest pain">chest pain</option>
      <option value="chest tightness">chest tightness</option>
      <option value="chill">chill</option>
      <option value="chronic cough">chronic cough</option>
      <option value="chronic pain bladder">chronic pain bladder</option>
      <option value="clenched fist overlapping finger">clenched fist overlapping finger</option>
      <option value="close object appear blurry">close object appear blurry</option>
      <option value="clumsy">clumsy</option>
      <option value="cm lump skin">cm lump skin</option>
      <option value="cold sweat">cold sweat</option>
      <option value="coma">coma</option>
      <option value="confused thinking">confused thinking</option>
      <option value="confusion">confusion</option>
      <option value="constipation">constipation</option>
      <option value="coolness">coolness</option>
      <option value="coordination">coordination</option>
      <option value="cough bloody mucus">cough bloody mucus</option>
      <option value="cough sputum production">cough sputum production</option>
      <option value="coughing">coughing</option>
      <option value="coughing blood">coughing blood</option>
      <option value="coughing including coughing blood">coughing including coughing blood</option>
      <option value="coughing mucus">coughing mucus</option>
      <option value="crawl">crawl</option>
      <option value="cry episode">cry episode</option>
      <option value="dark urine">dark urine</option>
      <option value="darker">darker</option>
      <option value="daytime sleepiness">daytime sleepiness</option>
      <option value="death child le one year age">death child le one year age</option>
      <option value="decreased ability feel pain">decreased ability feel pain</option>
      <option value="decreased ability see">decreased ability see</option>
      <option value="decreased ability think">decreased ability think</option>
      <option value="decreased ability think remember">decreased ability think remember</option>
      <option value="decreased ability turn">decreased ability turn</option>
      <option value="decreased appetite">decreased appetite</option>
      <option value="decreased motivation">decreased motivation</option>
      <option value="decreased range motion">decreased range motion</option>
      <option value="decreased taste">decreased taste</option>
      <option value="decreased vision">decreased vision</option>
      <option value="dehydration">dehydration</option>
      <option value="delayed physical growth">delayed physical growth</option>
      <option value="delirium">delirium</option>
      <option value="delusion">delusion</option>
      <option value="dementia">dementia</option>
      <option value="depending subtype abdominal pain">depending subtype abdominal pain</option>
      <option value="depends organ involved">depends organ involved</option>
      <option value="depressed mood">depressed mood</option>
      <option value="depression">depression</option>
      <option value="dermatitis herpetiformis">dermatitis herpetiformis</option>
      <option value="developmental disability">developmental disability</option>
      <option value="diarrhea">diarrhea</option>
      <option value="diarrhea may bloody">diarrhea may bloody</option>
      <option value="diarrhea mixed blood">diarrhea mixed blood</option>
      <option value="diarrhoea">diarrhoea</option>
      <option value="difficulty breathing">difficulty breathing</option>
      <option value="difficulty cutting">difficulty cutting</option>
      <option value="difficulty eating">difficulty eating</option>
      <option value="difficulty getting pregnant">difficulty getting pregnant</option>
      <option value="difficulty remembering recent event">difficulty remembering recent event</option>
      <option value="difficulty swallowing">difficulty swallowing</option>
      <option value="difficulty walking">difficulty walking</option>
      <option value="dimpling skin">dimpling skin</option>
      <option value="discharge penis">discharge penis</option>
      <option value="disorientation">disorientation</option>
      <option value="distant object appear blurry">distant object appear blurry</option>
      <option value="distorted blurred vision distance">distorted blurred vision distance</option>
      <option value="dizziness">dizziness</option>
      <option value="double vision">double vision</option>
      <option value="drinking large amount alcohol long period">drinking large amount alcohol long period</option>
      <option value="drooping eyelid">drooping eyelid</option>
      <option value="dry cough">dry cough</option>
      <option value="dry damp skin">dry damp skin</option>
      <option value="dry eye">dry eye</option>
      <option value="dry mouth">dry mouth</option>
      <option value="ear pain">ear pain</option>
      <option value="easy prolonged bleeding">easy prolonged bleeding</option>
      <option value="emotional problem">emotional problem</option>
      <option value="enlarged lymph node neck">enlarged lymph node neck</option>
      <option value="enlarged spleen">enlarged spleen</option>
      <option value="enlarged thyroid">enlarged thyroid</option>
      <option value="enlargement thyroid">enlargement thyroid</option>
      <option value="enlargement tonsil">enlargement tonsil</option>
      <option value="episode severe">episode severe</option>
      <option value="erythema marginatum">erythema marginatum</option>
      <option value="excess hair">excess hair</option>
      <option value="excessive amount uterine bleeding">excessive amount uterine bleeding</option>
      <option value="excessive daytime sleepiness">excessive daytime sleepiness</option>
      <option value="excessive salivation">excessive salivation</option>
      <option value="expanding area redness site tick bite">expanding area redness site tick bite</option>
      <option value="extreme sadness">extreme sadness</option>
      <option value="extremity weakness">extremity weakness</option>
      <option value="eye pain">eye pain</option>
      <option value="eye strain">eye strain</option>
      <option value="eyestrain">eyestrain</option>
      <option value="fast heart rate">fast heart rate</option>
      <option value="fast heartbeat">fast heartbeat</option>
      <option value="fatigue">fatigue</option>
      <option value="fear water">fear water</option>
      <option value="feel need check thing repeatedly">feel need check thing repeatedly</option>
      <option value="feeling cold">feeling cold</option>
      <option value="feeling faint upon standing">feeling faint upon standing</option>
      <option value="feeling generally unwell">feeling generally unwell</option>
      <option value="feeling like passing">feeling like passing</option>
      <option value="feeling need urinate right away">feeling need urinate right away</option>
      <option value="feeling tired">feeling tired</option>
      <option value="feeling tired time">feeling tired time</option>
      <option value="fever">fever</option>
      <option value="firm">firm</option>
      <option value="flat discolored spot bump may blister">flat discolored spot bump may blister</option>
      <option value="flu like illness">flu like illness</option>
      <option value="flu like symptom">flu like symptom</option>
      <option value="fluid filled blister scab">fluid filled blister scab</option>
      <option value="fluid nipple">fluid nipple</option>
      <option value="frequent infection">frequent infection</option>
      <option value="frequent urination">frequent urination</option>
      <option value="fullness">fullness</option>
      <option value="gas">gas</option>
      <option value="gradual loss coordination">gradual loss coordination</option>
      <option value="growth delay">growth delay</option>
      <option value="gum disease">gum disease</option>
      <option value="hair loss">hair loss</option>
      <option value="half ring finger">half ring finger</option>
      <option value="hallucination">hallucination</option>
      <option value="hallucination usually hearing voice">hallucination usually hearing voice</option>
      <option value="hard swelling skin">hard swelling skin</option>
      <option value="hard time reading small print">hard time reading small print</option>
      <option value="headache">headache</option>
      <option value="hearing loss">hearing loss</option>
      <option value="hearing sound external sound present">hearing sound external sound present</option>
      <option value="heartburn">heartburn</option>
      <option value="heat intolerance">heat intolerance</option>
      <option value="heavy period">heavy period</option>
      <option value="high blood pressure">high blood pressure</option>
      <option value="high body temperature">high body temperature</option>
      <option value="hoarse voice">hoarse voice</option>
      <option value="hold reading material farther away">hold reading material farther away</option>
      <option value="impaired communication">impaired communication</option>
      <option value="inability child">inability child</option>
      <option value="inability move facial muscle one side">inability move facial muscle one side</option>
      <option value="inability move feel one side body">inability move feel one side body</option>
      <option value="increased breath rate">increased breath rate</option>
      <option value="increased breathing rate">increased breathing rate</option>
      <option value="increased fat">increased fat</option>
      <option value="increased heart rate">increased heart rate</option>
      <option value="increased hunger">increased hunger</option>
      <option value="increased risk broken bone">increased risk broken bone</option>
      <option value="increased risk infection">increased risk infection</option>
      <option value="increased thirst">increased thirst</option>
      <option value="increasing weakening">increasing weakening</option>
      <option value="index">index</option>
      <option value="infertility">infertility</option>
      <option value="inflamed eye">inflamed eye</option>
      <option value="insomnia">insomnia</option>
      <option value="intellectual disability">intellectual disability</option>
      <option value="involuntary muscle movement">involuntary muscle movement</option>
      <option value="involuntary sleep episode">involuntary sleep episode</option>
      <option value="irregular edge">irregular edge</option>
      <option value="irregular menstrual period">irregular menstrual period</option>
      <option value="irregular menstruation">irregular menstruation</option>
      <option value="irritability">irritability</option>
      <option value="irritation">irritation</option>
      <option value="itchiness">itchiness</option>
      <option value="itching">itching</option>
      <option value="itching genital area">itching genital area</option>
      <option value="itching result trouble sleeping">itching result trouble sleeping</option>
      <option value="itchy">itchy</option>
      <option value="itchy blister">itchy blister</option>
      <option value="itchy bump">itchy bump</option>
      <option value="itchy ear">itchy ear</option>
      <option value="jaundice">jaundice</option>
      <option value="jaw">jaw</option>
      <option value="jerky body movement">jerky body movement</option>
      <option value="joint bone pain">joint bone pain</option>
      <option value="joint swelling">joint swelling</option>
      <option value="large amount watery diarrhea">large amount watery diarrhea</option>
      <option value="large forehead">large forehead</option>
      <option value="large lymph node">large lymph node</option>
      <option value="large lymph node around neck">large lymph node around neck</option>
      <option value="leg swelling">leg swelling</option>
      <option value="light sensitivity">light sensitivity</option>
      <option value="little pain">little pain</option>
      <option value="localized breast pain redness">localized breast pain redness</option>
      <option value="long term fatigue">long term fatigue</option>
      <option value="loose frequent bowel movement">loose frequent bowel movement</option>
      <option value="loose teeth">loose teeth</option>
      <option value="loss appetite">loss appetite</option>
      <option value="loss consciousness may sweating">loss consciousness may sweating</option>
      <option value="loss hair part head body">loss hair part head body</option>
      <option value="loss lot blood childbirth">loss lot blood childbirth</option>
      <option value="loss smell">loss smell</option>
      <option value="loss vision one side">loss vision one side</option>
      <option value="low blood pressure">low blood pressure</option>
      <option value="low energy">low energy</option>
      <option value="low red blood cell">low red blood cell</option>
      <option value="lower abdominal pain">lower abdominal pain</option>
      <option value="lump breast">lump breast</option>
      <option value="lump bump neck">lump bump neck</option>
      <option value="maculopapular rash">maculopapular rash</option>
      <option value="malabsorption">malabsorption</option>
      <option value="may symptom">may symptom</option>
      <option value="memory problem">memory problem</option>
      <option value="mental ability">mental ability</option>
      <option value="mental change">mental change</option>
      <option value="mid dilated pupil">mid dilated pupil</option>
      <option value="middle finger">middle finger</option>
      <option value="mild moderate intellectual disability">mild moderate intellectual disability</option>
      <option value="minimal">minimal</option>
      <option value="missed period">missed period</option>
      <option value="mole increasing size">mole increasing size</option>
      <option value="mood change">mood change</option>
      <option value="mood swing">mood swing</option>
      <option value="mouth sore">mouth sore</option>
      <option value="mouth ulcer">mouth ulcer</option>
      <option value="multiple painful joint">multiple painful joint</option>
      <option value="muscle ache difficulty breathing">muscle ache difficulty breathing</option>
      <option value="muscle cramp">muscle cramp</option>
      <option value="muscle joint pain">muscle joint pain</option>
      <option value="muscle spasm">muscle spasm</option>
      <option value="muscle weakness">muscle weakness</option>
      <option value="muscle weakness beginning foot hand">muscle weakness beginning foot hand</option>
      <option value="muscle weakness resulting inability move">muscle weakness resulting inability move</option>
      <option value="muscular pain">muscular pain</option>
      <option value="myalgia">myalgia</option>
      <option value="nausea">nausea</option>
      <option value="nausea vomiting">nausea vomiting</option>
      <option value="nausea vomiting weight loss dehydration occur">nausea vomiting weight loss dehydration occur</option>
      <option value="nearly undetectable spell">nearly undetectable spell</option>
      <option value="nearsightedness">nearsightedness</option>
      <option value="neck">neck</option>
      <option value="neck stiffness">neck stiffness</option>
      <option value="needing urinate often">needing urinate often</option>
      <option value="newly inverted nipple">newly inverted nipple</option>
      <option value="non itchy skin ulcer">non itchy skin ulcer</option>
      <option value="non painful cyst middle eyelid">non painful cyst middle eyelid</option>
      <option value="nonaligned eye">nonaligned eye</option>
      <option value="none non specific">none non specific</option>
      <option value="numbness">numbness</option>
      <option value="object different size eye">object different size eye</option>
      <option value="one eye myopia eye hyperopia">one eye myopia eye hyperopia</option>
      <option value="opening upper lip may extend nose palate">opening upper lip may extend nose palate</option>
      <option value="others">others</option>
      <option value="overlying redness">overlying redness</option>
      <option value="pain along inside edge shinbone">pain along inside edge shinbone</option>
      <option value="pain area">pain area</option>
      <option value="pain around ear">pain around ear</option>
      <option value="pain doesnt go shingle">pain doesnt go shingle</option>
      <option value="pain going leg lower back">pain going leg lower back</option>
      <option value="pain sex">pain sex</option>
      <option value="pain specific bone">pain specific bone</option>
      <option value="painful">painful</option>
      <option value="painful blister lower leg">painful blister lower leg</option>
      <option value="painful heavy period">painful heavy period</option>
      <option value="painful joint base big toe">painful joint base big toe</option>
      <option value="painful rash occurring stripe">painful rash occurring stripe</option>
      <option value="painful skin">painful skin</option>
      <option value="painful swelling parotid gland">painful swelling parotid gland</option>
      <option value="painful swollen joint">painful swollen joint</option>
      <option value="painful tender outer part elbow">painful tender outer part elbow</option>
      <option value="painless">painless</option>
      <option value="painless lump">painless lump</option>
      <option value="pale color">pale color</option>
      <option value="pale skin">pale skin</option>
      <option value="pallor">pallor</option>
      <option value="paralysis">paralysis</option>
      <option value="patch thick">patch thick</option>
      <option value="patch white skin">patch white skin</option>
      <option value="perform certain routine repeatedly">perform certain routine repeatedly</option>
      <option value="period vigorous shaking">period vigorous shaking</option>
      <option value="persistent rough white red patch mouth lasting longer week">persistent rough white red patch mouth lasting longer week</option>
      <option value="photophobia">photophobia</option>
      <option value="physical disability">physical disability</option>
      <option value="pimple like rash">pimple like rash</option>
      <option value="pinkish">pinkish</option>
      <option value="playing video game extremely long period time">playing video game extremely long period time</option>
      <option value="poor ability tolerate cold">poor ability tolerate cold</option>
      <option value="poor appetite">poor appetite</option>
      <option value="poor coordination">poor coordination</option>
      <option value="poor tolerance heat">poor tolerance heat</option>
      <option value="post nasal drip">post nasal drip</option>
      <option value="problem language">problem language</option>
      <option value="problem mood">problem mood</option>
      <option value="problem understanding speaking">problem understanding speaking</option>
      <option value="problem vision">problem vision</option>
      <option value="profuse sweating">profuse sweating</option>
      <option value="progressive muscle weakness">progressive muscle weakness</option>
      <option value="prolonged">prolonged</option>
      <option value="prolonged cough">prolonged cough</option>
      <option value="prominent">prominent</option>
      <option value="protein urine">protein urine</option>
      <option value="psychosis">psychosis</option>
      <option value="pulsing pain">pulsing pain</option>
      <option value="purple colored skin affected area">purple colored skin affected area</option>
      <option value="purple colored skin lesion">purple colored skin lesion</option>
      <option value="raised">raised</option>
      <option value="raised red blue lesion">raised red blue lesion</option>
      <option value="random outburst laughter">random outburst laughter</option>
      <option value="rapid breathing">rapid breathing</option>
      <option value="recurring episode wheezing">recurring episode wheezing</option>
      <option value="red">red</option>
      <option value="red eye">red eye</option>
      <option value="red purple darker skin">red purple darker skin</option>
      <option value="red rash">red rash</option>
      <option value="red scaly patch skin breast">red scaly patch skin breast</option>
      <option value="red skin">red skin</option>
      <option value="red spot white eye">red spot white eye</option>
      <option value="red without blister">red without blister</option>
      <option value="reddish eye">reddish eye</option>
      <option value="redness">redness</option>
      <option value="redness eye">redness eye</option>
      <option value="repetitive behavior">repetitive behavior</option>
      <option value="restricted interest">restricted interest</option>
      <option value="right lower abdominal pain">right lower abdominal pain</option>
      <option value="rigidity">rigidity</option>
      <option value="ringing ear heartbeat">ringing ear heartbeat</option>
      <option value="rough skin growth">rough skin growth</option>
      <option value="runny nose">runny nose</option>
      <option value="scaly patch skin">scaly patch skin</option>
      <option value="scratchiness">scratchiness</option>
      <option value="seizure">seizure</option>
      <option value="sensitivity smell">sensitivity smell</option>
      <option value="sensitivity sound">sensitivity sound</option>
      <option value="severe intellectual disability">severe intellectual disability</option>
      <option value="severe pain">severe pain</option>
      <option value="severe pain lower back abdomen">severe pain lower back abdomen</option>
      <option value="shakiness">shakiness</option>
      <option value="shaking">shaking</option>
      <option value="sharp chest pain">sharp chest pain</option>
      <option value="shivering">shivering</option>
      <option value="shock like pain one side face last second minute">shock like pain one side face last second minute</option>
      <option value="short height">short height</option>
      <option value="short stature">short stature</option>
      <option value="shortness breath">shortness breath</option>
      <option value="sit">sit</option>
      <option value="skin blister">skin blister</option>
      <option value="skin breakdown">skin breakdown</option>
      <option value="skin lesion generally pink color project outward">skin lesion generally pink color project outward</option>
      <option value="skin peeling">skin peeling</option>
      <option value="sleep problem">sleep problem</option>
      <option value="sleeping problem">sleeping problem</option>
      <option value="slowness movement">slowness movement</option>
      <option value="small">small</option>
      <option value="small blister break open form painful ulcer">small blister break open form painful ulcer</option>
      <option value="small blister surrounding swelling">small blister surrounding swelling</option>
      <option value="small face">small face</option>
      <option value="small head">small head</option>
      <option value="small jaw">small jaw</option>
      <option value="sneezing">sneezing</option>
      <option value="social withdrawal">social withdrawal</option>
      <option value="sometimes symptom">sometimes symptom</option>
      <option value="sore arm leg">sore arm leg</option>
      <option value="sore throat">sore throat</option>
      <option value="sore wrist">sore wrist</option>
      <option value="stiff muscle">stiff muscle</option>
      <option value="stiff neck">stiff neck</option>
      <option value="stiffness">stiffness</option>
      <option value="stomach pain">stomach pain</option>
      <option value="stroke">stroke</option>
      <option value="stuffy itchy nose">stuffy itchy nose</option>
      <option value="stunted growth">stunted growth</option>
      <option value="sudden">sudden</option>
      <option value="sudden loss muscle strength">sudden loss muscle strength</option>
      <option value="sweat">sweat</option>
      <option value="swell pain near tumor">swell pain near tumor</option>
      <option value="swelling">swelling</option>
      <option value="swelling abdomen">swelling abdomen</option>
      <option value="swelling around eye">swelling around eye</option>
      <option value="swelling hand foot">swelling hand foot</option>
      <option value="swollen">swollen</option>
      <option value="swollen hand foot">swollen hand foot</option>
      <option value="swollen lymph node">swollen lymph node</option>
      <option value="taste acid">taste acid</option>
      <option value="temporary fleeting vision one eye">temporary fleeting vision one eye</option>
      <option value="tender breast">tender breast</option>
      <option value="testicular pain">testicular pain</option>
      <option value="tingling">tingling</option>
      <option value="tingling hand foot">tingling hand foot</option>
      <option value="tingling thumb">tingling thumb</option>
      <option value="tiredness">tiredness</option>
      <option value="tooth loss">tooth loss</option>
      <option value="tremor">tremor</option>
      <option value="triangular tissue growth cornea">triangular tissue growth cornea</option>
      <option value="trouble breathing nose">trouble breathing nose</option>
      <option value="trouble coordination">trouble coordination</option>
      <option value="trouble opening mouth">trouble opening mouth</option>
      <option value="trouble seeing">trouble seeing</option>
      <option value="trouble sensation">trouble sensation</option>
      <option value="trouble sleeping">trouble sleeping</option>
      <option value="trouble social interaction">trouble social interaction</option>
      <option value="trouble speaking">trouble speaking</option>
      <option value="trouble swallowing">trouble swallowing</option>
      <option value="trouble talking">trouble talking</option>
      <option value="trouble walking">trouble walking</option>
      <option value="typically none">typically none</option>
      <option value="ulcer">ulcer</option>
      <option value="ulcer around genitals">ulcer around genitals</option>
      <option value="ulceration">ulceration</option>
      <option value="unable move">unable move</option>
      <option value="unexplained weight loss">unexplained weight loss</option>
      <option value="unintended weight loss">unintended weight loss</option>
      <option value="unpleasant smell present breath">unpleasant smell present breath</option>
      <option value="upper abdominal pain">upper abdominal pain</option>
      <option value="usage resulting problem">usage resulting problem</option>
      <option value="vaginal bleeding">vaginal bleeding</option>
      <option value="vaginal bleeding without pain">vaginal bleeding without pain</option>
      <option value="vaginal discharge">vaginal discharge</option>
      <option value="variable">variable</option>
      <option value="vary depending part brain involved">vary depending part brain involved</option>
      <option value="varying degree muscle weakness">varying degree muscle weakness</option>
      <option value="velvety skin">velvety skin</option>
      <option value="vision loss">vision loss</option>
      <option value="vomiting">vomiting</option>
      <option value="warm">warm</option>
      <option value="wart">wart</option>
      <option value="watery eye">watery eye</option>
      <option value="weak grip">weak grip</option>
      <option value="weak muscle">weak muscle</option>
      <option value="weakness limb">weakness limb</option>
      <option value="weakness numbness affected leg">weakness numbness affected leg</option>
      <option value="webbed neck">webbed neck</option>
      <option value="weight gain">weight gain</option>
      <option value="wet">wet</option>
      <option value="wheezing">wheezing</option>
      <option value="white patch vaginal discharge">white patch vaginal discharge</option>
      <option value="widespread pain">widespread pain</option>
      <option value="withdrawal occurring stopping">withdrawal occurring stopping</option>
      <option value="worrying">worrying</option>
      <option value="yellow skin">yellow skin</option>
      <option value="yellowish coloration skin white eye">yellowish coloration skin white eye</option>
      <option value="yellowish skin">yellowish skin</option>
      <option value="yellowish skin crust">yellowish skin crust</option>
      {/* add more options as needed */}
    </select>
    <br></br>
    <br></br>
    <br></br>

    <button style={{  marginLeft:'40rem',marginRight:'3px',backgroundColor: '#FFCCCB', border: '2px solid white', width:'90px',height:'25px', borderRadius: '10px' }} type="submit">Predict</button>
  </form>
    
  <div>
    <label style={{margin: "1.5rem" , color: '#000000'}}  >Disease:</label>
        <textarea style={{marginTop: "1rem"}}
          value={predictedDisease}
        />
      </div>
      <div>
    <label style={{margin: "1.5rem" , color: '#000000'}}  >Drug:</label>
        <textarea style={{marginTop: "1rem",marginLeft:'1.1rem'}}
          value={predictedDrug}
        />
      </div>
  
    </div>
  </Card>
  <Row>
  </Row>
  </div>

  );
}
// const symptomsList = ["abdominal cramp",
// "abdominal distention",
// "abnormal behavior",
// "abnormal bleeding",
// "abnormal sensation",
// "abnormally frequent",
// "abscess",
// "aching",
// "acne",
// "acquiring drinking alcohol taking lot time",
// "affected part turning white",
// "anemia",
// "anxiety",
// "arm",
// "attack pain",
// "back",
// "bacterial infection",
// "bad breath",
// "bad smelling thin vaginal discharge",
// "bad smelling vaginal discharge",
// "barky cough",
// "belching",
// "better sitting worse lying",
// "birth baby younger week gestational age",
// "bleeding gum",
// "bleeding skin",
// "blindness",
// "blindness one eye",
// "blister sunlight",
// "bloating",
// "blood stool",
// "blood urine",
// "bloody diarrhea",
// "blue",
// "bluish skin coloration",
// "blurred vision",
// "blurry vision",
// "body tremor",
// "bone pain",
// "bowed leg",
// "breakdown skeletal muscle",
// "breathing problem",
// "bruising",
// "burning",
// "burning redness eye",
// "burning stabbing pain",
// "burning urination",
// "certain thought repeatedly",
// "change bowel movement",
// "change breast shape",
// "change color",
// "change hair",
// "change reflex",
// "change skin color red black",
// "change sleeping eating pattern",
// "change taste",
// "change voice",
// "characteristic facial feature",
// "characteristic rash",
// "chest discomfort",
// "chest pain",
// "chest tightness",
// "chill",
// "chronic cough",
// "chronic pain bladder",
// "clenched fist overlapping finger",
// "close object appear blurry",
// "clumsy",
// "cm lump skin",
// "cold sweat",
// "coma",
// "confused thinking",
// "confusion",
// "constipation",
// "coolness",
// "coordination",
// "cough bloody mucus",
// "cough sputum production",
// "coughing",
// "coughing blood",
// "coughing including coughing blood",
// "coughing mucus",
// "crawl",
// "cry episode",
// "dark urine",
// "darker",
// "daytime sleepiness",
// "death child le one year age",
// "decreased ability feel pain",
// "decreased ability see",
// "decreased ability think",
// "decreased ability think remember",
// "decreased ability turn",
// "decreased appetite",
// "decreased motivation",
// "decreased range motion",
// "decreased taste",
// "decreased vision",
// "dehydration",
// "delayed physical growth",
// "delirium",
// "delusion",
// "dementia",
// "depending subtype abdominal pain",
// "depends organ involved",
// "depressed mood",
// "depression",
// "dermatitis herpetiformis",
// "developmental disability",
// "diarrhea",
// "diarrhea may bloody",
// "diarrhea mixed blood",
// "diarrhoea",
// "difficulty breathing",
// "difficulty cutting",
// "difficulty eating",
// "difficulty getting pregnant",
// "difficulty remembering recent event",
// "difficulty swallowing",
// "difficulty walking",
// "dimpling skin",
// "discharge penis",
// "disorientation",
// "distant object appear blurry",
// "distorted blurred vision distance",
// "dizziness",
// "double vision",
// "drinking large amount alcohol long period",
// "drooping eyelid",
// "dry cough",
// "dry damp skin",
// "dry eye",
// "dry mouth",
// "ear pain",
// "easy prolonged bleeding",
// "emotional problem",
// "enlarged lymph node neck",
// "enlarged spleen",
// "enlarged thyroid",
// "enlargement thyroid",
// "enlargement tonsil",
// "episode severe",
// "erythema marginatum",
// "excess hair",
// "excessive amount uterine bleeding",
// "excessive daytime sleepiness",
// "excessive salivation",
// "expanding area redness site tick bite",
// "extreme sadness",
// "extremity weakness",
// "eye pain",
// "eye strain",
// "eyestrain",
// "fast heart rate",
// "fast heartbeat",
// "fatigue",
// "fear water",
// "feel need check thing repeatedly",
// "feeling cold",
// "feeling faint upon standing",
// "feeling generally unwell",
// "feeling like passing",
// "feeling need urinate right away",
// "feeling tired",
// "feeling tired time",
// "fever",
// "firm",
// "flat discolored spot bump may blister",
// "flu like illness",
// "flu like symptom",
// "fluid filled blister scab",
// "fluid nipple",
// "frequent infection",
// "frequent urination",
// "fullness",
// "gas",
// "gradual loss coordination",
// "growth delay",
// "gum disease",
// "hair loss",
// "half ring finger",
// "hallucination",
// "hallucination usually hearing voice",
// "hard swelling skin",
// "hard time reading small print",
// "headache",
// "hearing loss",
// "hearing sound external sound present",
// "heartburn",
// "heat intolerance",
// "heavy period",
// "high blood pressure",
// "high body temperature",
// "hoarse voice",
// "hold reading material farther away",
// "impaired communication",
// "inability child",
// "inability move facial muscle one side",
// "inability move feel one side body",
// "increased breath rate",
// "increased breathing rate",
// "increased fat",
// "increased heart rate",
// "increased hunger",
// "increased risk broken bone",
// "increased risk infection",
// "increased thirst",
// "increasing weakening",
// "index",
// "infertility",
// "inflamed eye",
// "insomnia",
// "intellectual disability",
// "involuntary muscle movement",
// "involuntary sleep episode",
// "irregular edge",
// "irregular menstrual period",
// "irregular menstruation",
// "irritability",
// "irritation",
// "itchiness",
// "itching",
// "itching genital area",
// "itching result trouble sleeping",
// "itchy",
// "itchy blister",
// "itchy bump",
// "itchy ear",
// "jaundice",
// "jaw",
// "jerky body movement",
// "joint bone pain",
// "joint swelling",
// "large amount watery diarrhea",
// "large forehead",
// "large lymph node",
// "large lymph node around neck",
// "leg swelling",
// "light sensitivity",
// "little pain",
// "localized breast pain redness",
// "long term fatigue",
// "loose frequent bowel movement",
// "loose teeth",
// "loss appetite",
// "loss consciousness may sweating",
// "loss hair part head body",
// "loss lot blood childbirth",
// "loss smell",
// "loss vision one side",
// "low blood pressure",
// "low energy",
// "low red blood cell",
// "lower abdominal pain",
// "lump breast",
// "lump bump neck",
// "maculopapular rash",
// "malabsorption",
// "may symptom",
// "memory problem",
// "mental ability",
// "mental change",
// "mid dilated pupil",
// "middle finger",
// "mild moderate intellectual disability",
// "minimal",
// "missed period",
// "mole increasing size",
// "mood change",
// "mood swing",
// "mouth sore",
// "mouth ulcer",
// "multiple painful joint",
// "muscle ache difficulty breathing",
// "muscle cramp",
// "muscle joint pain",
// "muscle spasm",
// "muscle weakness",
// "muscle weakness beginning foot hand",
// "muscle weakness resulting inability move",
// "muscular pain",
// "myalgia",
// "nausea",
// "nausea vomiting",
// "nausea vomiting weight loss dehydration occur",
// "nearly undetectable spell",
// "nearsightedness",
// "neck",
// "neck stiffness",
// "needing urinate often",
// "newly inverted nipple",
// "non itchy skin ulcer",
// "non painful cyst middle eyelid",
// "nonaligned eye",
// "none non specific",
// "numbness",
// "object different size eye",
// "one eye myopia eye hyperopia",
// "opening upper lip may extend nose palate",
// "others",
// "overlying redness",
// "pain along inside edge shinbone",
// "pain area",
// "pain around ear",
// "pain doesnt go shingle",
// "pain going leg lower back",
// "pain sex",
// "pain specific bone",
// "painful",
// "painful blister lower leg",
// "painful heavy period",
// "painful joint base big toe",
// "painful rash occurring stripe",
// "painful skin",
// "painful swelling parotid gland",
// "painful swollen joint",
// "painful tender outer part elbow",
// "painless",
// "painless lump",
// "pale color",
// "pale skin",
// "pallor",
// "paralysis",
// "patch thick",
// "patch white skin",
// "perform certain routine repeatedly",
// "period vigorous shaking",
// "persistent rough white red patch mouth lasting longer week",
// "photophobia",
// "physical disability",
// "pimple like rash",
// "pinkish",
// "playing video game extremely long period time",
// "poor ability tolerate cold",
// "poor appetite",
// "poor coordination",
// "poor tolerance heat",
// "post nasal drip",
// "problem language",
// "problem mood",
// "problem understanding speaking",
// "problem vision",
// "profuse sweating",
// "progressive muscle weakness",
// "prolonged",
// "prolonged cough",
// "prominent",
// "protein urine",
// "psychosis",
// "pulsing pain",
// "purple colored skin affected area",
// "purple colored skin lesion",
// "raised",
// "raised red blue lesion",
// "random outburst laughter",
// "rapid breathing",
// "recurring episode wheezing",
// "red",
// "red eye",
// "red purple darker skin",
// "red rash",
// "red scaly patch skin breast",
// "red skin",
// "red spot white eye",
// "red without blister",
// "reddish eye",
// "redness",
// "redness eye",
// "repetitive behavior",
// "restricted interest",
// "right lower abdominal pain",
// "rigidity",
// "ringing ear heartbeat",
// "rough skin growth",
// "runny nose",
// "scaly patch skin",
// "scratchiness",
// "seizure",
// "sensitivity smell",
// "sensitivity sound",
// "severe intellectual disability",
// "severe pain",
// "severe pain lower back abdomen",
// "shakiness",
// "shaking",
// "sharp chest pain",
// "shivering",
// "shock like pain one side face last second minute",
// "short height",
// "short stature",
// "shortness breath",
// "sit",
// "skin blister",
// "skin breakdown",
// "skin lesion generally pink color project outward",
// "skin peeling",
// "sleep problem",
// "sleeping problem",
// "slowness movement",
// "small",
// "small blister break open form painful ulcer",
// "small blister surrounding swelling",
// "small face",
// "small head",
// "small jaw",
// "sneezing",
// "social withdrawal",
// "sometimes symptom",
// "sore arm leg",
// "sore throat",
// "sore wrist",
// "stiff muscle",
// "stiff neck",
// "stiffness",
// "stomach pain",
// "stroke",
// "stuffy itchy nose",
// "stunted growth",
// "sudden",
// "sudden loss muscle strength",
// "sweat",
// "swell pain near tumor",
// "swelling",
// "swelling abdomen",
// "swelling around eye",
// "swelling hand foot",
// "swollen",
// "swollen hand foot",
// "swollen lymph node",
// "taste acid",
// "temporary fleeting vision one eye",
// "tender breast",
// "testicular pain",
// "tingling",
// "tingling hand foot",
// "tingling thumb",
// "tiredness",
// "tooth loss",
// "tremor",
// "triangular tissue growth cornea",
// "trouble breathing nose",
// "trouble coordination",
// "trouble opening mouth",
// "trouble seeing",
// "trouble sensation",
// "trouble sleeping",
// "trouble social interaction",
// "trouble speaking",
// "trouble swallowing",
// "trouble talking",
// "trouble walking",
// "typically none",
// "ulcer",
// "ulcer around genitals",
// "ulceration",
// "unable move",
// "unexplained weight loss",
// "unintended weight loss",
// "unpleasant smell present breath",
// "upper abdominal pain",
// "usage resulting problem",
// "vaginal bleeding",
// "vaginal bleeding without pain",
// "vaginal discharge",
// "variable",
// "vary depending part brain involved",
// "varying degree muscle weakness",
// "velvety skin",
// "vision loss",
// "vomiting",
// "warm",
// "wart",
// "watery eye",
// "weak grip",
// "weak muscle",
// "weakness limb",
// "weakness numbness affected leg",
// "webbed neck",
// "weight gain",
// "wet",
// "wheezing",
// "white patch vaginal discharge",
// "widespread pain",
// "withdrawal occurring stopping",
// "worrying",
// "yellow skin",
// "yellowish coloration skin white eye",
// "yellowish skin",
// "yellowish skin crust",
// ];

// const App = () => {
//   const [symptoms, setSymptoms] = useState(Array(489).fill(0));
  
//   const handleSymptomSelect = (index, value) => {
//     const newSymptoms = [...symptoms];
//     newSymptoms[index] = value === "" ? 0 : 1;
//     setSymptoms(newSymptoms);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
      
//       const response = await axios.post('http://localhost:5000/predict', {
//       symptoms
//       });
//       console.log(response.data); // or do something else with the response
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {Array(489).fill().map((_, index) => (
//         <div key={index}>
//           <label htmlFor={`symptom${index}`}>Select symptom {index}:</label>
//           <select id={`symptom${index}`} value={symptoms[index] === 0 ? "" : symptomsList[index]} onChange={(e) => handleSymptomSelect(index, e.target.value)}>
//             <option value="">-- Please select a symptom --</option>
//             {symptomsList.map((symptom, i) => (
//               <option key={i} value={symptom}>{symptom}</option>
//             ))}
//           </select>
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

export default App

