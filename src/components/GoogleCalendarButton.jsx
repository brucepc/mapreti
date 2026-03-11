import { useEffect, useRef, useState } from 'react';

const GoogleCalendarButton = () => {
    const containerRef = useRef(null);
    const googleButtonTarget = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [consent, setConsent] = useState(localStorage.getItem('cookie-consent'));

    useEffect(() => {
        const handleConsentChange = (event) => {
            setConsent(event.detail);
        };

        window.addEventListener('cookieConsentChange', handleConsentChange);
        return () => window.removeEventListener('cookieConsentChange', handleConsentChange);
    }, []);

    useEffect(() => {
        if (consent !== 'accepted') return;

        const loadScript = () => {
            // Add CSS
            if (!document.querySelector('link[href="https://calendar.google.com/calendar/scheduling-button-script.css"]')) {
                const link = document.createElement('link');
                link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }

            // Add Script
            if (!document.querySelector('script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]')) {
                const script = document.createElement('script');
                script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
                script.async = true;
                script.onload = initializeCalendar;
                document.body.appendChild(script);
            } else {
                initializeCalendar();
            }
        };

        const initializeCalendar = () => {
            if (!googleButtonTarget.current) return;

            if (window.calendar && window.calendar.schedulingButton) {
                if (isLoaded) return;

                window.calendar.schedulingButton.load({
                    url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2s8QWsCBV94puRtPgRRWeza7hflt5ZPLW-nEZIyp8OVM4lVSa94s3NjmMiFTn-k27VLONzQ0u7?gv=true',
                    color: '#a30000',
                    label: 'Agendar um compromisso',
                    target: googleButtonTarget.current,
                });
            }
        };

        loadScript();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeName === 'BUTTON' || (node.classList && node.classList.contains('qxCTlb'))) {
                            const button = node;
                            button.className = "w-full flex cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#a30000]/40 hover:scale-105 hover:brightness-110 border-none outline-none appearance-none font-display";
                            button.style.backgroundColor = '#a30000';
                            button.style.color = 'white';
                            button.style.fontFamily = 'Inter, sans-serif';
                            button.innerHTML = `
                                <span class="material-symbols-outlined text-white text-[24px]">calendar_month</span>
                                <span>Agendar Horário</span>
                             `;
                            setIsLoaded(true);
                            observer.disconnect();
                        }
                    });
                }
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, { childList: true });
        }

        return () => observer.disconnect();
    }, [consent, isLoaded]);

    useEffect(() => {
        if (consent !== 'accepted') return;

        const bodyObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) {
                        const iframe = node.querySelector && node.querySelector('iframe[src*="calendar.google.com"]');
                        if (iframe) {
                            node.classList.add('gcal-custom-overlay');
                            Array.from(node.children).forEach(child => {
                                if (child.contains(iframe) || child === iframe) {
                                    child.classList.add('gcal-custom-frame-container');
                                } else {
                                    child.classList.add('gcal-custom-close');
                                }
                            });
                        }
                    }
                });
            });
        });

        bodyObserver.observe(document.body, { childList: true });
        return () => bodyObserver.disconnect();
    }, [consent]);
    return (
        <div ref={containerRef} className="w-full relative flex flex-col">
            {consent === 'accepted' ? (
                !isLoaded && (
                    <div className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 pointer-events-none transition-opacity duration-300">
                        <span className="material-symbols-outlined animate-spin text-white text-[24px]">progress_activity</span>
                        <span>Carregando...</span>
                    </div>
                )
            ) : (
                <button
                    onClick={() => window.dispatchEvent(new CustomEvent('showCookieOverlay'))}
                    className="w-full flex cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#a30000]/40 hover:scale-105 hover:brightness-110 border-none outline-none appearance-none font-display"
                >
                    <span className="material-symbols-outlined text-white text-[24px]">calendar_month</span>
                    <span>Agendar Horário</span>
                </button>
            )}

            <div ref={googleButtonTarget} style={{ display: isLoaded ? 'block' : 'none' }} />
        </div>
    );
};

export default GoogleCalendarButton;
