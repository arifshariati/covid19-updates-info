import React from 'react';
import Axios from 'axios';
import NumberFormat from 'react-number-format';
import { Table } from 'antd';
import '../assets/css/Cases.css';
import 'antd/dist/antd.css';

class Cases extends React.Component{
  constructor(props){
    super(props);

    this.getCountryData=this.getCountryData.bind(this);
  }
  currentDateTime=new Date().toDateString();
  state={
    confirmed:0,
    recovered:0,
    deaths:0,
    country:"",
    countries:[],
    countriesData:[]
  }
  columns=[
    {
      title:'Country',
      dataIndex:'countryRegion',
      key:'countryRegion',
    },
    {
      title:'Confirmed',
      dataIndex:'confirmed',
      className:'column-number',
      key:'confirmed'
    },
    {
      title:'Recovered',
      dataIndex:'recovered',
      key:'recovered'
    },
    {
      title:'Deaths',
      dataIndex:'deaths',
      key:'deaths'
    }
  ];

  componentDidMount(){
    this.getCases();
  }
  async getCases(){
    const response=await Axios.get('https://covid19.mathdro.id/api');
    const resCountryOptions=await Axios.get('https://covid19.mathdro.id/api/countries');
    const resCountries=await Axios.get('https://covid19.mathdro.id/api/confirmed');
    this.setState({
      confirmed:response.data.confirmed.value,
      recovered:response.data.recovered.value,
      deaths:response.data.deaths.value,
      countries:resCountryOptions.data.countries,
      countriesData:resCountries.data
    });
  }
  async getCountryData(e){
    {/* const res = await Axios.get('https://covid19.mathdro.id/api/countries/'+e.target.value); */}
    const selectedCountry=e.target.value;
    const res = await Axios.get('https://covid19.mathdro.id/api/countries/'+selectedCountry);
    this.setState({
      confirmed:res.data.confirmed.value,
      recovered:res.data.recovered.value,
      deaths:res.data.deaths.value,
      country:selectedCountry.concat("'s")
    });
  }
  renderCountryOptions(){
    return this.state.countries.map((country,i)=>{
    return <option key={i}>{country.name}</option>
    });
  }
  render(){
    return(
      
      <div className="cases-container">
        <h3><b>{this.state.country} Latest COVID-19 Cases</b></h3>
        <span>{this.currentDateTime}</span>

        <div className="card-container flex">
          <div className="card-container-ind">
            <div className="inner-top">
              <img src={require('../assets/img/confirmed.png')}/>
            </div>
          
            <div className="inner-bottom confirmed">
              <h2>Confirmed</h2>
              <h1><b><NumberFormat value={this.state.confirmed} displayType={'text'} thousandSeparator={true}/></b></h1>
            </div>
          </div>
          <div className="card-container-ind">
            <div className="inner-top">
              <img src={require('../assets/img/recovered.png')}/>
            </div>
          
          <div className="inner-bottom recovered">
            <h2>Recovered</h2>
            <h1><b><NumberFormat value={this.state.recovered} displayType={'text'} thousandSeparator={true}/></b></h1>
          </div>
            
          </div>
          <div className="card-container-ind">
            <div className="inner-top">
              <img src={require('../assets/img/deaths.png')}/>
            </div>
            
            <div className="inner-bottom deaths">
              <h2>Deaths</h2>
              <h1><b><NumberFormat value={this.state.deaths} displayType={'text'} thousandSeparator={true}/></b></h1>
            </div>
            
          </div>
        </div>
        <div className="country-listing-container">
          <label>Select Country</label>
          <select className="select-country" onChange={this.getCountryData}>
            <option key={99999}>Global</option>
            {this.renderCountryOptions()}  
          </select>
        </div>
        <div>
        <Table columns={this.columns} dataSource={this.state.countriesData} size="small" bordered={true} pagination={false} />
        </div>
      </div>
    )
  }
}
export default Cases;
