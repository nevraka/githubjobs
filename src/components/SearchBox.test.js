import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import { Button } from 'antd';

it('should call handle changes for desc and loc', () => {
    const setHandleMock = jest.fn();

    const handleDesc = shallow(<SearchBox setDesc={setHandleMock} />);
    handleDesc
        .find('Input')
        .at(0)
        .simulate('change', { target: { value: 'test' } });
    expect(setHandleMock).toHaveBeenCalledWith('test');

    const handleLoc = shallow(<SearchBox setLoc={setHandleMock} />);
    handleLoc
        .find('Input')
        .at(1)
        .simulate('change', { target: { value: 'test' } });
    expect(setHandleMock).toHaveBeenCalledWith('test');
});

it('should call keydown for desc', () => {
    const setKeydownMock = jest.fn();

    const keyDown = shallow(<SearchBox onSearch={setKeydownMock} />);
    keyDown.find('Input').at(0).simulate('keydown', { key: 'Enter' });
    expect(setKeydownMock).toBeCalledTimes(1);
});
it('should call keydown for loc', () => {
    const keyDownMock = jest.fn();

    const keyDown = shallow(<SearchBox onSearch={keyDownMock} />);
    keyDown.find('Input').at(1).simulate('keydown', { key: 'Enter' });
    expect(keyDownMock).toBeCalledTimes(1);
});

it('should checkbox event', () => {
    const setFullTimeMock = jest.fn();

    const checkBox = shallow(<SearchBox setFullTime={setFullTimeMock} />);
    checkBox.find('Checkbox').simulate('change', { target: { checked: true } });
    expect(setFullTimeMock).toHaveBeenCalledWith(true);
});

it('test search button', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack} />);
    button.find('button').simulate('click');
    expect(mockCallBack).toBeCalledTimes(1);
});
