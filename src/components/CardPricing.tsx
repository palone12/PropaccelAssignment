import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CardPricingProps {
    plan: string;
    details: string;
    access: string;
    buttonText: string;
    className?: string;
    textColor?: string;
}

const CardPricing: FC<CardPricingProps> = ({
    plan,
    details,
    access,
    buttonText,
    className,
    textColor,
}) => {
    return (
        <div
            className={twMerge(
                "rounded-lg bg-white w-[304px] px-[35px] py-[27px] outline outline-1 outline-[#7A3199]",
                className
            )}
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 ">
                    <h2
                        className={twMerge(
                            "text-black text-base font-bold font-inter leading-5",
                            textColor
                        )}
                    >
                        {plan}
                    </h2>
                    <p
                        className={twMerge(
                            "text-black text-xs font-normal font-poppins leading-normal",
                            textColor
                        )}
                    >
                        {details}
                    </p>
                </div>
                <div
                    className={twMerge(
                        "inline-flex items-center gap-3 text-[#7A3199]",
                        textColor
                    )}
                >
                    <h2 className="text-3xl font-bold leading-normal">$54</h2>
                    <span className="text-xs font-normal font-poppins leading-normal">
                        / month
                    </span>
                </div>
                <div>
                    <ul className="pl-3 flex flex-col gap-2">
                        <li
                            className={twMerge(
                                "text-black list-disc text-xs font-bold font-inter",
                                textColor
                            )}
                        >
                            {access}
                        </li>
                        <li
                            className={twMerge(
                                "text-black list-disc text-xs font-bold font-inter",
                                textColor
                            )}
                        >
                            {access}
                        </li>
                        <li
                            className={twMerge(
                                "text-black list-disc text-xs font-bold font-inter",
                                textColor
                            )}
                        >
                            {access}
                        </li>
                    </ul>
                </div>
                <div>
                    <button
                        className={twMerge(
                            "box-border w-[149px] bg-white h-[44px] text-xs text-[#7A3199] border-[1px] border-[#7A3199] rounded-md"
                        )}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardPricing;
