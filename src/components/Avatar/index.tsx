import {type FC, useMemo} from "react";
import {type AvatarProps, AvatarVariant} from "./index.types";
import {cn} from "../../utils/cn";


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

    return (
        <div className={cn("avatar", AvatarVariant({size}))}>
            <div className={cn("is-initial uppercase text-base ", AvatarVariant({
                shape,
                ...(styles === 'soft' || bordered ? {
                    variantSoft:  variant ?? 'primary'
                } : {
                    variantInitial: variant ?? 'default'
                }),
                ...(bordered ? {borderColor: variant ?? 'primary'} : {}),
                fontSize: size
            }), className)} {...props}>
                {children}
            </div>
            {AvatarDot}
            <div className={"text"}></div>
        </div>
    )
}
