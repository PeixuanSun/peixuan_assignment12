import { Label } from './Label';

export default {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],

  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args:{
    text:'Label Text',
    htmlFor:'input-id',
    required:false
  },
};

export const Required = {
  args: {
    text: 'Required Label',
    htmlFor: 'input-id',
    required: true,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled Label',
    htmlFor: 'input-id',
    disabled: true,
  },
}; 