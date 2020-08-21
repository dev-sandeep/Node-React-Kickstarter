import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardNews from './Components/CardNews';
import ImageComponent from './Components/ImageComponent';
import {shallow, mount} from 'enzyme';
// import {expect} from 'chai'
//setting up the adapter
import './setupTests'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('testing component CardNews', ()=>{
  it('render CardNews component without crashing', ()=>{
    shallow(<CardNews />);
  })

  it('checking CardNews component', ()=>{
    const wrapper = shallow(<CardNews />);
    expect(wrapper.text()).toEqual('<Card />')
  })

  const wrapper = mount(<CardNews 
    title="Test Title"
    source="BBC" 
    url="bbc.com"
    src="random.jpg" />);
  it('checking CardNews title', ()=>{
    expect(wrapper.find('CardTitle').text()).toEqual('Test Title');
  })

  it('checking CardNews Image', ()=>{
    expect(wrapper.find('img').prop('src')).toEqual('loadingImg.gif');
    setTimeout(()=>{
      expect(wrapper.find('img').prop('src')).toEqual('random.jpg');
    },10)
  })

  it('checking CardNews Source', ()=>{
    expect(wrapper.find("CardText").text()).toEqual('BBC | a few seconds ago');
  })

  it('checking CardNews url', ()=>{
    expect(wrapper.find('a').prop('href')).toEqual('bbc.com');
  })
});


describe('Testing component ImageContainer', ()=>{
  const wrapper = mount(<ImageComponent 
    preload={'loading.gif'} src={'main.jpg'} />);

    it('checking ImageContainer Image', ()=>{
      expect(wrapper.find('img').prop('src')).toEqual('loading.gif');
      setTimeout(()=>{
        expect(wrapper.find('img').prop('src')).toEqual('bbc.jpg');
      },10)
    })
})