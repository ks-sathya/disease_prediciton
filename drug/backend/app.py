from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib
from sklearn import preprocessing
from flask_mail import Mail, Message
import smtplib
import ssl
app = Flask(__name__)
app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'project00197@outlook.com'
app.config['MAIL_PASSWORD'] = 'Project@123'
app.config['MAIL_DEFAULT_SENDER'] = 'project00197@outlook.com'
mail = Mail(app)
CORS(app)
# CORS(app)
# CORS(app, origins=['http://localhost:5000/send-email',
#     'http://localhost:3000'])
model = joblib.load('model.joblib')
le = preprocessing.LabelEncoder()
le.classes_ = pd.read_pickle('model.joblib')


@app.route('/')
def index():
    return 'hello'


@app.route('/predict', methods=['POST'])
def predict():
    global symptoms

    def map(labels):
        mapping_disease = {
            0: 'Abscess', 1: 'Acquired Capillary Haemangioma of Eyelid', 2: 'Acquired Immuno Deficiency Syndrome', 3: 'Acute encephalitis syndrome', 4: 'Adult Inclusion Conjunctivitis', 5: 'Alcohol Abuse and Alcoholism',
            6: 'Alopecia (hair loss)', 7: 'Alzheimer', 8: 'Amaurosis Fugax', 9: 'Amblyopia', 10: 'Amoebiasis', 11: 'Anaemia', 12: 'Aniseikonia', 13: 'Anisometropia', 14: 'Anthrax', 15: 'Anxiety', 16: 'Appendicitis',
            17: 'Arthritis', 18: 'Asbestos-related diseases', 19: 'Aseptic meningitis', 20: 'Asthma', 21: 'Astigmatism', 22: 'Autism', 23: "Bell's Palsy", 24: 'Beriberi', 25: 'Bleeding Gums', 26: 'Botulism', 27: 'Brain Tumour',
            28: 'Breast Cancer / Carcinoma', 29: 'Bronchitis', 30: 'Bubonic plague', 31: 'Bunion', 32: 'Calculi', 33: 'Campylobacter infection', 34: "Cancer", 35: 'Candidiasis', 36: 'Carbon monoxide poisoning', 37: 'Carpal Tunnel Syndrome',
            38: 'Cavities', 39: 'Celiacs disease', 40: 'Cerebral palsy', 41: 'Chagas disease', 42: 'Chalazion', 43: 'Chickenpox', 44: 'Chlamydia', 45: 'Cholera', 46: 'Chorea', 47: 'Chronic fatigue syndrome', 48: 'Colitis',
            49: 'Colorectal Cancer', 50: 'Common cold', 51: 'Congenital anomalies (birth defects)', 52: 'Congestive heart disease', 53: 'Coronary Heart Disease', 54: 'Coronavirus disease 2019 (COVID-19)', 55: 'Cough',
            56: 'Crimean Congo haemorrhagic fever (CCHF)', 57: 'Dehydration', 58: 'Dementia', 59: 'Dengue', 60: 'Diabetes Mellitus', 61: "Diabetic Retinopathy", 62: 'Diarrhea', 63: "Diphtheria", 64: "Down's Syndrome", 65: 'Dysentery',
            66: "Ear infection", 67: 'Ebola', 68: 'Eclampsia', 69: "Ectopic pregnancy", 70: 'Eczema', 71: "Endometriosis", 72: 'Epilepsy', 73: 'Fibroids', 74: 'Fibromyalgia', 75: 'Food Poisoning', 76: 'Frost Bite', 77: 'GERD', 78: 'Gangrene',
            79: 'Gastroenteritis', 80: 'Genital herpes', 81: 'Glaucoma', 82: 'Goitre', 83: 'Gonorrhea', 84: 'Haemophilia', 85: 'Heat-Related Illnesses and Heat waves', 86: 'Hepatitis', 87: 'Hepatitis A', 88: 'Hepatitis B', 89: 'Hepatitis C',
            90: 'Hepatitis D', 91: "Hepatitis E", 92: 'Herpes Simplex', 93: 'Hyperthyroidism', 94: 'Hypothyroid', 95: 'Impetigo', 96: 'Inflammatory Bowel Disease', 97: 'Influenza', 98: 'Insomnia', 99: 'Interstitial cystitis', 100: 'Iritis', 101: 'Iron Deficiency Anemia',
            102: "Irritable bowel syndrome", 103: 'Jaundice', 104: 'Kala-azar/ Leishmaniasis', 105: 'Keratoconjunctivitis Sicca (Dry eye syndrome)', 106: 'Keratoconus', 107: "Laryngitis", 108: 'Lead poisoning', 109: 'Legionellosis', 110: 'Leprosy', 111: 'Leptospirosis', 112: 'Leukemia',
            113: 'Lung cancer', 114: 'Lupus erythematosus', 115: 'Lyme disease', 116: 'Lymphoma', 117: 'Malaria', 118: 'Mastitis', 119: "Melanoma", 120: 'Migraine', 121: 'Mononucleosis', 122: 'Multiple myeloma', 123: 'Multiple sclerosis', 124: 'Muscular dystrophy', 125: 'Myasthenia gravis', 126: 'Myelitis',
            127: 'Myocardial Infarction (Heart Attack)', 128: 'Myopia', 129: 'Narcolepsy', 130: 'Nasal Polyps', 131: 'Neuralgia', 132: "Obesity", 133: 'Obsessive Compulsive Disorder', 134: 'Oral Cancer', 135: 'Osteoarthritis', 136: 'Osteomyelitis', 137: 'Osteoporosis', 138: 'Paratyphoid fever', 139: "Parkinson's Disease",
            140: 'Pelvic inflammatory disease', 141: 'Perennial Allergic Conjunctivitis', 142: 'Pericarditis', 143: 'Peritonitis', 144: 'Pneumonia', 145: "Poliomyelitis", 146: 'Polycystic ovary syndrome (PCOS)', 147: 'Porphyria', 148: 'Postpartum depression/ Perinatal depression', 149: 'Preeclampsia', 150: 'Premenstrual syndrome',
            151: 'Presbyopia', 152: 'Progeria', 153: 'Psoriasis', 154: 'Puerperal sepsis', 155: 'Pulmonary embolism', 156: "Ques fever", 157: 'Quinsy', 158: 'Rabies', 159: "Raynaud's Phenomenon", 160: 'Rheumatic fever', 161: 'Rheumatism', 162: 'Rickets', 163: 'SARS', 164: 'Sarcoidosis', 165: 'Sarcoma', 166: 'Scabies',
            167: 'Scarlet fever', 168: 'Sciatica', 169: 'Scrub Typhus', 170: 'Scurvy', 171: 'Sepsis', 172: 'Shigellosis', 173: 'Shin splints', 174: 'Shingles', 175: 'Sickle-cell anemia', 176: 'Smallpox', 177: 'Stevens-Johnson syndrome', 178: 'Stomach ulcers', 179: "Strep throat", 180: 'Stroke', 181: 'Syphilis', 182: 'Taeniasis',
            184: 'Tennis elbow', 183: 'Taeniasis/cysticercosis', 185: 'Tetanus', 186: 'Thalassaemia', 187: 'Tinnitus', 188: "Tonsillitis", 189: 'Toxic shock syndrome', 190: 'Trachoma', 191: 'Trichinosis', 192: "Trichomoniasis", 193: 'Tuberculosis', 194: "Tularemia", 195: 'Turners Syndrome', 196: 'Urticaria', 197: 'Varicose Veins', 198: "Vasovagal syncope",
            199: 'Vitamin B12 Deficiency', 200: 'Vitiligo', 201: 'Warts', 202: 'Yaws', 203: 'Zika virus disease', 204: 'lactose intolerance', 205: 'papilloedema'
        }
        mapping_drug = {
            85: 'Trimethoprim/sulfamethoxazole', 77: 'Propranolol', 3: 'Acyclovir,Ganciclovir ', 184: 'doxycycline 100 mg', 24: 'CNS depressants', 123: 'corticosteroids', 4: 'Aducanumab', 106: 'aspirin,warfarin',
            65: 'Metronidazole', 140: 'hydroxyurea', 172: 'surgical or medical correction', 122: 'corrective lenses or surgery', 117: 'ciprofloxacin (Cipro)', 179: ' Xanax (alprazolam), Klonopin (clonazepam)',
            72: 'Penicillins, Cephalosporins', 0: 'Advil, Motrin IB', 54: 'Infliximab', 26: 'Cefotaxime (Claforan)', 41: 'Flovent HFA, Flovent Diskus, Xhance', 59: 'Laser-assisted surgery', 167: 'risperidone,aripripazole',
            92: 'Zovirax', 176: 'thiamine supplements', 10: 'Amoxicillin, Tetracycline', 183: 'antitoxin injection', 173: 'temozolomide (Temodar),surgey', 130: 'docetaxel, paclitaxel', 37: 'Doxycycline and amoxicillin',
            47: 'Gentamicin', 5: 'Advil, Motrin IB', 94: 'Zyloprim, Aloprim', 95: 'a fluoroquinolone antibiotic', 29: 'Chemotherapy', 114: 'caspofungin, micafungin', 141: 'hyperbaric oxygen therapy', 43: 'Fluoride treatments',
            18: 'Azasan, Imuran', 87: 'Valium, Ativan', 58: 'Lampit', 153: 'oral tetracycline, doxycycline', 93: 'Zovirax, Sitavig', 90: 'Zithromax', 174: 'tetrabenazine, deutetrabenazine', 79: 'Rozerem', 55: 'Infliximab (Remicade), adalimumab (Humira) ',
            8: 'Alymsys (Bevacizumab)', 115: 'cetirizine (Zyrtec), fexofenadine (Allegra)', 1: 'ACE inhibitors', 107: 'atenolol, bisoprolol', 147: 'lopinavir/ritonavir', 128: 'dextromethorphan', 165: 'ribavirin', 50: 'Hydralyte and Pedialyte',
            168: 'rivastigmine (Exelon) and galantamine (Reminyl)', 42: 'Fluids and pain relievers. Severe cases require hospital care.', 46: 'Fortamet, Glumetza', 164: 'ranibizumab (Lucentis)', 62: 'Loperamide (Imodium)', 137: 'erythromycin or penicillin',
            39: 'Duramorph, Astramorph', 151: 'metronidazole (Flagyl)', 73: 'Penicillin', 56: 'Inmazeb', 63: 'Magnesium sulfate', 149: 'methotrexate', 125: 'cyclosporine, methotrexate', 49: 'Goserelin ( Zoladex)',
            181: 'anti-convulsants', 48: 'GnRH agonists', 34: 'Cymbalta', 74: 'Pepto-Bismol, Kaopectate', 177: 'tissue plasminogen activator', 156: 'pantoprazole (Protonix), rabeprazole (Aciphex)', 159: 'penicillin and clindamycin', 98: 'acyclovir (Zovirax), famciclovir (Famvir)',
            145: 'latanoprost (Xalatan), travoprost (Travatan Z)', 186: 'levothyroxine', 102: 'antibiotic ceftriaxone, oral azithromycin (Zithromax)', 127: 'desmopressin', 129: 'diuretics, antipsychotics', 144: 'lamivudine (Epivir), adefovir (Hepsera)', 2: 'Acetaminophen, paracetamol', 135: 'entecavir (Baraclude), tenofovir (Viread)',
            36: 'Direct-acting antiviral (DAA) tablets', 69: 'Pegylated interferon alpha', 165: 'ribavirin', 180: ' acyclovir, valacyclovir', 188: " methylprednisolone or prednisone", 61: 'Levothyroxine', 152: 'mupirocin antibiotic ointment', 35: "Delzicol, Rowasa", 155: 'oseltamivir or inhaled zanamivir',
            84: 'Triazolam (Halcion)', 148: 'loratadine (Claritin', 83: 'Steroid eyedrops', 40: "Feratab, Fer-Iron, Slow-FE", 121: 'colestipol (Colestid) or colesevelam (Welchol)', 12: "Antihistamines, Cholestyramine", 146: 'liposomal amphotericin B 10mg/kg body weight', 166: 'riboflavin 5´-phosphate ophthalmic solution',
            33: 'Corticosteroids', 171: 'succimer,dimercaprol ', 118: 'ciprofloxacin, levofloxacin', 126: 'dapsone with rifampicin, and clofazimine', 133: "doxycycline or penicillin", 14: 'Arsenic Trioxide ,Azacitidine', 19: 'Bevacizumab (Avastin, Mvasi)', 64: 'Methotrexate', 132: 'doxycycline or amoxicillin', 51: 'Ibrutinib (Imbruvica)',
            32: 'Coartem', 120: 'cloxacillin, dicloxacillin', 20: 'Binimetinib .Braftovi ', 52: 'Imitrex, Tosymra', 86: "Tylenol", 112: 'bisphosphonates pamidronate (Aredia)', 33: "Corticosteroids", 78: 'Rituximab (Rituxan)', 105: 'aspirin tablets,streptokinase,urokinase', 16: 'Atropine Eye Drops', 104: 'antidepressants ',
            134: 'dupilumab (Dupixent)', 113: 'carbamazepine', 154: 'orlistat ', 31: 'Clomipramine (Anafranil) ', 28: 'Cetuximab ', 7: 'Aleve', 160: "penicillin, ampicillin", 21: 'Bisphosphonates ', 109: 'azithromycin, ciprofloxacin', 60: 'Levodopa', 27: "Cefoxitin,probenecid and doxycycline", 136: 'epinastine (Elestat) and azelastine (Optivar)',
            111: 'beta-lactams (penicillins), carbapenems (beta-lactamase?resistant beta-lactams)', 44: 'Fluoroquinolones, Cephalosporins', 67: 'OPV ', 119: 'clomifene ', 81: "Sertraline ", 13: 'Antihypertensive drugs', 80: 'Selective serotonin reuptake inhibitors (SSRIs)', 189: ' pilocarpine hydrochloride ophthalmic solution', 91: 'Zokinvy ',
            185: 'etanercept (Enbrel) infliximab (Remicade)', 17: 'Augmentin (amoxicillin and clavulanate)', 103: 'anticoagulant drugs', 131: 'doxycycline antibiotic', 9: "Amoxicillin with clindamycin", 53: 'Imovax ', 25: 'Calcium channel blockers', 15: 'Aspirin or naproxen', 64: 'Methotrexate ', 190: ' vitamin D and calcium supplements', 163: 'pulse doses of methylprednisolone at 0.5–1.0 g/day',
            108: 'azathioprine (Azasan, Imuran)', 142: 'ifosfamide', 74: 'Permethrin ', 70: 'Penicillin or amoxicillin', 161: 'physiotherapy ', 182: ' antibiotic doxycycline', 178: 'vitamin C supplementation', 23: 'Broad-spectrum antibiotics', 30: 'Ciprofloxacin ', 86: 'Tylenol', 99: "acyclovir, valacyclovir", 89: 'Voxelotor ', 22: 'Brincidofovir', 124: "corticosteroids and intravenous immune globulin",
            68: 'Omeprazole, pantoprazole', 71: 'Penicillin or amoxicillin', 100: 'alteplase', 158: 'penicillin', 76: 'Praziquantel', 157: "paracetamol,ibuprofen", 187: ' luspatercept (Reblozyl)', 88: 'Valium', 101: 'antibiotics and possibly surgery', 175: 'tetracycline eye ointment or oral azithromycin', 11: "Anti-parasitic medication ", 150: 'metronidazole', 143: 'isoniazid and rifampicin', 170: 'streptomycin, gentamicin',
            82: 'Somatropin', 6: 'Alavert, Claritin', 66: 'Motrin ', 138: 'fludrocortisone acetate ', 139: 'hydroxocobalamin', 162: 'psoralen', 169: 'salicylic acid ', 110: 'azithromycin ', 96: 'acetaminophen ', 57: 'Lactaid', 97: 'acetazolamide'
        }
        disease_result = mapping_disease[labels[0]]
        drug_result = mapping_drug[labels[1]]
        return {'disease': disease_result, 'drug': drug_result}

    data = request.get_json()
    if isinstance(data, list):
        symptom_values = data
    else:
        symptom_values = data.get('symptoms', [])

    symptoms_array = np.array(symptom_values).reshape(1, -1)

    # make a prediction using the model
    prediction = model.predict(symptoms_array)

    # map the predicted labels to their corresponding class names
    prediction_mapped = map(prediction[0])

    # if a prediction has been made, reset the symptoms
    if prediction_mapped:
        symptoms = []

    # return the mapped prediction as a JSON response
    # response = {'prediction': prediction_mapped}
    # return jsonify(response)
    predicted_disease = prediction_mapped['disease']
    predicted_drug = prediction_mapped['drug']
    # return the predicted disease and drug as a dictionary
    response = {'predicted_disease': predicted_disease,
                'predicted_drug': predicted_drug}
    # return the mapped prediction as a JSON response
    response = {'prediction': prediction_mapped}
    return jsonify(response)


