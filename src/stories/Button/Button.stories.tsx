// Import the Button component from the Button.tsx file
import { Button } from './Button.tsx';

// Export default configuration for the Button story
export default {
  // Title of the story in Storybook
  title: 'Example/Button',
  // Component to be used in the story
  component: Button,
  // Tags for Storybook documentation
  tags: ['autodocs'],
  // Argument types for controls in Storybook
  argTypes: {
    // Control for the label property
    label: { control: 'text' },
    // Control for the primary property
    primary: { control: 'boolean' },
    // Control for the disabled property
    disabled: { control: 'boolean' },
  },
};

// Default button story configuration
export const Default = {
  // Arguments for the default button
  args: {
    label: 'Button',
  },
};

// Primary button story configuration
export const Primary = {
  // Arguments for the primary button
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

// Disabled button story configuration
export const Disabled = {
  // Arguments for the disabled button
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

// Small button story configuration
export const Small = {
  // Arguments for the small button
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

// Large button story configuration
export const Large = {
  // Arguments for the large button
  args: {
    size: 'large',
    label: 'Large Button',
  },
}; 