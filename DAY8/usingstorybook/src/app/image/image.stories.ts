import { ImageComponent } from '../image/image.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<ImageComponent> = {
  title: 'OnlineShopping/Image',
  component: ImageComponent,
  tags: ['autodocs'],
  //   decorators:[
  //     moduleMetadata(
  //         {
  //             providers:[]
  //         }
  //     )
  //   ]
};

export default meta;
type Story = StoryObj<ImageComponent>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    srcurl:
      'https://miro.medium.com/v2/resize:fit:1200/1*7MsITds0BJEFPS92y8ZWOw.png',
    altText: "Create mini design Systems with Story Book !",
    captionText:
      'Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation',
  },
};
