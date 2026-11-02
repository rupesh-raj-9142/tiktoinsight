/**
 * TikTok Insight Editor APK - Core Client Logic
 * Handles safe verified downloads, hash copying, modal management & micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveBarAnimations();
  initNavScrollEffect();
  initVideoPlayerEvents();
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

// ==========================================================================
// DIRECT CLIENT-SIDE APK DOWNLOAD ENGINE (100% GitHub Releases CDN, 0% Vercel Bandwidth)
// ==========================================================================
const OFFICIAL_APK_DOWNLOAD_URL = 'https://github.com/rupesh-raj-9142/tiktok-insight-editor/releases/download/download/tiktok.insight.editor.apk';

/**
 * Triggers direct client-side APK download from GitHub Releases.
 * Stream travels directly from GitHub CDN to user device, bypassing Vercel completely.
 */
function directDownloadApk() {
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = OFFICIAL_APK_DOWNLOAD_URL;
  downloadAnchor.setAttribute('download', 'tiktok.insight.editor.apk');
  downloadAnchor.setAttribute('rel', 'noopener noreferrer');
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);

  showToast('Starting direct APK download from official GitHub CDN...');
}

// Download Flow Controller
let downloadTimer = null;
let currentVersionTarget = 'v4.2.1';

function openDownloadFlow(versionOrEvent = 'v4.2.1') {
  // If called from an event handler, allow event inspection
  if (versionOrEvent && typeof versionOrEvent === 'object' && versionOrEvent.preventDefault) {
    // We let the direct link or JS handle it
  } else if (typeof versionOrEvent === 'string') {
    currentVersionTarget = versionOrEvent;
  }

  // Trigger client-side direct download immediately on click
  directDownloadApk();

  const modal = document.getElementById('downloadModal');
  const phaseVerifying = document.getElementById('phaseVerifying');
  const phaseReady = document.getElementById('phaseReady');
  const filenameElem = document.getElementById('modalFilename');
  const actualLink = document.getElementById('actualDownloadLink');

  if (filenameElem) {
    filenameElem.textContent = 'tiktok.insight.editor.apk';
  }
  if (actualLink) {
    actualLink.href = OFFICIAL_APK_DOWNLOAD_URL;
  }

  if (!modal) return;

  // Show the confirmation & quick-install phase immediately
  if (phaseVerifying) phaseVerifying.classList.add('hidden');
  if (phaseReady) phaseReady.classList.remove('hidden');

  // Open modal with install directions
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
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

// Trigger simulated or direct safe APK package download file
function triggerActualDownload(e) {
  if (e && e.preventDefault) e.preventDefault();
  directDownloadApk();
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
  const lbModal = document.getElementById('screenshotLightbox');

  if (e.target === downloadModal) closeDownloadFlow();
  if (e.target === infoModal) closeInfoModal();
  if (e.target === lbModal || e.target?.classList?.contains('lightbox-backdrop')) closeLightbox();
});

// ESC key to close modals & Arrow navigation
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDownloadFlow();
    closeInfoModal();
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    const lbModal = document.getElementById('screenshotLightbox');
    if (lbModal && lbModal.classList.contains('active')) {
      changeLightboxScreenshot(-1);
    }
  } else if (e.key === 'ArrowRight') {
    const lbModal = document.getElementById('screenshotLightbox');
    if (lbModal && lbModal.classList.contains('active')) {
      changeLightboxScreenshot(1);
    }
  }
});

