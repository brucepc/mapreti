import { useEffect, useRef, useState } from 'react';

const GoogleCalendarButton = () => {
    const containerRef = useRef(null);
    const googleButtonTarget = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
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
                // Prevent multiple inits if already loaded
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

        // Observer to watch for the button injection in the CONTAINER (sibling of target)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        // Google's button is often a <button> or a div with class 'qxCTlb'
                        if (node.nodeName === 'BUTTON' || (node.classList && node.classList.contains('qxCTlb'))) {
                            console.log("Google button detected, applying styles...");
                            const button = node;

                            // Apply Tailwind classes to match placeholder EXACTLY
                            button.className = "w-full flex cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#a30000]/40 hover:scale-105 hover:brightness-110 border-none outline-none appearance-none font-display";

                            // Override inline styles forced by Google script
                            button.style.backgroundColor = '#a30000';
                            button.style.color = 'white';
                            button.style.fontFamily = 'Inter, sans-serif';
                            // Remove specific google class if it causes issues, but usually fine to leave

                            // Replace Content with Icon + Text
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
    });

    // Observer to watch for the MODAL injection in the BODY (robustness fix)
    useEffect(() => {
        const bodyObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    // Check if node is an Element (type 1)
                    if (node.nodeType === 1) {
                        // Check if this node looks like the Google Calendar Overlay
                        // It should contain an iframe with the google calendar URL
                        const iframe = node.querySelector && node.querySelector('iframe[src*="calendar.google.com"]');

                        if (iframe) {
                            // This node is the Overlay
                            node.classList.add('gcal-custom-overlay');

                            // Now find the children: content container and close button
                            Array.from(node.children).forEach(child => {
                                // If this child contains the iframe, it's the frame container
                                if (child.contains(iframe) || child === iframe) {
                                    child.classList.add('gcal-custom-frame-container');
                                } else {
                                    // Otherwise, it's likely the close button
                                    // We can double check if it's small/positioned, but typically there's only the frame and the close button.
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
    }, []);

    return (
        <div ref={containerRef} className="w-full relative flex flex-col">
            {/* Placeholder - Visible only when NOT loaded */}
            {!isLoaded && (
                <div className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-[#a30000] text-white gap-3 text-lg font-bold shadow-lg shadow-[#a30000]/30 pointer-events-none transition-opacity duration-300">
                    <span className="material-symbols-outlined text-white text-[24px]">calendar_month</span>
                    <span>Agendar Horário</span>
                </div>
            )}

            {/* Target Div - Google Button is injected AFTER this */}
            <div ref={googleButtonTarget} style={{ display: 'none' }} />
        </div>
    );
};

export default GoogleCalendarButton;
