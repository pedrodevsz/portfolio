interface Props {
    label: string
    error?: string
    children: React.ReactNode
}

export default function FormField({ label, error, children }: Props) {

    return (
        <div className="flex flex-col gap-1">

            <label className="text-sm font-medium">
                {label}
            </label>

            {children}

            {error && (
                <span className="text-red-500 text-xs">
                    {error}
                </span>
            )}

        </div>
    )
}