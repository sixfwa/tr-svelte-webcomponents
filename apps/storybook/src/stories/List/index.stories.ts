import type { Meta, StoryObj } from "@storybook/web-components";
import { List as L } from ".";

const meta = {
  title: "Components/List",
  render: () => L(),
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const List: Story = {};
