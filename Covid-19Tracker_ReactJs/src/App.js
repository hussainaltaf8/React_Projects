import React,{useState,useEffect} from 'react'
import "./App.css";
import{MenuItem,Select, Card} from "@material-ui/core";
import Infobox from "./Infobox.js";
import MapView from "./MapView.js";
import Table from "./Table.js";
import {sortData }from "./util.js";
import "leaflet/dist/leaflet.css";


function App() {
  const[countries,setCountries]= useState([])
  const[country,setCountry]=useState("Worldwide")
  const[countryInfo,setCountryInfo]=useState({})
  const[TableData,setTableData]=useState([]);
  const[mapCenter,setMapCenter]=
  useState({lat:34.80746,lng:-40.4796});
  const[mapZoom,setMapZoom]=useState(3);
  const[mapCountries,setMapCountries]=useState([]);
  const[casesType,setCasesType]=useState("cases");

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response=>response.json())
    .then(data=>{
      setCountryInfo(data);
    })
  },[]);
  useEffect(()=>{
const getCountriesData=async()=>{
  await fetch("https://disease.sh/v3/covid-19/countries")
  .then((response)=>response.json())
  .then((data)=>{
   const countries=data.map((country)=>({
     name:country.country,
     value:country.countryInfo.iso2,
   }));
    setMapCountries(data);
   setCountries(countries);
   const sortedData=sortData(data);

   setTableData(sortedData);
  });
};
getCountriesData();
  },[]);
  const onCountryChange=async(event)=>{
    const countryCode=event.target.value;
    
    const url=countryCode==="Worldwide"?"https://disease.sh/v3/covid-19/all":
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      setCountry(countryCode);
      setCountryInfo(data);

      countryCode === "Worldwide" 
        ? setMapCenter([34.80746, -40.4796])
        : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        countryCode === "Worldwide"
        ? setMapZoom(3)
        : setMapZoom(4);
    })
  }
  
  return (
    <div className="app">
    <div className="app_left">
   <div className="app_header">
     <h1>COVID-19 TRACKER</h1>
     <Select className="sel" variant="outlined" onChange={onCountryChange} value={country}>
     <MenuItem value="Worldwide">Worldwide</MenuItem>
     {countries.map((country)=>
     ( <MenuItem value= {country.value}>{country.name}</MenuItem>)
     )
     }
      
      
     </Select>

</div>
<div className="app_stats">
  <Infobox
  isRed /*variable*/
  onClick={(event)=>setCasesType("cases")}
  active={casesType === "cases"}
   className="cases_info" title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}Total/>
  <Infobox
   onClick={(event)=>setCasesType("recovered")}
   active={casesType === "recovered"}
   className="recovered_info" title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}Total/>
  <Infobox
  isRed
   onClick={(event)=>setCasesType("deaths")}
   active={casesType === "deaths"}
   className="death_info" title="Deaths" cases={countryInfo.todayDeaths}  total={countryInfo.deaths}Total/>
</div>
<MapView
casesType={casesType}
countries={mapCountries}
  center={mapCenter}
  zoom={mapZoom}
/>
</div>
<div className="app_right">
<Card>
  <h3>Live cases by country</h3>
  <Table countries={TableData}/>
</Card>
</div>
    </div>
  )
}

export default App
