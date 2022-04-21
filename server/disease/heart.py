import sys, json, numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('https://raw.githubusercontent.com/VenkateshBH99/Hybrid-Random-Forest-Linear-Model/master/Normal_Models/cleve.csv',engine='python',encoding='UTF-8')
data = df.values
X = data[:, :-1]
Y = data[:, -1:]
    
def read_in():
    lines=sys.stdin.readlines()
    return json.loads(lines[0])

def main(lines):
    Newdataset =np.array(lines.split(',')).reshape(1,13)
    rf = RandomForestClassifier(n_estimators=16,criterion='entropy', max_depth=9)
    rf=rf.fit(np.nan_to_num(X),Y)
    predictions = rf.predict(Newdataset)
    if int(predictions[0]) == 1:
        print ('negative')
    elif int(predictions[0]) == 0:
        print ('positive')

if __name__=='__main__':
    main(sys.argv[1])
   # main(sys.argv[1])
