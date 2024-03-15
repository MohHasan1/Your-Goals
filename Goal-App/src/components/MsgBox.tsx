import { type ReactNode, type FC } from "react";

interface MsgBoxProps {
    mode: 'hint' | 'warning';
    severity?: 'low' | 'medium' | 'high';
    children?: ReactNode;
}

const MsgBox: FC<MsgBoxProps> = ({mode, severity, children}) => {

    let  whichSeverity:'orange-400' | 'red-500' |  'yellow-400';

    switch(severity) {
        case 'low':
            whichSeverity = 'yellow-400';
            break;
        case 'medium':
            whichSeverity = 'orange-400';
            break;
        case 'high':
            whichSeverity = 'red-500';
            break;
        default:
            whichSeverity = 'yellow-400';
            break;
    }

    if (mode ==='hint'){
        return (
            <aside className="p-3 mb-10 text-center border-2 rounded-sm border-green-400 text-green-500">
                <h2 className="my-2 font-bold text-2xl">Hint</h2>
                <p className="mb-2">{children}</p>
            </aside>
        )
    }

// Else mode === warning
    return (
        <aside className={`p-3 mb-10 text-center rounded-sm border-2 border-${whichSeverity} text-${whichSeverity}`}>
            <h2 className="my-2 font-bold text-2xl">Warning</h2>
            <p className="mb-2">{children}</p>
        </aside>
    )
}

export default MsgBox;
