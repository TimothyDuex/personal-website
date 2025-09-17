// Tailwind's default breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)

export const IMAGE_SIZES = {
  // Profile/Avatar sizes
  profile:
    "(max-width: 639px) 64px, (max-width: 767px) 80px, (max-width: 1023px) 96px, (max-width: 1279px) 112px, 128px",
  company:
    "(max-width: 639px) 40px, (max-width: 767px) 48px, (max-width: 1023px) 56px, (max-width: 1279px) 64px, 72px",
  icon: "(max-width: 639px) 24px, (max-width: 767px) 28px, (max-width: 1023px) 32px, (max-width: 1279px) 36px, 40px",
  blogCard:
    "(max-width: 639px) 96px, (max-width: 767px) 112px, (max-width: 1023px) 128px, (max-width: 1279px) 144px, 160px",
} as const;