@app.route('/send-mail', methods=['POST'])
def send_email():
    name = request.json['name']
    age = request.json['age']
    gender = request.json['gender']
    medical_history = request.json['medical_history']
    predicted_disease = request.json['predicted_disease']
    predicted_drug = request.json['predicted_drug']

    subject = 'Patient Details:'
    body = f'''Name: {name}
Age: {age}
Gender: {gender}
Medical History: {medical_history}
Predicted Disease:{predicted_disease}
Predicted Drug:{predicted_drug}'''

    msg = Message(subject=subject, recipients=[
                  'project00197@outlook.com'], body=body)
    mail.send(msg)

    return jsonify({'message': 'Email sent successfully!'})
# @app.route('/send-mail', methods=['POST'])
# def send_email():
#    name = request.json['name']
#    age = request.json['age']
#    gender = request.json['gender']
#    medical_history = request.json['medical_history']
#    port = 993   # For SSL
#    smtp_server = "smtp.office365.com"
#    sender_email = "project00197@outlook.com"  # Enter your address
#    receiver_email = "project00197@outlook.com"  # Enter receiver address
#    password = "Project@123"
#    message = f"""\
#    Subject: New Contact Form Submission
#
#    Name: {name}
#    Age: {age}
#    Gender: {gender}
#    Medical History: {medical_history}"""
#
#    context = ssl.create_default_context()
#    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
#        server.login(sender_email, password)
#        server.sendmail(sender_email, receiver_email, message)
#    return jsonify({'message': 'Email sent successfully!'})

  # get the input data from the request
    # get the list of symptoms from the input data, defaulting to an empty list
    # if isinstance(data, list):
    #    data = {'symptoms': data}
    # symptom_list = data.get('symptoms', [])
    # symptoms = []
    # for i in range(1, 490):  # loop over all 489 symptoms
    #    if i in symptom_list:
    #        # set the symptom to 1 if it is present in the input data
    #        symptoms.append(1)
    #    else:
    #        symptoms.append(0)  # set the symptom to 0 otherwise
    # convert the symptoms list to a 2D array with shape (1, 489)
    # symptoms_array = np.array(symptoms).reshape(1, -1)
    # pass the symptoms array to your model and get the prediction
    # prediction = model.predict(symptoms_array)
    # prediction_list = prediction.tolist()
    # return jsonify({'prediction': prediction_list})
    # drug_labels = set(prediction[:, 1])
    # print(drug_labels)
    # map the predicted labels to their corresponding class names
    # prediction_mapped = map(prediction[0])
    # predicted_disease = prediction_mapped['disease']
    # predicted_drug = prediction_mapped['drug']
    # return the predicted disease and drug as a dictionary
    # response = {'predicted_disease': predicted_disease,
    #            'predicted_drug': predicted_drug}
    # return the mapped prediction as a JSON response
    # response = {'prediction': prediction_mapped}
    # return jsonify(response)


