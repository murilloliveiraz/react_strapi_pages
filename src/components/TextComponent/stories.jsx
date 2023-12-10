import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quisquam maiores magnam quas? Maiores iure quae excepturi dolorum aspernatur dignissimos architecto ab adipisci quo? Saepe blanditiis doloribus dolorum tempora eos!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
