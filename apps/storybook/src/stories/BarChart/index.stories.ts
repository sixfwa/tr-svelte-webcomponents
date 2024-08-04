import type { Meta, StoryObj } from "@storybook/web-components";
import { BarChart as BC } from ".";

const meta = {
  title: "Components/Charts",
  render: () => BC(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const BarChart: Story = {};