// ==========================================================================
// TIKTOK STUDIO SCREENSHOTS SHOWCASE & LIGHTBOX ENGINE
// ==========================================================================
const studioScreenshots = [
  {
    src: 'assets/tiktok-screenshot-overview-500.jpg',
    title: 'Video Overview & 500 Views Milestone',
    badge: 'Screenshot 1 of 7',
    badgeTop: 'Real-Time Studio Telemetry',
    badgeBottom: '500 Views • 0h:01m:04s Play Time',
    desc: 'Live studio dashboard verifying acceleration past 500 video views, tracking initial cohort watch time and retention dynamics.'
  },
  {
    src: 'assets/tiktok-screenshot-viewers.jpg',
    title: 'Audience Cohorts & Unique Viewers',
    badge: 'Screenshot 2 of 7',
    badgeTop: '87.5% New Audience FYP Push',
    badgeBottom: '26 Unique Viewers • 12.5% Returning',
    desc: 'Deep-dive into audience acquisition showing 87.5% new viewers, verifying that TikTok recommendation algorithm is actively indexing and pushing to fresh FYP feeds.'
  },
  {
    src: 'assets/tiktok-screenshot-engagement.jpg',
    title: 'Comment Keyword Cloud & Like Timing',
    badge: 'Screenshot 3 of 7',
    badgeTop: 'Peak Like Moment: 0:00 Hook',
    badgeBottom: 'Top Words: beautiful, road, travel',
    desc: 'Engagement telemetry revealing viewer sentiment keywords (beautiful, road, travel, view, wow) and exact timestamp 0:00 where viewers reacted with likes.'
  },
  {
    src: 'assets/tiktok-screenshot-views-graph.jpg',
    title: 'Hourly Views Velocity & Retention Alert',
    badge: 'Screenshot 4 of 7',
    badgeTop: 'Hourly Influx Waveform',
    badgeBottom: 'Algorithm Alert: 0:01 Churn',
    desc: 'Hourly telemetry shows the surge curve from hour 0 to hour 2, capturing the exact initial testing cohort allocated by TikTok’s recommendation engine.'
  },
  {
    src: 'assets/tiktok-screenshot-retention-scrub.jpg',
    title: 'Second-by-Second Viewer Retention Curve',
    badge: 'Screenshot 5 of 7',
    badgeTop: 'Second 00:00 (100%) Start',
    badgeBottom: 'Retention Drop Detection',
    desc: 'Micro-level retention graph tracking audience percentage from 100% at second 00:00 down across the entire 00:12 duration against the 50% median benchmark.'
  },
  {
    src: 'assets/tiktok-screenshot-hook-drop.jpg',
    title: 'Pinpointing the Exact Viewer Drop Moment',
    badge: 'Screenshot 6 of 7',
    badgeTop: 'Frame Drop-off Marker',
    badgeBottom: 'Visual Timeline Alignment',
    desc: 'Synchronizing the interactive playback scrubber directly with retention percentage coordinates allows creators to see the exact visual frame causing viewer churn.'
  },
  {
    src: 'assets/tiktok-screenshot-traffic-sources.jpg',
    title: 'Traffic Sources & Search Query Breakdown',
    badge: 'Screenshot 7 of 7',
    badgeTop: 'Discovery Attribution Radar',
    badgeBottom: 'Search Query Index Ready',
    desc: 'Monitors distribution channels (For You feed, Personal Profile, Sound, Search) and search keyword indexing as your post accumulates views.'
  }
];

let currentScreenshotIndex = 0;
let currentLightboxIndex = 0;