# def predict():
#    data = request.get_json()  # get the input data from the request
#    # get the list of symptoms from the input data, defaulting to an empty list
#    # get the list of symptoms from the input data, defaulting to an empty list
#    symptom_list = data or []
#    symptoms = []
#    for i in range(1, 490):  # loop over all 489 symptoms
#        if i in symptom_list:
#            # set the symptom to 1 if it is present in the input data
#            symptoms.append(1)
#        else:
#            symptoms.append(0)  # set the symptom to 0 otherwise
#    # pass the symptoms list to your model and get the prediction
#    # prediction = model.predict(symptoms)
#    # return the prediction as a JSON response
#    symptoms_array = np.array(symptoms).reshape(1, -1)
# pass the symptoms array to your model and get the prediction
#    prediction = model.predict(symptoms_array)
#    maping_disease = {
#        0: 'Abscess', 1: 'Acquired Capillary Haemangioma of Eyelid', 2: 'Acquired Immuno Deficiency Syndrome', 3: 'Acute encephalitis syndrome', 4: 'Adult Inclusion Conjunctivitis', 5: 'Alcohol Abuse and Alcoholism',
#        6: 'Alopecia (hair loss)', 7: 'Alzheimer', 8: 'Amaurosis Fugax', 9: 'Amblyopia', 10: 'Amoebiasis', 11: 'Anaemia', 12: 'Aniseikonia', 13: 'Anisometropia', 14: 'Anthrax', 15: 'Anxiety', 16: 'Appendicitis',
#        17: 'Arthritis', 18: 'Asbestos-related diseases', 19: 'Aseptic meningitis', 20: 'Asthma', 21: 'Astigmatism', 22: 'Autism', 23: "Bell's Palsy", 24: 'Beriberi', 25: 'Bleeding Gums', 26: 'Botulism', 27: 'Brain Tumour',
#        28: 'Breast Cancer / Carcinoma', 29: 'Bronchitis', 30: 'Bubonic plague', 31: 'Bunion', 32: 'Calculi', 33: 'Campylobacter infection', 34: "Cancer", 35: 'Candidiasis', 36: 'Carbon monoxide poisoning', 37: 'Carpal Tunnel Syndrome',
#        38: 'Cavities', 39: 'Celiacs disease', 40: 'Cerebral palsy', 41: 'Chagas disease', 42: 'Chalazion', 43: 'Chickenpox', 44: 'Chlamydia', 45: 'Cholera', 46: 'Chorea', 47: 'Chronic fatigue syndrome', 48: 'Colitis',
#        49: 'Colorectal Cancer', 50: 'Common cold', 51: 'Congenital anomalies (birth defects)', 52: 'Congestive heart disease', 53: 'Coronary Heart Disease', 54: 'Coronavirus disease 2019 (COVID-19)', 55: 'Cough',
#        56: 'Crimean Congo haemorrhagic fever (CCHF)', 57: 'Dehydration', 58: 'Dementia', 59: 'Dengue', 60: 'Diabetes Mellitus', 61: "Diabetic Retinopathy", 62: 'Diarrhea', 63: "Diphtheria", 64: "Down's Syndrome", 65: 'Dysentery',
#        66: "Ear infection", 67: 'Ebola', 68: 'Eclampsia', 69: "Ectopic pregnancy", 70: 'Eczema', 71: "Endometriosis", 72: 'Epilepsy', 73: 'Fibroids', 74: 'Fibromyalgia', 75: 'Food Poisoning', 76: 'Frost Bite', 77: 'GERD', 78: 'Gangrene',
#        79: 'Gastroenteritis', 80: 'Genital herpes', 81: 'Glaucoma', 82: 'Goitre', 83: 'Gonorrhea', 84: 'Haemophilia', 85: 'Heat-Related Illnesses and Heat waves', 86: 'Hepatitis', 87: 'Hepatitis A', 88: 'Hepatitis B', 89: 'Hepatitis C',
#        90: 'Hepatitis D', 91: "Hepatitis E", 92: 'Herpes Simplex', 93: 'Hyperthyroidism', 94: 'Hypothyroid', 95: 'Impetigo', 96: 'Inflammatory Bowel Disease', 97: 'Influenza', 98: 'Insomnia', 99: 'Interstitial cystitis', 100: 'Iritis', 101: 'Iron Deficiency Anemia',
#        102: "Irritable bowel syndrome", 103: 'Jaundice', 104: 'Kala-azar/ Leishmaniasis', 105: 'Keratoconjunctivitis Sicca (Dry eye syndrome)', 106: 'Keratoconus', 107: "Laryngitis", 108: 'Lead poisoning', 109: 'Legionellosis', 110: 'Leprosy', 111: 'Leptospirosis', 112: 'Leukemia',
#        113: 'Lung cancer', 114: 'Lupus erythematosus', 115: 'Lyme disease', 116: 'Lymphoma', 117: 'Malaria', 118: 'Mastitis', 119: "Melanoma", 120: 'Migraine', 121: 'Mononucleosis', 122: 'Multiple myeloma', 123: 'Multiple sclerosis', 124: 'Muscular dystrophy', 125: 'Myasthenia gravis', 126: 'Myelitis',
#        127: 'Myocardial Infarction (Heart Attack)', 128: 'Myopia', 129: 'Narcolepsy', 130: 'Nasal Polyps', 131: 'Neuralgia', 132: "Obesity", 133: 'Obsessive Compulsive Disorder', 134: 'Oral Cancer', 135: 'Osteoarthritis', 136: 'Osteomyelitis', 137: 'Osteoporosis', 138: 'Paratyphoid fever', 139: "Parkinson's Disease",
#        140: 'Pelvic inflammatory disease', 141: 'Perennial Allergic Conjunctivitis', 142: 'Pericarditis', 143: 'Peritonitis', 144: 'Pneumonia', 145: "Poliomyelitis", 146: 'Polycystic ovary syndrome (PCOS)', 147: 'Porphyria', 148: 'Postpartum depression/ Perinatal depression', 149: 'Preeclampsia', 150: 'Premenstrual syndrome',
#        151: 'Presbyopia', 152: 'Progeria', 153: 'Psoriasis', 154: 'Puerperal sepsis', 155: 'Pulmonary embolism', 156: "Ques fever", 157: 'Quinsy', 158: 'Rabies', 159: "Raynaud's Phenomenon", 160: 'Rheumatic fever', 161: 'Rheumatism', 162: 'Rickets', 163: 'SARS', 164: 'Sarcoidosis', 165: 'Sarcoma', 166: 'Scabies',
#        167: 'Scarlet fever', 168: 'Sciatica', 169: 'Scrub Typhus', 170: 'Scurvy', 171: 'Sepsis', 172: 'Shigellosis', 173: 'Shin splints', 174: 'Shingles', 175: 'Sickle-cell anemia', 176: 'Smallpox', 177: 'Stevens-Johnson syndrome', 178: 'Stomach ulcers', 179: "Strep throat", 180: 'Stroke', 181: 'Syphilis', 182: 'Taeniasis',
#        184: 'Tennis elbow', 183: 'Taeniasis/cysticercosis', 185: 'Tetanus', 186: 'Thalassaemia', 187: 'Tinnitus', 188: "Tonsillitis", 189: 'Toxic shock syndrome', 190: 'Trachoma', 191: 'Trichinosis', 192: "Trichomoniasis", 193: 'Tuberculosis', 194: "Tularemia", 195: 'Turners Syndrome', 196: 'Urticaria', 197: 'Varicose Veins', 198: "Vasovagal syncope",
#        199: 'Vitamin B12 Deficiency', 200: 'Vitiligo', 201: 'Warts', 202: 'Yaws', 203: 'Zika virus disease', 204: 'lactose intolerance', 205: 'papilloedema'
#    }
#    mapping_drug = {
#        85: 'Trimethoprim/sulfamethoxazole', 77: 'Propranolol', 3: 'Acyclovir,Ganciclovir ', 184: 'doxycycline 100 mg', 24: 'CNS depressants', 123: 'corticosteroids', 4: 'Aducanumab', 106: 'aspirin,warfarin',
#        65: 'Metronidazole', 140: 'hydroxyurea', 172: 'surgical or medical correction', 122: 'corrective lenses or surgery', 117: 'ciprofloxacin (Cipro)', 179: ' Xanax (alprazolam), Klonopin (clonazepam)',
#        72: 'Penicillins, Cephalosporins', 0: 'Advil, Motrin IB', 54: 'Infliximab', 26: 'Cefotaxime (Claforan)', 41: 'Flovent HFA, Flovent Diskus, Xhance', 59: 'Laser-assisted surgery', 167: 'risperidone,aripripazole',
#        92: 'Zovirax', 176: 'thiamine supplements', 10: 'Amoxicillin, Tetracycline', 183: 'antitoxin injection', 173: 'temozolomide (Temodar),surgey', 130: 'docetaxel, paclitaxel', 37: 'Doxycycline and amoxicillin',
#        47: 'Gentamicin', 5: 'Advil, Motrin IB', 94: 'Zyloprim, Aloprim', 95: 'a fluoroquinolone antibiotic', 29: 'Chemotherapy', 114: 'caspofungin, micafungin', 141: 'hyperbaric oxygen therapy', 43: 'Fluoride treatments',
#        18: 'Azasan, Imuran', 87: 'Valium, Ativan', 58: 'Lampit', 153: 'oral tetracycline, doxycycline', 93: 'Zovirax, Sitavig', 90: 'Zithromax', 174: 'tetrabenazine, deutetrabenazine', 79: 'Rozerem', 55: 'Infliximab (Remicade), adalimumab (Humira) ',
#        8: 'Alymsys (Bevacizumab)', 115: 'cetirizine (Zyrtec), fexofenadine (Allegra)', 1: 'ACE inhibitors', 107: 'atenolol, bisoprolol', 147: 'lopinavir/ritonavir', 128: 'dextromethorphan', 165: 'ribavirin', 50: 'Hydralyte and Pedialyte',
#        168: 'rivastigmine (Exelon) and galantamine (Reminyl)', 42: 'Fluids and pain relievers. Severe cases require hospital care.', 46: 'Fortamet, Glumetza', 164: 'ranibizumab (Lucentis)', 62: 'Loperamide (Imodium)', 137: 'erythromycin or penicillin',
#        39: 'Duramorph, Astramorph', 151: 'metronidazole (Flagyl)', 73: 'Penicillin', 56: 'Inmazeb', 63: 'Magnesium sulfate', 149: 'methotrexate', 125: 'cyclosporine, methotrexate', 49: 'Goserelin ( Zoladex)',
#        181: ' anti-convulsants', 48: 'GnRH agonists', 34: 'Cymbalta', 74: 'Pepto-Bismol, Kaopectate', 177: 'tissue plasminogen activator', 156: 'pantoprazole (Protonix), rabeprazole (Aciphex)', 159: 'penicillin and clindamycin', 98: 'acyclovir (Zovirax), famciclovir (Famvir)',
#        145: 'latanoprost (Xalatan), travoprost (Travatan Z)', 186: 'levothyroxine', 102: 'antibiotic ceftriaxone, oral azithromycin (Zithromax)', 127: 'desmopressin', 129: 'diuretics, antipsychotics', 144: 'lamivudine (Epivir), adefovir (Hepsera)', 2: 'Acetaminophen, paracetamol', 135: 'entecavir (Baraclude), tenofovir (Viread)',
#        36: 'Direct-acting antiviral (DAA) tablets', 69: 'Pegylated interferon alpha', 165: 'ribavirin', 180: ' acyclovir, valacyclovir', 188: " methylprednisolone or prednisone", 61: 'Levothyroxine', 152: 'mupirocin antibiotic ointment', 35: "Delzicol, Rowasa", 155: 'oseltamivir or inhaled zanamivir',
#        84: 'Triazolam (Halcion)', 148: 'loratadine (Claritin', 83: 'Steroid eyedrops', 40: "Feratab, Fer-Iron, Slow-FE", 121: 'colestipol (Colestid) or colesevelam (Welchol)', 12: "Antihistamines, Cholestyramine", 146: 'liposomal amphotericin B 10mg/kg body weight', 166: 'riboflavin 5´-phosphate ophthalmic solution',
#        33: 'Corticosteroids', 171: 'succimer ,dimercaprol ', 118: 'ciprofloxacin, levofloxacin', 126: 'dapsone with rifampicin, and clofazimine', 133: "doxycycline or penicillin", 14: 'Arsenic Trioxide ,Azacitidine', 19: 'Bevacizumab (Avastin, Mvasi)', 64: 'Methotrexate', 132: 'doxycycline or amoxicillin', 51: 'Ibrutinib (Imbruvica)',
#        32: 'Coartem', 120: 'cloxacillin, dicloxacillin', 20: 'Binimetinib .Braftovi ', 52: 'Imitrex, Tosymra', 86: "Tylenol", 112: 'bisphosphonates pamidronate (Aredia)', 33: "Corticosteroids", 78: 'Rituximab (Rituxan)', 105: 'aspirin tablets,streptokinase,urokinase', 16: 'Atropine Eye Drops', 104: 'antidepressants ',
#        134: 'dupilumab (Dupixent)', 113: 'carbamazepine ', 154: 'orlistat ', 31: 'Clomipramine (Anafranil) ', 28: 'Cetuximab ', 7: 'Aleve', 160: "penicillin, ampicillin", 21: 'Bisphosphonates ', 109: 'azithromycin, ciprofloxacin', 60: 'Levodopa', 27: "Cefoxitin,probenecid and doxycycline", 136: 'epinastine (Elestat) and azelastine (Optivar)',
#        111: 'beta-lactams (penicillins), carbapenems (beta-lactamase?resistant beta-lactams)', 44: 'Fluoroquinolones, Cephalosporins', 67: 'OPV ', 119: 'clomifene ', 81: "Sertraline ", 13: 'Antihypertensive drugs', 80: 'Selective serotonin reuptake inhibitors (SSRIs)', 189: ' pilocarpine hydrochloride ophthalmic solution', 91: 'Zokinvy ',
#        185: ' etanercept (Enbrel) infliximab (Remicade)', 17: 'Augmentin (amoxicillin and clavulanate)', 103: 'anticoagulant drugs', 131: 'doxycycline antibiotic', 9: "Amoxicillin with clindamycin", 53: 'Imovax ', 25: 'Calcium channel blockers', 15: 'Aspirin or naproxen', 64: 'Methotrexate ', 190: ' vitamin D and calcium supplements', 163: 'pulse doses of methylprednisolone at 0.5–1.0 g/day',
#        108: 'azathioprine (Azasan, Imuran)', 142: 'ifosfamide ', 74: 'Permethrin ', 70: 'Penicillin or amoxicillin', 161: 'physiotherapy ', 182: ' antibiotic doxycycline', 178: 'vitamin C supplementation', 23: 'Broad-spectrum antibiotics', 30: 'Ciprofloxacin ', 86: 'Tylenol', 99: "acyclovir, valacyclovir", 89: 'Voxelotor ', 22: 'Brincidofovir', 124: "corticosteroids and intravenous immune globulin",
#        68: 'Omeprazole, pantoprazole', 71: 'Penicillin or amoxicillin', 100: 'alteplase', 158: 'penicillin', 76: 'Praziquantel', 157: "paracetamol,ibuprofen", 187: ' luspatercept (Reblozyl)', 88: 'Valium', 101: 'antibiotics and possibly surgery', 175: 'tetracycline eye ointment or oral azithromycin', 11: "Anti-parasitic medication ", 150: 'metronidazole', 143: 'isoniazid and rifampicin', 170: 'streptomycin, gentamicin',
#        82: 'Somatropin', 6: 'Alavert, Claritin', 66: 'Motrin ', 138: 'fludrocortisone acetate ', 139: 'hydroxocobalamin', 162: 'psoralen', 169: 'salicylic acid ', 110: 'azithromycin ', 96: 'acetaminophen ', 57: 'Lactaid', 97: 'acetazolamide'
#    }
#    response = {'prediction': prediction.tolist()}
#    return jsonify(response)

    # input_data = request.json
