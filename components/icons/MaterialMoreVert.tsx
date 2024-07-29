import { MouseEventHandler } from "react"

export interface IconProps {
    size?: number
    onClick?: MouseEventHandler<SVGSVGElement>
}

export function MaterialMoreVert({ size, onClick }: IconProps) {
    return <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} width={size ?? "32"} height={size ?? "32"} viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q-.825 0-1.412-.587T10 18t.588-1.412T12 16t1.413.588T14 18t-.587 1.413T12 20m0-6q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m0-6q-.825 0-1.412-.587T10 6t.588-1.412T12 4t1.413.588T14 6t-.587 1.413T12 8" /></svg>
}