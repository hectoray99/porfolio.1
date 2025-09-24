import { useMemo, useState } from "react";
import Section from "../components/Section";
import { certificates } from "../data/certificates";

function PdfPreview({ url }) {
    // Estrategia 1: Google Docs Viewer
    const gview = useMemo(
        () => `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`,
        [url]
    );

    // Si gview falla (bloqueo/blank), mostramos intento directo.
    const DirectEmbed = () => (
        <object
            data={url}
            type="application/pdf"
            className="w-full h-[70vh] rounded-xl border"
        >
            <iframe
                src={url}
                title="Certificado"
                className="w-full h-[70vh] rounded-xl border"
                referrerPolicy="no-referrer"
            />
        </object>
    );

    return (
        <div className="w-full">
            <iframe
                src={gview}
                title="Vista previa del certificado"
                className="w-full h-[70vh] rounded-xl border"
                loading="lazy"
                referrerPolicy="no-referrer"
            />
        </div>
    );
}

export default function Certificates() {
    const [openId, setOpenId] = useState(null);
    const openItem = certificates.find((c) => c.id === openId);

    return (
        <Section id="certificates" title="Certificados">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((c) => (
                    <div key={c.id} className="card hover:shadow-md transition">
                        <div className="mb-2">
                            <h3 className="font-semibold leading-tight">{c.title}</h3>
                            <p className="text-sm opacity-80">
                                {c.issuer || "—"} {c.year ? `· ${c.year}` : ""} {c.hours ? `· ${c.hours}` : ""}
                            </p>
                        </div>

                        <div className="mt-3">
                            <button onClick={() => setOpenId(c.id)} className="btn btn-secondary">
                                Ver
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {openItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
                    onClick={() => setOpenId(null)}
                >
                    <div
                        className="bg-white dark:bg-neutral-900 rounded-2xl max-w-5xl w-full shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-3 border-b">
                            <h4 className="font-semibold text-sm sm:text-base text-slate-900">{openItem.title}</h4>
                            <button
                                onClick={() => setOpenId(null)}
                                className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 text-slate-900"
                            >
                                Cerrar
                            </button>
                        </div>
                        <div className="p-3">
                            <PdfPreview url={openItem.pdfUrl} />
                            <div className="mt-2 text-center">
                                <a
                                    href={openItem.pdfUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm underline opacity-80 hover:opacity-100 text-slate-900"
                                >
                                    Abrir en Google Drive
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
