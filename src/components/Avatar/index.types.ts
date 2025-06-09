import {type HTMLAttributes, type ReactNode} from "react";
import type {ClassValue} from "clsx";
import {cva, type VariantProps} from "class-variance-authority";

export const AvatarVariant = cva(
    '',
    {
        variants: {
            variantInitial: {
                default: 'bg-slate-200 text-slate-600 dark:bg-navy-500 dark:text-navy-100',
                primary: 'bg-primary text-white dark:bg-accent',
                secondary: 'bg-secondary text-white',
                info: 'bg-info text-white',
                success: 'bg-success text-white',
                warning: 'bg-warning text-white',
                error: 'bg-error text-white',
            },
            variantSoft: {
                primary: 'bg-primary/10 dark:bg-accent-light/10 text-primary dark:text-accent-light',
                secondary: 'bg-secondary/10 dark:bg-secondary-light/10 text-secondary dark:text-secondary-light',
                info: 'bg-info/10 text-info',
                success: 'bg-success/10 text-success',
                warning: 'bg-warning/10 text-warning',
                error: 'bg-error/10 text-error',
            },
            size: {
                xs: 'size-8',
                sm: 'size-10',
                md: 'size-12',
                lg: 'size-16',
                xl: 'size-20',
                '2xl': 'size-24',
            },
            fontSize: {
                xs: 'text-xs-plus',
                sm: '',
                md: 'text-base',
                lg: 'text-lg',
                xl: 'text-xl',
                '2xl': 'text-2xl',
            },
            shape: {
                square: 'rounded-lg',
                'square-circle': 'mask is-squircle',
                round: 'rounded-full',
            },
            gradient: {
                "sky-blue": "from-sky-400 to-blue-600",
                "amber-orange": "from-amber-400 to-orange-600",
                "pink-rose": "from-pink-500 to-rose-500",
                "purple-orange": "from-purple-500 to-orange-600",
                "green-fuchsia": "from-green-400 to-fuchsia-400",
            },
            dotPlace: {
                xs: 'right-0 size-2.5',
                sm: 'right-0 size-3',
                md: 'right-0 size-3.5',
                lg: 'right-0 m-0.5 size-3.5',
                xl: 'right-0 m-1 size-4',
                '2xl': 'right-0 m-1.5 size-4',
            },
            dotPlaceSquircle: {
                xs: 'right-0 -m-px size-2.5',
                sm: 'right-0 -m-0.5 size-3',
                md: 'right-0 -m-0.5 size-3.5',
                lg: 'right-0 -m-px size-3.5',
                xl: 'right-0 size-4',
                '2xl': 'right-0 size-4',
            },
            dotColor: {
                default: "bg-slate-300",
                primary: "bg-primary dark:bg-accent",
                secondary: "bg-secondary dark:bg-secondary-light",
                info: "bg-info",
                success: "bg-success",
                warning: "bg-warning",
                error: "bg-error",
            },
            borderColor: {
                primary: " border border-primary/30 dark:border-accent-light/30",
                secondary: "border border-secondary/30 dark:border-secondary-light/30",
                info: "border border-info/30",
                success: "border border-success/30",
                warning: "border border-warning/30",
                error: "border border-error/30",
            }
        },

    }
)

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarShape = 'square' | 'square-circle' | 'round';
type AvatarGradient = 'sky-blue' | 'amber-orange' | 'pink-rose' | 'purple-orange' | 'green-fuchsia';
type AvatarColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
type AvatarStyles = 'init' | 'soft';

export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, VariantProps<typeof AvatarVariant> {
    className?: ClassValue;
    size?: AvatarSize;
    shape?: AvatarShape;
    variant?: AvatarColor;
    gradient?: AvatarGradient;
    styles?: AvatarStyles;
    dotColor?: AvatarColor;

    dot?: boolean;
    bordered?: boolean;
    src?: string | null;
    children?: ReactNode;
}
