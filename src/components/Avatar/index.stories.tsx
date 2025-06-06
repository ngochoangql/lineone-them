import type {Meta, StoryObj} from "@storybook/react-vite";
import {Avatar} from "./index.tsx";


const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'], // Cho phép tự generate docs nếu dùng storybook/docs
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: "lg",
        // shape: "square-circle"
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
        children: "AB",
        variant: 'primary',
        shape: 'round'
    },
};
