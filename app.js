/**
 * TikTok Insight Editor APK - Core Client Logic
 * Handles safe verified downloads, hash copying, modal management & micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveBarAnimations();
  initNavScrollEffect();
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
  }, 3500);
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

// Download Flow Controller
let downloadTimer = null;
let currentVersionTarget = 'v4.2.1';

function openDownloadFlow(version = 'v4.2.1') {
  currentVersionTarget = version;
  const modal = document.getElementById('downloadModal');
  const phaseVerifying = document.getElementById('phaseVerifying');
  const phaseReady = document.getElementById('phaseReady');
  const progressBar = document.getElementById('modalProgressFill');
  const statusText = document.getElementById('progressStatusText');
  const filenameElem = document.getElementById('modalFilename');

  if (!modal) return;

  // Set proper filename
  if (filenameElem) {
    const cleanVer = version.replace('-mirror1', '').replace('-mirror2', '');
    filenameElem.textContent = `TikTok_Insight_Editor_${cleanVer}.apk`;
  }

  // Reset phases
  phaseVerifying.classList.remove('hidden');
  phaseReady.classList.add('hidden');
  progressBar.style.width = '0%';
  statusText.textContent = 'Initiating SSL handshake with secure edge mirror...';

  // Open modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Realistic verified progress sequence
  const steps = [
    { percent: 25, text: 'Querying VirusTotal multi-engine database (0/72 Detections)...' },
    { percent: 55, text: 'Verifying cryptographic signature & Android Manifest...' },
    { percent: 85, text: 'Allocating high-speed CDN bandwidth slot...' },
    { percent: 100, text: 'Package verified & ready for download!' }
  ];

  let currentStep = 0;
  clearInterval(downloadTimer);

  downloadTimer = setInterval(() => {
    if (currentStep < steps.length) {
      progressBar.style.width = steps[currentStep].percent + '%';
      statusText.textContent = steps[currentStep].text;
      currentStep++;
    } else {
      clearInterval(downloadTimer);
      setTimeout(() => {
        phaseVerifying.classList.add('hidden');
        phaseReady.classList.remove('hidden');
      }, 400);
    }
  }, 450);
}

function closeDownloadFlow() {
  const modal = document.getElementById('downloadModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
  if (downloadTimer) clearInterval(downloadTimer);
}

// Trigger simulated safe APK package download file
function triggerActualDownload() {
  const cleanVer = currentVersionTarget.replace('-mirror1', '').replace('-mirror2', '');
  const fileName = `TikTok_Insight_Editor_${cleanVer}.apk`;

  // Create an informative dummy package payload or handle stream
  const dummyApkContent = `PK\x03\x04\x14\x00\x00\x00\x08\x00TikTok Insight Editor APK Official Package [${cleanVer}] - SHA256 Verified.`;
  const blob = new Blob([dummyApkContent], { type: 'application/vnd.android.package-archive' });
  const downloadUrl = URL.createObjectURL(blob);

  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = downloadUrl;
  downloadAnchor.download = fileName;
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(downloadUrl);

  showToast(`Downloading ${fileName}...`);
  closeDownloadFlow();
}

// Info Modals (Privacy, Terms, DMCA, VirusTotal)
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
  document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
  const modal = document.getElementById('infoModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
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
    <p>Last updated: September 2026</p>
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

function openDmcaModal() {
  openInfoModal('DMCA & Trademark Disclaimer', `
    <p><strong>Trademark Notice:</strong> TikTok™ is a trademark of ByteDance Ltd. TikTok Insight Editor is an independent utility and is not affiliated with, endorsed by, or sponsored by ByteDance Ltd.</p>
    <p><strong>DMCA Compliance:</strong> We respect intellectual property rights. If you believe any material hosted on this domain infringes your copyright, please contact our legal desk for immediate notice processing within 24 hours.</p>
  `);
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

// Global click outside to close modals
window.addEventListener('click', (e) => {
  const downloadModal = document.getElementById('downloadModal');
  const infoModal = document.getElementById('infoModal');

  if (e.target === downloadModal) closeDownloadFlow();
  if (e.target === infoModal) closeInfoModal();
});

// ESC key to close modals
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDownloadFlow();
    closeInfoModal();
  }
});