#
    # Convert the input data to a DataFrame
    # if isinstance(input_data, list):
    #    input_df = pd.DataFrame(input_data).T
    # else:
    #    input_df = pd.DataFrame.from_dict(input_data, orient='index').T
#
    # input_df = np.array(input_df, dtype=float)
    # Encode the input data using the label encoder
    # input_df = input_df.apply(le.transform)
#
    # Create a DataFrame with all symptoms set to 0
    # all_symptoms = pd.DataFrame(data=[[0]*489], columns=model.classes_)
#
    # Update the symptoms selected by the user
    # selected_symptoms = input_df.reindex(columns=model.classes_, fill_value=0)
    # all_symptoms.update(selected_symptoms)
#
    # Make predictions using the model
    # prediction = model.predict_proba(all_symptoms)
#
    # Convert the prediction to a list
    # prediction_list = prediction.tolist()
    # get user input from request
    # symptom1 = request.json['symptom1']
    # symptom2 = request.json['symptom2']
    # symptom3 = request.json['symptom3']
    # input_data = ['symptom1',
    #              'symptom2',
    #              'symptom3']
    # input_data = request.json['symptoms']
    # input_array = [1 if input_data[symptom] else 0 for symptom in input_data]
    # input_df = pd.DataFrame([input_array], columns=X.columns)
    # prediction = model.predict(input_df)
    # prediction_list = prediction.tolist()
    # return jsonify({'prediction': prediction_list})
    # input_data = request.json
    # input_df = pd.DataFrame.from_dict(input_data, orient='index').T
    # fill missing values with 0
    # input_df = input_df.fillna(0)
    # make prediction using model
    # prediction = model.predict(input_df)
    # convert prediction to list
    # prediction_list = prediction.tolist()
    # return prediction as JSON
    # return jsonify({'prediction': prediction_list})

if __name__ == "__main__":
    app.run(debug=True)
