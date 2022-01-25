import CurrencyDropDown from './CurrencyDropDown';
import ExChangeRateDisPlay from './ExchangeRateDisplay';
import React, { useState } from 'react';
import styled from 'styled-components';

const Inputbox = styled.input`
  border: solid 2px black;
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
`;

const RedBrick = () => {
  const [baseCurrency, setBaseCurrency] = useState(0)    
  const [amount, setAmount] = useState();
  const onInputAmount = e => {
    e.preventDefault();
    setAmount(e.target.value.replace(/[^0-9]/g, ''));
    console.log(amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };

  const jsonData = 
  {  
      "success":true,
      "terms":"https:\/\/currencylayer.com\/terms",
      "privacy":"https:\/\/currencylayer.com\/privacy",
      "timestamp":1545881647,
      "source":"USD",
      "quotes":{  
          "USDAED":3.673197,
          "USDAFN":76.088502,
          "USDALL":108.014949,
          "USDAMD":484.684999,
          "USDANG":1.78935,
          "USDAOA":308.428019,
          "USDARS":38.025498,
          "USDAUD":1.41645,
          "USDAWG":1.8005,
          "USDAZN":1.704992,
          "USDBAM":1.720195,
          "USDBBD":2.0065,
          "USDBDT":84.095497,
          "USDBGN":1.720202,
          "USDBHD":0.377845,
          "USDBIF":1796.55,
          "USDBMD":1,
          "USDBND":1.375902,
          "USDBOB":6.926599,
          "USDBRL":3.921797,
          "USDBSD":1.002425,
          "USDBTC":0.000264,
          "USDBTN":70.202655,
          "USDBWP":10.813986,
          "USDBYN":2.143987,
          "USDBYR":19600,
          "USDBZD":2.02065,
          "USDCAD":1.359085,
          "USDCDF":1631.000242,
          "USDCHF":0.992601,
          "USDCLF":0.025048,
          "USDCLP":693.601955,
          "USDCNY":6.891597,
          "USDCOP":3302.1,
          "USDCRC":600.159866,
          "USDCUC":1,
          "USDCUP":26.5,
          "USDCVE":96.98802,
          "USDCZK":22.743597,
          "USDDJF":177.720369,
          "USDDKK":6.55895,
          "USDDOP":50.863502,
          "USDDZD":118.89004,
          "USDEGP":17.935975,
          "USDERN":15.000356,
          "USDETB":28.186971,
          "USDEUR":0.878695,
          "USDFJD":2.134978,
          "USDFKP":0.790015,
          "USDGBP":0.790055,
          "USDGEL":2.664971,
          "USDGGP":0.790081,
          "USDGHS":4.92205,
          "USDGIP":0.790015,
          "USDGMD":49.349825,
          "USDGNF":9119.750355,
          "USDGTQ":7.753973,
          "USDGYD":209.405028,
          "USDHKD":7.83205,
          "USDHNL":24.452983,
          "USDHRK":6.528297,
          "USDHTG":77.535503,
          "USDHUF":282.139656,
          "USDIDR":14562.5,
          "USDILS":3.77795,
          "USDIMP":0.790081,
          "USDINR":70.255029,
          "USDIQD":1196.15,
          "USDIRR":42105.000352,
          "USDISK":117.039989,
          "USDJEP":0.790081,
          "USDJMD":128.584974,
          "USDJOD":0.71021,
          "USDJPY":110.959498,
          "USDKES":102.009392,
          "USDKGS":69.850079,
          "USDKHR":4034.850439,
          "USDKMF":433.624965,
          "USDKPW":900.056691,
          "USDKRW":1121.419945,
          "USDKWD":0.30395,
          "USDKYD":0.835385,
          "USDKZT":371.980321,
          "USDLAK":8577.350421,
          "USDLBP":1511.700215,
          "USDLKR":181.995016,
          "USDLRD":157.49779,
          "USDLSL":14.580079,
          "USDLTL":2.95274,
          "USDLVL":0.60489,
          "USDLYD":1.398302,
          "USDMAD":9.57215,
          "USDMDL":17.241499,
          "USDMGA":3546.103567,
          "USDMKD":54.068501,
          "USDMMK":1570.350024,
          "USDMNT":2637.254916,
          "USDMOP":8.087899,
          "USDMRO":356.999895,
          "USDMUR":34.397439,
          "USDMVR":15.449742,
          "USDMWK":730.9697,
          "USDMXN":19.894202,
          "USDMYR":4.176501,
          "USDMZN":61.490214,
          "USDNAD":14.579558,
          "USDNGN":365.14006,
          "USDNIO":32.539886,
          "USDNOK":8.74611,
          "USDNPR":112.505037,
          "USDNZD":1.48712,
          "USDOMR":0.38613,
          "USDPAB":1.002415,
          "USDPEN":3.3677,
          "USDPGK":3.37735,
          "USDPHP":52.72027,
          "USDPKR":140.215019,
          "USDPLN":3.76165,
          "USDPYG":5935.90292,
          "USDQAR":3.641105,
          "USDRON":4.073703,
          "USDRSD":103.902084,
          "USDRUB":68.953405,
          "USDRWF":895.105,
          "USDSAR":3.760902,
          "USDSBD":8.20555,
          "USDSCR":13.683499,
          "USDSDG":47.736004,
          "USDSEK":9.066405,
          "USDSGD":1.37275,
          "USDSHP":1.320899,
          "USDSLL":8599.9997,
          "USDSOS":580.000195,
          "USDSRD":7.457965,
          "USDSTD":21050.59961,
          "USDSVC":8.770703,
          "USDSYP":514.999392,
          "USDSZL":14.583503,
          "USDTHB":32.607967,
          "USDTJS":9.44805,
          "USDTMT":3.5,
          "USDTND":3.00425,
          "USDTOP":2.25965,
          "USDTRY":5.277175,
          "USDTTD":6.794603,
          "USDTWD":30.796503,
          "USDTZS":2299.901063,
          "USDUAH":27.443502,
          "USDUGX":3716.096617,
          "USDUSD":1,
          "USDUYU":32.344501,
          "USDUZS":8350.549968,
          "USDVEF":9.987501,
          "USDVND":23336.2,
          "USDVUV":113.783789,
          "USDWST":2.626846,
          "USDXAF":576.94015,
          "USDXAG":0.06652,
          "USDXAU":0.000787,
          "USDXCD":2.70255,
          "USDXDR":0.721204,
          "USDXOF":576.940096,
          "USDXPF":104.903214,
          "USDYER":250.349931,
          "USDZAR":14.523899,
          "USDZMK":9001.202279,
          "USDZMW":11.953972,
          "USDZWL":322.355011
      }
  }
  const quotesdata =  [1, jsonData.quotes["USDCAD"],jsonData.quotes["USDKRW"], jsonData.quotes["USDHKD"], jsonData.quotes["USDJPY"], jsonData.quotes["USDCNY"]];
  const time = new Date(parseInt(jsonData.timestamp) * 1000);
  return (
    <>
      <Inputbox
        type="text"
        onChange={onInputAmount}
        value={
          amount && amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
      />
      <CurrencyDropDown base = {baseCurrency} baseSetter = {setBaseCurrency}/>
      <ExChangeRateDisPlay base = {baseCurrency} amount={amount} time = {time} quotesdata = {quotesdata}/>
    </>
  );
};

export default RedBrick;
