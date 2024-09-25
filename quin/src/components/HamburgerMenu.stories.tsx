import { Meta, StoryObj } from '@storybook/react';
import HamburgerMenu from './HamburgerMenu';

const meta: Meta<typeof HamburgerMenu> = {
    title: 'Components/HamburgerMenu',
    component: HamburgerMenu,
    argTypes: {
        // Define the props and their types here
        isOpen: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
    args: {
        isOpen: false,
    },
};

export const Open: Story = {
    args: {
        isOpen: true,
    },
};