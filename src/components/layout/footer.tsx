import Link from "next/link";

export function Footer({ name = "Arlet" }: { name?: string }) {
    return (
        <footer className="py-8 border-t border-border/40 px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>
                    &copy; {new Date().getFullYear()} {name}. Todos los derechos reservados.
                </p>
                <div className="flex gap-6">
                    <Link href="/politicas" className="hover:text-foreground transition-colors">
                        Reglamento
                    </Link>
                    <Link href="/aviso-privacidad" className="hover:text-foreground transition-colors">
                        Aviso de Privacidad
                    </Link>
                </div>
            </div>
        </footer>
    );
}
