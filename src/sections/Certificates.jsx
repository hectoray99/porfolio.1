<<<<<<< HEAD
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

=======
// src/sections/certificates.jsx
import { useState, useMemo } from "react";
import Section from "../components/Section";
import { certificates } from "../data/certificates";

// Helper: convierte un link de Drive "/view" a "/preview"
function toDrivePreview(url) {
    if (!url) return null;
    const m1 = url.match(/https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view/);
    if (m1) return `https://drive.google.com/file/d/${m1[1]}/preview`;
    const m2 = url.match(/[?&]id=([^&]+)/);
    if (m2) return `https://drive.google.com/file/d/${m2[1]}/preview`;
    return null;
}

function PdfPreview({ url }) {
    const drivePreview = useMemo(() => toDrivePreview(url), [url]);

    // Si es de Drive, usamos /preview (lo más confiable)
    if (drivePreview) {
        return (
            <div className="w-full">
                <iframe
                    src={drivePreview}
                    title="Vista previa del certificado"
                    className="w-full h-[70vh] rounded-xl border"
                    loading="lazy"
                    allow="autoplay"
                    referrerPolicy="no-referrer"
                />
            </div>
        );
    }

    // Si NO es Drive (otro host), probamos Google Docs Viewer como fallback
    const gview = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(url)}`;
>>>>>>> 01e8378 (cambios)
    return (
        <div className="w-full">
            <iframe
                src={gview}
                title="Vista previa del certificado"
                className="w-full h-[70vh] rounded-xl border"
                loading="lazy"
                referrerPolicy="no-referrer"
<<<<<<< HEAD
                onError={(e) => {
                    // reemplazamos el iframe por el embed directo si hubo error de carga
                    const mount = e.currentTarget.parentElement;
                    if (mount) {
                        mount.innerHTML = "";
                        const container = document.createElement("div");
                        mount.appendChild(container);
                        // Renderizamos embed directo
                        const el = document.createElement("object");
                        el.setAttribute("data", url);
                        el.setAttribute("type", "application/pdf");
                        el.setAttribute("class", "w-full h-[70vh] rounded-xl border");
                        mount.appendChild(el);
                    }
                }}
            />
            {/* Fallback visible si nada carga */}
            <noscript>
                <a href={url} target="_blank" rel="noreferrer">Abrir certificado</a>
            </noscript>
=======
            />
>>>>>>> 01e8378 (cambios)
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
<<<<<<< HEAD
                    <div
                        key={c.id}
                        className="rounded-2xl border p-5 bg-white/70 dark:bg-white/5 backdrop-blur hover:shadow-md transition"
                    >
=======
                    <div key={c.id} className="card hover:shadow-md transition">
>>>>>>> 01e8378 (cambios)
                        <div className="mb-2">
                            <h3 className="font-semibold leading-tight">{c.title}</h3>
                            <p className="text-sm opacity-80">
                                {c.issuer || "—"} {c.year ? `· ${c.year}` : ""} {c.hours ? `· ${c.hours}` : ""}
                            </p>
                        </div>

                        <div className="mt-3">
<<<<<<< HEAD
                            <button
                                onClick={() => setOpenId(c.id)}
                                className="text-sm rounded-lg px-3 py-2 border hover:bg-gray-50 dark:hover:bg-white/10"
                            >
=======
                            <button onClick={() => setOpenId(c.id)} className="btn btn-secondary">
>>>>>>> 01e8378 (cambios)
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
<<<<<<< HEAD
                            <h4 className="font-semibold text-sm sm:text-base">{openItem.title}</h4>
                            <button
                                onClick={() => setOpenId(null)}
                                className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 dark:hover:bg-white/10"
=======
                            <h4 className="font-semibold text-sm sm:text-base text-slate-900">{openItem.title}</h4>
                            <button
                                onClick={() => setOpenId(null)}
                                className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 text-slate-900"
>>>>>>> 01e8378 (cambios)
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
<<<<<<< HEAD
                                    className="text-sm underline opacity-80 hover:opacity-100"
                                >
                                    Abrir en nueva pestaña
=======
                                    className="text-sm underline opacity-80 hover:opacity-100 text-slate-900"
                                >
                                    Abrir en Google Drive
>>>>>>> 01e8378 (cambios)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Section>
    );
}
