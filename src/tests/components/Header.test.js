import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header';

// let startLogout, history;

// beforeEach(() => {
//     startLogout = jest.fn();
//     history = {push: jest.fn()};
// });

test('should render header', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {    
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