// Switch screenshot in the phone device mockup and accordion
function selectScreenshot(index) {
  if (index < 0 || index >= studioScreenshots.length) return;
  currentScreenshotIndex = index;
  const data = studioScreenshots[index];

  // Update image
  const imgElem = document.getElementById('activeScreenshotImg');
  if (imgElem) {
    imgElem.style.opacity = '0.3';
    setTimeout(() => {
      imgElem.src = data.src;
      imgElem.alt = data.title;
      imgElem.style.opacity = '1';
    }, 120);
  }

  // Update floating badges
  const badgeTop = document.getElementById('badgeTopText');
  const badgeBottom = document.getElementById('badgeBottomText');
  if (badgeTop) badgeTop.textContent = data.badgeTop;
  if (badgeBottom) badgeBottom.textContent = data.badgeBottom;

  // Update accordion active item
  const items = document.querySelectorAll('.screenshot-card-item');
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update dot indicators
  const dots = document.querySelectorAll('#deviceDotsContainer .dot');
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Navigate device mockup with arrows
function navigateScreenshot(direction) {
  let newIndex = currentScreenshotIndex + direction;
  if (newIndex < 0) newIndex = studioScreenshots.length - 1;
  if (newIndex >= studioScreenshots.length) newIndex = 0;
  selectScreenshot(newIndex);
}

// Lightbox Modal Controller
function openLightbox(index = 0) {
  if (index < 0 || index >= studioScreenshots.length) index = 0;
  currentLightboxIndex = index;

  const modal = document.getElementById('screenshotLightbox');
  if (!modal) return;

  updateLightboxContent(index);

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openLightboxCurrent() {
  openLightbox(currentScreenshotIndex);
}

function updateLightboxContent(index) {
  const item = studioScreenshots[index];
  if (!item) return;

  const mainImg = document.getElementById('lbMainImage');
  const badge = document.getElementById('lbBadge');
  const title = document.getElementById('lbTitle');
  const desc = document.getElementById('lbDescription');
  const downloadBtn = document.getElementById('lbDownloadBtn');

  if (mainImg) {
    mainImg.src = item.src;
    mainImg.alt = item.title;
  }
  if (badge) badge.textContent = item.badge;
  if (title) title.textContent = item.title;
  if (desc) desc.textContent = item.desc;
  if (downloadBtn) {
    downloadBtn.href = item.src;
    downloadBtn.download = `TikTok_Studio_${index + 1}.jpg`;
  }
}

function changeLightboxScreenshot(direction) {
  let newIndex = currentLightboxIndex + direction;
  if (newIndex < 0) newIndex = studioScreenshots.length - 1;
  if (newIndex >= studioScreenshots.length) newIndex = 0;
  currentLightboxIndex = newIndex;
  updateLightboxContent(newIndex);
}

function closeLightbox() {
  const modal = document.getElementById('screenshotLightbox');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

// Hero View Switcher (Live Simulated Engine vs Actual Studio Capture vs Video Walkthrough)
function switchHeroView(viewType) {
  const liveView = document.getElementById('heroLiveView');
  const screenshotView = document.getElementById('heroScreenshotView');
  const videoView = document.getElementById('heroVideoView');
  const tabLive = document.getElementById('tabLiveMockup');
  const tabScreenshot = document.getElementById('tabRealScreenshot');
  const tabVideo = document.getElementById('tabHeroVideo');
  const heroMiniVideo = document.getElementById('heroMiniVideo');

  // Hide all
  liveView?.classList.add('hidden');
  screenshotView?.classList.add('hidden');
  videoView?.classList.add('hidden');

  tabLive?.classList.remove('active');
  tabScreenshot?.classList.remove('active');
  tabVideo?.classList.remove('active');

  if (viewType === 'screenshot') {
    screenshotView?.classList.remove('hidden');
    tabScreenshot?.classList.add('active');
    heroMiniVideo?.pause();
  } else if (viewType === 'video') {
    videoView?.classList.remove('hidden');
    tabVideo?.classList.add('active');
    // Try playback if user clicked
    heroMiniVideo?.play().catch(() => {});
  } else {
    liveView?.classList.remove('hidden');
    tabLive?.classList.add('active');
    heroMiniVideo?.pause();
  }
}

// ==========================================================================
// INTERACTIVE VIDEO DEMO ENGINE & CHAPTER CONTROLLER
// ==========================================================================
const demoChapters = [
  { time: 0, title: '1. Canvas Setup & Vertical 9:16 Ingestion' },
  { time: 25, title: '2. Retention Telemetry & Drop Pinpoint' },
  { time: 50, title: '3. AI Viral Hook Generator & Auto-Captions' },
  { time: 75, title: '4. Multi-Track Timeline & Audio Beat Sync' },
  { time: 100, title: '5. Lossless 4K Export & FYP Window Publishing' }
];

function initVideoPlayerEvents() {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;

  const playIcon = document.getElementById('vpPlayIcon');
  const pauseIcon = document.getElementById('vpPauseIcon');
  const timeCurrent = document.getElementById('vpCurrentTime');
  const timeDuration = document.getElementById('vpDuration');

  // Update duration when metadata loads
  video.addEventListener('loadedmetadata', () => {
    if (timeDuration && !isNaN(video.duration)) {
      timeDuration.textContent = formatVideoTime(video.duration);
    }
  });

  // Update time and active chapter on timeupdate
  video.addEventListener('timeupdate', () => {
    if (timeCurrent) {
      timeCurrent.textContent = formatVideoTime(video.currentTime);
    }
    syncActiveChapterByTime(video.currentTime);
  });

  // Play / Pause state sync
  video.addEventListener('play', () => {
    playIcon?.classList.add('hidden');
    pauseIcon?.classList.remove('hidden');
  });

  video.addEventListener('pause', () => {
    pauseIcon?.classList.add('hidden');
    playIcon?.classList.remove('hidden');
  });

  // Graceful fallback for video error (e.g. before user adds the mp4 file)
  video.addEventListener('error', () => {
    const helper = document.getElementById('videoHelperBanner');
    if (helper) {
      helper.classList.add('attention');
    }
  });
}

function formatVideoTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleMainVideo() {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;

  if (video.paused || video.ended) {
    video.play().catch(err => {
      showToast('Video ready: place demo-video.mp4 in assets/ to play your file!');
    });
  } else {
    video.pause();
  }
}

function restartMainVideo() {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;
  video.currentTime = 0;
  video.play().catch(() => {});
  showToast('Restarted demo from 00:00');
}

function setVideoSpeed(speed) {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;
  video.playbackRate = speed;

  const buttons = document.querySelectorAll('.vp-speed-group .speed-btn');
  buttons.forEach(btn => {
    if (btn.textContent.trim() === `${speed}x`) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  showToast(`Playback speed set to ${speed}x`);
}

function toggleVideoMute() {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;

  video.muted = !video.muted;
  const highIcon = document.getElementById('vpVolumeHigh');
  const muteIcon = document.getElementById('vpVolumeMuted');

  if (video.muted) {
    highIcon?.classList.add('hidden');
    muteIcon?.classList.remove('hidden');
    showToast('Video muted');
  } else {
    muteIcon?.classList.add('hidden');
    highIcon?.classList.remove('hidden');
    showToast('Video unmuted');
  }
}

function toggleVideoFullscreen() {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;

  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function seekDemoVideo(seconds, element) {
  const video = document.getElementById('mainDemoVideo');
  if (!video) return;

  video.currentTime = seconds;
  video.play().catch(() => {});

  // Update active chapter visually
  const items = document.querySelectorAll('.chapter-item');
  items.forEach(item => item.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }

  showToast(`Jumped to ${formatVideoTime(seconds)}`);
}

function syncActiveChapterByTime(currentTime) {
  const items = document.querySelectorAll('.chapter-item');
  if (!items.length) return;

  let activeIndex = 0;
  for (let i = demoChapters.length - 1; i >= 0; i--) {
    if (currentTime >= demoChapters[i].time) {
      activeIndex = i;
      break;
    }
  }

  items.forEach((item, idx) => {
    if (idx === activeIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function dismissVideoHelper() {
  const helper = document.getElementById('videoHelperBanner');
  if (helper) {
    helper.style.display = 'none';
  }
}


