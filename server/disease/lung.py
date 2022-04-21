import sys, json, numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('https://raw.githubusercontent.com/aniket193-web/lung-cancer-prediction-using-machine-learning-techniques-classification/1cac4c8cd3c82814a79068ac96da10d4beb26683/LungDataSet.csv',engine='python',encoding='UTF-8')
df.replace('?',-99999,inplace=True)
df.drop(['id'],1,inplace=True)

X=np.array(df.drop(['Level'],1))
Y=np.array(df['Level'])   
    
def read_in():
    lines=sys.stdin.readlines()
    return json.loads(lines[0])

def main(lines):
    Newdataset =np.array(lines.split(',')).reshape(1,23)
    rf = RandomForestClassifier(n_estimators=16,criterion='entropy', max_depth=9)
    rf=rf.fit(np.nan_to_num(X),Y)
    predictions = rf.predict(Newdataset)
    print( predictions[0])
if __name__=='__main__':
    main(sys.argv[1])
   # main(sys.argv[1])
