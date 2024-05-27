import { type ReactNode, type FC } from "react";

interface MsgBoxProps {
    mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high';
    children?: ReactNode;
}

const MsgBox: FC<MsgBoxProps> = ({ mode, severity, children }) => {

    let severityText: 'text-orange-400' | 'text-red-500' | 'text-yellow-400';
    let severityBoarder: 'border-orange-400' | 'border-red-500' | 'border-yellow-400';


    switch (severity) {
        case 'low':
            severityText = 'text-yellow-400';
            severityBoarder = 'border-yellow-400';
            break;
        case 'medium':
            severityText = 'text-orange-400';
            severityBoarder = 'border-orange-400';
            break;
        case 'high':
            severityText = 'text-red-500';
            severityBoarder = 'border-red-500';
            break;
        default:
            severityText = 'text-yellow-400';
            severityBoarder = 'border-yellow-400';
            break;
    }

    if (mode === 'hint') {
        return (
            <aside className="p-3 mb-10 text-center border-2 rounded-sm border-green-400 text-green-500">
                <h2 className="my-2 font-bold text-2xl">Hello!</h2>
                <p className="mb-2">{children}</p>
            </aside>
        )
    }

    // Else mode === warning
    return (
        <aside className={`p-3 mb-10 text-center rounded-sm border-2  ${severityBoarder} ${severityText}`}>
            <h2 className="my-2 font-bold text-2xl">WOoOwo!</h2>
            <p className="mb-2">{children}</p>
        </aside>
    )
}

export default MsgBox;
