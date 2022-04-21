import React from 'react'

import {
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Typography,
    Button,
    CardMedia,
    Grid,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
    viewbtn: {

        background: "red ",
        color: "#fff",
        height: 40,
        borderRadius: 2,
        fontSize: 14,
        Width: 30,
        left:260,

    },
    ms: {

        background: "red ",
        color: "#fff",
        height: 40,
        borderRadius: 2,
        fontSize: 14,
        Width: 30,
        left:300,
        cursor: "pointer",

    },
    de:{
        textAlign:"center",
        marginTop:20,
        fontSize:25,
        fontFamily:"Roboto"
    },
    mk:{
        fontFamily:"Roboto",
        fontSize:15,
    }
    
});
function LungCancer() {
    const history = useHistory();
    const classes = useStyles();
    return (
        <div>
             <Card style={{ width: 400, marginTop: 50,marginLeft:400,background:"rgb(168, 50, 50)" }} >

<CardActionArea >
  <CardMedia
  component="img"
  height="400"
  image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFBUUFhYZGRgYGhwdHBocHBocGR8aGiQeHR0aHSEeJC4lHCErHxocJzgnKy8xNTU1GiQ7QDs0Py41NTEBDAwMEA8QHhISHjQrJSs0NzQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcIAgH/xABEEAACAQIEAwQGBwYFAwUBAAABAgADEQQSITEFQVEGImFxEzKBkaGxBxRCUsHR8CNicoKS4SQzorLxQ5PCFSVUc7MW/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQACAgMBAQEAAAAAAAAAAQIRMQMhEkFRIjJh/9oADAMBAAIRAxEAPwDjMREBERAREQEREBERAREQEREBP20/JauL4UGjhqi0zrRUF1sbldO8BqCLW13sDL4z8rwi3hVrT8lr7G4UNiELUWezCx2Vf3mJGw6aSqGTvHx4JeSIiZpIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAluxa02wuFzWVhT0IbK1s7jXN3WHPQgjbXSVGXDiFhQwy3AApLuilbt3zqO8Ddufnzm3h/0rro7J00+sU8zE2cWDMoF+RAUszHwFvMSoES09n7LVR0vowJYIAB/M7WXzkHximFxFZQAAtR1AGwAYiw8Jbz/AEjPdaMRE51yIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICbOCwj1XWnTRndtlUEsfYJZOyPYmtjf2h/Z4cGzVWG9t1RftH4DrynSaVChgkNHCpkuBnqMR6R7c2a2o12FgL6CXzi6V1qRQKP0e1QP29enScjRNXYeDFe6PYTILjfZ2rhrM+V0JsHQkrf7puAVNuo8r2l/dXd8xvqdzfX2nfmJkrUA6vScXRhlI8hoR4g6g+Am18M49KTdcjlq4nVUUqCkr/AJNPdL2uoPrqQ3PY3kBxPBNRqvSbdTa/IjcEeYsZY8XUY4fDsDVC+jUZlF6YK3Ujqtiuupubm2sr4vWrF9dRo8JpguuU073+5Vc+wFWEj+0I/wAXif8A7qn+5pJcPpOWBLVWF/slre1nyqvx8pH9ohbFV9b/ALRz7SSSPGx0v4SfN1EZ7SfZLgK4hnqVSRSp2vbQsx2QGxsLXJO+3W4tz8HwTXpNh1QcnRnDgcmDFmuefeBE+uzWE9FQoUypuy520IJd7Mo88uRfZNvjrIj2GmSyki1r2va1jrr4aAdZbGJxxYrrV5VDj/YWrSU1sOTXojUkD9og/fUXuP3luNNbSmzsPCOJvTZWTw6/lqOXumbj/YqhjlNXD5aGJ1JXQU3PiB6rH7wG51BvcZ78XHuLZ1z24xE3OJcPq4eo1KtTam67q2/mORHiNDNOYrkREBERAREQEREBERAREQEREBERAREQEvX0fdiTiz9Yr3XDIfJqjDdFPJfvN7BrcrHdhuyrY6tqSlCnZqr87ckX99rG3QXPKx69xTHrTp+ipqFVFyqi7Ko2A6ee8vjPyqutcPzHY9bCmgCU0UBVWyqANlUDYacgZVsXi7hzmFtr6DU3voNxr8+uuq+KY+s259u2/hYfITTqVQq5gNzpqC2g5ki9r9QPDedec8MeeUxwdCPEHnvrLMnD1cEra/Mcx4+I/OVDgnEr2AIA21Nz1NifPbSWnDVy9npnvrqQPtAc16sBuOm20rrkjn30kcLK+jrZSCO43xKn/cPdIN0/w+GYI5ORhmUkf9SppopnSfpEAxGBNW1mp2DW96t4eqR7pzepl+rYYsB6jC7K9v8AMqaBlO/gRKZn9c/8afTJwLDZq9Mmi795dXZioFxvZVNvbIJz6SqdSS77m1+8dzbS+ssHZegpxCMouFYa98gc98qge0+w7Ss0nswPQg+6R5fpafbs+BpH6w78k7q8hc6D3AX90huL4wLiKosDZ2HIbab7iWoAAKebG9vPn46ASr9o0Ra75kuxYHRgNGUNci9zv02E1zfbKsC1L6g5WXW37vz5c/8AmT4bjypDDu6+GuouNAFBudsvPeQOFqoWCrey65tSfG1gCB4b+c2AqMDlsTzQHvKb8vh56y9iq9cV4Th+J0AlWy1FHcqqO8p6fvKTup+B1nEu0PAq2DrNRrLYjVWHqsvJlPMfLYzqHBMWUK66H3fr9eMn+L8Oo4/DmhW7rC5p1Ld5H6jqvIrzA6gEc2/H+NM6eeYkhxnhdTDVnoVVs6GxtqCDqGU81IsQfGR8wakREBERAREQEREBERAREQEREBNvhuBevVSjTF3qMFUeJ5noBuTyAM1J1n6I+BhKdTiDjVr06N+n/Ucf7Qf4pMnNRbwttLCU8BhVw9L7IuzWsXqH1nPyHQADlKZj+IEkjmSfl+f60k12kx3P9XF9PxlPsHIYP3gRcbAidmM8RhbzTHVVBAzEtbYHry1G5A2uOXti8fiLgBR943Op1tp7DeZXALve3UXHPS22s1KveLa673ta19NNTcbX585oM+HqFWpANqTc6W8b+4/CTfD+Psjm6hrE5W2Om2o30HOQlJMzXUjuITc8gl9T7APfMIdRly7Aa+f4XgdYNZcVw/FkABmouGHLOi51YeZt7QZyaxGHw5U2JR72qBCQKj2vfQjf4y9fR9XJTFKT3cq+5g6n4W90pPFcC1KnRp1MgKow72YG/pKh0IXUEWNr85jxxppm+mTgbD6xSLFSQwC5nd2BPQr3b38AJWsNRLuiDdmCjzY2Hzk/2dH+IRVewLL6gIvr6pZrNY8x8DNDswB9ao35MSPMAkfECU8k5sWn268ambLrYAADyC2H68ZUu31I/WFYa5qSN46Zl/8AESxYB7onio/KRP0hIB9Ve17q6+1CpH+8zWeqyVPA1wDqbaHqQR0kjgS2ek7EkM2UnXUr1PM2+UjkN1Y5QL9PA7SV4av7JMxtlqZl16rlIPQ21HlNEJDDYk+kcj1c3usbCWfAYrLlsdLC2tx0tf8ApHsPSVLDVO+4Ukd17tuDyH68vEmTwNQrZdS21uVtNL8zrK2cobP0q8JFbCU8Yo79AhHPM0nPdJ/hYj/uGcdno7hdBcRQq4Z/Vq02S/8AGNGHkSD5ied8TRam7owsyMVYdCpsR7xOPc4rfF5jDERKLEREBERAREQEREBERAREQN7g/DnxFelh6frVGCjoL7sfAC5PgJ6ExyLQo06FIWSkqovkNLnxJub9SZzv6GeGA1K+MYf5ShEva2epfMR4hRb+eXnirjK4OutufkD7zNvHn7Z7v0pXFnzg32JPU/rr7pEphmVgUuWGp62HXoJYK6gHKVzEsQLeNgSPaJh4jTNJApW2YZi32ibtYX8AROi64imM/K8I3iHCSXQXCBwLljqF+9lGraDQDcgdbzHXw+GDmmVembMFdsxfYqGZSQpvzAA85F1MS+clbga69D5z6SqbDY25tuCd7HeU1dX7dWfHnPqzl+ca4WaIpm5dHBZWylSSpscwJNraW1O8jBbXn0t+tpbODY+pTFRWAZcjOFYZkuBcP4dDbe9p84biWExLZK2HWm50DobAn8JbOrZ7Y+TEzr103uwCn0GLPVUUeZLSE7dPlemRlN0ym4sTl210J3MuPBeHLh6FdUcsrspudCFAbQ/GVrtBSpuqVqvqUi2ZbkFy1stMHlcrvyFzIt7qme1NwWPam4dbAg8gPmQZuVqHo61OugtTZ1It9kmxam2gyka2uBcajw/E4ktXNTqLTpqdUZEChG6GwzMhG97m4B63+TRqUHKtcgjvCwKMt9D3hYrexBtbYg85T1qevpp06XgiAiaaC418CZt9o+GDEYZdbejqBr+DDKfiVkPwzGq1Gk2XKHW9gSQCDYjXXfzlowFVGQoxBVxlOovY6Xl7+slA/wDSGRSgCn7RbUG1xz9h23mOphXVSMttOtyE5jxN7X8RbYTbxnE2p1aiVALowWwuSSBYsot11F7eteaf/qyEsGJB521Atst/mes0iH1hXu3eB573v/fz+UsWEwwzOASVuct73FgSL+emv70hcPj0NrWJ6HWTuCcFCAAA23hawNj10tbxiid7N1yja9dfbOd/S9wf0OONZR3MSvpB0zjRx53s3886Jw9dQ3O9hzv4ee01vpK4d9Z4a1RRdsMwcW+4e64HhYhv5JzeWc+18XhwiIiYNSIiAiIgIiICIiAiIgIiIHefo1wfo+F0zaxqu9Q+0+jX/Sgt5+M2sTTJBbWwvr56D3EjSS/C8OKWFw1LmlGmp/iCLf4k+8yN41xDIAoGu+vLppN8fjLSCqlKYzA6+WvmPGQ/G2Lhqlxl3Hhsu3nPzH1ndiWY311B0+E1aGJD0qtFrse4yBDroTc5fat9La+2baz65T4tca4V921ExvqSATYTZr4Jwe8jD+IEfOa6Ib22uZXmOri8pXhWc4fEAlihCiyi7XVkJK9LLa+1wbeUWlGiDmZna2oQLlJPQtmOX2C/iJI11dlp0kY5lZnyBsoAITvv02BBPI9CJ9JQbEOmHQ52LDNWYagbWUnXKL7tcnTbaWx1y5vL/rhauC1HbA+kc/5juwvsESyKPAAhpRu1mKDU6ar6uZiPGwALe8m3hOi9oVRMOaSaIlIKB+6NJyjtBU7yINAij3tqT8pTd/m1XM9oeSGF4pURclw1Ma+je7ID1A+ydTqLbyPic0tnTV1vhtENgqFQAKXuco0UakHL0Hhymzhatjl5r1/XKY+F6cNwv8PzJixKZua29o5/rwnZn3PbDXbT7Z4Y93EotwylKuX1lIFlcG2nd0v+6OspCUVvo2h+8GX5XHxnTMNWDJkcZkcZTr8QRsdLg8iJTOI4F6NR6Rc29ZGXTMp2dQNL6EMnOxtyls36GrhqJBB0HiGXb3yx8Mq2YJfS1x1N9dv18JXmKrlBYXI3A68+hUjW++skMG4DADTLb39L8+o5Syq/YB2UrqALXtfXXXcez3Se4ciujUqijLURlZdxlYFSOh0MgOB4oFQrWza78/dzkxQxFmBta29unlMNz6WjzvxPBtRrVaDetTdkPmpIJ+E1Jfvph4fkx/pVHdxFNH8Mw7jAf0A/zSgzlbwiIgIiICIiAiIgIiICZKFPMyr95gPebTHPum5BBG4II8xA9RcT7rHQ2BOmnK3v3EhuJ4EYhAUYZhsfwPMSe4nqytyYA+8afrxlN7Q1SlyjFSvTTby9s6Me2NVHjNCrTch8yb26EDmCNDp0lYr1WLgZmJvoC4XU9RqZbH7VOAyVkWsh5Now8QRzkFSfCqGqmnWRcwVblW1NyQpPQc/GdHv7RGvw3iDquVlJS5tawIv92/Tl+OlpunhqZonEK+TJfMWXMbHSygtlDai24120kZXx+GdUT09dAmbdBYg8iF0sNtpsYzhYq5KaVaedirKp7jKtjoRa+Y3ub7WG2spc5t5X+WpOOWmuIzq+W9Onfvue87tyDH7bb2AsBrsJYOx9nxAsMqU6bsB+9omZjzazHy5T6/8A5C7J38tNBYLYXPNmBzbseo6DW0m+zfDGWrXyplRUVV1BLM7Cx30FkPvk2zhTitbtNUJp1PJR7zecz7SrbEOeoU/6R+U6xxbhrupHdF2G5GwnK+1VMriXU/ZCjw2mXk4+K2O0LEROZq7JwxL4HDLz9GCJ94QZkYc5h4ZUthcIeRpibI7rEjZtfznZOmF7RuZlKjdSRYdPH2H5zX7V4bPhiwBz0DmB/ccgMPflb2SVemM9j1BH4frwm3jsJfD4jn+yfw5X57S1pHNcCv1i1O4FTXLfQNzI9u5HXUbtNnDOyMVOttm3uOVwOXQzWw+EAqgq+R1NwGzLbnvb/mTVTDq7sUZRaxHeubkAtpzGa5+Muipzh1chUbQC9jpqDyPuO8tOArZj1vz8/lKPgCwNr8+X4S68PpEb3uLD+8z0RXfplwwOGwlX7lR08w6hh/8AmffOPztf0q97hxv9mvTI8DldT8z75xScmu2+eiIiVSREQEREBERAREQEARJbsrgjWxmGpAXz1UB/hzAt8AYHpbiFMrTXqqL71A/KUvtCoIbx/GXri5uP1zEoHGH7gPgPgJ0+NjpzTiKEEjT+oD5maf1dmyqXOUaKB6uu9ixVb+RM2eK1AGPXXU8hvttf5fLb4PgRfPUYhmB1O4HW522PtsNADfoqIxYfhjKCyIt1NgzHM99NQPVW173tcadZmxmGIUogLMqM1RhcknK2h8AfiPASafjaU6FSlR7tjlLbHMPXsw1+2e9ysTraQfBswrmlcghbAHTMttFI5E5h7RKxLLwcFAFZmym+ZfWW55gctL7b/LoHZtBSwrPf/MdmB5kLZB7srSoYHg7Myu4KIDrcWLgaiw3vyvtz8JbcTWApoiiwVbADoP7mRr36Q1OKOO54kmc77bJaupAsCi+/W8u3E6pul+h/5lW7ZIDSpPzDFfYReV3Oc1OL7U+IicbZ1bhdS/D8M33QR7tJL4GoDYMLj9CQHZm7cLW26VHHsJvJLh1Tujqbfr3zrz7yxvbexWHK6jUW094P4fGb+FX0lKoh+3Tca63BU2JmriTekp8bezUE/CbHCabAsCSLK3uI/vJvSPtSK+CZcqIjurkgBQzqpI1BAuyc7MvIbaGR/wBUWi5Kk2IJymx0HUjoZN1OKHDOEVrMUva51F7Bd+eomtSwCVWf0b92/wBs6jNut+eugJ9+80lRWxwNczjpe5/KXnAWNre39fraUzhoSmxQC+XQsdLnmekt/Cami+N9Oo/V5TRGl9KtHJwk9WrU7+5rThM9CfSrSzcIqn7j0n97BP8Aynnucmu22eiIiVWIiICIiAiIgIiICdB+hnh+fiPpSO7Qps38zdxR/qPunPp2r6DMIFw+Jr83qqnsRc3zeTEXp0Hir2QygY975x0vby3/ABly7QVrU2MrK8MJBrt6htlX2WzHw2nTj1GNU7hvZZ69T0hFkv3b7k9bcwN/+ZccN2Zw6KrMxdxaxO2u4AB2tbrt5THQxwRmHMiw/Xu90+anEbbkW5dPhL3mo5ShwOHVmCUkQWBBCro9zdttSb6zWxWJSzEIgbS+VRcMDqQd7Nv5iaK48XBFri9z1HSfGJfPZ8wFun5SPj+nLHXqFw1ievuvprPmkHY5TqRv05Wn7SU5tdr3/KbLVVQHLqx+EsVD8WUek/gUD27mVjtk37GkP3j8pbcTlRS7kKo1JM5vx/ivp3uBZF0UfiZXyakzwtie0TERONs6f9HbZ8DiKfNHzewj85l4Y5z5SPV285XvoxxwTFNRY2WuhTX7w1X8Ze6PCf2hzHKiHvdWPITq8ev5ZantJ0sIzISFLDe/2Rr8evtmBxUSgSEOc9wBRc66X06C8/eL8YKoETQbATUbiRSkj3swN18zz93zlpKqoHEajPWJdGVgfUZWVrDQEA2/D89/DUQjuQSFdbWOliLb67jX+qWk8Xev/mnOOjDT2SOxvCVe5pXzHXIdSeXdPXzl5f0aOHWzhTtveWng9QlgeQ2+QlewqXBUizIxDAgg6bjw1k9wk96NdIWftVTFThmNXl9Xd/6BnH+2eaJ6exZ/wmJHL6vVv/Q08wzi122z0RESqxERAREQEREBERATvX0NH/2xrf8AyHv/AEpOCzsX0F8TBGIwhOuZayDrsr+6ye8y0Rel+4lhvSHKfUHreXIe385qY9wUK6AWt5dJL8RIVfMyn8Q4gouL3vNse2NVfH1Mjlek08TVexIH95tY10YneR1dwd2YHxnTFXwMc4H4mbWA4nlbvsDfl0kTUK83FucxnH0ENy2a3JRr/aRbJPaZPxbsTXZ3UJ6uUbbnzmPH8Qp4Zc1Rhfkg1Y/lKbie1jgFKK5B946v/aV6tVZiWYkk7km5mGvLJ6i8x+pTj3HnxDa91B6qDbzPUyGiJz223mtJOCIiQlloVWVg6khlIII3BGxnU+B9tUxKLTrEJWtbNsr+PgZyefoMvjXxqLOXVeKU3LAWuByB38prYnHXyqyMoGg6SrcM7RtYU6xJXk32hJCsrMAVcsvKxnXnU1PTG5sqz4CgCLh1YfdBBPtk/wAOqqjC6620POcxo0mRsy3EuPCcYXADa9D4+MnUQtePwCYhS62FbLYH7wFtG8dLA+zbaN4XTI1tYg2sdCOvtEk8BcDW83a+GBYVANzZvPkfb+t5nzx6S/eKtlwGNbphq1vPI1viZ5onovt/iPRcJxRG7Kqf9x0U/wCktPOk5tdtc9EREqsREQEREBERAREQEkuBcXq4SumIokB02uLggixUjmCCRI2IF3xf0mY2oSW9FqdAEIt5d753kJiO1OJY3LD2KJBxLTWp1UcRIvxqu29Q+yw+Qmu+NqHd2PtM1oj539OI+2qE7kn2z4iJFtqSIiQEREBERAREQEz0MUy+qxEwRJls6Ezh+POvrAMJYOC9p6INnBS/PcSjRNJ5dTtW5j0N2dx9OooKOr+Rv8JZKFIHwvpPLmGxT02DI7Iw5qSD8JdOD/ShjKICuErAc3BD/wBQ/KPnKj4rp9NGKy4GjSvYvXFx1WmrX/1OvuE4hLT217Y1OItRL01pikrABSTctbMxJ8FUW8JVpnbzVpOIRESEkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k="
  alt="symptoms" />
  <CardContent >
    <Typography gutterBottom variant="h3" component="h2">
     
    </Typography>
    <Typography
      variant="body2"
      color="black"
      component="p"
    >
        Lung cancer considers as the deadlier disease and a primary 
concern of high mortality in present world. Lung cancer affects 
human being at a greater extent and as per prediction it now takes
 7th position in mortality rate index causing 1.5% of total mortality
  rate of the world . Lung cancer originates from lung and spreads up 
  
  to brain and spreads Lung cancer is categorized in to two major group. 
  One is non-small cell lung cancer and another is small cell lung cancer. 
  Some of the symptoms which are associated with the patients like severe chest pain, dry cough, breathlessness, weight loss etc. 
  Looking in to the cultivation of cancer and its causes doctors give stress more on smoking and second-hand smoking as if the primary causes of lung cancer. 
  Treatment of lung cancer involves surgery, chemotherapy, radiation therapy, Immune therapy etc. 
  In-spite of this lung cancer diagnosis process is very weak because doctor will able to know the disease only at the advanced stage .
   Therefore early prediction before final stage is highly important so that the mortality rate can be easily prevented with effective control. Even after the proper medication and diagnosis survival rate of lung cancer is very promising. Survival rate of lung cancer 
   differs from person to person. It depends on age, sex and race as well as health condition. Machine learning now days plays a crucial role for detection and prediction of medical diseases at early stages of safe human 

      
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions></CardActions>
</Card>



            <Button className={classes.viewbtn} style={{ marginTop: 30, marginLeft: 180 }} variant="contained" size="large"

            >Dataset </Button>
            <Button className={classes.ms} style={{ marginTop: 30, marginLeft: 50 }} variant="contained" size="large"
               onClick={() => history.push("/FormLung")}
            > Predict</Button>

        </div>
    )
}

export default LungCancer;
