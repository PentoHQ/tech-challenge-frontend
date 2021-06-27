import { Meta, Story } from '@storybook/react/types-6-0';
import Text, { TextProps } from './Text';
import { colors } from './textColorTypes';

export default {
  title: 'Example/Text',
  component: Text,
  parameters: {
    options: { showPanel: false },
  },
} as Meta;

const Template: Story<TextProps> = (args) => {
  return <Text {...args}></Text>;
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  children:
    ' The Text Component provides an easy way to display text with the appropriate stylings.  This is the default settings.',
};

export const Strikethrough = Template.bind({});
Strikethrough.args = {
  children: 'This is an example of text with a strikethrough effect.',
  strikethrough: true,
};

export const Inline = () => {
  return (
    <>
      <Text inline variant="text14Medium">
        By default the text blocks behave like a block component.
      </Text>
      {' ' /*this is intentional!*/}
      <Text inline>
        However, you can set inline to true and they will behave like normal
        inlined text like this one
      </Text>
    </>
  );
};

export const HeadingText = () => <Text variant="h3">Heading Text</Text>;

export const AllColors = () =>
  colors.map((color) => (
    <Text key={color} color={color}>
      {color} text!
    </Text>
  ));

export const PreservesLines = () => {
  return (
    <Text preservesLines>
      {`Text with "preservesLines" prop
      will appear
      
      with new lines
      intact.`}
    </Text>
  );
};
