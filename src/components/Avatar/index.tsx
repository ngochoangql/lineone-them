import {type FC, type HTMLAttributes, type ReactNode, useMemo} from "react";
import type {ClassValue} from "clsx";
import {cn} from "../../utils/cn.ts";
import {cva, type VariantProps} from "class-variance-authority";
import {twMerge} from "tailwind-merge";

const AvatarVariant = cva(
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
                xs: 'w-10 h-10',
                sm: 'w-12 h-12',
                md: 'w-16 h-16',
                lg: 'w-20 h-20',
                xl: 'w-24 h-24',
                '2xl': 'w-28 h-28',
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
            }
        },

    }
)

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AvatarShape = 'square' | 'square-circle' | 'round';
type AvatarGradient = 'sky-blue' | 'amber-orange' | 'pink-rose' | 'purple-orange' | 'green-fuchsia';
type AvatarColor = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
type AvatarStyles = 'init' | 'soft';

interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, VariantProps<typeof AvatarVariant> {
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

export const Avatar: FC<AvatarProps> = ({
                                            className,
                                            size,
                                            shape,
                                            variant,
                                            gradient,
                                            styles,
                                            dotColor,
                                            dot,
                                            bordered,
                                            src,
                                            children,
                                            ...props
                                        }) => {

    const AvatarDot = useMemo(() => {
        if (dot) {
            return (<div
                className={cn(
                    "absolute rounded-full border-2 border-white dark:border-navy-700",
                    AvatarVariant({
                        dotColor: dotColor ?? 'success',
                        ...(shape === 'square-circle' ? {dotPlaceSquircle: size ?? 'md'} : {dotPlace: size ?? 'md'})
                    })
                )}
            />)
        }
        return null
    }, [dot, variant, size, dotColor, shape]);

    if (bordered && src && gradient) {
        return (
            <div
                // className="flex size-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 p-0.5"
                className={cn("flex bg-gradient-to-r p-0.5", AvatarVariant({size, shape, gradient}))}
            >
                <div
                    className={cn("avatar h-full w-full bg-white p-[3px] dark:bg-navy-700", AvatarVariant({shape}))}
                >
                    <img
                        className={cn(AvatarVariant({shape}))}
                        src={src}
                        alt="avatar"
                    />
                    {AvatarDot}
                </div>
            </div>
        )
    }

    if (src) {
        return (
            <div className={cn(AvatarVariant({size}), className)} {...props}>
                <img
                    className={cn(AvatarVariant({shape}))}
                    src={src}
                    alt="avatar"
                />
                {AvatarDot}
            </div>
        )
    }
    console.log(twMerge("is-initial uppercase bg-warning/10   mask is-squircle text-base text-xs-plus  text-warning "))
    return (

        <div className={cn("avatar", AvatarVariant({size}))}>
            <div className={cn("is-initial uppercase text-base ", AvatarVariant({
                shape,
                ...(styles === 'soft' ? {
                    variantSoft: variant ?? 'primary'
                } : {
                    variantInitial: variant ?? 'default'
                }),
                fontSize: size
            }), className)} {...props}>
                {children}
            </div>
            {AvatarDot}
            <div className={"text"}></div>
        </div>
    )
}
