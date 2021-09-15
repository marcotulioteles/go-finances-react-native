import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import theme from '../../global/Styles/theme';
import { AuthProvider } from '../../hooks/auth';

import { Register } from '.';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <NavigationContainer>
        { children }
      </NavigationContainer>
    </AuthProvider>
  </ThemeProvider>
)

describe('Register Screen', () => {
  it('should be open category modal when user click on the category button', async () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );
    
    const categoryModal = getByTestId('modal-category');
    const buttonCategory = getByTestId('button-category');
    fireEvent.press(buttonCategory);

    await waitFor(() => {
      expect(categoryModal.props.visible).toBeTruthy();
    })
  });
});