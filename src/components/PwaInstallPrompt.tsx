import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Share, PlusSquare, Sparkles } from 'lucide-react';

export const PwaInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already running in standalone mode (PWA active)
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as any).standalone ||
      document.referrer.includes('android-app://');

    setIsStandalone(isInStandaloneMode);
    if (isInStandaloneMode) return;

    // Check if user previously closed prompt this session
    const isDismissed = sessionStorage.getItem('pwa_prompt_dismissed');
    if (isDismissed) return;

    // Detect iOS Safari
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    if (isIosDevice) {
      // Show iOS prompt after short delay
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }

    // Android / Chrome beforeinstallprompt event handler
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA installation accepted by user');
    }
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
  };

  if (isStandalone || !isVisible) return null;

  return (
    <div className="pwa-install-banner glass-panel">
      <div className="pwa-banner-content">
        <div className="pwa-banner-icon">
          <Smartphone size={28} color="#00D2FF" />
        </div>

        <div className="pwa-banner-text">
          <h4>📱 ¡Instala Pokelinker PRO en tu Celular!</h4>
          <p>
            {isIos ? (
              <>
                Para instalar como App nativa en iOS, toca <strong>Compartir <Share size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></strong> y selecciona <strong>"Agregar a Inicio <PlusSquare size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />"</strong>.
              </>
            ) : (
              'Accede al instante desde tu pantalla de inicio, sin barras del navegador y con tu sesión de entrenador siempre activa.'
            )}
          </p>
        </div>

        <div className="pwa-banner-actions">
          {!isIos && deferredPrompt && (
            <button className="btn-primary btn-pwa-install" onClick={handleInstallClick}>
              <Download size={16} />
              <span>Instalar App</span>
            </button>
          )}
          <button className="btn-icon-close" onClick={handleDismiss} title="Cerrar aviso">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
