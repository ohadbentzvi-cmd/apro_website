import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'solid' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'solid',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    disabled,
    href,
    ...props
}) => {

    const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 group overflow-hidden cursor-pointer gap-2";

    const variants = {
        primary: "bg-gradient-to-br from-brand-lime to-[#8bc34a] text-white shadow-lg shadow-brand-lime/20 hover:shadow-brand-lime/40 hover:scale-[1.02]",
        solid: "bg-[#A4D65E] hover:bg-[#b0e065] text-white shadow-[0_0_30px_-5px_rgba(164,214,94,0.4)] hover:shadow-[0_0_50px_-10px_rgba(164,214,94,0.6)] hover:-translate-y-1",
        outline: "border-2 border-brand-lime text-brand-lime hover:bg-brand-lime/10",
        ghost: "text-gray-600 hover:text-brand-lime hover:bg-gray-50",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm rounded-full",
        md: "px-6 py-3 text-base rounded-full",
        lg: "px-8 py-4 text-lg rounded-[1.25rem]",
        xl: "px-12 py-5 text-xl rounded-[1.25rem]", // Matches Hero
    };

    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    const content = (
        <>
            {/* Glossy overlay for Primary variant */}
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}

            {isLoading && <Loader2 className="w-5 h-5 animate-spin relative z-10" />}

            {!isLoading && leftIcon && <span className="relative z-10">{leftIcon}</span>}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>

            {!isLoading && rightIcon && <span className="relative z-10">{rightIcon}</span>}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {content}
        </button>
    );
};

export default Button;
