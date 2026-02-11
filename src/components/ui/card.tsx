export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-3">{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="text-text-secondary text-sm">{children}</div>
}
