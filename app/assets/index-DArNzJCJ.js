(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={tiktokLogo:(e=36)=>`
    <div style="display:flex; align-items:center; gap:8px; cursor:pointer; user-select:none;">
      <svg height="${e}" viewBox="0 0 100 100" fill="none" style="filter:drop-shadow(0 0 6px rgba(37,244,238,0.3));">
        <path d="M52 20 C52 20, 56 28, 68 32 C74 34, 80 34, 80 34 L80 44 C72 44, 64 40, 58 35 L58 64 C58 74, 50 82, 40 82 C30 82, 22 74, 22 64 C22 54, 30 46, 40 46 C43 46, 46 47, 48 48 L48 20 L52 20 Z" fill="#25F4EE" />
        <path d="M56 20 C56 20, 60 28, 72 32 C78 34, 84 34, 84 34 L84 44 C76 44, 68 40, 62 35 L62 64 C62 74, 54 82, 44 82 C34 82, 26 74, 26 64 C26 54, 34 46, 44 46 C47 46, 50 47, 52 48 L52 20 L56 20 Z" fill="#FE2C55" />
        <path d="M54 20 C54 20, 58 28, 70 32 C76 34, 82 34, 82 34 L82 44 C74 44, 66 40, 60 35 L60 64 C60 74, 52 82, 42 82 C32 82, 24 74, 24 64 C24 54, 32 46, 42 46 C45 46, 48 47, 50 48 L50 20 L54 20 Z" fill="#FFFFFF" />
      </svg>
      <span style="font-family:'Plus Jakarta Sans', sans-serif; font-size:24px; font-weight:900; letter-spacing:-0.04em; color:var(--text-primary);">TikTok</span>
    </div>`,home:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.707 2.293a1 1 0 00-1.414 0l-9 9A1 1 0 003 13h1v7a2 2 0 002 2h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a2 2 0 002-2v-7h1a1 1 0 00.707-1.707l-9-9z"/>
    </svg>`,explore:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>`,following:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,friends:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="22" y1="11" x2="16" y2="11"/>
    </svg>`,live:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 7l-7 5 7 5V7z"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>`,upload:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>`,bell:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>`,message:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>`,user:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,heart:(e=24,t=`none`)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`,comment:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.65 3.35A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.24.62 4.34 1.7 6.14L.25 23.3a1 1 0 0 0 1.22 1.22l5.16-1.45A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.32-1.35-6.32-3.35-8.65z"/>
    </svg>`,bookmark:(e=24,t=`none`)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="${t}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>`,share:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.42 16.58L22 10 15.42 3.42V8C6.88 8 2.5 13.5 1 20c2.88-4 7.12-5.5 14.42-5.5v2.08z"/>
    </svg>`,music:(e=18)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>`,volume:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>`,volumeX:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>`,play:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>`,pause:(e=24)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"/>
      <rect x="14" y="4" width="4" height="16"/>
    </svg>`,search:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>`,verified:(e=15)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="#20D5EC" style="display:inline-block; vertical-align:middle;">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>`,chart:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>`,shield:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,close:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>`,send:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>`,keyboard:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="M6 8h.001M10 8h.001M14 8h.001M18 8h.001M8 12h.001M12 12h.001M16 12h.001M7 16h10"/>
    </svg>`,moon:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>`,sun:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>`,chevronLeft:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>`,arrowUp:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"/>
    </svg>`,arrowDown:(e=20)=>`
    <svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>`},t=`tiktok_web_db_v2`,n={users:[{id:`usr_khaby`,username:`khaby.lame`,displayName:`Khabane lame`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`,bio:`If you want to laugh you are in the right place! 🤷🏿‍♂️ Life is simple. Contact: business@khaby.com`,website:`https://khaby.com`,role:`creator`,isVerified:!0,followersCount:1628e5,followingCount:78,likesCount:245e7,joinedAt:`2020-03-15`},{id:`usr_mrbeast`,username:`mrbeast`,displayName:`MrBeast`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1000&auto=format&fit=crop&q=80`,bio:`I want to make the world a better place before I die. Check out Beast Games! 🍫`,website:`https://mrbeast.com`,role:`creator`,isVerified:!0,followersCount:1045e5,followingCount:142,likesCount:112e7,joinedAt:`2019-08-20`},{id:`usr_bella`,username:`bellapoarch`,displayName:`Bella Poarch`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&auto=format&fit=crop&q=80`,bio:`Stream my new single! 🖤 Singer / Songwriter / Gamer 🎮`,website:`https://bellapoarch.com`,role:`creator`,isVerified:!0,followersCount:942e5,followingCount:210,likesCount:23e8,joinedAt:`2020-04-10`},{id:`usr_charli`,username:`charlidamelio`,displayName:`charli d’amelio`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1000&auto=format&fit=crop&q=80`,bio:`i am a meeee 🤍 dancer & creator • shop my collection below!`,website:`https://charlidamelio.com`,role:`creator`,isVerified:!0,followersCount:1554e5,followingCount:1200,likesCount:115e8,joinedAt:`2019-06-01`},{id:`usr_zach`,username:`zachking`,displayName:`Zach King`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80`,bio:`Filmmaker and digital illusionist bringing magic to your feed ✨🎩`,website:`https://zachking.com`,role:`creator`,isVerified:!0,followersCount:824e5,followingCount:90,likesCount:12e8,joinedAt:`2019-01-10`},{id:`usr_admin`,username:`tiktok`,displayName:`TikTok`,avatar:`https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1000&auto=format&fit=crop&q=80`,bio:`Make Your Day. The official TikTok account. Welcome to TikTok! 🖤✨`,website:`https://tiktok.com`,role:`admin`,isVerified:!0,followersCount:8e7,followingCount:2,likesCount:34e7,joinedAt:`2018-01-01`}],videos:[{id:`vid_1`,userId:`usr_khaby`,videoUrl:`https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-neon-room-41584-large.mp4`,fallbackTheme:`neon_flux`,coverUrl:`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80`,caption:`Why do you complicate life like this?? Just use your hands! 🤷🏿‍♂️😂 #lifehack #learnontiktok #khaby`,hashtags:[`lifehack`,`learnontiktok`,`khaby`,`comedy`,`funny`],soundId:`snd_1`,soundTitle:`original sound - Khabane lame`,likesCount:842e4,commentsCount:64200,sharesCount:142e3,viewsCount:428e5,duration:15,createdAt:`2026-03-28T14:30:00Z`,isPinned:!0,allowComments:!0,allowSharing:!0,privacy:`public`},{id:`vid_2`,userId:`usr_mrbeast`,videoUrl:`https://assets.mixkit.co/videos/preview/mixkit-futuristic-tunnel-with-purple-neon-lights-42999-large.mp4`,fallbackTheme:`cyber`,coverUrl:`https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80`,caption:`I gave $100,000 to the last person to leave this neon laser obstacle course! 💰🔥 #mrbeast #challenge`,hashtags:[`mrbeast`,`challenge`,`money`,`viral`,`gaming`],soundId:`snd_2`,soundTitle:`Epic Countdown Beat - MrBeast Sound`,likesCount:124e5,commentsCount:182e3,sharesCount:39e4,viewsCount:78e6,duration:18,createdAt:`2026-03-27T18:20:00Z`,isPinned:!0,allowComments:!0,allowSharing:!0,privacy:`public`},{id:`vid_3`,userId:`usr_bella`,videoUrl:`https://assets.mixkit.co/videos/preview/mixkit-young-woman-dancing-hip-hop-in-a-studio-41585-large.mp4`,fallbackTheme:`sunset`,coverUrl:`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80`,caption:`M to the B challenge replay! Thank you for 94 Million followers ❤️🥺 #MtoTheB #dance #music`,hashtags:[`MtoTheB`,`dance`,`music`,`bellapoarch`,`trending`],soundId:`snd_3`,soundTitle:`M to the B - Millie B`,likesCount:651e5,commentsCount:21e5,sharesCount:19e5,viewsCount:82e7,duration:12,createdAt:`2026-03-26T12:00:00Z`,isPinned:!0,allowComments:!0,allowSharing:!0,privacy:`public`},{id:`vid_4`,userId:`usr_zach`,videoUrl:`https://assets.mixkit.co/videos/preview/mixkit-hands-playing-electronic-drum-pads-41586-large.mp4`,fallbackTheme:`cyber`,coverUrl:`https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&auto=format&fit=crop&q=80`,caption:`Wait till the end to see where the coffee cup went ☕👀 Did you spot the illusion cut? #magic #illusion`,hashtags:[`magic`,`illusion`,`zachking`,`vfx`,`behindthescenes`],soundId:`snd_1`,soundTitle:`Magical Whistle (Original) - Zach King`,likesCount:98e5,commentsCount:92e3,sharesCount:42e4,viewsCount:54e6,duration:16,createdAt:`2026-03-25T09:15:00Z`,isPinned:!1,allowComments:!0,allowSharing:!0,privacy:`public`},{id:`vid_5`,userId:`usr_charli`,videoUrl:`https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-woman-filming-herself-dancing-42407-large.mp4`,fallbackTheme:`neon_flux`,coverUrl:`https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80`,caption:`new dance to this trending sound! dc: @me ✨💕 Tag me if you try it! #dance #dancetrend`,hashtags:[`dance`,`dancetrend`,`charlidamelio`,`trend`,`fyp`],soundId:`snd_3`,soundTitle:`Savage Love (Laxed - Siren Beat) - Jawsh 685 & Jason Derulo`,likesCount:149e5,commentsCount:14e4,sharesCount:52e4,viewsCount:92e6,duration:15,createdAt:`2026-03-24T16:45:00Z`,isPinned:!1,allowComments:!0,allowSharing:!0,privacy:`public`}],sounds:[{id:`snd_1`,title:`original sound - Khabane lame`,artist:`Khabane lame`,cover:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80`,duration:`0:15`,useCount:48e5,type:`synthwave`},{id:`snd_2`,title:`Epic Countdown Beat - MrBeast`,artist:`MrBeast Sound`,cover:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80`,duration:`0:18`,useCount:12e5,type:`ambient`},{id:`snd_3`,title:`M to the B - Millie B`,artist:`Millie B`,cover:`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&auto=format&fit=crop&q=80`,duration:`0:12`,useCount:98e5,type:`lofi`}],comments:[{id:`cmt_1`,videoId:`vid_1`,userId:`usr_mrbeast`,content:`Bro makes millions of dollars just gesturing with his hands 😂 Legend!`,likesCount:421e3,createdAt:`2026-03-28T15:00:00Z`,replies:[{id:`cmt_1_1`,videoId:`vid_1`,userId:`usr_khaby`,content:`Simplicity is the key my friend 🤷🏿‍♂️🤝`,likesCount:184e3,createdAt:`2026-03-28T15:15:00Z`}]},{id:`cmt_2`,videoId:`vid_3`,userId:`usr_charli`,content:`The most liked TikTok in history! Iconic 💕`,likesCount:89e4,createdAt:`2026-03-26T14:30:00Z`,replies:[]}],likes:[{userId:`usr_khaby`,videoId:`vid_2`},{userId:`usr_khaby`,videoId:`vid_3`}],savedVideos:[{userId:`usr_khaby`,videoId:`vid_2`}],follows:[{followerId:`usr_khaby`,followingId:`usr_mrbeast`},{followerId:`usr_khaby`,followingId:`usr_bella`},{followerId:`usr_khaby`,followingId:`usr_charli`}],conversations:[{id:`conv_1`,participants:[`usr_khaby`,`usr_mrbeast`],lastMessage:`Let us do a video together next week in LA! 🎥`,lastMessageTime:`15m ago`,unreadCount:1,messages:[{id:`msg_1`,senderId:`usr_mrbeast`,text:`Yo Khaby! Check out my newest challenge video.`,time:`2:15 PM`},{id:`msg_2`,senderId:`usr_khaby`,text:`Haha loved it Jimmy! So simple 🤷🏿‍♂️`,time:`2:18 PM`},{id:`msg_3`,senderId:`usr_mrbeast`,text:`Let us do a video together next week in LA! 🎥`,time:`2:25 PM`}]}],notifications:[{id:`ntf_1`,userId:`usr_khaby`,senderId:`usr_mrbeast`,type:`like`,text:`liked your video`,videoId:`vid_1`,time:`10m ago`,isUnread:!0},{id:`ntf_2`,userId:`usr_khaby`,senderId:`usr_charli`,type:`comment`,text:`commented: "The king of TikTok 👑"`,videoId:`vid_1`,time:`1h ago`,isUnread:!0}],reports:[{id:`rep_1`,videoId:`vid_5`,reporterId:`usr_mrbeast`,reason:`Music licensing review`,status:`pending`,reportedAt:`2026-03-28T08:00:00Z`}],analytics:{views7d:[184e5,241e5,312e5,489e5,562e5,684e5,842e5],labels7d:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],kpis:{totalViews:`331.4M`,viewsGrowth:`+42.6%`,followersGrowth:`+120K`,totalLikes:`2.45B`,engagementRate:`12.4%`,avgWatchTime:`15.8s`}}},r=new class{constructor(){this.data=this.load()}load(){try{let e=localStorage.getItem(t);if(e)return JSON.parse(e)}catch(e){console.warn(`Could not read from localStorage`,e)}return this.save(n),JSON.parse(JSON.stringify(n))}save(e=this.data){try{localStorage.setItem(t,JSON.stringify(e))}catch(e){console.warn(`Could not save to localStorage`,e)}}reset(){return this.data=JSON.parse(JSON.stringify(n)),this.save(),this.data}},i=`tiktok_auth_session`,a=new class{constructor(){this.listeners=[],this.currentUser=this.loadSession()}loadSession(){try{let e=localStorage.getItem(i);if(e){let t=JSON.parse(e),n=r.data.users.find(e=>e.id===t.id);if(n)return n}}catch(e){console.warn(e)}let e=r.data.users[0];return this.setSession(e),e}setSession(e){this.currentUser=e;try{localStorage.setItem(i,JSON.stringify({id:e.id,token:`mock-jwt-`+e.id}))}catch{}this.notify()}getCurrentUser(){return this.currentUser}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners&&this.listeners.forEach(e=>e(this.currentUser))}login(e,t){let n=r.data.users.find(t=>t.username.toLowerCase()===e.toLowerCase()||t.id===e)||r.data.users[0];return this.setSession(n),n}register({username:e,displayName:t,email:n}){let i={id:`usr_`+Date.now(),username:e.replace(`@`,``).toLowerCase(),displayName:t||e,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,banner:`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80`,bio:`New creator on TikTok! ✨`,website:``,role:`creator`,isVerified:!1,followersCount:0,followingCount:0,likesCount:0,joinedAt:new Date().toISOString().split(`T`)[0]};return r.data.users.push(i),r.save(),this.setSession(i),i}switchUser(e){let t=r.data.users.find(t=>t.id===e);t&&this.setSession(t)}logout(){this.setSession(r.data.users[0])}},o=class{constructor(e={}){this.currentRoute=e.currentRoute||`feed`,this.onNavigate=e.onNavigate||(()=>{}),this.onOpenAuth=e.onOpenAuth||(()=>{}),this.onOpenShortcuts=e.onOpenShortcuts||(()=>{})}setRoute(e){this.currentRoute=e,this.updateActiveNavs()}updateActiveNavs(){document.querySelectorAll(`.nav-item, .mobile-nav-item`).forEach(e=>{e.getAttribute(`data-route`)===this.currentRoute?e.classList.add(`active`):e.classList.remove(`active`)})}renderHeader(){let t=a.getCurrentUser()||r.data.users[0],n=document.documentElement.getAttribute(`data-theme`)!==`light`;return`
      <header class="app-header">
        <div class="header-brand" data-route="feed">
          ${e.tiktokLogo(32)}
        </div>

        <div class="header-search">
          <input type="text" id="global-search-input" placeholder="Search accounts and videos" />
          <button class="search-icon-btn" style="position:absolute; right:0; top:0; bottom:0; width:48px; border-left:1px solid var(--border-subtle); display:flex; align-items:center; justify-content:center; color:var(--text-tertiary);">
            ${e.search(18)}
          </button>
        </div>

        <div class="header-actions">
          <button class="btn btn-ghost btn-icon mobile-header-search-btn" id="mobile-search-btn" data-route="explore" title="Search Explore">
            ${e.search(20)}
          </button>

          <button class="btn btn-secondary header-desktop-item" id="header-upload-btn" data-route="upload" style="border-radius:4px; font-weight:700; gap:6px;">
            ${e.upload(18)} <span>Upload</span>
          </button>

          <button class="btn btn-ghost btn-icon header-desktop-item" id="header-msg-btn" data-route="messages" title="Direct Messages">
            ${e.message(22)}
          </button>

          <button class="btn btn-ghost btn-icon header-desktop-item" id="header-notif-btn" data-route="notifications" title="Inbox Notifications">
            ${e.bell(22)}
          </button>

          <button class="btn btn-ghost btn-icon" id="theme-toggle-btn" title="Toggle Dark/Light">
            ${n?e.sun(18):e.moon(18)}
          </button>

          <a href="../" class="btn btn-ghost btn-icon" title="Return to Overview" style="text-decoration:none; display:inline-flex; align-items:center; justify-content:center; color:var(--text-secondary);">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </a>

          <div class="user-avatar-wrap" id="header-user-menu-trigger" style="position:relative; cursor:pointer;" title="Switch Account / Profile">
            <img src="${t.avatar}" alt="${t.displayName}" class="user-avatar" style="width:34px; height:34px; border:none;" />
          </div>
        </div>
      </header>
    `}renderSidebar(){a.getCurrentUser()||r.data.users[0],r.data.notifications.filter(e=>e.isUnread).length;let t=r.data.users.slice(0,5);return`
      <aside class="app-sidebar">
        <div class="sidebar-nav-group">
          <div class="nav-item ${this.currentRoute===`feed`?`active`:``}" data-route="feed">
            ${e.home(24)}
            <span>For You</span>
          </div>

          <div class="nav-item ${this.currentRoute===`explore`?`active`:``}" data-route="explore">
            ${e.explore(24)}
            <span>Explore</span>
          </div>

          <div class="nav-item ${this.currentRoute===`following`?`active`:``}" data-route="following">
            ${e.following(24)}
            <span>Following</span>
          </div>

          <div class="nav-item ${this.currentRoute===`friends`?`active`:``}" data-route="friends">
            ${e.friends(24)}
            <span>Friends</span>
          </div>

          <div class="nav-item ${this.currentRoute===`live`?`active`:``}" data-route="live">
            ${e.live(24)}
            <span>LIVE</span>
          </div>

          <div class="nav-item ${this.currentRoute===`profile`?`active`:``}" data-route="profile">
            ${e.user(24)}
            <span>Profile</span>
          </div>

          <div class="sidebar-divider"></div>

          <!-- Suggested Accounts -->
          <div class="sidebar-nav-label">Suggested accounts</div>
          <div style="display:flex; flex-direction:column; gap:6px;">
            ${t.map(t=>`
              <div class="user-compact-card" data-creator-profile="${t.username}" style="background:transparent; border:none; padding:6px 12px;">
                <img src="${t.avatar}" alt="${t.displayName}" class="user-avatar" style="width:32px; height:32px; border:none;" />
                <div class="user-info-text">
                  <div class="user-display-name" style="display:flex; align-items:center; gap:4px; font-size:13.5px;">
                    ${t.username} ${t.isVerified?e.verified(13):``}
                  </div>
                  <div class="user-handle" style="font-size:12px;">${t.displayName}</div>
                </div>
              </div>
            `).join(``)}
          </div>

          <div class="sidebar-divider"></div>

          <!-- Discover Hashtags & Sounds -->
          <div class="sidebar-nav-label">Discover</div>
          <div style="display:flex; flex-direction:column; gap:6px; padding:0 8px;">
            <div class="tag-shortcut-btn" data-search-tag="lifehack" style="width:100%; border:none; background:transparent; font-size:13px; display:flex; align-items:center; gap:8px;">
              <span>#</span> <span>lifehack</span>
            </div>
            <div class="tag-shortcut-btn" data-search-tag="dance" style="width:100%; border:none; background:transparent; font-size:13px; display:flex; align-items:center; gap:8px;">
              <span>#</span> <span>dance</span>
            </div>
            <div class="tag-shortcut-btn" data-search-tag="learnontiktok" style="width:100%; border:none; background:transparent; font-size:13px; display:flex; align-items:center; gap:8px;">
              <span>#</span> <span>learnontiktok</span>
            </div>
            <div class="tag-shortcut-btn" data-search-tag="M to the B" style="width:100%; border:none; background:transparent; font-size:13px; display:flex; align-items:center; gap:8px;">
              <span>🎵</span> <span>M to the B - Millie B</span>
            </div>
          </div>

          <div class="sidebar-divider"></div>

          <!-- Creator Tools & Admin -->
          <div class="sidebar-nav-label">Creator & Safety</div>
          <div class="nav-item ${this.currentRoute===`studio`?`active`:``}" data-route="studio">
            ${e.chart(20)}
            <span>Creator Studio</span>
          </div>

          <div class="nav-item ${this.currentRoute===`admin`?`active`:``}" data-route="admin">
            ${e.shield(20)}
            <span>Admin Center</span>
          </div>
        </div>

        <div class="sidebar-footer" style="padding:12px 10px; font-size:11px; color:var(--text-tertiary); line-height:1.6;">
          <div>About • Newsroom • Contact • Careers • ByteDance</div>
          <div style="margin-top:4px;">TikTok for Good • Advertise • Developers • Privacy</div>
          <div style="margin-top:8px; font-weight:700;">© 2026 TikTok</div>
        </div>
      </aside>
    `}renderMobileNav(){let t=r.data.notifications.filter(e=>e.isUnread).length;return`
      <nav class="mobile-bottom-nav">
        <div class="mobile-nav-item ${this.currentRoute===`feed`?`active`:``}" data-route="feed">
          ${e.home(22)}
          <span>Home</span>
        </div>

        <div class="mobile-nav-item ${this.currentRoute===`friends`?`active`:``}" data-route="friends">
          ${e.friends(22)}
          <span>Friends</span>
        </div>

        <div class="mobile-nav-item" data-route="upload">
          <div class="mobile-upload-btn" style="background:linear-gradient(90deg, #25f4ee 0%, #fe2c55 100%); border-radius:8px; width:44px; height:30px;">
            ${e.upload(20)}
          </div>
        </div>

        <div class="mobile-nav-item ${this.currentRoute===`notifications`?`active`:``}" data-route="notifications">
          ${e.message(22)}
          <span>Inbox</span>
          ${t>0?`<div class="unread-dot" style="position:absolute; top:6px; right:28%;"></div>`:``}
        </div>

        <div class="mobile-nav-item ${this.currentRoute===`profile`?`active`:``}" data-route="profile">
          ${e.user(22)}
          <span>Profile</span>
        </div>
      </nav>
    `}bindEvents(t){t.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-route`);t&&this.onNavigate(t)})});let n=t.querySelector(`#theme-toggle-btn`);n&&n.addEventListener(`click`,()=>{let t=(document.documentElement.getAttribute(`data-theme`)||`dark`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,t),n.innerHTML=t===`dark`?e.sun(18):e.moon(18)});let r=t.querySelector(`#global-search-input`);r&&r.addEventListener(`keydown`,e=>{e.key===`Enter`&&r.value.trim()&&this.onNavigate(`explore?q=${encodeURIComponent(r.value.trim())}`)}),t.querySelectorAll(`[data-creator-profile]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-creator-profile`);this.onNavigate&&this.onNavigate(`profile/${t}`)})}),t.querySelectorAll(`[data-search-tag]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-search-tag`);this.onNavigate&&this.onNavigate(`explore?q=${encodeURIComponent(t)}`)})});let i=t.querySelector(`#header-user-menu-trigger`);i&&i.addEventListener(`click`,()=>this.onOpenAuth())}},s=(e=80)=>new Promise(t=>setTimeout(t,e)),c={async register(e){return await s(),a.register(e)},async login(e,t){return await s(),a.login(e,t)},async getFeed(e=`forYou`){await s();let t=a.getCurrentUser()?.id,n=[...r.data.videos];if(e===`following`){let e=r.data.follows.filter(e=>e.followerId===t).map(e=>e.followingId);n=n.filter(t=>e.includes(t.userId)),n.length===0&&(n=[...r.data.videos])}else e===`trending`?n.sort((e,t)=>t.likesCount-e.likesCount):n.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt));return n.map(e=>this.enrichVideo(e))},async getVideo(e){await s();let t=r.data.videos.find(t=>t.id===e);if(!t)throw Error(`Video not found`);return this.enrichVideo(t)},async createVideo(e){await s(200);let t=a.getCurrentUser(),n={id:`vid_`+Date.now(),userId:t.id,videoUrl:e.videoUrl,fallbackTheme:e.fallbackTheme||`neon_flux`,coverUrl:e.coverUrl||`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80`,caption:e.caption||``,hashtags:e.hashtags||[],soundId:e.soundId||`snd_1`,soundTitle:e.soundTitle||`Original Sound - `+t.displayName,likesCount:0,commentsCount:0,sharesCount:0,viewsCount:1,duration:e.duration||15,createdAt:new Date().toISOString(),isPinned:!1,allowComments:e.allowComments!==!1,allowSharing:e.allowSharing!==!1,privacy:e.privacy||`public`};return r.data.videos.unshift(n),r.save(),this.enrichVideo(n)},async deleteVideo(e){return await s(),r.data.videos=r.data.videos.filter(t=>t.id!==e),r.save(),{success:!0}},enrichVideo(e){let t=a.getCurrentUser()?.id,n=r.data.users.find(t=>t.id===e.userId)||{username:`unknown`,displayName:`Creator`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`,isVerified:!1},i=r.data.likes.some(n=>n.userId===t&&n.videoId===e.id),o=r.data.savedVideos.some(n=>n.userId===t&&n.videoId===e.id),s=r.data.follows.some(n=>n.followerId===t&&n.followingId===e.userId);return{...e,creator:n,isLiked:i,isSaved:o,isFollowing:s}},async toggleLike(e){await s(30);let t=a.getCurrentUser()?.id,n=r.data.videos.find(t=>t.id===e);if(!n)return null;let i=r.data.likes.findIndex(n=>n.userId===t&&n.videoId===e),o=!1;return i>=0?(r.data.likes.splice(i,1),n.likesCount=Math.max(0,n.likesCount-1),o=!1):(r.data.likes.push({userId:t,videoId:e}),n.likesCount+=1,o=!0,n.userId!==t&&r.data.notifications.unshift({id:`ntf_`+Date.now(),userId:n.userId,senderId:t,type:`like`,text:`liked your video`,videoId:n.id,time:`Just now`,isUnread:!0})),r.save(),{liked:o,likesCount:n.likesCount}},async toggleSave(e){await s(30);let t=a.getCurrentUser()?.id,n=r.data.savedVideos.findIndex(n=>n.userId===t&&n.videoId===e),i=!1;return n>=0?(r.data.savedVideos.splice(n,1),i=!1):(r.data.savedVideos.push({userId:t,videoId:e}),i=!0),r.save(),{saved:i}},async toggleFollow(e){await s(30);let t=a.getCurrentUser()?.id,n=r.data.users.find(t=>t.id===e);if(!n||e===t)return null;let i=r.data.follows.findIndex(n=>n.followerId===t&&n.followingId===e),o=!1;return i>=0?(r.data.follows.splice(i,1),n.followersCount=Math.max(0,n.followersCount-1),o=!1):(r.data.follows.push({followerId:t,followingId:e}),n.followersCount+=1,o=!0,r.data.notifications.unshift({id:`ntf_`+Date.now(),userId:e,senderId:t,type:`follow`,text:`started following you`,time:`Just now`,isUnread:!0})),r.save(),{following:o,followersCount:n.followersCount}},async getComments(e){return await s(),r.data.comments.filter(t=>t.videoId===e).map(e=>({...e,author:r.data.users.find(t=>t.id===e.userId),replies:(e.replies||[]).map(e=>({...e,author:r.data.users.find(t=>t.id===e.userId)}))}))},async addComment(e,t,n=null){await s(50);let i=a.getCurrentUser(),o=r.data.videos.find(t=>t.id===e);if(n){let a=r.data.comments.find(e=>e.id===n);if(a){let n={id:`cmt_`+Date.now(),videoId:e,userId:i.id,content:t,likesCount:0,createdAt:new Date().toISOString()};a.replies=a.replies||[],a.replies.push(n)}}else{let n={id:`cmt_`+Date.now(),videoId:e,userId:i.id,content:t,likesCount:0,createdAt:new Date().toISOString(),replies:[]};r.data.comments.unshift(n)}return o&&(o.commentsCount+=1),r.save(),this.getComments(e)},async getUser(e){await s();let t=r.data.users.find(t=>t.username.toLowerCase()===e.toLowerCase()||t.id===e);if(!t)return null;let n=a.getCurrentUser()?.id,i=r.data.follows.some(e=>e.followerId===n&&e.followingId===t.id),o=r.data.videos.filter(e=>e.userId===t.id).map(e=>this.enrichVideo(e)),c=r.data.likes.filter(e=>e.userId===t.id).map(e=>r.data.videos.find(t=>t.id===e.videoId)).filter(Boolean).map(e=>this.enrichVideo(e)),l=r.data.savedVideos.filter(e=>e.userId===t.id).map(e=>r.data.videos.find(t=>t.id===e.videoId)).filter(Boolean).map(e=>this.enrichVideo(e));return{...t,isFollowing:i,isSelf:n===t.id,videos:o,likedVideos:c,savedVideos:l}},async updateProfile(e){await s(100);let t=a.getCurrentUser(),n=r.data.users.find(e=>e.id===t.id);return n&&(Object.assign(n,e),a.setSession(n),r.save()),n},async search(e=``,t=`all`){await s(60);let n=e.toLowerCase().trim();return n?{videos:r.data.videos.filter(e=>e.caption.toLowerCase().includes(n)||e.hashtags.some(e=>e.toLowerCase().includes(n))).map(e=>this.enrichVideo(e)),users:r.data.users.filter(e=>e.username.toLowerCase().includes(n)||e.displayName.toLowerCase().includes(n)||e.bio.toLowerCase().includes(n)),sounds:r.data.sounds.filter(e=>e.title.toLowerCase().includes(n)||e.artist.toLowerCase().includes(n)),hashtags:Array.from(new Set(r.data.videos.flatMap(e=>e.hashtags).filter(e=>e.toLowerCase().includes(n))))}:{videos:r.data.videos.slice(0,8).map(e=>this.enrichVideo(e)),users:r.data.users.slice(0,6),sounds:r.data.sounds,hashtags:[`CyberVibe`,`AIFuture`,`StreetStyle2026`,`Synthwave`,`NightDrive`,`CreativeCoding`]}},async getConversations(){await s();let e=a.getCurrentUser()?.id;return r.data.conversations.filter(t=>t.participants.includes(e)).map(t=>{let n=t.participants.find(t=>t!==e),i=r.data.users.find(e=>e.id===n)||{displayName:`User`,username:`user`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80`};return{...t,recipient:i}})},async sendMessage(e,t,n=null){await s(30);let i=a.getCurrentUser(),o=r.data.conversations.find(t=>t.id===e);o||(o={id:e||`conv_`+Date.now(),participants:[i.id,`usr_2`],lastMessage:t,lastMessageTime:`Just now`,unreadCount:0,messages:[]},r.data.conversations.unshift(o));let c={id:`msg_`+Date.now(),senderId:i.id,text:t,videoAttachmentId:n,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};return o.messages.push(c),o.lastMessage=t,o.lastMessageTime=`Just now`,r.save(),o},async getAdminStats(){return await s(),{totalUsers:r.data.users.length,totalVideos:r.data.videos.length,pendingReports:r.data.reports.filter(e=>e.status===`pending`).length,totalViews:`3.42M`,serverStatus:`Operational 99.98%`}},async getReports(){return await s(),r.data.reports.map(e=>{let t=r.data.videos.find(t=>t.id===e.videoId),n=r.data.users.find(t=>t.id===e.reporterId);return{...e,video:t?this.enrichVideo(t):null,reporter:n}})},async resolveReport(e,t){await s(100);let n=r.data.reports.find(t=>t.id===e);return n&&(n.status=t,t===`removed`&&(r.data.videos=r.data.videos.filter(e=>e.id!==n.videoId)),r.save()),{success:!0}}},l=new class{constructor(){this.container=null,this.init()}init(){this.container||(this.container=document.createElement(`div`),this.container.className=`toast-container`,document.body.appendChild(this.container))}show(e,t=`info`,n=3e3){this.init();let r=document.createElement(`div`);r.className=`toast-item ${t}`;let i=`⚡`;t===`success`&&(i=`✓`),t===`error`&&(i=`✕`),r.innerHTML=`
      <span style="font-weight:bold; font-size:16px;">${i}</span>
      <span>${e}</span>
    `,this.container.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,r.style.transform=`translateY(10px)`,r.style.transition=`all 0.3s ease`,setTimeout(()=>r.remove(),300)},n)}success(e,t){this.show(e,`success`,t)}error(e,t){this.show(e,`error`,t)}info(e,t){this.show(e,`info`,t)}},u=new class{constructor(){this.ctx=null,this.isPlaying=!1,this.currentTrackId=null,this.timerId=null,this.gainNode=null,this.volume=.7,this.isMuted=!1}init(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.gainNode=this.ctx.createGain(),this.gainNode.gain.value=this.volume,this.gainNode.connect(this.ctx.destination))}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.gainNode&&(this.gainNode.gain.value=this.isMuted?0:this.volume)}toggleMute(){return this.isMuted=!this.isMuted,this.gainNode&&(this.gainNode.gain.value=this.isMuted?0:this.volume),this.isMuted}playTrack(e=`synthwave`){if(this.init(),!this.ctx)return;this.stop(),this.isPlaying=!0;let t=0,n=[220,261.63,293.66,329.63,392,440,523.25];this.timerId=setInterval(()=>{if(!this.isPlaying||!this.ctx)return;let r=this.ctx.currentTime;if(t%4==0&&this.playKick(r),t%8==4&&this.playSnare(r),t%2==0&&this.playHiHat(r,t%4==2?.05:.02),t%4==0||t%4==2){let n=e===`ambient`?110:130.81;this.playBass(r,n*(t%8==0?1:1.25))}if(t%2==1){let e=t*3%n.length;this.playLead(r,n[e])}t=(t+1)%16},125)}playKick(e){let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.connect(n),n.connect(this.gainNode),t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(.01,e+.35),n.gain.setValueAtTime(.7,e),n.gain.exponentialRampToValueAtTime(.01,e+.35),t.start(e),t.stop(e+.35)}playSnare(e){let t=this.ctx.createBufferSource(),n=this.ctx.sampleRate*.15,r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=r.getChannelData(0);for(let e=0;e<n;e++)i[e]=Math.random()*2-1;t.buffer=r;let a=this.ctx.createBiquadFilter();a.type=`highpass`,a.frequency.value=1e3;let o=this.ctx.createGain();t.connect(a),a.connect(o),o.connect(this.gainNode),o.gain.setValueAtTime(.4,e),o.gain.exponentialRampToValueAtTime(.01,e+.15),t.start(e),t.stop(e+.15)}playHiHat(e,t=.03){let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`square`,n.frequency.setValueAtTime(8e3,e),n.connect(r),r.connect(this.gainNode),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(.001,e+.05),n.start(e),n.stop(e+.05)}playBass(e,t){let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`sawtooth`,n.frequency.setValueAtTime(t,e);let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(300,e),n.connect(i),i.connect(r),r.connect(this.gainNode),r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.01,e+.25),n.start(e),n.stop(e+.25)}playLead(e,t){let n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`sine`,n.frequency.setValueAtTime(t,e),n.connect(r),r.connect(this.gainNode),r.gain.setValueAtTime(.15,e),r.gain.exponentialRampToValueAtTime(.001,e+.2),n.start(e),n.stop(e+.2)}stop(){this.isPlaying=!1,this.timerId&&=(clearInterval(this.timerId),null)}},d=class{constructor(e,t=`neon_flux`){this.canvas=e,this.ctx=e.getContext(`2d`),this.theme=t,this.animId=null,this.particles=[],this.time=0,this.init()}init(){this.resize(),this.particles=[];for(let e=0;e<45;e++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,radius:Math.random()*4+1.5,speedX:(Math.random()-.5)*1.5,speedY:(Math.random()-.5)*1.5-.5,hue:Math.random()*60+220,opacity:Math.random()*.7+.3})}resize(){this.canvas&&(this.canvas.width=this.canvas.clientWidth||360,this.canvas.height=this.canvas.clientHeight||640)}start(){if(this.animId)return;let e=()=>{this.time+=.02,this.draw(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}stop(){this.animId&&=(cancelAnimationFrame(this.animId),null)}draw(){let{width:e,height:t}=this.canvas,n=this.ctx;if(!n||e===0||t===0)return;let r=n.createLinearGradient(0,0,e,t);this.theme===`cyber`?(r.addColorStop(0,`#0d0221`),r.addColorStop(.5,`#0f084e`),r.addColorStop(1,`#001b48`)):this.theme===`sunset`?(r.addColorStop(0,`#2b0938`),r.addColorStop(.5,`#5c1d49`),r.addColorStop(1,`#8b3a3a`)):(r.addColorStop(0,`#090b14`),r.addColorStop(.5,`#13192f`),r.addColorStop(1,`#061727`)),n.fillStyle=r,n.fillRect(0,0,e,t),n.save();for(let r=0;r<3;r++){n.beginPath();let i=n.createLinearGradient(0,0,e,0);i.addColorStop(0,`hsla(${230+r*25}, 85%, 65%, 0.25)`),i.addColorStop(1,`hsla(${180+r*30}, 80%, 55%, 0.15)`),n.fillStyle=i;let a=this.time+r*2;n.moveTo(0,t*.4+Math.sin(a)*30);for(let i=0;i<=e;i+=15){let e=t*.5+Math.sin(i*.01+a)*45+Math.cos(i*.02-a)*25;n.lineTo(i,e+r*40)}n.lineTo(e,t),n.lineTo(0,t),n.closePath(),n.fill()}n.restore(),this.particles.forEach(r=>{r.x+=r.speedX,r.y+=r.speedY,r.x<0&&(r.x=e),r.x>e&&(r.x=0),r.y<0&&(r.y=t),r.y>t&&(r.y=0),n.save(),n.beginPath(),n.arc(r.x,r.y,r.radius,0,Math.PI*2),n.fillStyle=`hsla(${r.hue}, 90%, 65%, ${r.opacity})`,n.shadowBlur=12,n.shadowColor=`hsla(${r.hue}, 90%, 60%, 0.8)`,n.fill(),n.restore()});let i=n.createRadialGradient(e*.5,t*.45,10,e*.5,t*.45,160+Math.sin(this.time*2)*20);i.addColorStop(0,`rgba(99, 102, 241, 0.35)`),i.addColorStop(.5,`rgba(6, 182, 212, 0.15)`),i.addColorStop(1,`transparent`),n.fillStyle=i,n.fillRect(0,0,e,t)}},f=class{constructor(e,t={}){this.video=e,this.options=t,this.isPlaying=!1,this.isMuted=!0,this.element=null,this.videoEl=null,this.canvasEl=null,this.visualizer=null,this.lastTapTime=0}render(){let t=this.video,n=this.formatNumber(t.likesCount),r=this.formatNumber(t.commentsCount),i=this.formatNumber(t.sharesCount),a=this.formatCaption(t.caption,t.hashtags),o=document.createElement(`div`);return o.className=`video-card-wrapper`,o.id=`card-${t.id}`,o.setAttribute(`data-video-id`,t.id),o.innerHTML=`
      <div class="video-player-container">
        <!-- Gradients -->
        <div class="video-top-gradient"></div>
        <div class="video-bottom-gradient"></div>

        <!-- Video & Fallback Canvas -->
        <video 
          class="video-element" 
          loop 
          playsinline 
          webkit-playsinline 
          x5-playsinline
          disablepictureinpicture
          muted 
          preload="metadata"
          poster="${t.coverUrl||``}"
          src="${t.videoUrl}"
        ></video>
        
        <canvas class="video-canvas-fallback" style="display:none;"></canvas>

        <!-- Center Play/Pause indicator -->
        <div class="play-pause-indicator">
          ${e.play(36)}
        </div>

        <!-- Sound toggle button -->
        <button class="sound-toggle-btn" title="Toggle Sound (M)">
          ${this.isMuted?e.volumeX(18):e.volume(18)}
        </button>

        <!-- Right Floating Action Dock -->
        <div class="feed-action-dock">
          <!-- Creator Avatar & Follow (+) -->
          <div class="creator-avatar-wrap">
            <div class="creator-avatar-btn" data-action="profile" title="View Profile">
              <img src="${t.creator.avatar}" alt="${t.creator.displayName}" />
            </div>
            ${t.isFollowing?``:`
              <div class="follow-plus-badge" data-action="follow" title="Follow">
                +
              </div>
            `}
          </div>

          <!-- Like Button -->
          <div class="action-btn-group">
            <button class="action-icon-btn ${t.isLiked?`liked`:``}" data-action="like" title="Like (L)">
              ${e.heart(24,t.isLiked?`#FE2C55`:`none`)}
            </button>
            <span class="action-count like-count">${n}</span>
          </div>

          <!-- Comment Button -->
          <div class="action-btn-group">
            <button class="action-icon-btn" data-action="comment" title="Comments (C)">
              ${e.comment(24)}
            </button>
            <span class="action-count">${r}</span>
          </div>

          <!-- Save / Bookmark Button -->
          <div class="action-btn-group">
            <button class="action-icon-btn ${t.isSaved?`saved`:``}" data-action="save" title="Save / Bookmark">
              ${e.bookmark(24,t.isSaved?`#ffaa00`:`none`)}
            </button>
            <span class="action-count save-count">${t.isSaved?`Saved`:`Save`}</span>
          </div>

          <!-- Share Button -->
          <div class="action-btn-group">
            <button class="action-icon-btn" data-action="share" title="Share">
              ${e.share(24)}
            </button>
            <span class="action-count">${i}</span>
          </div>

          <!-- Rotating Sound Vinyl Disc -->
          <div class="music-disc-wrap" data-action="sound" title="${t.soundTitle}">
            <div class="music-disc paused">
              <img src="${t.coverUrl||t.creator.avatar}" alt="sound" class="disc-center-art" />
            </div>
          </div>
        </div>

        <!-- Bottom Meta Overlay -->
        <div class="video-meta-overlay">
          <div class="creator-header-line">
            <span class="creator-name" data-action="profile">@${t.creator.username}</span>
            ${t.creator.isVerified?`<span class="verified-icon">${e.verified(15)}</span>`:``}
          </div>

          <div class="video-caption-text">
            ${a}
          </div>

          <div class="sound-badge-bar" data-action="sound">
            <span>${e.music(14)}</span>
            <span class="sound-marquee">${t.soundTitle}</span>
          </div>
        </div>

        <!-- Video Progress Bar Scrubber -->
        <div class="video-progress-bar-container">
          <div class="video-progress-fill">
            <div class="video-progress-handle"></div>
          </div>
        </div>
      </div>
    `,this.element=o,this.videoEl=o.querySelector(`.video-element`),this.canvasEl=o.querySelector(`.video-canvas-fallback`),this.bindEvents(),o}bindEvents(){if(!this.element)return;this.videoEl.addEventListener(`error`,()=>{this.useCanvasFallback()}),this.videoEl.addEventListener(`click`,e=>{let t=Date.now();t-this.lastTapTime<300?this.handleDoubleTap(e):this.togglePlay(),this.lastTapTime=t}),this.videoEl.addEventListener(`timeupdate`,()=>{if(this.videoEl.duration){let e=this.videoEl.currentTime/this.videoEl.duration*100,t=this.element.querySelector(`.video-progress-fill`);t&&(t.style.width=`${e}%`)}});let e=this.element.querySelector(`.video-progress-bar-container`);e&&e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width;this.videoEl.duration&&(this.videoEl.currentTime=r*this.videoEl.duration)});let t=this.element.querySelector(`.sound-toggle-btn`);t&&t.addEventListener(`click`,e=>{e.stopPropagation(),this.toggleMute()}),this.element.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-action`);this.handleAction(n,e)})})}useCanvasFallback(){this.videoEl.style.display=`none`,this.canvasEl.style.display=`block`,this.visualizer||=new d(this.canvasEl,this.video.fallbackTheme||`neon_flux`)}play(){if(this.isPlaying)return;this.isPlaying=!0;let e=this.videoEl.play();e!==void 0&&e.catch(()=>{this.useCanvasFallback(),this.visualizer&&this.visualizer.start()}),this.visualizer&&this.visualizer.start();let t=this.element.querySelector(`.music-disc`);t&&t.classList.remove(`paused`),this.isMuted||u.playTrack(this.video.fallbackTheme===`cyber`?`synthwave`:`ambient`)}pause(){if(!this.isPlaying)return;this.isPlaying=!1,this.videoEl.pause(),this.visualizer&&this.visualizer.stop();let e=this.element.querySelector(`.music-disc`);e&&e.classList.add(`paused`),u.stop()}togglePlay(){this.isPlaying?(this.pause(),this.showIndicator(e.pause(36))):(this.play(),this.showIndicator(e.play(36)))}toggleMute(){this.isMuted=!this.isMuted,this.videoEl.muted=this.isMuted;let t=this.element.querySelector(`.sound-toggle-btn`);t&&(t.innerHTML=this.isMuted?e.volumeX(18):e.volume(18)),!this.isMuted&&this.isPlaying?(u.playTrack(this.video.fallbackTheme===`cyber`?`synthwave`:`ambient`),l.info(`Sound On 🎵`,1500)):(u.stop(),l.info(`Sound Muted`,1500))}showIndicator(e){let t=this.element.querySelector(`.play-pause-indicator`);t&&(t.innerHTML=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),400))}handleDoubleTap(e){let t=this.element.querySelector(`.video-player-container`),n=document.createElement(`div`);n.className=`double-tap-heart`,n.innerHTML=`❤️`;let r=t.getBoundingClientRect(),i=e.clientX??(e.touches?.[0]?.clientX||e.changedTouches?.[0]?.clientX||r.left+r.width/2),a=e.clientY??(e.touches?.[0]?.clientY||e.changedTouches?.[0]?.clientY||r.top+r.height/2),o=i-r.left,s=a-r.top;n.style.left=`${o}px`,n.style.top=`${s}px`,t.appendChild(n),setTimeout(()=>n.remove(),800),this.video.isLiked||this.handleAction(`like`)}async handleAction(t,n){if(t===`like`){let t=await c.toggleLike(this.video.id);if(t){this.video.isLiked=t.liked,this.video.likesCount=t.likesCount;let n=this.element.querySelector(`[data-action="like"]`),r=this.element.querySelector(`.like-count`);n&&(n.classList.toggle(`liked`,t.liked),n.innerHTML=e.heart(24,t.liked?`#FE2C55`:`none`)),r&&(r.textContent=this.formatNumber(t.likesCount)),t.liked&&l.success(`Liked! ❤️`)}}else if(t===`save`){let t=await c.toggleSave(this.video.id);if(t){this.video.isSaved=t.saved;let n=this.element.querySelector(`[data-action="save"]`),r=this.element.querySelector(`.save-count`);n&&(n.classList.toggle(`saved`,t.saved),n.innerHTML=e.bookmark(24,t.saved?`#ffaa00`:`none`)),r&&(r.textContent=t.saved?`Saved`:`Save`),l.info(t.saved?`Added to Favorites 🔖`:`Removed from Favorites`)}}else if(t===`follow`){let e=await c.toggleFollow(this.video.userId);if(e){this.video.isFollowing=e.following;let t=this.element.querySelector(`.follow-plus-badge`);t&&t.remove(),l.success(`Following @${this.video.creator.username}! ✨`)}}else t===`comment`?this.options.onOpenComments&&this.options.onOpenComments(this.video):t===`share`?this.options.onOpenShare&&this.options.onOpenShare(this.video):t===`profile`?this.options.onNavigate&&this.options.onNavigate(`profile/${this.video.creator.username}`):t===`sound`&&l.info(`🎵 ${this.video.soundTitle}`)}formatCaption(e=``,t=[]){let n=e;return t.forEach(e=>{n=n.replace(RegExp(`(#${e})\\b`,`gi`),`<span class="hashtag-tag">#${e}</span>`)}),n}formatNumber(e=0){return e>=1e9?(e/1e9).toFixed(1)+`B`:e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}},p=class{constructor(e={}){this.options=e,this.currentTab=e.initialTab||`forYou`,this.videos=[],this.videoCards=[],this.activeCardIndex=0,this.observer=null,this.container=null,this.feedScrollEl=null}async render(){let t=document.createElement(`div`);return t.className=`feed-layout`,this.container=t,t.innerHTML=`
      <div style="display:flex; flex-direction:column; align-items:center; width:100%; position:relative;">
        <!-- Feed Top Tabs -->
        <div class="feed-tabs-header">
          <button class="feed-tab-btn ${this.currentTab===`following`?`active`:``}" data-tab="following">
            Following
          </button>
          <button class="feed-tab-btn ${this.currentTab===`friends`?`active`:``}" data-tab="friends">
            Friends
          </button>
          <button class="feed-tab-btn ${this.currentTab===`forYou`?`active`:``}" data-tab="forYou">
            For You
          </button>
        </div>

        <!-- Snap Feed Container -->
        <div class="feed-container no-scrollbar" id="feed-scroll-container">
          <div class="feed-loading" style="padding:40px; text-align:center; color:var(--text-tertiary);">
            Loading TikTok Feed...
          </div>
        </div>

        <!-- Floating Desktop Up / Down Navigation Controls -->
        <div class="feed-nav-controls">
          <button class="feed-nav-btn" id="feed-prev-btn" title="Previous Video (Up / K)">
            ${e.arrowUp(20)}
          </button>
          <button class="feed-nav-btn" id="feed-next-btn" title="Next Video (Down / J)">
            ${e.arrowDown(20)}
          </button>
        </div>
      </div>

      <!-- Right Utility Sidebar (TikTok Web Style) -->
      <aside class="feed-utility-sidebar">
        <div class="glass-card" style="padding:18px; border-radius:12px;">
          <div style="font-weight:800; font-size:15px; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
            <span>🔥</span> Trending on TikTok
          </div>
          <div class="suggested-creators-list" id="feed-suggested-creators">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <div class="glass-card" style="padding:18px; border-radius:12px;">
          <div style="font-weight:800; font-size:15px; margin-bottom:12px; display:flex; align-items:center; gap:6px;">
            <span>🎵</span> Popular Sounds
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${r.data.sounds.map(e=>`
              <div style="display:flex; align-items:center; gap:10px; cursor:pointer;" data-sound-item="${e.title}">
                <img src="${e.cover}" style="width:36px; height:36px; border-radius:6px; object-fit:cover;" />
                <div style="min-width:0; flex:1;">
                  <div style="font-size:13px; font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${e.title}</div>
                  <div style="font-size:11px; color:var(--text-tertiary);">${e.artist}</div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <div style="font-size:11px; color:var(--text-tertiary); line-height:1.6; padding:0 8px;">
          Company • Program • Terms & Policies<br>
          © 2026 TikTok
        </div>
      </aside>
    `,this.feedScrollEl=t.querySelector(`#feed-scroll-container`),this.bindEvents(t),this.loadVideos(),this.loadSuggestedCreators(t),t}async loadVideos(){if(this.feedScrollEl.innerHTML=`
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:60vh; gap:12px;">
        <div style="width:36px; height:36px; border:3px solid var(--border-medium); border-top-color:var(--brand-primary); border-radius:50%; animation:spin 0.8s linear infinite;"></div>
        <div style="font-size:13px; color:var(--text-tertiary);">Loading your personalized For You feed...</div>
      </div>
    `,this.videos=await c.getFeed(this.currentTab),this.feedScrollEl.innerHTML=``,this.videoCards=[],this.videos.length===0){this.feedScrollEl.innerHTML=`
        <div style="padding:80px 20px; text-align:center; color:var(--text-tertiary);">
          <h3>No videos yet in this tab</h3>
          <p style="margin-top:6px; font-size:13px;">Follow creators or explore trending videos!</p>
        </div>
      `;return}this.videos.forEach(e=>{let t=new f(e,{onOpenComments:this.options.onOpenComments,onOpenShare:this.options.onOpenShare,onNavigate:this.options.onNavigate}),n=t.render();this.feedScrollEl.appendChild(n),this.videoCards.push(t)}),this.initIntersectionObserver()}async loadSuggestedCreators(t){let n=t.querySelector(`#feed-suggested-creators`);n&&(n.innerHTML=r.data.users.slice(0,4).map(t=>`
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; cursor:pointer;" data-user-profile="${t.username}">
        <div style="display:flex; align-items:center; gap:10px;">
          <img src="${t.avatar}" style="width:38px; height:38px; border-radius:50%; object-fit:cover;" />
          <div>
            <div style="font-size:13px; font-weight:700; display:flex; align-items:center; gap:4px;">
              ${t.username} ${t.isVerified?e.verified(13):``}
            </div>
            <div style="font-size:11px; color:var(--text-tertiary);">${t.displayName}</div>
          </div>
        </div>
        <button class="btn btn-primary btn-sm" style="font-size:12px; padding:4px 14px; font-weight:700;">Follow</button>
      </div>
    `).join(``),n.querySelectorAll(`[data-user-profile]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-user-profile`);this.options.onNavigate&&this.options.onNavigate(`profile/${t}`)})}))}initIntersectionObserver(){this.observer&&this.observer.disconnect(),this.observer=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target.getAttribute(`data-video-id`),n=this.videoCards.find(e=>e.video.id===t);n&&(e.isIntersecting&&e.intersectionRatio>=.6?(n.play(),this.activeCardIndex=this.videoCards.indexOf(n)):n.pause())})},{root:this.feedScrollEl,threshold:[.6]}),this.videoCards.forEach(e=>{e.element&&this.observer.observe(e.element)})}bindEvents(e){e.querySelectorAll(`.feed-tab-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-tab`);n!==this.currentTab&&(this.currentTab=n,e.querySelectorAll(`.feed-tab-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),this.loadVideos())})});let t=e.querySelector(`#feed-prev-btn`),n=e.querySelector(`#feed-next-btn`);t&&t.addEventListener(`click`,()=>this.scrollByIndex(this.activeCardIndex-1)),n&&n.addEventListener(`click`,()=>this.scrollByIndex(this.activeCardIndex+1));let r=0,i=0,a=0;this.feedScrollEl&&(this.feedScrollEl.addEventListener(`touchstart`,e=>{e.touches&&e.touches[0]&&(r=e.touches[0].clientY,i=e.touches[0].clientX,a=Date.now())},{passive:!0}),this.feedScrollEl.addEventListener(`touchend`,e=>{if(!e.changedTouches||!e.changedTouches[0])return;let t=e.changedTouches[0].clientY-r,n=e.changedTouches[0].clientX-i,o=Date.now()-a;Math.abs(t)>Math.abs(n)&&Math.abs(t)>40&&o<400&&(t<0?this.scrollByIndex(this.activeCardIndex+1):this.scrollByIndex(this.activeCardIndex-1))},{passive:!0})),e.querySelectorAll(`[data-sound-item]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-sound-item`);this.options.onNavigate&&this.options.onNavigate(`explore?q=${encodeURIComponent(t)}`)})})}scrollByIndex(e){if(e<0||e>=this.videoCards.length)return;let t=this.videoCards[e];t&&t.element&&t.element.scrollIntoView({behavior:`smooth`,block:`start`})}handleGlobalKeydown(e){if(![`INPUT`,`TEXTAREA`].includes(document.activeElement?.tagName)){if(e.key===`ArrowDown`||e.key===`j`)e.preventDefault(),this.scrollByIndex(this.activeCardIndex+1);else if(e.key===`ArrowUp`||e.key===`k`)e.preventDefault(),this.scrollByIndex(this.activeCardIndex-1);else if(e.key===` `){e.preventDefault();let t=this.videoCards[this.activeCardIndex];t&&t.togglePlay()}else if(e.key===`m`||e.key===`M`){let e=this.videoCards[this.activeCardIndex];e&&e.toggleMute()}else if(e.key===`l`||e.key===`L`){let e=this.videoCards[this.activeCardIndex];e&&e.handleAction(`like`)}}}destroy(){this.observer&&this.observer.disconnect(),this.videoCards.forEach(e=>e.pause())}},m=class{constructor(e={}){this.options=e,this.searchQuery=e.searchQuery||``,this.activeCategory=`all`,this.activeTab=`all`,this.searchResults={videos:[],users:[],sounds:[],hashtags:[]},this.playingSoundId=null,this.container=null}async render(){let t=document.createElement(`div`);return t.className=`main-container`,this.container=t,t.innerHTML=`
      <div class="explore-container">
        <!-- Hero Banner Spotlight -->
        <div class="explore-hero-card" style="background:linear-gradient(120deg, #121212 0%, #1a1a24 40%, #20101b 100%); border-color:var(--border-subtle);">
          <div class="explore-hero-content">
            <span class="explore-hero-badge" style="background:rgba(254,44,85,0.2); color:#fe2c55; border-color:rgba(254,44,85,0.4);">#TrendsStartHere</span>
            <h2 class="explore-hero-title">Discover Viral TikTok Moments</h2>
            <p class="explore-hero-desc">Explore the most popular videos, viral creators, trending hashtags, and top tracks shaping culture worldwide.</p>
            <button class="btn btn-primary" style="width:fit-content; margin-top:6px;" id="hero-join-btn">
              <span>Create Video</span> ${e.upload(16)}
            </button>
          </div>
        </div>

        <!-- Search Input Bar -->
        <div class="explore-search-input-wrap">
          <span class="explore-search-icon">${e.search(18)}</span>
          <input type="text" id="explore-search-field" placeholder="Search accounts, videos, sounds, and hashtags..." value="${this.searchQuery}" />
          ${this.searchQuery?`<button class="explore-search-clear-btn" id="explore-search-clear">${e.close(16)}</button>`:``}
        </div>

        <!-- Category Filter Pills -->
        <div class="category-chips-scroll no-scrollbar">
          <button class="category-chip ${this.activeCategory===`all`?`active`:``}" data-cat="all">✨ All</button>
          <button class="category-chip ${this.activeCategory===`Comedy`?`active`:``}" data-cat="Comedy">😂 Comedy</button>
          <button class="category-chip ${this.activeCategory===`Dance`?`active`:``}" data-cat="Dance">💃 Dance</button>
          <button class="category-chip ${this.activeCategory===`Music`?`active`:``}" data-cat="Music">🎵 Music</button>
          <button class="category-chip ${this.activeCategory===`Gaming`?`active`:``}" data-cat="Gaming">🎮 Gaming</button>
          <button class="category-chip ${this.activeCategory===`Food`?`active`:``}" data-cat="Food">🍔 Food & Drink</button>
          <button class="category-chip ${this.activeCategory===`Beauty`?`active`:``}" data-cat="Beauty">💄 Beauty & Style</button>
          <button class="category-chip ${this.activeCategory===`Sports`?`active`:``}" data-cat="Sports">⚽ Sports</button>
        </div>

        <!-- Multi-Tab Search Results -->
        <div class="search-results-tabs">
          <button class="search-tab-btn ${this.activeTab===`all`?`active`:``}" data-search-tab="all">Top</button>
          <button class="search-tab-btn ${this.activeTab===`users`?`active`:``}" data-search-tab="users">Accounts</button>
          <button class="search-tab-btn ${this.activeTab===`videos`?`active`:``}" data-search-tab="videos">Videos</button>
          <button class="search-tab-btn ${this.activeTab===`sounds`?`active`:``}" data-search-tab="sounds">Sounds</button>
          <button class="search-tab-btn ${this.activeTab===`hashtags`?`active`:``}" data-search-tab="hashtags">Hashtags</button>
        </div>

        <!-- Search Results Dynamic Area -->
        <div id="explore-results-body">
          <div style="padding:40px; text-align:center; color:var(--text-tertiary);">
            Loading TikTok Explore...
          </div>
        </div>
      </div>
    `,this.bindEvents(t),await this.fetchData(),t}async fetchData(){this.searchResults=await c.search(this.searchQuery),this.renderResults()}renderResults(){let e=this.container.querySelector(`#explore-results-body`);if(!e)return;let{videos:t,users:n,sounds:r,hashtags:i}=this.searchResults;e.innerHTML=this.activeTab===`videos`?this.renderVideoGrid(t):this.activeTab===`users`?this.renderCreatorsGrid(n):this.activeTab===`sounds`?this.renderSoundsGrid(r):this.activeTab===`hashtags`?this.renderHashtagsGrid(i):`
        <div style="display:flex; flex-direction:column; gap:32px;">
          <!-- Top Creators Section -->
          <div>
            <div class="explore-section-header">
              <span class="explore-section-title"><span>🌟</span> Popular TikTok Creators</span>
              <span class="explore-see-all" data-switch-tab="users">See All</span>
            </div>
            ${this.renderCreatorsGrid(n.slice(0,4))}
          </div>

          <!-- Trending Sounds Section -->
          <div>
            <div class="explore-section-header">
              <span class="explore-section-title"><span>🎵</span> Trending Sounds</span>
              <span class="explore-see-all" data-switch-tab="sounds">See All</span>
            </div>
            ${this.renderSoundsGrid(r.slice(0,3))}
          </div>

          <!-- Trending Hashtags Section -->
          <div>
            <div class="explore-section-header">
              <span class="explore-section-title"><span>🏷️</span> Viral Hashtags</span>
              <span class="explore-see-all" data-switch-tab="hashtags">See All</span>
            </div>
            ${this.renderHashtagsGrid(i)}
          </div>

          <!-- Video Matrix Section -->
          <div>
            <div class="explore-section-header">
              <span class="explore-section-title"><span>🔥</span> Trending Videos</span>
            </div>
            ${this.renderVideoGrid(t)}
          </div>
        </div>
      `,this.bindResultInteractions(e)}renderVideoGrid(t){return!t||t.length===0?`<div style="padding:40px; text-align:center; color:var(--text-tertiary);">No videos found matching your query.</div>`:`
      <div class="video-grid-matrix">
        ${t.map(t=>`
          <div class="grid-video-card" data-video-jump="${t.id}">
            <img src="${t.coverUrl||t.creator.avatar}" alt="thumb" class="grid-video-thumb" />
            <video src="${t.videoUrl}" muted loop class="grid-video-preview" preload="none"></video>

            <div class="grid-video-overlay-bottom">
              <div class="grid-video-caption">${t.caption}</div>
              <div class="grid-video-stats">
                <span class="grid-video-plays">${e.play(12)} ${this.formatNumber(t.viewsCount)}</span>
                <span class="grid-video-likes">${e.heart(12,`#fe2c55`)} ${this.formatNumber(t.likesCount)}</span>
              </div>
            </div>
          </div>
        `).join(``)}
      </div>
    `}renderCreatorsGrid(t){return!t||t.length===0?`<div style="padding:40px; text-align:center; color:var(--text-tertiary);">No accounts found.</div>`:`
      <div class="creators-grid">
        ${t.map(t=>`
          <div class="creator-card" data-creator-profile="${t.username}">
            <img src="${t.avatar}" alt="${t.displayName}" class="creator-card-avatar" />
            <div class="creator-card-name">
              ${t.displayName}
              ${t.isVerified?e.verified(13):``}
            </div>
            <div class="creator-card-handle">@${t.username}</div>
            <div class="creator-card-stats">${this.formatNumber(t.followersCount)} followers</div>
            <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700;" data-follow-user="${t.id}">Follow</button>
          </div>
        `).join(``)}
      </div>
    `}renderSoundsGrid(t){return!t||t.length===0?`<div style="padding:40px; text-align:center; color:var(--text-tertiary);">No sounds found.</div>`:`
      <div class="trending-sounds-grid">
        ${t.map(t=>`
          <div class="sound-item-card" data-sound-id="${t.id}">
            <div class="sound-cover-btn" data-play-sound="${t.id}" data-sound-type="${t.type||`synthwave`}">
              <img src="${t.cover}" alt="${t.title}" />
              <div style="position:absolute; inset:0; background:rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center;">
                ${this.playingSoundId===t.id?e.pause(20):e.play(20)}
              </div>
            </div>
            <div class="sound-meta-info">
              <div class="sound-title">${t.title}</div>
              <div class="sound-artist">${t.artist}</div>
              <div class="sound-use-count">${t.useCount?.toLocaleString()||`1.2M`} videos</div>
            </div>
            <button class="use-sound-btn" data-use-sound="${t.title}">Use sound</button>
          </div>
        `).join(``)}
      </div>
    `}renderHashtagsGrid(e){return!e||e.length===0?`<div style="padding:40px; text-align:center; color:var(--text-tertiary);">No hashtags found.</div>`:`
      <div class="hashtags-grid">
        ${e.map(e=>`
          <div class="hashtag-card" data-tag-search="${e}">
            <div class="hashtag-symbol" style="background:rgba(254,44,85,0.15); color:#fe2c55;">#</div>
            <div>
              <div style="font-weight:700; font-size:14px;">${e}</div>
              <div style="font-size:11px; color:var(--text-tertiary);">Trending • 1.8B views</div>
            </div>
          </div>
        `).join(``)}
      </div>
    `}bindEvents(e){let t=e.querySelector(`#explore-search-field`);if(t){let e=null;t.addEventListener(`input`,()=>{clearTimeout(e),e=setTimeout(()=>{this.searchQuery=t.value,this.fetchData()},250)})}let n=e.querySelector(`#explore-search-clear`);n&&searchField&&n.addEventListener(`click`,()=>{searchField.value=``,this.searchQuery=``,this.fetchData(),n.remove()});let r=e.querySelector(`#hero-join-btn`);r&&r.addEventListener(`click`,()=>{this.options.onNavigate&&this.options.onNavigate(`upload`)}),e.querySelectorAll(`.category-chip`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.category-chip`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),this.activeCategory=t.getAttribute(`data-cat`);let n=e.querySelector(`#explore-search-field`);n&&(n.value=this.activeCategory===`all`?``:this.activeCategory,this.searchQuery=n.value,this.fetchData())})}),e.querySelectorAll(`.search-tab-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.search-tab-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),this.activeTab=t.getAttribute(`data-search-tab`),this.renderResults()})})}bindResultInteractions(e){e.querySelectorAll(`.grid-video-card`).forEach(e=>{let t=e.querySelector(`.grid-video-preview`);e.addEventListener(`mouseenter`,()=>{t&&t.play().catch(()=>{})}),e.addEventListener(`mouseleave`,()=>{t&&(t.pause(),t.currentTime=0)}),e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-video-jump`);this.options.onNavigate&&this.options.onNavigate(`feed#${t}`)})}),e.querySelectorAll(`[data-creator-profile]`).forEach(e=>{e.addEventListener(`click`,t=>{if(t.target.closest(`[data-follow-user]`))return;let n=e.getAttribute(`data-creator-profile`);this.options.onNavigate&&this.options.onNavigate(`profile/${n}`)})}),e.querySelectorAll(`[data-follow-user]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let n=e.getAttribute(`data-follow-user`),r=await c.toggleFollow(n);r&&(e.textContent=r.following?`Following`:`Follow`,e.classList.toggle(`btn-secondary`,r.following),e.classList.toggle(`btn-primary`,!r.following),l.success(r.following?`Following account!`:`Unfollowed`))})}),e.querySelectorAll(`[data-play-sound]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-play-sound`),r=e.getAttribute(`data-sound-type`)||`synthwave`;this.playingSoundId===n?(u.stop(),this.playingSoundId=null):(u.playTrack(r),this.playingSoundId=n,l.info(`Playing sound sample 🎵`,2e3)),this.renderResults()})}),e.querySelectorAll(`[data-use-sound]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-use-sound`);l.success(`Loaded sound "${n}" into TikTok Studio!`),this.options.onNavigate&&this.options.onNavigate(`upload`)})}),e.querySelectorAll(`[data-tag-search]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tag-search`),n=this.container.querySelector(`#explore-search-field`);n&&(n.value=t,this.searchQuery=t,this.fetchData())})}),e.querySelectorAll(`[data-switch-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-switch-tab`);this.activeTab=t,this.container.querySelectorAll(`.search-tab-btn`).forEach(e=>{e.classList.toggle(`active`,e.getAttribute(`data-search-tab`)===t)}),this.renderResults()})})}formatNumber(e=0){return e>=1e9?(e/1e9).toFixed(1)+`B`:e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}destroy(){u.stop()}},h={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),h,!1);var g=h.exports;h.exports.create;var _=class{constructor(e={}){this.options=e,this.videoFile=null,this.videoBlobUrl=null,this.coverUrl=`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80`,this.selectedSoundTitle=`original sound - Khabane lame`,this.allowComments=!0,this.allowSharing=!0,this.allowDuet=!0,this.privacy=`public`,this.isPublishing=!1,this.container=null}render(){let t=document.createElement(`div`);return t.className=`main-container`,this.container=t,t.innerHTML=`
      <div class="upload-container">
        <div class="upload-header">
          <h1 class="upload-title">TikTok Creator Studio • Upload video</h1>
          <p class="upload-subtitle">Post a video to your TikTok account</p>
        </div>

        <div class="upload-grid">
          <!-- Left Column: Video Uploader & Live Preview -->
          <div class="upload-preview-column">
            <!-- Dropzone -->
            <div class="upload-dropzone" id="upload-dropzone-box" style="${this.videoBlobUrl?`display:none;`:``}">
              <div class="upload-icon-circle" style="background:rgba(254,44,85,0.15); color:#fe2c55;">
                ${e.upload(32)}
              </div>
              <div class="dropzone-title">Select video to upload</div>
              <div class="dropzone-desc">Or drag and drop a file. MP4 or WebM, 720x1280 resolution or higher, up to 10 minutes, less than 2 GB.</div>
              
              <button class="btn btn-primary" id="dropzone-browse-btn" style="border-radius:4px; font-weight:700; width:100%; max-width:200px;">
                Select file
              </button>

              <div style="margin-top:20px;">
                <span style="font-size:11px; color:var(--text-tertiary);">Or load sample clip:</span>
                <div style="display:flex; gap:6px; margin-top:6px; justify-content:center;">
                  <button class="btn btn-secondary btn-sm" id="load-sample-neon">Dance Clip</button>
                  <button class="btn btn-secondary btn-sm" id="load-sample-cyber">Viral Tunnel</button>
                </div>
              </div>

              <input type="file" id="video-file-input" class="hidden-file-input" accept="video/*,video/mp4,video/webm,video/ogg,video/quicktime" />
            </div>

            <!-- Active Video Preview Container -->
            <div class="active-preview-container" id="active-preview-wrap" style="${this.videoBlobUrl?``:`display:none;`}">
              <video id="studio-preview-video" class="active-preview-video" src="${this.videoBlobUrl||``}" controls loop playsinline></video>
              
              <div class="preview-controls-overlay">
                <span class="preview-pill-badge">9:16 Vertical</span>
                <button class="btn btn-secondary btn-sm" id="change-video-btn" style="background:rgba(0,0,0,0.6); color:#fff; border:none;">Change</button>
              </div>
            </div>

            <!-- Video Trimmer Scrubber -->
            <div class="trimmer-container" id="trimmer-box" style="${this.videoBlobUrl?``:`display:none;`}">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700;">Split / Trim video</span>
                <span style="font-size:11px; color:var(--brand-primary);">0:00 - 0:15</span>
              </div>
              <div class="trimmer-track" style="border-color:#fe2c55;">
                <div class="trimmer-frames-strip" id="trimmer-frames">
                  <div class="trimmer-handle trimmer-handle-left" style="background:#fe2c55;"></div>
                  <div class="trimmer-handle trimmer-handle-right" style="background:#fe2c55;"></div>
                </div>
              </div>
              <div class="trim-time-labels">
                <span>Start: 0.0s</span>
                <span>Duration: 15.0s</span>
                <span>End: 15.0s</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Metadata & Publication Settings -->
          <div class="upload-form-column">
            <!-- Caption Input -->
            <div class="form-group">
              <div class="form-label">
                <span>Caption</span>
                <span class="char-counter" id="caption-char-count">0 / 2200</span>
              </div>
              <textarea id="video-caption-input" class="caption-textarea" placeholder="Add a caption and #hashtags to help viewers discover your video"></textarea>
            </div>

            <!-- Tag Shortcuts Bar -->
            <div class="tag-shortcuts-bar">
              <span style="font-size:12px; color:var(--text-tertiary); font-weight:600;">Trending on TikTok:</span>
              <button class="tag-shortcut-btn" data-insert-tag="#fyp">#fyp</button>
              <button class="tag-shortcut-btn" data-insert-tag="#viral">#viral</button>
              <button class="tag-shortcut-btn" data-insert-tag="#dance">#dance</button>
              <button class="tag-shortcut-btn" data-insert-tag="#comedy">#comedy</button>
              <button class="tag-shortcut-btn" data-insert-tag="#learnontiktok">#learnontiktok</button>
            </div>

            <!-- Thumbnail / Cover Selector -->
            <div class="form-group">
              <div class="form-label">
                <span>Cover</span>
                <span style="font-size:11px; color:var(--text-tertiary);">Select thumbnail</span>
              </div>
              <div class="cover-picker-strip">
                <div class="cover-thumb-item selected" data-cover-url="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600">
                  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200" />
                </div>
                <div class="cover-thumb-item" data-cover-url="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600">
                  <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200" />
                </div>
                <div class="cover-thumb-item" data-cover-url="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600">
                  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200" />
                </div>
                <div class="cover-thumb-item" data-cover-url="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200" />
                </div>
              </div>
            </div>

            <!-- Sound Attachment Selector -->
            <div class="form-group">
              <label class="form-label">Sound</label>
              <div class="sound-selector-box" id="sound-selector-row">
                <div class="sound-selected-info">
                  <div class="sound-selected-icon" style="background:#fe2c55;">${e.music(16)}</div>
                  <div>
                    <div style="font-size:13px; font-weight:700;" id="selected-sound-name">${this.selectedSoundTitle}</div>
                    <div style="font-size:11px; color:var(--text-tertiary);">Original Sound • 0:15</div>
                  </div>
                </div>
                <button class="btn btn-secondary btn-sm" id="change-sound-btn">Change</button>
              </div>
            </div>

            <!-- Privacy Setting -->
            <div class="form-group">
              <label class="form-label">Who can watch this video</label>
              <select id="privacy-select">
                <option value="public" selected>Public</option>
                <option value="friends">Friends</option>
                <option value="private">Private</option>
              </select>
            </div>

            <!-- Social Interactions Switches -->
            <div class="form-group">
              <div class="switch-row">
                <div class="switch-label-group">
                  <span class="switch-title">Allow users to: Comment</span>
                  <span class="switch-desc">Users can comment and reply on your video</span>
                </div>
                <div class="toggle-switch active" id="toggle-comments">
                  <div class="toggle-knob"></div>
                </div>
              </div>

              <div class="switch-row">
                <div class="switch-label-group">
                  <span class="switch-title">Allow users to: Duet & Stitch</span>
                  <span class="switch-desc">Other creators can remix your video</span>
                </div>
                <div class="toggle-switch active" id="toggle-duet">
                  <div class="toggle-knob"></div>
                </div>
              </div>

              <div class="switch-row">
                <div class="switch-label-group">
                  <span class="switch-title">Allow users to: Share</span>
                  <span class="switch-desc">Enable sharing to external apps and messages</span>
                </div>
                <div class="toggle-switch active" id="toggle-sharing">
                  <div class="toggle-knob"></div>
                </div>
              </div>
            </div>

            <!-- Upload Progress Indicator -->
            <div class="upload-progress-box" id="upload-progress-container" style="display:none;">
              <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700;">
                <span id="progress-status-label">Uploading to TikTok servers...</span>
                <span id="progress-pct-label">0%</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" id="progress-fill-bar"></div>
              </div>
            </div>

            <!-- Action Footer Buttons -->
            <div class="upload-actions-footer">
              <button class="btn btn-secondary" id="save-draft-btn">Discard</button>
              <button class="btn btn-primary btn-lg" id="publish-video-btn" style="min-width:140px; font-weight:700;">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.bindEvents(t),t}bindEvents(e){let t=e.querySelector(`#video-file-input`),n=e.querySelector(`#upload-dropzone-box`),r=e.querySelector(`#dropzone-browse-btn`);r&&t&&r.addEventListener(`click`,e=>{e.stopPropagation(),t.click()}),n&&t&&(n.addEventListener(`click`,()=>t.click()),n.addEventListener(`dragover`,e=>{e.preventDefault(),n.classList.add(`dragover`)}),n.addEventListener(`dragleave`,()=>{n.classList.remove(`dragover`)}),n.addEventListener(`drop`,t=>{t.preventDefault(),n.classList.remove(`dragover`),t.dataTransfer.files&&t.dataTransfer.files[0]&&this.handleFileSelected(t.dataTransfer.files[0],e)}),t.addEventListener(`change`,()=>{t.files&&t.files[0]&&this.handleFileSelected(t.files[0],e)}));let i=e.querySelector(`#load-sample-neon`),a=e.querySelector(`#load-sample-cyber`);i&&i.addEventListener(`click`,t=>{t.stopPropagation(),this.loadSampleVideo(`https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-neon-room-41584-large.mp4`,e)}),a&&a.addEventListener(`click`,t=>{t.stopPropagation(),this.loadSampleVideo(`https://assets.mixkit.co/videos/preview/mixkit-futuristic-tunnel-with-purple-neon-lights-42999-large.mp4`,e)});let o=e.querySelector(`#change-video-btn`);o&&o.addEventListener(`click`,()=>{this.videoBlobUrl=null,e.querySelector(`#upload-dropzone-box`).style.display=`flex`,e.querySelector(`#active-preview-wrap`).style.display=`none`,e.querySelector(`#trimmer-box`).style.display=`none`});let s=e.querySelector(`#video-caption-input`),c=e.querySelector(`#caption-char-count`);s&&c&&s.addEventListener(`input`,()=>{c.textContent=`${s.value.length} / 2200`}),e.querySelectorAll(`[data-insert-tag]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-insert-tag`);s&&(s.value=(s.value+` `+t).trim()+` `,s.focus(),c.textContent=`${s.value.length} / 2200`)})}),e.querySelectorAll(`.cover-thumb-item`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.cover-thumb-item`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`),this.coverUrl=t.getAttribute(`data-cover-url`)})}),this.setupToggle(e,`#toggle-comments`,e=>this.allowComments=e),this.setupToggle(e,`#toggle-duet`,e=>this.allowDuet=e),this.setupToggle(e,`#toggle-sharing`,e=>this.allowSharing=e);let u=e.querySelector(`#save-draft-btn`);u&&u.addEventListener(`click`,()=>{l.info(`Discarded upload`),this.options.onNavigate&&this.options.onNavigate(`feed`)});let d=e.querySelector(`#publish-video-btn`);d&&d.addEventListener(`click`,()=>this.handlePublish(e))}handleFileSelected(e,t){this.videoFile=e,this.videoBlobUrl=URL.createObjectURL(e),this.showVideoPreview(t)}loadSampleVideo(e,t){this.videoBlobUrl=e,this.showVideoPreview(t)}showVideoPreview(e){let t=e.querySelector(`#upload-dropzone-box`),n=e.querySelector(`#active-preview-wrap`),r=e.querySelector(`#studio-preview-video`),i=e.querySelector(`#trimmer-box`);t&&(t.style.display=`none`),n&&(n.style.display=`block`),i&&(i.style.display=`flex`),r&&(r.src=this.videoBlobUrl,r.play().catch(()=>{})),l.success(`Video loaded! 🎬`)}setupToggle(e,t,n){let r=e.querySelector(t);r&&r.addEventListener(`click`,()=>{n(r.classList.toggle(`active`))})}async handlePublish(e){if(this.isPublishing)return;let t=e.querySelector(`#video-caption-input`),n=t?t.value.trim():``,r=this.videoBlobUrl||`https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-in-a-neon-room-41584-large.mp4`,i=(n.match(/#[a-zA-Z0-9_]+/g)||[`fyp`,`viral`]).map(e=>e.replace(`#`,``));this.isPublishing=!0;let a=e.querySelector(`#upload-progress-container`),o=e.querySelector(`#progress-fill-bar`),s=e.querySelector(`#progress-pct-label`),u=e.querySelector(`#progress-status-label`),d=e.querySelector(`#publish-video-btn`);a&&(a.style.display=`flex`),d&&(d.disabled=!0);for(let e=0;e<=100;e+=25)o&&(o.style.width=`${e}%`),s&&(s.textContent=`${e}%`),u&&(u.textContent=e<50?`Uploading high quality video...`:`Publishing to TikTok feed...`),await new Promise(e=>setTimeout(e,150));await c.createVideo({videoUrl:r,caption:n||`Check out my new video on TikTok! ✨ #fyp`,hashtags:i,coverUrl:this.coverUrl,soundTitle:this.selectedSoundTitle,allowComments:this.allowComments,allowSharing:this.allowSharing,privacy:this.privacy});try{g({particleCount:100,spread:80,origin:{y:.6}})}catch{}l.success(`Your video has been published to TikTok! 🎉`),setTimeout(()=>{this.options.onNavigate&&this.options.onNavigate(`feed`)},700)}},v=class{constructor(e={}){this.options=e,this.username=e.username||a.getCurrentUser()?.username,this.user=null,this.activeTab=`videos`,this.container=null}async render(){let e=document.createElement(`div`);return e.className=`main-container`,this.container=e,e.innerHTML=`
      <div class="profile-container">
        <div style="padding:40px; text-align:center; color:var(--text-tertiary);">
          Loading profile...
        </div>
      </div>
    `,await this.loadProfileData(),e}async loadProfileData(){if(this.user=await c.getUser(this.username),!this.user){this.container.innerHTML=`
        <div class="profile-container" style="padding:60px 20px; text-align:center;">
          <h2>Account not found</h2>
          <button class="btn btn-primary" style="margin-top:16px;" id="back-home-btn">Return Home</button>
        </div>
      `;let e=this.container.querySelector(`#back-home-btn`);e&&this.options.onNavigate&&e.addEventListener(`click`,()=>this.options.onNavigate(`feed`));return}let t=this.user,n=t.isSelf;this.container.innerHTML=`
      <div class="profile-container">
        <!-- Profile Header Card (TikTok Web Style) -->
        <div class="profile-header-card" style="margin-top:0; border-radius:12px; padding:24px 0; background:transparent; border:none; box-shadow:none;">
          <div class="profile-top-row" style="align-items:center;">
            <div class="profile-avatar-block" style="margin-top:0;">
              <img src="${t.avatar}" alt="${t.displayName}" class="profile-avatar-large" style="width:116px; height:116px; border:none;" />
            </div>

            <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
              <div class="profile-identity-info">
                <div class="profile-display-name" style="font-size:26px; font-weight:800;">
                  ${t.username}
                  ${t.isVerified?`<span class="verified-icon">${e.verified(20)}</span>`:``}
                </div>
                <div class="profile-handle-row" style="font-size:16px; font-weight:600; color:var(--text-primary);">
                  <span>${t.displayName}</span>
                </div>
              </div>

              <!-- Profile Actions -->
              <div class="profile-actions-bar" style="margin-top:4px;">
                ${n?`
                  <button class="btn btn-secondary" id="edit-profile-btn" style="border-radius:4px; font-weight:700;">
                    ${e.user(16)} <span>Edit Profile</span>
                  </button>
                  <button class="btn btn-secondary btn-icon" id="profile-share-btn" title="Share Profile" style="border-radius:4px;">
                    ${e.share(18)}
                  </button>
                `:`
                  <button class="btn ${t.isFollowing?`btn-secondary`:`btn-primary`}" id="profile-follow-btn" style="min-width:140px; border-radius:4px; font-weight:700;">
                    <span>${t.isFollowing?`Following`:`Follow`}</span>
                  </button>
                  <button class="btn btn-secondary" id="profile-message-btn" style="border-radius:4px; font-weight:700;">
                    ${e.message(16)} <span>Message</span>
                  </button>
                  <button class="btn btn-secondary btn-icon" id="profile-share-btn" title="Share Profile" style="border-radius:4px;">
                    ${e.share(18)}
                  </button>
                `}
              </div>
            </div>
          </div>

          <!-- Metric Stats -->
          <div class="profile-stats-row" style="border-top:none; padding-top:16px; gap:24px;">
            <div class="profile-stat-item">
              <span class="stat-number">${this.formatNumber(t.followingCount)}</span>
              <span class="stat-label" style="color:var(--text-tertiary); font-size:14px;">Following</span>
            </div>
            <div class="profile-stat-item">
              <span class="stat-number" id="profile-followers-stat">${this.formatNumber(t.followersCount)}</span>
              <span class="stat-label" style="color:var(--text-tertiary); font-size:14px;">Followers</span>
            </div>
            <div class="profile-stat-item">
              <span class="stat-number">${this.formatNumber(t.likesCount)}</span>
              <span class="stat-label" style="color:var(--text-tertiary); font-size:14px;">Likes</span>
            </div>
          </div>

          <!-- Bio -->
          <p class="profile-bio-text" style="margin-top:12px; font-size:14.5px; color:var(--text-primary); line-height:1.5;">${t.bio||`No bio yet.`}</p>

          ${t.website?`
            <a href="${t.website}" target="_blank" rel="noopener" class="profile-link-row" style="margin-top:6px; color:var(--brand-primary); font-weight:700;">
              <span>🔗</span> <span>${t.website.replace(`https://`,``)}</span>
            </a>
          `:``}
        </div>

        <!-- Profile Tabs -->
        <div class="profile-tabs-bar" style="justify-content:flex-start; margin-top:10px;">
          <div class="profile-tab-item ${this.activeTab===`videos`?`active`:``}" data-profile-tab="videos">
            <span>Videos</span>
          </div>
          <div class="profile-tab-item ${this.activeTab===`favorites`?`active`:``}" data-profile-tab="favorites">
            <span>Favorites</span>
          </div>
          <div class="profile-tab-item ${this.activeTab===`liked`?`active`:``}" data-profile-tab="liked">
            <span>Liked</span>
          </div>
        </div>

        <!-- Tab Body Videos Grid -->
        <div id="profile-tab-body"></div>
      </div>
    `,this.renderTabContent(),this.bindEvents()}renderTabContent(){let t=this.container.querySelector(`#profile-tab-body`);if(!t)return;let n=[];if(this.activeTab===`videos`?n=this.user.videos:this.activeTab===`liked`?n=this.user.likedVideos:this.activeTab===`favorites`&&(n=this.user.savedVideos),!n||n.length===0){t.innerHTML=`
        <div class="profile-empty-state">
          <div class="empty-state-icon" style="background:rgba(255,255,255,0.06);">${e.bookmark(28)}</div>
          <div style="font-weight:700; font-size:16px;">No ${this.activeTab} yet</div>
          <p style="font-size:13px; color:var(--text-tertiary);">Videos in this section will appear here.</p>
        </div>
      `;return}t.innerHTML=`
      <div class="profile-videos-grid">
        ${n.map(t=>`
          <div class="profile-video-card" data-video-jump="${t.id}">
            ${t.isPinned?`<span class="pinned-badge" style="background:#fe2c55;">📌 Pinned</span>`:``}
            <img src="${t.coverUrl||t.creator?.avatar}" alt="thumb" />
            <div class="profile-video-overlay">
              <span style="display:flex; align-items:center; gap:4px;">${e.play(12)} ${this.formatNumber(t.viewsCount)}</span>
              <span style="display:flex; align-items:center; gap:4px;">${e.heart(12,`#fe2c55`)} ${this.formatNumber(t.likesCount)}</span>
            </div>
          </div>
        `).join(``)}
      </div>
    `,t.querySelectorAll(`.profile-video-card`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-video-jump`);this.options.onNavigate&&this.options.onNavigate(`feed#${t}`)})})}bindEvents(){this.container.querySelectorAll(`.profile-tab-item`).forEach(e=>{e.addEventListener(`click`,()=>{this.container.querySelectorAll(`.profile-tab-item`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.activeTab=e.getAttribute(`data-profile-tab`),this.renderTabContent()})});let e=this.container.querySelector(`#profile-follow-btn`);e&&e.addEventListener(`click`,async()=>{let t=await c.toggleFollow(this.user.id);if(t){e.textContent=t.following?`Following`:`Follow`,e.classList.toggle(`btn-secondary`,t.following),e.classList.toggle(`btn-primary`,!t.following);let n=this.container.querySelector(`#profile-followers-stat`);n&&(n.textContent=this.formatNumber(t.followersCount)),l.success(t.following?`Followed account!`:`Unfollowed`)}});let t=this.container.querySelector(`#profile-message-btn`);t&&this.options.onNavigate&&t.addEventListener(`click`,()=>this.options.onNavigate(`messages`));let n=this.container.querySelector(`#profile-share-btn`);n&&n.addEventListener(`click`,()=>{navigator.clipboard.writeText(window.location.href),l.success(`TikTok profile link copied! 📋`)});let r=this.container.querySelector(`#edit-profile-btn`);r&&r.addEventListener(`click`,()=>this.openEditProfileModal())}openEditProfileModal(){let t=document.createElement(`div`);t.className=`modal-backdrop`;let n=this.user;t.innerHTML=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title">Edit profile</div>
          <button class="btn btn-ghost btn-icon" id="close-edit-modal-btn">${e.close(20)}</button>
        </div>
        <form class="modal-body" id="edit-profile-form">
          <div class="form-group">
            <label class="form-label">Name</label>
            <input type="text" id="edit-display-name" value="${n.displayName}" required />
          </div>

          <div class="form-group">
            <label class="form-label">Bio</label>
            <textarea id="edit-bio" rows="3">${n.bio||``}</textarea>
          </div>

          <div class="form-group">
            <label class="form-label">Website</label>
            <input type="url" id="edit-website" value="${n.website||``}" placeholder="https://yourlink.com" />
          </div>

          <div class="form-group">
            <label class="form-label">Profile photo URL</label>
            <input type="text" id="edit-avatar" value="${n.avatar}" />
          </div>

          <div class="modal-footer" style="padding:0; margin-top:10px;">
            <button type="button" class="btn btn-secondary" id="cancel-edit-btn">Cancel</button>
            <button type="submit" class="btn btn-primary" style="font-weight:700;">Save</button>
          </div>
        </form>
      </div>
    `,document.body.appendChild(t),t.querySelector(`#close-edit-modal-btn`).addEventListener(`click`,()=>t.remove()),t.querySelector(`#cancel-edit-btn`).addEventListener(`click`,()=>t.remove()),t.addEventListener(`click`,e=>{e.target===t&&t.remove()}),t.querySelector(`#edit-profile-form`).addEventListener(`submit`,async e=>{e.preventDefault();let n=t.querySelector(`#edit-display-name`).value.trim(),r=t.querySelector(`#edit-bio`).value.trim(),i=t.querySelector(`#edit-website`).value.trim(),a=t.querySelector(`#edit-avatar`).value.trim();await c.updateProfile({displayName:n,bio:r,website:i,avatar:a}),l.success(`Profile saved! ✨`),t.remove(),this.loadProfileData()})}formatNumber(e=0){return e>=1e9?(e/1e9).toFixed(1)+`B`:e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}},y=class{constructor(e={}){this.options=e,this.conversations=[],this.activeConvId=`conv_1`,this.container=null}async render(){let t=document.createElement(`div`);return t.className=`main-container`,this.container=t,t.innerHTML=`
      <div class="messages-container">
        <!-- Left Conversations Sidebar -->
        <div class="conversations-sidebar" id="conv-sidebar">
          <div class="conversations-header">
            <span class="conversations-title">Messages</span>
            <button class="btn btn-primary btn-sm" id="new-chat-btn" title="New Message">
              ${e.upload(14)} New
            </button>
          </div>

          <div class="conversations-search-wrap">
            <input type="text" id="conv-search-input" placeholder="Search chats..." />
          </div>

          <div class="conversations-list" id="conv-items-list">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- Right Active Chat Window -->
        <div class="chat-main-area" id="active-chat-area">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `,await this.loadConversations(),this.bindEvents(),t}async loadConversations(){this.conversations=await c.getConversations();let e=this.container.querySelector(`#conv-items-list`);e&&(e.innerHTML=this.conversations.map(e=>`
      <div class="conversation-item ${e.id===this.activeConvId?`active`:``}" data-conv-id="${e.id}">
        <div class="conv-avatar-wrap">
          <img src="${e.recipient.avatar}" alt="${e.recipient.displayName}" class="conv-avatar" />
          <div class="online-dot"></div>
        </div>
        <div class="conv-info">
          <div class="conv-top-row">
            <span class="conv-name">${e.recipient.displayName}</span>
            <span class="conv-time">${e.lastMessageTime}</span>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <span class="conv-last-msg">${e.lastMessage}</span>
            ${e.unreadCount>0?`<span class="conv-unread-badge">${e.unreadCount}</span>`:``}
          </div>
        </div>
      </div>
    `).join(``),e.querySelectorAll(`.conversation-item`).forEach(e=>{e.addEventListener(`click`,()=>{this.activeConvId=e.getAttribute(`data-conv-id`),this.container.querySelectorAll(`.conversation-item`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=this.container.querySelector(`.messages-container`);t&&t.classList.add(`chat-active`),this.renderChatWindow()})}),this.renderChatWindow())}renderChatWindow(){let t=this.container.querySelector(`#active-chat-area`);if(!t)return;let n=this.conversations.find(e=>e.id===this.activeConvId)||this.conversations[0];if(!n){t.innerHTML=`<div style="display:flex; align-items:center; justify-content:center; height:100%; color:var(--text-tertiary);">Select a conversation to start messaging.</div>`;return}let i=a.getCurrentUser()?.id;t.innerHTML=`
      <!-- Chat Top Header -->
      <div class="chat-header">
        <button class="btn btn-ghost btn-icon mobile-chat-back-btn" id="mobile-chat-back-btn" title="Back to chats">
          ${e.chevronLeft(20)}
        </button>
        <div class="chat-recipient-info" data-view-profile="${n.recipient.username}">
          <div class="conv-avatar-wrap">
            <img src="${n.recipient.avatar}" alt="${n.recipient.displayName}" class="conv-avatar" style="width:38px; height:38px;" />
            <div class="online-dot"></div>
          </div>
          <div>
            <div class="chat-recipient-name">${n.recipient.displayName}</div>
            <div class="chat-recipient-status">Active now • @${n.recipient.username}</div>
          </div>
        </div>
      </div>

      <!-- Messages Thread Scroll -->
      <div class="chat-messages-scroll" id="chat-messages-stream">
        ${n.messages.map(e=>{let t=e.senderId===i,o=t?a.getCurrentUser():n.recipient,s=``;if(e.videoAttachmentId){let t=r.data.videos.find(t=>t.id===e.videoAttachmentId);t&&(s=`
                <div class="chat-video-attachment" data-video-jump="${t.id}">
                  <img src="${t.coverUrl||t.creator?.avatar}" />
                  <div style="padding:6px; font-size:11px; background:rgba(0,0,0,0.8); color:#fff;">
                    🎬 ${t.caption.substring(0,30)}...
                  </div>
                </div>
              `)}return`
            <div class="message-row ${t?`sent`:`received`}">
              <img src="${o.avatar}" alt="${o.displayName}" class="message-avatar" />
              <div>
                ${s}
                <div class="message-bubble">
                  ${e.text}
                  <div class="message-time">${e.time}</div>
                </div>
              </div>
            </div>
          `}).join(``)}
        
        <!-- Live Typing Indicator (Simulated) -->
        <div id="typing-indicator" style="display:none;" class="typing-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>

      <!-- Chat Input Form -->
      <form class="chat-input-bar" id="chat-send-form">
        <input type="text" id="chat-message-input" placeholder="Send a message to @${n.recipient.username}..." autocomplete="off" />
        <button type="submit" class="btn btn-primary btn-icon" style="width:40px; height:40px;">
          ${e.send(18)}
        </button>
      </form>
    `,this.scrollToBottom(),this.bindChatInteractions(t,n)}scrollToBottom(){let e=this.container.querySelector(`#chat-messages-stream`);e&&(e.scrollTop=e.scrollHeight)}bindChatInteractions(e,t){let n=e.querySelector(`#chat-send-form`),i=e.querySelector(`#chat-message-input`),a=e.querySelector(`#typing-indicator`);n&&i&&n.addEventListener(`submit`,async e=>{e.preventDefault();let n=i.value.trim();n&&(i.value=``,await c.sendMessage(t.id,n),this.renderChatWindow(),setTimeout(()=>{a&&(a.style.display=`flex`,this.scrollToBottom())},500),setTimeout(async()=>{let e=[`Awesome! Loved seeing your latest clip.`,`Let's collab on the next drop! ⚡`,`That synth patch sounds so clean!`,`Thanks for reaching out, working on the new sound pack now 🎧`,`Check out the new challenge on Explore!`],n=e[Math.floor(Math.random()*e.length)],i={id:`msg_`+Date.now(),senderId:t.recipient.id,text:n,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};t.messages.push(i),t.lastMessage=n,r.save(),this.renderChatWindow()},1600))});let o=e.querySelector(`#mobile-chat-back-btn`);o&&o.addEventListener(`click`,()=>{let e=this.container.querySelector(`.messages-container`);e&&e.classList.remove(`chat-active`)}),e.querySelectorAll(`[data-video-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-video-jump`);this.options.onNavigate&&this.options.onNavigate(`feed#${t}`)})}),e.querySelectorAll(`[data-view-profile]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-view-profile`);this.options.onNavigate&&this.options.onNavigate(`profile/${t}`)})})}bindEvents(){let e=this.container.querySelector(`#new-chat-btn`);e&&e.addEventListener(`click`,()=>{l.info(`Select a creator from Explore to message!`)})}},b=class{constructor(e={}){this.options=e,this.activeFilter=`all`,this.container=null}render(){let e=document.createElement(`div`);return e.className=`main-container`,this.container=e,e.innerHTML=`
      <div class="notifications-container">
        <div class="notifications-header">
          <h1 class="notifications-title">Notifications & Activity</h1>
          <button class="btn btn-secondary btn-sm" id="mark-read-btn">
            Mark all as read
          </button>
        </div>

        <!-- Filter Category Tabs -->
        <div class="notif-filter-tabs">
          <button class="notif-tab ${this.activeFilter===`all`?`active`:``}" data-filter="all">All</button>
          <button class="notif-tab ${this.activeFilter===`like`?`active`:``}" data-filter="like">Likes ❤️</button>
          <button class="notif-tab ${this.activeFilter===`comment`?`active`:``}" data-filter="comment">Comments 💬</button>
          <button class="notif-tab ${this.activeFilter===`follow`?`active`:``}" data-filter="follow">Followers 👤</button>
        </div>

        <div class="notif-list" id="notifications-stream">
          <!-- Populated dynamically -->
        </div>
      </div>
    `,this.renderNotifications(),this.bindEvents(),e}renderNotifications(){let e=this.container.querySelector(`#notifications-stream`);if(!e)return;let t=r.data.notifications;if(this.activeFilter!==`all`&&(t=t.filter(e=>e.type===this.activeFilter)),t.length===0){e.innerHTML=`
        <div style="padding:60px 20px; text-align:center; color:var(--text-tertiary);">
          <div style="font-size:32px; margin-bottom:8px;">🔔</div>
          <div style="font-size:15px; font-weight:700;">No notifications in this tab</div>
          <p style="font-size:12px; margin-top:4px;">When creators interact with your videos, you'll see them here.</p>
        </div>
      `;return}e.innerHTML=t.map(e=>{let t=r.data.users.find(t=>t.id===e.senderId)||{displayName:`User`,username:`user`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100`},n=e.videoId?r.data.videos.find(t=>t.id===e.videoId):null,i=`❤️`,a=`notif-badge-like`;return e.type===`comment`&&(i=`💬`,a=`notif-badge-comment`),e.type===`follow`&&(i=`👤`,a=`notif-badge-follow`),`
        <div class="notif-item ${e.isUnread?`unread`:``}" data-notif-id="${e.id}" data-video-id="${e.videoId||``}">
          <div class="notif-avatar-block" data-user-profile="${t.username}">
            <img src="${t.avatar}" alt="${t.displayName}" class="notif-avatar" />
            <div class="notif-badge-icon ${a}">${i}</div>
          </div>

          <div class="notif-content">
            <div class="notif-text">
              <span class="notif-username" data-user-profile="${t.username}">@${t.username}</span>
              ${e.text}
            </div>
            <div class="notif-time">${e.time}</div>
          </div>

          ${e.type===`follow`?`
            <button class="btn btn-primary btn-sm" data-follow-back="${t.id}">Follow Back</button>
          `:``}

          ${n?`
            <img src="${n.coverUrl||t.avatar}" class="notif-video-thumb" data-jump-video="${n.id}" />
          `:``}
        </div>
      `}).join(``),this.bindItemActions(e)}bindEvents(){this.container.querySelectorAll(`.notif-tab`).forEach(e=>{e.addEventListener(`click`,()=>{this.container.querySelectorAll(`.notif-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.activeFilter=e.getAttribute(`data-filter`),this.renderNotifications()})});let e=this.container.querySelector(`#mark-read-btn`);e&&e.addEventListener(`click`,()=>{r.data.notifications.forEach(e=>e.isUnread=!1),r.save(),this.renderNotifications(),l.success(`All notifications marked as read! ✓`)})}bindItemActions(e){e.querySelectorAll(`[data-user-profile]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-user-profile`);this.options.onNavigate&&this.options.onNavigate(`profile/${n}`)})}),e.querySelectorAll(`[data-jump-video]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.getAttribute(`data-jump-video`);this.options.onNavigate&&this.options.onNavigate(`feed#${n}`)})}),e.querySelectorAll(`[data-follow-back]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.stopPropagation();let n=e.getAttribute(`data-follow-back`);await c.toggleFollow(n),e.textContent=`Following`,e.classList.replace(`btn-primary`,`btn-secondary`),l.success(`Followed back! ✨`)})})}},x=class{constructor(e={}){this.options=e,this.timeframe=`7d`,this.container=null,this.chartCanvas=null}render(){let e=document.createElement(`div`);e.className=`main-container`,this.container=e;let t=r.data.analytics.kpis;return e.innerHTML=`
      <div class="studio-container">
        <!-- Header -->
        <div class="studio-header">
          <div>
            <h1 class="studio-title">Creator Analytics Studio</h1>
            <p style="font-size:14px; color:var(--text-tertiary); margin-top:4px;">
              Track video reach, audience retention, and profile performance.
            </p>
          </div>

          <!-- Timeframe Selector -->
          <div class="timeframe-selector">
            <button class="timeframe-btn ${this.timeframe===`7d`?`active`:``}" data-tf="7d">Last 7 Days</button>
            <button class="timeframe-btn ${this.timeframe===`28d`?`active`:``}" data-tf="28d">28 Days</button>
            <button class="timeframe-btn ${this.timeframe===`90d`?`active`:``}" data-tf="90d">90 Days</button>
          </div>
        </div>

        <!-- KPI Summary Cards Grid -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-header">
              <span>Total Video Views</span>
              <span>📈</span>
            </div>
            <div class="kpi-value">${t.totalViews}</div>
            <div class="kpi-growth">
              <span>▲</span> <span>${t.viewsGrowth} vs prev period</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-header">
              <span>Followers Growth</span>
              <span>👤</span>
            </div>
            <div class="kpi-value">${t.followersGrowth}</div>
            <div class="kpi-growth">
              <span>▲</span> <span>+18.2% new creators</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-header">
              <span>Total Likes</span>
              <span>❤️</span>
            </div>
            <div class="kpi-value">${t.totalLikes}</div>
            <div class="kpi-growth">
              <span>▲</span> <span>+32K this week</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-header">
              <span>Engagement Rate</span>
              <span>⚡</span>
            </div>
            <div class="kpi-value">${t.engagementRate}</div>
            <div class="kpi-growth">
              <span>▲</span> <span>High retention score</span>
            </div>
          </div>
        </div>

        <!-- Views Timeline Chart -->
        <div class="analytics-chart-card">
          <div class="chart-header">
            <div class="chart-title">Views Over Time</div>
            <span style="font-size:12px; color:var(--brand-accent); font-weight:700;">● Active Stream Real-Time</span>
          </div>
          <div class="chart-canvas-wrap">
            <canvas id="studio-analytics-canvas" class="chart-canvas"></canvas>
          </div>
        </div>

        <!-- Top Performing Videos Table -->
        <div class="studio-table-card">
          <div style="font-weight:700; font-size:16px;">Top-Performing Videos</div>
          <table class="studio-table">
            <thead>
              <tr>
                <th>Video</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Comments</th>
                <th>Shares</th>
                <th>Retention Rate</th>
              </tr>
            </thead>
            <tbody>
              ${r.data.videos.map(e=>`
                <tr style="cursor:pointer;" data-video-jump="${e.id}">
                  <td>
                    <div class="table-video-info">
                      <img src="${e.coverUrl||e.creator?.avatar}" class="table-video-thumb" />
                      <div class="table-video-title">${e.caption}</div>
                    </div>
                  </td>
                  <td>${(e.viewsCount/1e3).toFixed(1)}K</td>
                  <td>${(e.likesCount/1e3).toFixed(1)}K</td>
                  <td>${e.commentsCount}</td>
                  <td>${e.sharesCount}</td>
                  <td>
                    <span class="badge badge-accent">88.4%</span>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    `,this.bindEvents(),setTimeout(()=>this.drawChart(),50),e}drawChart(){let e=this.container.querySelector(`#studio-analytics-canvas`);if(!e)return;let t=e.getContext(`2d`);if(!t)return;e.width=e.parentElement.clientWidth||800,e.height=e.parentElement.clientHeight||260;let n=e.width,i=e.height,a=r.data.analytics.views7d,o=r.data.analytics.labels7d,s=Math.max(...a)*1.2;t.clearRect(0,0,n,i),t.strokeStyle=`rgba(255, 255, 255, 0.07)`,t.lineWidth=1;for(let e=0;e<=4;e++){let r=40+(i-80)*(e/4);t.beginPath(),t.moveTo(40,r),t.lineTo(n-40,r),t.stroke()}let c=(n-80)/(a.length-1),l=a.map((e,t)=>({x:40+t*c,y:i-40-e/s*(i-80)})),u=t.createLinearGradient(0,40,0,i-40);u.addColorStop(0,`rgba(99, 102, 241, 0.45)`),u.addColorStop(1,`rgba(99, 102, 241, 0.0)`),t.beginPath(),t.moveTo(l[0].x,i-40),l.forEach((e,n)=>{if(n===0)t.lineTo(e.x,e.y);else{let r=l[n-1],i=(r.x+e.x)/2;t.bezierCurveTo(i,r.y,i,e.y,e.x,e.y)}}),t.lineTo(l[l.length-1].x,i-40),t.closePath(),t.fillStyle=u,t.fill(),t.beginPath(),l.forEach((e,n)=>{if(n===0)t.moveTo(e.x,e.y);else{let r=l[n-1],i=(r.x+e.x)/2;t.bezierCurveTo(i,r.y,i,e.y,e.x,e.y)}}),t.strokeStyle=`#6366f1`,t.lineWidth=3.5,t.shadowBlur=12,t.shadowColor=`rgba(99, 102, 241, 0.8)`,t.stroke(),t.shadowBlur=0,l.forEach((e,n)=>{t.beginPath(),t.arc(e.x,e.y,5,0,Math.PI*2),t.fillStyle=`#ffffff`,t.fill(),t.strokeStyle=`#6366f1`,t.lineWidth=2,t.stroke(),t.fillStyle=`#94a3b8`,t.font=`11px sans-serif`,t.textAlign=`center`,t.fillText(o[n],e.x,i-15)})}bindEvents(){this.container.querySelectorAll(`.timeframe-btn`).forEach(e=>{e.addEventListener(`click`,()=>{this.container.querySelectorAll(`.timeframe-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),this.timeframe=e.getAttribute(`data-tf`),this.drawChart()})}),this.container.querySelectorAll(`[data-video-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-video-jump`);this.options.onNavigate&&this.options.onNavigate(`feed#${t}`)})})}},S=class{constructor(e={}){this.options=e,this.reports=[],this.stats=null,this.container=null}async render(){let e=document.createElement(`div`);return e.className=`main-container`,this.container=e,e.innerHTML=`
      <div class="admin-container">
        <!-- Header -->
        <div class="admin-header">
          <div class="admin-title-row">
            <h1 style="font-size:26px; font-weight:800;">Administration & Safety Center</h1>
            <span class="admin-badge">Admin Access</span>
          </div>
          <button class="btn btn-secondary btn-sm" id="reset-db-btn" style="border-color:var(--brand-danger); color:var(--brand-danger);">
            Reset Demo Database
          </button>
        </div>

        <!-- Health KPIs Grid -->
        <div class="kpi-grid" id="admin-kpis-grid">
          <!-- Populated dynamically -->
        </div>

        <!-- Moderation Queue -->
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h2 style="font-size:18px; font-weight:700;">Content Moderation Queue</h2>
            <span style="font-size:12px; color:var(--brand-danger); font-weight:700;">Requires Review</span>
          </div>
          <div class="moderation-queue-grid" id="moderation-queue-container">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- User Accounts & Permissions Table -->
        <div class="admin-user-table-wrap">
          <div style="font-weight:700; font-size:16px; margin-bottom:14px;">User Account Management</div>
          <table class="studio-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Followers</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="admin-user-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    `,await this.loadData(),this.bindEvents(),e}async loadData(){this.stats=await c.getAdminStats(),this.reports=await c.getReports(),this.renderKPIs(),this.renderReports(),this.renderUsers()}renderKPIs(){let e=this.container.querySelector(`#admin-kpis-grid`);e&&this.stats&&(e.innerHTML=`
      <div class="kpi-card">
        <div class="kpi-header">
          <span>Active Users</span>
          <span>👥</span>
        </div>
        <div class="kpi-value">${this.stats.totalUsers}</div>
        <div class="kpi-growth"><span>●</span> <span>100% verified DB</span></div>
      </div>

      <div class="kpi-card">
        <div class="kpi-header">
          <span>Total Platform Videos</span>
          <span>🎬</span>
        </div>
        <div class="kpi-value">${this.stats.totalVideos}</div>
        <div class="kpi-growth"><span>●</span> <span>H.264/WebM Encoded</span></div>
      </div>

      <div class="kpi-card">
        <div class="kpi-header">
          <span>Pending Reports</span>
          <span>⚠️</span>
        </div>
        <div class="kpi-value" style="color:var(--brand-danger);">${this.stats.pendingReports}</div>
        <div class="kpi-growth" style="color:var(--brand-danger);"><span>⚡</span> <span>Action Needed</span></div>
      </div>

      <div class="kpi-card">
        <div class="kpi-header">
          <span>System Security</span>
          <span>🛡️</span>
        </div>
        <div class="kpi-value" style="font-size:20px; color:var(--brand-accent);">${this.stats.serverStatus}</div>
        <div class="kpi-growth"><span>✓</span> <span>Protected</span></div>
      </div>
    `)}renderReports(){let e=this.container.querySelector(`#moderation-queue-container`);if(!e)return;let t=this.reports.filter(e=>e.status===`pending`);if(t.length===0){e.innerHTML=`
        <div style="grid-column:1/-1; padding:40px; text-align:center; background:var(--bg-surface); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); color:var(--text-tertiary);">
          <h3>✨ Moderation queue is clear!</h3>
          <p style="font-size:13px; margin-top:4px;">No active reports or flagged videos pending review.</p>
        </div>
      `;return}e.innerHTML=t.map(e=>`
      <div class="mod-card flagged" data-report-id="${e.id}">
        <div class="mod-card-top">
          <img src="${e.video?.coverUrl||`https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200`}" class="mod-video-thumb" />
          <div class="mod-info-block">
            <span class="mod-reason-tag">${e.reason}</span>
            <div class="mod-caption">${e.video?.caption||`Video Content`}</div>
            <div class="mod-reporter-info">Reported by @${e.reporter?.username||`user`}</div>
          </div>
        </div>

        <div class="mod-actions-row">
          <button class="btn btn-secondary btn-sm" data-approve-report="${e.id}">Approve (Keep)</button>
          <button class="btn btn-danger btn-sm" data-remove-report="${e.id}">Remove Video</button>
        </div>
      </div>
    `).join(``),e.querySelectorAll(`[data-approve-report]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.getAttribute(`data-approve-report`);await c.resolveReport(t,`approved`),l.success(`Report dismissed, video approved! ✓`),this.loadData()})}),e.querySelectorAll(`[data-remove-report]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.getAttribute(`data-remove-report`);await c.resolveReport(t,`removed`),l.error(`Video removed from platform! 🗑️`),this.loadData()})})}renderUsers(){let e=this.container.querySelector(`#admin-user-tbody`);e&&(e.innerHTML=r.data.users.map(e=>`
      <tr>
        <td>
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="${e.avatar}" style="width:34px; height:34px; border-radius:50%; object-fit:cover;" />
            <div>
              <div style="font-weight:700; font-size:13.5px;">${e.displayName}</div>
              <div style="font-size:11px; color:var(--text-tertiary);">@${e.username}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge ${e.role===`admin`?`badge-danger`:`badge-primary`}">${e.role}</span>
        </td>
        <td>${(e.followersCount/1e3).toFixed(1)}K</td>
        <td>
          <span class="user-status-pill user-status-active">Active</span>
        </td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-secondary btn-sm" data-switch-role="${e.id}" style="font-size:11px; padding:4px 8px;">
              Toggle Role
            </button>
          </div>
        </td>
      </tr>
    `).join(``),e.querySelectorAll(`[data-switch-role]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-switch-role`),n=r.data.users.find(e=>e.id===t);n&&(n.role=n.role===`admin`?`creator`:`admin`,r.save(),l.info(`Updated @${n.username} role to ${n.role}`),this.renderUsers())})}))}bindEvents(){let e=this.container.querySelector(`#reset-db-btn`);e&&e.addEventListener(`click`,()=>{r.reset(),l.success(`Database reset to fresh seeds! 🔄`),this.loadData()})}},C=class{constructor(e,t={}){this.video=e,this.options=t,this.comments=[],this.replyingToCommentId=null,this.element=null}async open(){this.close();let t=document.createElement(`div`);t.className=`comments-drawer-backdrop`,this.element=t,t.innerHTML=`
      <div class="comments-drawer-panel">
        <div class="drawer-drag-pill"></div>
        <div class="comments-header">
          <div class="comments-count-title">
            Comments (<span id="drawer-total-count">${this.video.commentsCount}</span>)
          </div>
          <button class="btn btn-ghost btn-icon" id="close-comments-btn">
            ${e.close(20)}
          </button>
        </div>

        <div class="comments-stream" id="comments-stream-body">
          <div style="padding:20px; text-align:center; color:var(--text-tertiary);">
            Loading comments...
          </div>
        </div>

        <!-- Emoji Quick Bar -->
        <div style="display:flex; gap:8px; padding:6px 20px; background:var(--bg-surface-elevated); border-top:1px solid var(--border-subtle); overflow-x:auto;">
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">🔥</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">❤️</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">✨</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">⚡</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">🙌</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">🚀</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">💯</span>
          <span class="emoji-quick-btn" style="cursor:pointer; font-size:18px;">👏</span>
        </div>

        <!-- Replying Banner (Hidden by default) -->
        <div id="replying-banner" style="display:none; padding:6px 20px; background:rgba(99,102,241,0.15); font-size:12px; color:var(--brand-primary-light); display:none; justify-content:space-between; align-items:center;">
          <span>Replying to comment...</span>
          <button id="cancel-reply-btn" style="font-size:11px; font-weight:700; color:var(--text-primary); cursor:pointer;">Cancel</button>
        </div>

        <!-- Comment Input Bar -->
        <form class="comment-input-area" id="comment-form">
          <input type="text" id="comment-input-field" placeholder="Add a comment..." autocomplete="off" />
          <button type="submit" class="btn btn-primary btn-icon" style="width:38px; height:38px;">
            ${e.send(16)}
          </button>
        </form>
      </div>
    `,document.body.appendChild(t),this.bindEvents(t),await this.loadComments()}async loadComments(){this.comments=await c.getComments(this.video.id);let e=this.element.querySelector(`#comments-stream-body`),t=this.element.querySelector(`#drawer-total-count`);if(e){if(t){let e=this.comments.length;this.comments.forEach(t=>e+=t.replies?t.replies.length:0),t.textContent=e}if(this.comments.length===0){e.innerHTML=`
        <div style="padding:60px 20px; text-align:center; color:var(--text-tertiary);">
          <p style="font-size:14px; font-weight:600;">No comments yet</p>
          <p style="font-size:12px; margin-top:4px;">Be the first to share your thoughts!</p>
        </div>
      `;return}e.innerHTML=this.comments.map(e=>this.renderCommentCard(e)).join(``),this.bindCommentActions(e)}}renderCommentCard(t){let n=t.author||{displayName:`User`,username:`user`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100`},r=(t.replies||[]).map(e=>{let t=e.author||{displayName:`User`,username:`user`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100`};return`
        <div class="comment-card" style="margin-top:8px;">
          <img src="${t.avatar}" class="comment-avatar" style="width:28px; height:28px;" />
          <div class="comment-main">
            <div class="comment-author-row">
              <span class="comment-author-name">${t.displayName}</span>
              <span class="comment-time">Recently</span>
            </div>
            <div class="comment-text-content">${e.content}</div>
          </div>
        </div>
      `}).join(``);return`
      <div class="comment-card" data-comment-id="${t.id}">
        <img src="${n.avatar}" class="comment-avatar" />
        <div class="comment-main">
          <div class="comment-author-row">
            <span class="comment-author-name">${n.displayName}</span>
            <span class="comment-time">Recently</span>
          </div>
          <div class="comment-text-content">${t.content}</div>

          <div class="comment-footer-actions">
            <span class="comment-reply-btn" data-reply-id="${t.id}" data-author-name="${n.displayName}">Reply</span>
            <div class="comment-like-wrap" data-like-comment-id="${t.id}">
              ${e.heart(15)} <span>${t.likesCount||0}</span>
            </div>
          </div>

          ${t.replies&&t.replies.length>0?`
            <div class="nested-replies-list">
              ${r}
            </div>
          `:``}
        </div>
      </div>
    `}bindEvents(e){e.addEventListener(`click`,t=>{t.target===e&&this.close()});let t=e.querySelector(`#close-comments-btn`);t&&t.addEventListener(`click`,()=>this.close()),e.querySelectorAll(`.emoji-quick-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=e.querySelector(`#comment-input-field`);n&&(n.value+=t.textContent,n.focus())})});let n=e.querySelector(`#cancel-reply-btn`),r=e.querySelector(`#replying-banner`);n&&n.addEventListener(`click`,()=>{this.replyingToCommentId=null,r&&(r.style.display=`none`)});let i=e.querySelector(`#comment-form`),a=e.querySelector(`#comment-input-field`);i&&a&&i.addEventListener(`submit`,async e=>{e.preventDefault();let t=a.value.trim();t&&(a.value=``,await c.addComment(this.video.id,t,this.replyingToCommentId),l.success(`Comment posted! 💬`),this.replyingToCommentId=null,r&&(r.style.display=`none`),await this.loadComments())})}bindCommentActions(e){e.querySelectorAll(`[data-reply-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-reply-id`),n=e.getAttribute(`data-author-name`);this.replyingToCommentId=t;let r=this.element.querySelector(`#replying-banner`),i=this.element.querySelector(`#comment-input-field`);r&&(r.style.display=`flex`,r.querySelector(`span`).textContent=`Replying to ${n}...`),i&&i.focus()})}),e.querySelectorAll(`[data-like-comment-id]`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.toggle(`liked`);let t=e.querySelector(`span`),n=parseInt(t.textContent)||0;t.textContent=e.classList.contains(`liked`)?n+1:Math.max(0,n-1)})})}close(){this.element&&=(this.element.remove(),null)}},w=class{constructor(e,t={}){this.video=e,this.options=t,this.element=null}open(){this.close();let t=document.createElement(`div`);t.className=`modal-backdrop`,this.element=t;let n=`${window.location.origin}/#video/${this.video.id}`;t.innerHTML=`
      <div class="modal-dialog">
        <div class="drawer-drag-pill"></div>
        <div class="modal-header">
          <div class="modal-title">Share Video</div>
          <button class="btn btn-ghost btn-icon" id="close-share-btn">
            ${e.close(20)}
          </button>
        </div>

        <div class="modal-body">
          <!-- Quick Share Apps -->
          <div class="share-options-grid">
            <div class="share-option-btn" data-platform="copy">
              <div class="share-option-icon" style="background:var(--brand-primary);">
                ${e.share(22)}
              </div>
              <span>Copy Link</span>
            </div>

            <div class="share-option-btn" data-platform="chat">
              <div class="share-option-icon" style="background:var(--brand-accent);">
                ${e.message(22)}
              </div>
              <span>Send in Chat</span>
            </div>

            <div class="share-option-btn" data-platform="twitter">
              <div class="share-option-icon" style="background:#1d9bf0;">
                <span style="font-weight:800; font-size:16px;">𝕏</span>
              </div>
              <span>Twitter / X</span>
            </div>

            <div class="share-option-btn" data-platform="whatsapp">
              <div class="share-option-icon" style="background:#25d366;">
                <span style="font-weight:800; font-size:16px;">💬</span>
              </div>
              <span>WhatsApp</span>
            </div>
          </div>

          <!-- Direct Link Copy Field -->
          <div style="margin-top:10px;">
            <div style="font-size:12px; font-weight:600; margin-bottom:6px; color:var(--text-tertiary);">Direct Link</div>
            <div class="share-link-input-row">
              <span class="share-link-text">${n}</span>
              <button class="btn btn-primary btn-sm" id="copy-link-btn">Copy</button>
            </div>
          </div>

          <!-- Send directly to Verve Friend -->
          <div style="margin-top:10px;">
            <div style="font-size:12px; font-weight:600; margin-bottom:6px; color:var(--text-tertiary);">Send to creators</div>
            <div style="display:flex; gap:10px; overflow-x:auto; padding-bottom:6px;" id="share-friends-list">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),this.populateFriendsList(t),this.bindEvents(t,n)}populateFriendsList(e){let t=e.querySelector(`#share-friends-list`);t&&(t.innerHTML=r.data.users.slice(1,5).map(e=>`
      <div style="display:flex; flex-direction:column; align-items:center; gap:4px; cursor:pointer;" data-send-to-user="${e.id}">
        <img src="${e.avatar}" style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:2px solid var(--border-medium);" />
        <span style="font-size:11px; max-width:55px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${e.displayName}</span>
      </div>
    `).join(``),t.querySelectorAll(`[data-send-to-user]`).forEach(e=>{e.addEventListener(`click`,async()=>{e.getAttribute(`data-send-to-user`),await c.sendMessage(`conv_1`,`Shared video: ${this.video.caption.substring(0,40)}...`,this.video.id),l.success(`Sent to chat! ✈️`),this.close()})}))}bindEvents(e,t){e.addEventListener(`click`,t=>{t.target===e&&this.close()});let n=e.querySelector(`#close-share-btn`);n&&n.addEventListener(`click`,()=>this.close());let r=e.querySelector(`#copy-link-btn`);r&&r.addEventListener(`click`,()=>{navigator.clipboard.writeText(t).then(()=>{l.success(`Link copied to clipboard! 📋`),r.textContent=`Copied!`,setTimeout(()=>r.textContent=`Copy`,2e3)})}),e.querySelectorAll(`[data-platform]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-platform`);n===`copy`?navigator.clipboard.writeText(t).then(()=>l.success(`Link copied! 📋`)):n===`twitter`?window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this video on VERVE! `+t)}`,`_blank`):n===`whatsapp`?window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this video on VERVE: `+t)}`,`_blank`):n===`chat`&&this.options.onNavigate&&(this.close(),this.options.onNavigate(`messages`))})})}close(){this.element&&=(this.element.remove(),null)}},T=class{constructor(e={}){this.options=e,this.mode=`switch`,this.element=null}open(){this.close();let e=document.createElement(`div`);e.className=`modal-backdrop`,this.element=e,this.renderModalContent(),document.body.appendChild(e)}renderModalContent(){if(!this.element)return;let t=a.getCurrentUser()||r.data.users[0];this.element.innerHTML=`
      <div class="modal-dialog">
        <div class="drawer-drag-pill"></div>
        <div class="modal-header">
          <div class="modal-title">
            ${this.mode===`switch`?`Switch TikTok Account`:this.mode===`login`?`Log in to TikTok`:`Sign up for TikTok`}
          </div>
          <button class="btn btn-ghost btn-icon" id="close-auth-modal-btn">
            ${e.close(20)}
          </button>
        </div>

        <div class="modal-body">
          ${this.mode===`switch`?`
            <div>
              <div style="font-size:12px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:10px;">Current Active Profile</div>
              <div class="user-compact-card" style="padding:12px; margin-bottom:16px; border-radius:8px;">
                <img src="${t.avatar}" class="user-avatar" style="width:44px; height:44px; border:none;" />
                <div class="user-info-text">
                  <div style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:4px;">
                    ${t.displayName} ${t.isVerified?e.verified(14):``}
                  </div>
                  <div style="font-size:12px; color:var(--text-tertiary);">@${t.username} • ${(t.followersCount/1e6).toFixed(1)}M followers</div>
                </div>
                <span class="badge badge-accent">Active</span>
              </div>

              <div style="font-size:12px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:10px;">Switch to Creator Persona</div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                ${r.data.users.map(t=>`
                  <div class="user-compact-card" data-switch-to-user="${t.id}" style="cursor:pointer; border-radius:8px;">
                    <img src="${t.avatar}" class="user-avatar" style="border:none;" />
                    <div class="user-info-text">
                      <div style="font-weight:700; font-size:13px; display:flex; align-items:center; gap:4px;">
                        ${t.displayName} ${t.isVerified?e.verified(12):``}
                      </div>
                      <div style="font-size:11px; color:var(--text-tertiary);">@${t.username} (${t.role})</div>
                    </div>
                    <button class="btn btn-secondary btn-sm" style="font-size:11px;">Switch</button>
                  </div>
                `).join(``)}
              </div>

              <div class="sidebar-divider" style="margin:16px 0;"></div>

              <div style="display:flex; gap:10px;">
                <button class="btn btn-secondary" style="flex:1;" id="go-to-login-btn">Log In</button>
                <button class="btn btn-primary" style="flex:1;" id="go-to-signup-btn">Sign Up</button>
              </div>
            </div>
          `:this.mode===`login`?`
            <form id="login-form" style="display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label class="form-label">Phone / Email / Username</label>
                <input type="text" id="login-username-input" placeholder="khaby.lame" value="khaby.lame" required />
              </div>

              <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" id="login-password-input" value="••••••••" required />
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="margin-top:6px; font-weight:700;">Log In</button>

              <button type="button" class="btn btn-secondary" id="google-auth-btn" style="gap:8px;">
                <span>🌐</span> Continue with Google
              </button>

              <div style="text-align:center; font-size:13px; color:var(--text-tertiary); margin-top:8px;">
                Don't have an account? <span id="switch-to-signup-link" style="color:var(--brand-primary); cursor:pointer; font-weight:700;">Sign Up</span>
              </div>
            </form>
          `:`
            <form id="signup-form" style="display:flex; flex-direction:column; gap:14px;">
              <div class="form-group">
                <label class="form-label">Username</label>
                <input type="text" id="signup-username" placeholder="@yourhandle" required />
              </div>

              <div class="form-group">
                <label class="form-label">Display Name</label>
                <input type="text" id="signup-display-name" placeholder="Your Name" required />
              </div>

              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" id="signup-email" placeholder="you@example.com" required />
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="margin-top:6px; font-weight:700;">Sign Up</button>

              <div style="text-align:center; font-size:13px; color:var(--text-tertiary); margin-top:8px;">
                Already have an account? <span id="switch-to-login-link" style="color:var(--brand-primary); cursor:pointer; font-weight:700;">Log In</span>
              </div>
            </form>
          `}
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){this.element.addEventListener(`click`,e=>{e.target===this.element&&this.close()});let e=this.element.querySelector(`#close-auth-modal-btn`);e&&e.addEventListener(`click`,()=>this.close()),this.element.querySelectorAll(`[data-switch-to-user]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-switch-to-user`);a.switchUser(t);let n=a.getCurrentUser();l.success(`Switched account to @${n.username}! 🔄`),this.close(),this.options.onUserChanged&&this.options.onUserChanged()})});let t=this.element.querySelector(`#go-to-login-btn`),n=this.element.querySelector(`#go-to-signup-btn`),r=this.element.querySelector(`#switch-to-signup-link`),i=this.element.querySelector(`#switch-to-login-link`);t&&t.addEventListener(`click`,()=>{this.mode=`login`,this.renderModalContent()}),n&&n.addEventListener(`click`,()=>{this.mode=`signup`,this.renderModalContent()}),r&&r.addEventListener(`click`,()=>{this.mode=`signup`,this.renderModalContent()}),i&&i.addEventListener(`click`,()=>{this.mode=`login`,this.renderModalContent()});let o=this.element.querySelector(`#google-auth-btn`);o&&o.addEventListener(`click`,()=>{l.success(`Signed in via Google One-Tap! ✨`),this.close()});let s=this.element.querySelector(`#login-form`);s&&s.addEventListener(`submit`,e=>{e.preventDefault();let t=this.element.querySelector(`#login-username-input`).value.trim();a.login(t),l.success(`Welcome back, @${t}! 🚀`),this.close(),this.options.onUserChanged&&this.options.onUserChanged()});let c=this.element.querySelector(`#signup-form`);c&&c.addEventListener(`submit`,e=>{e.preventDefault();let t=this.element.querySelector(`#signup-username`).value.trim(),n=this.element.querySelector(`#signup-display-name`).value.trim(),r=this.element.querySelector(`#signup-email`).value.trim();a.register({username:t,displayName:n,email:r}),l.success(`Account created! Welcome to TikTok, ${n}! 🎉`),this.close(),this.options.onUserChanged&&this.options.onUserChanged()})}close(){this.element&&=(this.element.remove(),null)}},E=class{constructor(){this.element=null}open(){this.close();let t=document.createElement(`div`);t.className=`modal-backdrop`,this.element=t,t.innerHTML=`
      <div class="modal-dialog">
        <div class="drawer-drag-pill"></div>
        <div class="modal-header">
          <div class="modal-title">Gestures & Shortcuts</div>
          <button class="btn btn-ghost btn-icon" id="close-shortcuts-modal-btn">
            ${e.close(20)}
          </button>
        </div>

        <div class="modal-body">
          <div style="font-size:12px; font-weight:700; color:var(--brand-primary); text-transform:uppercase; margin-bottom:4px;">Touch Gestures</div>
          <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Next / Previous Video</span>
              <span style="font-size:12px; font-weight:700; color:var(--text-secondary);">Swipe Up / Down</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Like with Heart Animation</span>
              <span style="font-size:12px; font-weight:700; color:var(--brand-danger);">Double Tap Video</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Play or Pause Video</span>
              <span style="font-size:12px; font-weight:700; color:var(--text-secondary);">Tap Screen Once</span>
            </div>
          </div>

          <div style="font-size:12px; font-weight:700; color:var(--text-tertiary); text-transform:uppercase; margin-bottom:4px;">Desktop Keyboard Keys</div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Next Video</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">↓ or J</kbd>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Previous Video</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">↑ or K</kbd>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Play / Pause</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">Space</kbd>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Like / Unlike</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">L</kbd>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-subtle);">
              <span>Mute / Unmute Audio</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">M</kbd>
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0;">
              <span>Open Shortcuts Help</span>
              <kbd style="padding:4px 8px; background:var(--bg-surface-elevated); border:1px solid var(--border-medium); border-radius:4px; font-family:var(--font-mono); font-size:12px;">?</kbd>
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(t),t.addEventListener(`click`,e=>{e.target===t&&this.close()}),t.querySelector(`#close-shortcuts-modal-btn`).addEventListener(`click`,()=>this.close())}close(){this.element&&=(this.element.remove(),null)}},D=class{constructor(){this.appEl=document.getElementById(`app`),this.currentViewInstance=null,this.navigation=null,this.authModal=new T({onUserChanged:()=>this.handleUserChanged()}),this.shortcutsModal=new E,this.init()}init(){this.renderAppShell(),this.bindGlobalListeners(),this.handleRouting(),window.addEventListener(`hashchange`,()=>this.handleRouting())}renderAppShell(){this.navigation=new o({currentRoute:this.getRouteName(),onNavigate:e=>this.navigate(e),onOpenAuth:()=>this.authModal.open(),onOpenShortcuts:()=>this.shortcutsModal.open()}),this.appEl.innerHTML=`
      ${this.navigation.renderHeader()}
      <div class="app-shell">
        ${this.navigation.renderSidebar()}
        <main class="app-main" id="main-content-viewport"></main>
      </div>
      ${this.navigation.renderMobileNav()}
    `,this.navigation.bindEvents(this.appEl)}handleUserChanged(){this.renderAppShell(),this.handleRouting()}navigate(e){e.startsWith(`#`)||(e=`#`+e),window.location.hash=e}getRouteName(){return(window.location.hash.replace(`#`,``)||`feed`).split(`?`)[0].split(`/`)[0]}async handleRouting(){let[e,t]=(window.location.hash.replace(`#`,``)||`feed`).split(`?`),n=e.split(`/`),r=n[0]||`feed`;this.navigation&&this.navigation.setRoute(r),this.currentViewInstance&&typeof this.currentViewInstance.destroy==`function`&&this.currentViewInstance.destroy();let i=document.getElementById(`main-content-viewport`);if(i){if(i.innerHTML=``,r===`feed`||r===`following`||r===`trending`||r===`friends`){let e=new p({initialTab:r===`following`?`following`:r===`friends`?`friends`:r===`trending`?`trending`:`forYou`,onNavigate:e=>this.navigate(e),onOpenComments:e=>new C(e).open(),onOpenShare:e=>new w(e,{onNavigate:e=>this.navigate(e)}).open()});this.currentViewInstance=e;let t=await e.render();i.appendChild(t)}else if(r===`explore`){let e=new m({searchQuery:new URLSearchParams(t||``).get(`q`)||``,onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let n=await e.render();i.appendChild(n)}else if(r===`upload`){let e=new _({onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=e.render();i.appendChild(t)}else if(r===`profile`){let e=new v({username:n[1]||a.getCurrentUser()?.username,onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=await e.render();i.appendChild(t)}else if(r===`messages`){let e=new y({onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=await e.render();i.appendChild(t)}else if(r===`notifications`){let e=new b({onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=e.render();i.appendChild(t)}else if(r===`studio`){let e=new x({onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=e.render();i.appendChild(t)}else if(r===`admin`){let e=new S({onNavigate:e=>this.navigate(e)});this.currentViewInstance=e;let t=await e.render();i.appendChild(t)}else this.navigate(`feed`);window.scrollTo({top:0,behavior:`instant`})}}bindGlobalListeners(){window.addEventListener(`keydown`,e=>{if(e.key===`?`&&![`INPUT`,`TEXTAREA`].includes(document.activeElement?.tagName)){this.shortcutsModal.open();return}this.currentViewInstance&&typeof this.currentViewInstance.handleGlobalKeydown==`function`&&this.currentViewInstance.handleGlobalKeydown(e)})}};document.addEventListener(`DOMContentLoaded`,()=>{new D});