import Navbar from './index.svelte';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import * as LoginFormModalStories from '../LoginFormModal/LoginFormModal.stories'

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Default = {
  parameters: {
    viewport: {
      defaultViewport: 'bsXl',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(await canvas.getByTitle('HathiTrust logo')).toBeInTheDocument()
    expect(await canvas.getByRole('navigation')) 
    
    const mainMenu = await canvas.getByRole('navigation'); 
    // await userEvent.click(mobileMenuButton);
  },
};
export const DesktopDropdownMenuSelected = {
  parameters: { ...Default.parameters },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const mainMenu = await canvas.getByText(/member libraries/i); 
    await userEvent.click(mainMenu);
  }, 
}
export const DesktopLoginModalOpen = {
  parameters: { ...Default.parameters },
  args: {
    loggedIn: false,

  },
};
export const DesktopLoggedIn = {
  parameters: { ...Default.parameters },
  args: {
    loggedIn: false,
    isOpen: true,
  },
};
export const DesktopLoggedInWithNotifications = {
  parameters: { ...Default.parameters },
  args: {
    loggedIn: true,
    hasNotification: true,
  },
};
export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'bsXs',
    },
  },
};
export const MobileOpenMenu = {
  parameters: { ...Mobile.parameters },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mobileMenuButton = await canvas.getByRole('button', {name: 'Toggle navigation'}); 
    await userEvent.click(mobileMenuButton);
  },
};
export const MobileDropdownMenuSelected = {
 parameters: { ...Mobile.parameters },
 play: async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const mobileMenuButton = await canvas.getByRole('button', {name: 'Toggle navigation'}); 
  const mainMenu = await canvas.getByText(/member libraries/i); 

  await userEvent.click(mobileMenuButton); 
  await userEvent.click(mainMenu); 
 }
};
export const MobileLoggedIn = {
  parameters: { ...Mobile.parameters },
  args: {
    loggedIn: true,
  },
};
export const MobileLoggedInWithNotifications = {
  parameters: { ...Mobile.parameters },
  args: {
    loggedIn: true,
    hasNotification: true,
  },
};
export const MobileLoggedInMyAccountDropdown = {
  parameters: { ...Mobile.parameters },
  args: { ...MobileLoggedInWithNotifications.args },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  
    const mobileMenuButton = await canvas.getByRole('button', {name: 'Toggle navigation'}); 
    const myAccount = await canvas.getByText(/my account/i); 
  
    await userEvent.click(mobileMenuButton); 
    await userEvent.click(myAccount); 
   }

}
