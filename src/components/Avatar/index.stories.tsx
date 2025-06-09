import type {Meta, StoryObj} from "@storybook/react-vite";
import {Avatar} from "./index";



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
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
        children: "AB",
        variant: 'primary',
        shape: 'round'
    },
};


export const RoundedAvatar: Story = {
    args: {
        size: "md",
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
        shape: 'round'
    },
};

export const SquareAvatar: Story = {
    args: {
        size: "md",
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
        shape: 'square'
    },
};

export const SquircleAvatar: Story = {
    args: {
        size: "md",
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
        shape: 'square-circle'
    },
};

export const InitialAvatar: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'round',
    },
};

export const SquareInitialAvatar: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'square',
    },
};

export const SoftInitialAvatar: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'round',
        styles: 'soft'
    },
};

export const BorderedInitialAvatar: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'round',
        bordered: true,
    },
};


export const SquareSoftInitial: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'square',
        styles: 'soft'
    },
};


export const AvatarWithDots: Story = {
    args: {
        size: "md",
        children: "JD",
        shape: 'round',
        dot: true,
        dotColor: 'primary',
        src: "https://lineone.piniastudio.com/images/avatar/avatar-5.jpg",
    },
};


