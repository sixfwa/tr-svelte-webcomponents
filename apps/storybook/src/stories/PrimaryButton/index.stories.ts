import type { Meta, StoryObj } from "@storybook/web-components";
import { Button, ButtonProps } from ".";

const meta = {
  title: "Components/Buttons",
  render: (args: ButtonProps) => Button(args),
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    size: "medium",
  },
};
