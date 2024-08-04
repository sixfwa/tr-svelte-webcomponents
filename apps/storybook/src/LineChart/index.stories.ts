import type { Meta, StoryObj } from "@storybook/web-components";
import { LineChart as LC } from ".";

const meta = {
  title: "Components/Charts",
  render: () => LC(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const LineChart: Story = {};
