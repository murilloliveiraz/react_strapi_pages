import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          cupiditate ipsum reiciendis natus culpa, recusandae ipsam at! At a
          eaque cum explicabo quo fugiat vitae totam tempore. Perferendis, illo
          magni!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
