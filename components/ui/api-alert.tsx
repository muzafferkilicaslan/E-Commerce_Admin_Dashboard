"use client"

import { Copy, Server } from "lucide-react";
import toast from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface ApiAlertProps{
    title:string,
    description:string,
    variant:"public"|"admin";
};

const textMap:Record<ApiAlertProps["variant"],string> = {
    public: "Public",
    admin: "Admin"
};

const variantMap:Record<ApiAlertProps["variant"],BadgeProps["variant"]> = {
    public: "secondary",
    admin: "destructive"
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
    title,
    description,
    variant="public"
}) =>{

    const onCopy=()=>{
        navigator.clipboard.writeText(description);
        toast.success("API Route copiend to the clipboard.");
    }

    return(
        <Alert>
            <Server className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
                {title}
                <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
            </AlertTitle>
            <AlertDescription className="mt-4 flex items-center justify-between">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.3rem] font-mono text-sm font-semibold">
                    {description}
                </code>
                <Button>
                    <Copy className="h-4 w-4" onClick={onCopy} />
                </Button>
            </AlertDescription>
        </Alert>
    )
};