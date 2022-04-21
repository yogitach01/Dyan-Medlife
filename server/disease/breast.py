import sys, json, numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('https://raw.githubusercontent.com/Piyush-Bhardwaj/Breast-cancer-diagnosis-using-Machine-Learning/master/cancer.csv',engine='python',encoding='UTF-8')
df.replace('?',-99999,inplace=True)
df.drop(['Id'],1,inplace=True)

X=np.array(df.drop(['classes'],1))
Y=np.array(df['classes'])   
def read_in():
    lines=sys.stdin.readlines()
    return json.loads(lines[0])

def main(lines):
    Newdataset =np.array(lines.split(',')).reshape(1,9)
    rf = RandomForestClassifier(n_estimators=16,criterion='entropy', max_depth=7)
    rf=rf.fit(np.nan_to_num(X),Y)
    predictions = rf.predict(Newdataset)
    if int(predictions[0]) == 0:
        print ('negative')
    elif int(predictions[0]) == 1:
        print ('positive')
if __name__=='__main__':
    main(sys.argv[1])
   # main(sys.argv[1])
