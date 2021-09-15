import React from 'react';
import { render } from '@testing-library/react-native';

import { Profile } from '../../screens/Profile';

describe('Profile Screen', () => {
  it('should have a correct user name input placeholder', () => {
    const { getByPlaceholderText } = render(<Profile />);
  
    const inputName = getByPlaceholderText('Nome');
  
    expect(inputName).toBeTruthy();
  });
  
  it('should load userData', () => {
    const { getByTestId } = render(<Profile />);
  
    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');
  
    expect(inputName.props.value).toEqual('Marco Túlio');
    expect(inputSurname.props.value).toEqual('Teles');
  })
  
  it('should be rendered correctly', () => {
    const { getByTestId } = render(<Profile />);
  
    const textTitle = getByTestId('text-title');
  
    expect(textTitle.props.children).toContain('Perfil');
  })
})