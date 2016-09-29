import React, { Component } from 'react';
import logo from './logo.svg'; 
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,
  ControlLabel,FormControl,HelpBlock,Checkbox,Radio
  ,Grid,Row,Col} from 'react-bootstrap';



class App extends Component {
  
  
  state = {
    name:"",
    color:"",
    movies:[],
    place:[],
    gender:"",
    song:"",
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf (event.target.value) >=0)  
    targetArray.splice(
      targetArray.indexOf(event.target.value),
    1
    );
    else 
    targetArray.push(event.target.value);
    
      var state = this.state;
      state[fieldName] = targetArray;
      this.setState(state);
    }
  };
  
  render() {
    
    return (
      <div className="container">
        <div className="page-header">
      
          <h2>STUDENT SURVEY</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
          <Col md={6}>
          <Form>
        <FormGroup>
        <ControlLabel> Name Please... </ControlLabel>
        <FormControl type="text" placeholder="Name here"
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Choose Your Favorite Color </ControlLabel>
        <FormControl componentClass="select"
                      placeholder="Color here"
                      value={this.state.color}
        onChange={this.onChange('color')}>
                      <option value="Red">Red</option>
                      <option value="Black">Black</option>
                      <option value="Blue">Blue</option>
                      </FormControl>
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>         
        
        <FormGroup>
        <ControlLabel>Favorite Movies</ControlLabel>
        <Checkbox value="wiplash"
        checked={this.state.movies.indexOf ('wiplash')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> Wiplash </Checkbox>
        <Checkbox value="perfume"
        checked={this.state.movies.indexOf ('perfume')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> Perfume </Checkbox>
        <Checkbox value="august rush"
        checked={this.state.movies.indexOf ('august rush')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> August Rush</Checkbox>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" value="male"
        onChange={this.onChange('gender')}>Male</Radio>
        
        <Radio name="gender" value="female"
        onChange={this.onChange('gender')}>Female</Radio>
        </FormGroup>
        
                
                
        <FormGroup>
        <ControlLabel> Address:</ControlLabel>
        <FormControl type="text" placeholder="Address here"
        value={this.state.address}
        onChange={this.onChange('address')}
        />
        <HelpBlock>Use to find you</HelpBlock>
        </FormGroup>
        
        
        
        <FormGroup>
        <ControlLabel>Favorite Places</ControlLabel>
        <Checkbox value="albur"
        checked={this.state.place.indexOf ('albur')>=0 ? true:false}
                  onChange={this.checkboxChange('place')}> Albur </Checkbox>
        <Checkbox value="sagbayan"
        checked={this.state.place.indexOf ('sagbayan')>=0 ? true:false}
                  onChange={this.checkboxChange('place')}> Sagbayan </Checkbox>
        <Checkbox value="carmen"
        checked={this.state.place.indexOf ('carmen')>=0 ? true:false}
                  onChange={this.checkboxChange('place')}> Carmen</Checkbox>
         <Checkbox value="loay"
        checked={this.state.place.indexOf ('loay')>=0 ? true:false}
                  onChange={this.checkboxChange('place')}> Loay</Checkbox>
        </FormGroup>
        
        
        
        <FormGroup>
        <ControlLabel>Type of Song:</ControlLabel>
        <Radio name="song" value="rock"
        onChange={this.onChange('song')}>Rock</Radio>
        
        <Radio name="song" value="ballad"
        onChange={this.onChange('song')}>Ballad</Radio>
        
        <Radio name="song" value="pop"
        onChange={this.onChange('song')}>POP</Radio>
        </FormGroup>
        
         
         
          To get started, edit <code>src/App.js</code> and save to reload.
        
 
          <ButtonGroup>
           <Button bsStyle="info">
           <span className ="glyphicon glyphicon-star"></span>
          InfoButton</Button>
          <Button bsStyle="primary">
           <span className ="glyphicon glyphicon-user"></span>
          InfoButton</Button>
          <Button bsStyle="warning">
          <span className ="glyphicon glyphicon-flag"></span>
          InfoButton</Button>
          <Button bsStyle="danger">
          <span className ="glyphicon glyphicon-barcode"></span>
          InfoButton</Button>
          </ButtonGroup>
             
          
          </Form>
          </Col>
          
          
          <Col md={6}> 
           <strong>Name is {this.state.name}</strong><br/><br/>
           <strong>Color is {this.state.color}</strong><br/><br/>
           <strong>Movies: {
             this.state.movies.map((item,i)=>{
               return <div>
               <span className="label label-danger">{item}</span>
               </div>
             })
            
          }</strong><br/><br/>
          
           <strong>Gender {this.state.gender}</strong><br/><br/>
           
            <strong>Address:{this.state.address}</strong><br/><br/>
            
            <strong>Favorite Places: {
             this.state.place.map((item,i)=>{
               return <div>
               <span className="label label-success">{item}</span>
               </div>
             })
            
          }</strong><br/><br/>
           
           <strong>Song: {this.state.song}</strong><br/><br/>
          </Col>
        </Row>
        </Grid>
        
        
        </p>
      </div>
    );
  }
}

export default App;
