import { Text } from './Text.tsx';

export default {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],

  argTypes: {
    content: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export const Default = {
  args: {
    content: 'This is a text component.',
  },
};

export const Large = {
  args: {
    content: 'This is a large text component.',
    size: 'large',
  },
}; 