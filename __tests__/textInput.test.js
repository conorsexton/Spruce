import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../components/Input';

configure({ adapter: new Adapter() });

const onChangeMock = jest.fn();

describe('Text input', () => {
  let input;
  beforeAll(() => {
    input = shallow(<Input cols={70} rows={20} onChange={onChangeMock}/>)
  });

  it('Matches text input snapshot on initial render', () => {
    expect(input).toMatchSnapshot();
  });

  it('Renders a textarea element', () => {
    expect(input.type()).toBe('textarea');
  })

  it('Calls change handler on user input', () => {
    input.simulate('change');
    expect(onChangeMock).toHaveBeenCalled();
  })
});